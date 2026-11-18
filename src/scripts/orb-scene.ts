import * as THREE from "three";

export function initOrbScene(
  canvas: HTMLCanvasElement,
  stage: HTMLElement,
  status: HTMLElement | null,
) {
  if (stage.dataset.initialized === "true") return;
  stage.dataset.initialized = "true";

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 7.4);

  const group = new THREE.Group();
  scene.add(group);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.78, 2),
    new THREE.MeshBasicMaterial({
      color: 0xe8673f,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    }),
  );
  group.add(core);

  const halo = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.05, 1),
    new THREE.MeshBasicMaterial({
      color: 0xe7dcc5,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    }),
  );
  halo.rotation.set(0.2, 0.5, 0.1);
  group.add(halo);

  const orbitRing = new THREE.Mesh(
    new THREE.TorusGeometry(2.24, 0.012, 6, 96),
    new THREE.MeshBasicMaterial({
      color: 0xe8673f,
      transparent: true,
      opacity: 0.55,
    }),
  );
  orbitRing.rotation.set(0.9, 0.1, 0.25);
  group.add(orbitRing);

  const pointGeometry = new THREE.BufferGeometry();
  const pointCount = 170;
  const positions = new Float32Array(pointCount * 3);
  for (let i = 0; i < pointCount; i += 1) {
    const radius = 2.5 + Math.random() * 1.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(
    pointGeometry,
    new THREE.PointsMaterial({
      color: 0xdcc9a9,
      size: 0.032,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    }),
  );
  group.add(points);

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });

  let visible = true;
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;
  let targetX = 0;
  let targetY = 0;

  const onPointerMove = (event: PointerEvent) => {
    pointerX = (event.clientX / window.innerWidth - 0.5) * 0.22;
    pointerY = (event.clientY / window.innerHeight - 0.5) * 0.16;
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });

  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
    },
    { threshold: 0.01 },
  );
  visibilityObserver.observe(stage);

  const render = (time: number) => {
    frame = window.requestAnimationFrame(render);
    if (!visible || document.hidden) return;

    const elapsed = time * 0.00024;
    targetX += (pointerY - targetX) * 0.025;
    targetY += (pointerX - targetY) * 0.025;
    group.rotation.x = elapsed * 1.3 + targetX;
    group.rotation.y = elapsed * 1.8 + targetY;
    halo.rotation.z = elapsed * -0.8;
    orbitRing.rotation.x = 0.9 + Math.sin(elapsed * 1.5) * 0.12;
    orbitRing.rotation.z = 0.25 + elapsed * 0.35;
    points.rotation.y = elapsed * -0.65;
    renderer.render(scene, camera);
  };
  frame = window.requestAnimationFrame(render);

  stage.dataset.scene = "ready";
  if (status) status.textContent = "SCENE / ACTIVE";

  return () => {
    window.cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointerMove);
    visibilityObserver.disconnect();
    core.geometry.dispose();
    (core.material as THREE.Material).dispose();
    halo.geometry.dispose();
    (halo.material as THREE.Material).dispose();
    orbitRing.geometry.dispose();
    (orbitRing.material as THREE.Material).dispose();
    pointGeometry.dispose();
    (points.material as THREE.Material).dispose();
    renderer.dispose();
  };
}
