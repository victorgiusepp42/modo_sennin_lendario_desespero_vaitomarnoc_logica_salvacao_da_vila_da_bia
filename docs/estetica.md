# Estética do material — Lógica para IA (BIA UFCAT)

Síntese do seu DNA visual em **Manel Tattoo**, **Ice-o-lator / Medusa** e na identidade **BIA UFCAT** (mascote anexo). Este documento guia o agente e o conversor HTML até o conteúdo didático entrar.

## Princípios (seus produtos)

| Princípio | Origem | Aplicação no material |
|-----------|--------|------------------------|
| **Dark-first** | Medusa, Ice, Manel | Fundo `#080808`–`#0a0a0a`, texto creme/branco |
| **Camadas** | Todos | Arte/mascote atrás → véu escuro → painéis semi-transparentes com blur |
| **Tipografia condensada + display** | Ice, Medusa, Manel | Barlow Condensed (corpo), Bebas Neue (títulos) |
| **Ticker / faixa animada** | Manel, Ice | Faixa superior opcional com gradiente (laranja ↔ ciano no material IA) |
| **Pills e badges** | Medusa, Manel | Chips para conceitos, pré-requisitos, “modo sennin” |
| **Orbs e glow** | Ice, Medusa | Blobs desfocados (ciano + laranja + roxo suave) |
| **Ruído de filme** | Manel, Medusa | Overlay SVG fractalNoise ~2% |
| **Gradiente de texto** | Manel | Títulos com shine laranja→âmbar→rosa (versão IA: laranja→ciano) |
| **Código como decoração** | Tema IA + BIA | Binário, monospace, bordas tipo circuito |

## Paleta — material de Lógica para IA

Unifica **laranja BIA** (mascote/poster) com **ciano Ice** (tech) e toques **roxo Medusa** (energia/criatividade), sobre base **Manel** (preto quente).

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#080808` | Fundo principal |
| `--bg-panel` | `rgba(10,10,10,0.72)` | Seções de leitura |
| `--bia-orange` | `#ff6600` | Destaque primário, links, bordas ativas |
| `--bia-orange-light` | `#fb923c` | Gradientes, callouts quentes |
| `--bia-teal` | `#0d9488` | Secundário (camiseta do mascote) |
| `--ice-cyan` | `#00b4d8` | Lógica, código, “sistema” |
| `--ice-cyan-light` | `#90e0ef` | Hover, labels técnicos |
| `--med-purple` | `#9b5de5` | Acento sutil (opcional) |
| `--neon` | `#39ff14` | Status “ativo”, dica viva (parcimônia) |
| `--text` | `#f5f0e6` | Corpo (creme Manel) |
| `--text-muted` | `#9ca3af` | Legendas |
| `--border` | `rgba(255,102,0,0.22)` | Bordas painéis |

## Mascote (obrigatório no início)

- Arquivo: `content/assets/mascote-bia-ufcat.png`
- **Hero** no topo do HTML final: largura até `min(100%, 28rem)`, `object-fit: contain`, embutido no bundle (base64) para abrir offline em qualquer dispositivo.
- Não recortar a arte; manter resolução nativa (~197 KB fonte).

## Motivos visuais IA / lógica

- Padrão de **circuito** (linhas + nós) em baixa opacidade no fundo.
- Faixa de **binário** decorativo (não legível como conteúdo).
- Blocos `code` com fundo escuro, borda ciano, fonte monospace.
- Callouts: `info` = ciano, `warning` = âmbar, `tip` = verde neon suave.

## O que NÃO copiar literalmente

- Roxo/neon dominante da headshop (Ice) — só acento.
- Vermelho/vinho dominante do Manel Tattoo — só em gradientes mistos com laranja BIA.
- Scroll snap fullscreen da landing Medusa — material é leitura longa, scroll contínuo.

## Referências locais

- `C:\Users\victo\projects\Manel_Tattoo\src\index.css`
- `ice_o_lator/medusa/index.html` (repo `victorgiusepp42/ice_o_lator`)
- `ice_o_lator/headshop/index.html`

## Bloco IDL `hero`

Primeira dobra do material: mascote + eyebrow + título + subtítulo (ver schema e exemplo em `content/*.idl.yaml`).
