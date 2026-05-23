# Instruções para o agente

## Objetivo

Construir material didático a partir de contexto fornecido pelo usuário, usando o formato intermediário **IDL** (`content/`), e gerar um artefato final **leve e abrível em qualquer dispositivo** (iOS, Android, desktop).

## Antes de editar conteúdo

1. Ler `prompts/inicial.md` e `docs/estrutura-arquivo-final.md`.
2. Ler `context/somente-leitura/` (prova + Gersting) — **não** copiar para o final.
3. Conteúdo principal → `content/generated/material-principal.html` (Seções 0–8 do prompt).
4. Anexos finais → `content/assembly.yaml` (lista + logica completo).
5. Ler `docs/estetica.md`, `docs/formato-intermediario.md`.
3. Não inventar estrutura fora do schema sem alinhar com o usuário.

## Convenções

- Material fonte: `content/**/*.idl.yaml`
- Fonte principal: `content/modo_sennin_lendario_desespero_vaitomarnoc_logica_salvacao_da_vila_da_bia.idl.yaml`
- Mascote (obrigatório no hero): `content/assets/mascote-bia-ufcat.png`
- Artefato final: `dist/modo_sennin_lendario_desespero_vaitomarnoc_logica_salvacao_da_vila_da_bia.html`
- Primeira dobra: bloco IDL `type: hero` com `mascot: true`
- Saída de build: `dist/` (gitignored)
- Validar antes de build: `npm run validate`

## Formato final

O conversor definitivo ainda será escolhido/implementado após o prompt inicial do usuário. Placeholder atual: `src/converters/html-bundle/`.

## Idioma

Conteúdo didático e documentação para o usuário final: **português**, salvo pedido em contrário.
