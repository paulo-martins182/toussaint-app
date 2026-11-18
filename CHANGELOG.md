# Changelog

Todas as mudanças relevantes deste projeto são registradas neste arquivo.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e as versões seguem [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [0.1.0] - 2026-11-18

Primeira versão versionada da landing autoral de Toussaint / 006.

### Adicionado

- Landing page estática construída com Astro 7, TypeScript e Tailwind CSS 4.
- Narrativa editorial em capítulos, com hero, manifesto, artefato, coleção e encerramento.
- Cena orbital em Three.js carregada sob demanda, com fallback em CSS.
- Suporte a `prefers-reduced-motion`, ausência de WebGL e telas pequenas.
- Metadados Open Graph/Twitter e manifesto de rotas em `public/manus-routes.json`.
- Histórico inicial organizado segundo o fluxo Git Flow.

## Estratégia de branches

- `main`: código pronto para produção e versões publicadas.
- `develop`: integração contínua do próximo ciclo de desenvolvimento.
- `feature/<nome-curto>`: novas funcionalidades ou melhorias isoladas.
- `release/<versão>`: estabilização e preparação de uma versão.
- `hotfix/<nome-curto>`: correções urgentes originadas de `main`.

## Convenção de commits

Os commits seguem [Conventional Commits](https://www.conventionalcommits.org/pt-br/), usando tipos como `feat`, `fix`, `docs`, `refactor`, `test`, `build` e `chore`.

Exemplo:

```text
feat(hero): adiciona narrativa visual da abertura
```

O histórico da versão `0.1.0` foi criado com a sequência `main` → `develop` → `feature/docs-git-flow` → `release/0.1.0` → `main`.

## Histórico de integração

A branch `feature/docs-git-flow` documenta as convenções de branches e commits. Em seguida, `develop` recebe a integração da documentação, `release/0.1.0` estabiliza a primeira versão e `main` recebe a versão publicada com a tag `v0.1.0`.

[0.1.0]: https://github.com/toussaint/toussaint/releases/tag/v0.1.0
