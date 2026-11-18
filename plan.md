# Landing de Toussaint — plano de implementação e direção

## Escopo

Landing page autoral de lançamento para um case de portfólio. A experiência apresenta a noite de Toussaint como um artefato digital editorial de alta direção: hero em tela cheia, scroll storytelling em capítulos, composição art-directed, uma cena 3D progressiva e uma arquitetura estática orientada a performance. Não haverá backend, autenticação ou banco de dados.

## Abordagem de implementação

- Astro 7 com saída estática para manter HTML semântico, pouca hidratação e bom desempenho inicial.
- Tailwind CSS 4 via plugin Vite, complementado por CSS de tokens e composição editorial autoral.
- Three.js carregado sob demanda após o primeiro paint e somente quando o canvas entra na viewport; a cena usa geometria simples, pixel ratio limitado e fallback visual em CSS.
- Uma página única dividida em hero, marquee, manifesto, artefato, coleção de sinais, disciplina de performance e encerramento.
- Microinterações leves de cursor, hover, reveal e barra de progresso; nenhuma informação depende de animação para ser compreendida.
- `prefers-reduced-motion`, ausência de WebGL e telas pequenas recebem uma experiência funcional sem depender do movimento.
- Metadados Open Graph/Twitter e `public/manus-routes.json` preparados para apresentação profissional e inspeção da plataforma.

## Estrutura do projeto

```text
src/
  components/
    OrbScene.astro       # canvas 3D progressivo e fallback acessível
  layouts/
    BaseLayout.astro     # head, SEO e moldura global
  pages/
    index.astro          # narrativa, interação de cursor e progresso de scroll
  scripts/
    orb-scene.ts         # inicialização lazy da cena Three.js
  styles/
    global.css           # tokens, composição, responsividade e motion
public/
  manus-routes.json      # manifesto de rotas da aplicação
  og-card.svg            # card social leve, sem dependência externa
app.config.ts            # identidade visual do projeto no Webdev
```

## Direção visual

### Alternativas consideradas

- **Romantismo gótico editorial** — 0.07: papel noturno, serifas históricas e contraste teatral.
- **Brutalismo de arquivo digital** — 0.04: tipografia condensada, grids assimétricos e sinais de sistema.
- **Noir astral Awwwards-style** — 0.08: preto mineral, marfim, ferrugem incandescente, escala tipográfica extrema e um objeto 3D dominante.

### Escolha: Noir astral Awwwards-style

**Design Movement:** uma fusão de editorial de moda noturna, cartaz de cinema europeu e site de estúdio premiado — teatral, preciso e construído em camadas.

**Princípios:** primeiro impacto em escala; contraste entre papel e carvão; movimento raro com intenção; cada bloco deve parecer um artefato, não um card genérico.

**Filosofia de cor:** o preto mineral cria espaço e profundidade, o marfim vira uma superfície inesperada no manifesto e o ferrugem é a única fonte de calor, como uma luz de vela vista de longe.

**Paradigma de layout:** navegação fixa e trilho de progresso; hero tipográfico sobreposto ao objeto 3D; seções alternando planos de cor; cards assimétricos e painéis que ocupam a largura total.

**Elementos assinatura:** wordmark com sinal luminoso; marquee ferrugem; números de capítulo e coordenadas; objeto orbital; cursor circular que cresce sobre elementos interativos.

**Interação:** a rolagem revela conteúdo em camadas, com barra de progresso e entradas suaves. Hover altera escala, cor ou posição em gestos curtos. No toque, a composição permanece estável e legível.

**Animação:** o orbita lentamente e reage minimamente ao ponteiro; o marquee é contínuo; reveals entram uma vez; com `prefers-reduced-motion`, o canvas congela, o marquee para e todos os capítulos aparecem sem deslocamento.

**Tipografia:** `Cormorant Garamond` para títulos oversized e `IBM Plex Mono` para sistema, metadados e labels. Fallbacks preservam a hierarquia quando as fontes não carregarem.

**Essência da marca:** um lançamento fictício tratado como cultura digital para mostrar que direção de arte e engenharia de frontend podem respirar na mesma página.

**Voz:** baixa, cinematográfica, sem clichês de produto. Exemplos: “A noite não começa. Ela se revela.” / “Menos efeito. Mais presença.”

**Wordmark:** `TOUSSAINT / 006`, com a barra como uma linha de corte e o número funcionando como índice de arquivo.

**Cor proprietária:** ferrugem incandescente `#EC6842` — o único tom quente em um campo de carvão e marfim.

## Entrega desta etapa

A versão atual é uma reformulação visual completa, com composição mais densa e responsiva, camadas de interação e maior contraste entre os capítulos. A base continua preparada para você conectar imagens, copy final ou uma página detalhada do case.
