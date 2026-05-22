# Instruções para o agente

## Objetivo

Construir material didático a partir de contexto fornecido pelo usuário, usando o formato intermediário **IDL** (`content/`), e gerar um artefato final **leve e abrível em qualquer dispositivo** (iOS, Android, desktop).

## Antes de editar conteúdo

1. Ler `context/` e `prompts/inicial.md` (quando existirem).
2. Ler `docs/formato-intermediario.md` e `schemas/material.idl.schema.json`.
3. Não inventar estrutura fora do schema sem alinhar com o usuário.

## Convenções

- Material fonte: `content/**/*.idl.yaml`
- Exemplo mínimo: `content/example/modulo-exemplo.idl.yaml`
- Saída de build: `dist/` (gitignored)
- Validar antes de build: `npm run validate`

## Formato final

O conversor definitivo ainda será escolhido/implementado após o prompt inicial do usuário. Placeholder atual: `src/converters/html-bundle/`.

## Idioma

Conteúdo didático e documentação para o usuário final: **português**, salvo pedido em contrário.
