# TODO — Landing de Toussaint

## Experiência Awwwards-style

- [x] A landing possui um hero de tela cheia com tipografia oversized, objeto orbital dominante, navegação fixa, metadados editoriais e CTA de scroll.
- [x] A narrativa de página única é organizada em capítulos com trilho de progresso, marquee, manifesto, artefato, coleção de sinais, performance e encerramento.
- [x] A composição alterna superfícies carvão, ferrugem e papel, usando blocos assimétricos e cards-objeto em vez de uma sequência simples de cards.

## Cena 3D progressiva

- [x] Existe uma cena 3D sutil em Three.js integrada ao hero.
- [x] A cena é carregada progressivamente e tem fallback visual para dispositivos ou contextos sem WebGL.
- [x] A experiência permanece funcional quando `prefers-reduced-motion` está ativo.

## Interface e acessibilidade

- [x] Links, botões, navegação, cards e elementos interativos possuem estados de foco ou hover claros.
- [x] O cursor de precisão é aprimoramento opcional e não bloqueia toque, teclado ou leitura.
- [x] O layout é responsivo, com composição e hierarquia adaptadas de telas móveis a desktops amplos.
- [x] Conteúdo essencial não depende de animação ou do canvas 3D para ser compreendido.

## Performance e publicação

- [x] A implementação é estática em Astro, com Tailwind CSS 4 e sem backend ou banco de dados.
- [x] JavaScript da cena 3D é dividido e carregado sob demanda; o pixel ratio é limitado e não há asset pesado externo obrigatório.
- [x] Metadados essenciais de SEO e compartilhamento social estão presentes.
- [ ] Medir Lighthouse no Preview e ajustar qualquer regressão real antes da publicação.
- [ ] Substituir a copy provisória por dados finais do case e conectar a página detalhada quando existir.
