# -*- coding: utf-8 -*-
"""One-shot builder for material-principal.html"""
from pathlib import Path

OUT = Path(__file__).with_name("material-principal.html")

HTML = r'''<!-- material-principal: fragmento semântico para PDF -->
<section id="material-principal" class="material-principal" lang="pt-BR">

<!-- Section 0 - Hero / Mapa -->
<section id="sec-0" class="section-hero">
  <h1>Lógica para IA — Guia de Sobrevivência da Segunda Chance</h1>
  <p>Se você está aqui, é porque a primeira prova não rolou. Tudo bem — reprovar um bloco não define seu futuro em IA. Este material foi feito para <strong>remediação</strong>: destravar exatamente os pontos que derrubam a maioria na UFCAT/IMTec, com passos curtos, exemplos resolvidos e a prova anterior explicada de ponta a ponta.</p>
  <p>Vamos do cotidiano para a fórmula, repetir o essencial em contextos diferentes e marcar as pegadinhas que você provavelmente já encontrou. Sem pressa, com método.</p>

  <article class="concept">
    <h3>Mapa do material</h3>
    <ol>
      <li><strong>Seção 1</strong> — Proposições, conectivos, tabelas-verdade (Gersting 1.1)</li>
      <li><strong>Seção 2</strong> — Equivalências e provas por cadeia ⇔ (coração da Q1.c e Q2)</li>
      <li><strong>Seção 3</strong> — Argumentos proposicionais: equivalência vs inferência</li>
      <li><strong>Seção 4</strong> — Quantificadores e predicados</li>
      <li><strong>Seção 5</strong> — Demonstrações em lógica de predicados (Q4)</li>
      <li><strong>Seção 6</strong> — Sintaxe, semântica, validade (Q5)</li>
      <li><strong>Seção 7</strong> — A prova anterior explicada (prioridade máxima)</li>
      <li><strong>Seção 8</strong> — Cheat sheet de sobrevivência</li>
    </ol>
    <p class="ref">📖 Base: Gersting, Fundamentos matemáticos para a ciência da computação | 📝 Lista de exercícios: documento separado (Lista_Exercicios_Livro.docx)</p>
  </article>

  <article class="concept">
    <h3>Tabela de notação</h3>
    <table>
      <thead>
        <tr><th>Símbolo</th><th>Nome</th><th>Uso neste material</th></tr>
      </thead>
      <tbody>
        <tr><td>′</td><td>Negação</td><td>A′ = “não A” (como na prova)</td></tr>
        <tr><td>∧</td><td>Conjunção</td><td>E lógico</td></tr>
        <tr><td>∨</td><td>Disjunção</td><td>Ou inclusivo</td></tr>
        <tr><td>→</td><td>Condicional</td><td>Se… então… (operador dentro da fbf)</td></tr>
        <tr><td>↔</td><td>Bicondicional</td><td>Se e somente se… (operador)</td></tr>
        <tr><td>⇔</td><td>Equivalência</td><td>“é equivalente a” entre fbfs (metalinguagem)</td></tr>
        <tr><td>⊢</td><td>Consequência</td><td>Conclusão segue das premissas</td></tr>
        <tr><td>∀ ∃</td><td>Quantificadores</td><td>Para todo / existe</td></tr>
        <tr><td>V / F</td><td>Valores</td><td>Verdadeiro / Falso (como na prova)</td></tr>
        <tr><td>0 / 1</td><td>Constantes</td><td>Falso / Verdadeiro em simplificações</td></tr>
      </tbody>
    </table>
  </article>

  <p><strong>Tempo de leitura estimado:</strong> 3–4 horas em uma passada focada; 6–8 horas se você pausar para treinar cada bloco na lista externa.</p>
  <aside class="pegadinha">⚠️ <strong>Aviso:</strong> Este PDF <em>não</em> contém exercícios para você resolver. Ele sugere números da lista (Ex. 1.X.Y) — a prática vem no arquivo separado.</aside>
</section>

<!-- PLACEHOLDER_SECTIONS -->

</section>
'''

# Due to size, sections are appended programmatically below
SECTIONS = []

def add(s):
    SECTIONS.append(s)

# --- Section 1 ---
add(r'''
<!-- Section 1 - Gersting 1.1 -->
<section id="sec-1" class="section-proposicional">
  <h2>1. Proposições, conectivos e tabelas-verdade</h2>

  <article class="concept">
    <h3>1.1 O que é proposição?</h3>
    <p>Antes de qualquer símbolo: uma <strong>proposição</strong> é uma afirmação que pode ser classificada como <strong>V</strong> ou <strong>F</strong> — não ambíguo, não pergunta, não ordem.</p>
    <p>“Chove em Goiânia agora” pode ser V ou F. “Feche a porta!” não é proposição. “x + 2 = 5” só vira proposição quando x recebe valor.</p>
    <ul>
      <li>Proposição: “O servidor está online.”</li>
      <li>Não é: “Qual a latência?”</li>
      <li>Não é: “Talvez chova.” (sem valor definido)</li>
    </ul>
    <p class="ref">📖 Livro: pp. 2–6 | 📝 Pratique na lista: Ex. 1.1.1</p>
  </article>

  <article class="concept">
    <h3>1.2 Os cinco conectivos</h3>
    <p>Cotidiano primeiro: “Vou sair <em>e</em> levo guarda-chuva” só é verdadeiro se as duas partes forem verdadeiras — isso é <strong>conjunção (∧)</strong>.</p>
    <table>
      <thead><tr><th>Símbolo</th><th>Nome</th><th>Português típico</th><th>Linha V na tabela 2×2</th></tr></thead>
      <tbody>
        <tr><td>′</td><td>Negação</td><td>não…</td><td>inverte V/F</td></tr>
        <tr><td>∧</td><td>Conjunção</td><td>e, mas também</td><td>só V quando A e B são V</td></tr>
        <tr><td>∨</td><td>Disjunção</td><td>ou (inclusivo)</td><td>V se pelo menos um for V</td></tr>
        <tr><td>→</td><td>Condicional</td><td>se… então…</td><td>F <em>só</em> quando antecedente V e consequente F</td></tr>
        <tr><td>↔</td><td>Bicondicional</td><td>se e somente se</td><td>V quando A e B têm o mesmo valor</td></tr>
      </tbody>
    </table>
    <p>Condicional → na prova: “Se chover, levo guarda-chuva” é V quando não chove (antecedente F), mesmo sem guarda-chuva. A única combinação que torna A → B <strong>F</strong> é <strong>V → F</strong> (promessa quebrada).</p>
    <table class="truth-table">
      <caption>Tabela-verdade do condicional A → B</caption>
      <thead><tr><th>A</th><th>B</th><th>A → B</th></tr></thead>
      <tbody>
        <tr><td>V</td><td>V</td><td>V</td></tr>
        <tr><td>V</td><td>F</td><td>F</td></tr>
        <tr><td>F</td><td>V</td><td>V</td></tr>
        <tr><td>F</td><td>F</td><td>V</td></tr>
      </tbody>
    </table>
    <p class="ref">📖 Livro: pp. 6–14 | 📝 Pratique: Ex. 1.1.2 a 1.1.4</p>
  </article>

  <article class="concept">
    <h3>1.3 Construir tabela-verdade em 4 passos</h3>
    <ol>
      <li>Conte quantas letras proposicionais aparecem (n letras → 2ⁿ linhas).</li>
      <li>Liste todas as combinações de V/F para A, B, …</li>
      <li>Calcule colunas das subexpressões <em>antes</em> da operação principal.</li>
      <li>Leia a coluna final: tautologia = tudo V; contradição = tudo F.</li>
    </ol>
  </article>

  <div class="worked-example">
    <h4>Exemplo resolvido: tautologia de De Morgan — (A ∧ B)′ ↔ A′ ∨ B′</h4>
    <p class="setup">Esta é a mesma estrutura da Q1.b. Objetivo: verificar se a coluna do bicondicional ↔ é toda V.</p>
    <ol class="steps">
      <li>
        <span class="step">Monte 4 linhas para A e B.</span>
        <span class="thinking">💭 Duas letras → 2² = 4 linhas. Não pule combinações.</span>
      </li>
      <li>
        <span class="step">Calcule (A ∧ B)′ e A′ ∨ B′ em colunas separadas.</span>
        <span class="thinking">💭 Subexpressões primeiro evitam erro na coluna ↔.</span>
      </li>
    </ol>
    <table class="truth-table">
      <thead>
        <tr><th>A</th><th>B</th><th>A ∧ B</th><th>(A ∧ B)′</th><th>A′</th><th>B′</th><th>A′ ∨ B′</th><th>(A ∧ B)′ ↔ A′ ∨ B′</th></tr>
      </thead>
      <tbody>
        <tr><td>V</td><td>V</td><td>V</td><td>F</td><td>F</td><td>F</td><td>F</td><td>V</td></tr>
        <tr><td>V</td><td>F</td><td>F</td><td>V</td><td>F</td><td>V</td><td>V</td><td>V</td></tr>
        <tr><td>F</td><td>V</td><td>F</td><td>V</td><td>V</td><td>F</td><td>V</td><td>V</td></tr>
        <tr><td>F</td><td>F</td><td>F</td><td>V</td><td>V</td><td>V</td><td>V</td><td>V</td></tr>
      </tbody>
    </table>
    <p class="closure">Conclusão: coluna final toda V → a fbf é <strong>tautologia</strong> (Lei de De Morgan confirmada).</p>
  </div>

  <article class="concept">
    <h3>1.4 Tradução português → fbf</h3>
    <p>Nomeie átomos com letras <em>positivas</em> (N = notas pagas, não “notas não pagas”). Depois aplique ′ onde o texto nega.</p>
    <ul>
      <li>“A e B” → A ∧ B</li>
      <li>“A ou B” → A ∨ B</li>
      <li>“Se A, então B” → A → B</li>
      <li>“A somente se B” → A → B (A é condição de B)</li>
      <li>“A se e somente se B” → A ↔ B</li>
    </ul>
    <aside class="pegadinha">⚠️ <strong>Pegadinha:</strong> “só se” não é o mesmo que “se”. “Chovo só se estiver nublado” fixa a nuvem como condição — tradução cuidadosa (Ex. 1.1.5.c).</aside>
    <p class="ref">📖 Livro: pp. 14–20 | 📝 Pratique: Ex. 1.1.5, 1.1.7</p>
  </article>

  <div class="worked-example">
    <h4>Exemplo resolvido: tradução simples</h4>
    <p class="setup">“Se o modelo treinar e os dados forem limpos, o relatório será aprovado.”</p>
    <ol class="steps">
      <li><span class="step">Átomos: T = modelo treina, D = dados limpos, R = relatório aprovado.</span><span class="thinking">💭 Positivos primeiro; negações depois.</span></li>
      <li><span class="step">Antecedente: T ∧ D. Conclusão: R.</span><span class="thinking">💭 “Se… então” → condicional.</span></li>
      <li><span class="step">Fbf: (T ∧ D) → R</span><span class="thinking">💭 Estrutura igual à Q1.a (condicional com conjunção no antecedente).</span></li>
    </ol>
    <p class="closure">Padrão recorrente na prova: (alguma coisa ∧ outra) → conclusão.</p>
  </div>

  <article class="concept">
    <h3>1.5 Negação correta — De Morgan</h3>
    <p>Negar um <strong>grupo</strong> troca o conectivo principal e nega cada parte:</p>
    <p>(A ∨ B)′ ⇔ A′ ∧ B′ &nbsp;&nbsp;|&nbsp;&nbsp; (A ∧ B)′ ⇔ A′ ∨ B′</p>
    <aside class="pegadinha">⚠️ <strong>Pegadinha:</strong> negar (A ∨ B) <strong>não</strong> é (A′ ∨ B′). A negação “entra” e o ∨ vira ∧.</aside>
    <p class="ref">📖 Livro: pp. 20–24 | 📝 Pratique: Ex. 1.1.9, 1.1.10</p>
  </article>

  <article class="concept">
    <h3>1.6 Tautologia, contradição, contingência</h3>
    <p><strong>Tautologia:</strong> sempre V. <strong>Contradição:</strong> sempre F. <strong>Contingência:</strong> depende da linha (nem sempre V nem sempre F).</p>
    <div class="mnemonic">🧠 <strong>Lembrete:</strong> na prova, “prove que é tautologia” pode ser tabela-verdade (Q1.b) ou cadeia ⇔ (Q1.c) — leia o enunciado.</div>
  </article>

  <aside class="resumao">
    <h4>Resumão de Bolso</h4>
    <ul class="takeaways">
      <li>Proposição = afirmação V/F.</li>
      <li>Condicional só é F em V → F.</li>
      <li>Tabela-verdade: subexpressões antes do connectivo principal.</li>
      <li>De Morgan: nega o grupo, troca ∧/∨.</li>
      <li>Nomeie átomos positivos antes de negar.</li>
    </ul>
    <p class="practice-hint">📝 Pratique esta seção: Ex. 1.1.1 a Ex. 1.1.10</p>
  </aside>
</section>
''')

add(r'''
<!-- Section 2 - Gersting 1.1 equivalências -->
<section id="sec-2" class="section-equivalencias">
  <h2>2. Equivalências lógicas e provas por equivalência</h2>
  <article class="concept">
    <h3>2.1 O que é equivalência lógica?</h3>
    <p>Duas fbfs P e Q são <strong>logicamente equivalentes</strong> (escrevemos P ⇔ Q) quando têm exatamente a mesma tabela-verdade.</p>
    <p><strong>↔</strong> é operador <em>dentro</em> de uma fbf. <strong>⇔</strong> é metalinguagem: “estas duas fbfs são a mesma coisa logicamente”.</p>
    <p class="ref">📖 Livro: pp. 24–32, Tabela 1 | 📝 Pratique: Ex. 1.1.11 a 1.1.15</p>
  </article>
  <article class="concept">
    <h3>2.2 Tabela completa de equivalências (Tabela 1 — Gersting)</h3>
    <table>
      <thead><tr><th>Regra</th><th>Forma</th></tr></thead>
      <tbody>
        <tr><td>Comutatividade</td><td>P ∧ Q ⇔ Q ∧ P &nbsp;;&nbsp; P ∨ Q ⇔ Q ∨ P</td></tr>
        <tr><td>Associatividade</td><td>(P ∧ Q) ∧ R ⇔ P ∧ (Q ∧ R) &nbsp;;&nbsp; idem para ∨</td></tr>
        <tr><td>Distributividade</td><td>P ∧ (Q ∨ R) ⇔ (P ∧ Q) ∨ (P ∧ R) &nbsp;;&nbsp; P ∨ (Q ∧ R) ⇔ (P ∨ Q) ∧ (P ∨ R)</td></tr>
        <tr><td>De Morgan</td><td>(P ∨ Q)′ ⇔ P′ ∧ Q′ &nbsp;;&nbsp; (P ∧ Q)′ ⇔ P′ ∨ Q′</td></tr>
        <tr><td>Condicional como disjunção</td><td>P → Q ⇔ P′ ∨ Q</td></tr>
        <tr><td>Dupla negação</td><td>(P′)′ ⇔ P</td></tr>
        <tr><td>Bicondicional</td><td>P ↔ Q ⇔ (P → Q) ∧ (Q → P)</td></tr>
        <tr><td>Elemento neutro</td><td>P ∧ 1 ⇔ P &nbsp;;&nbsp; P ∨ 0 ⇔ P</td></tr>
        <tr><td>Dominação</td><td>P ∨ 1 ⇔ 1 &nbsp;;&nbsp; P ∧ 0 ⇔ 0</td></tr>
        <tr><td>Complementaridade</td><td>P ∨ P′ ⇔ 1 &nbsp;;&nbsp; P ∧ P′ ⇔ 0</td></tr>
        <tr><td>Idempotência</td><td>P ∨ P ⇔ P &nbsp;;&nbsp; P ∧ P ⇔ P</td></tr>
      </tbody>
    </table>
  </article>
  <div class="worked-example">
    <h4>Exemplo resolvido: prova (A ∧ B)′ ∧ (A ∨ B′) ⇔ B′ (estrutura Q1.c)</h4>
    <p class="setup">Meta: chegar em B′ — olhe o lado direito e “puxe” B′ para fora com distributividade.</p>
    <table class="equivalence-chain">
      <thead><tr><th>Expressão</th><th>⇔</th><th>Próximo passo</th><th>Regra</th></tr></thead>
      <tbody>
        <tr><td>(A ∧ B)′ ∧ (A ∨ B′)</td><td>⇔</td><td>(A′ ∨ B′) ∧ (A ∨ B′)</td><td>De Morgan em (A ∧ B)′</td></tr>
        <tr><td></td><td>⇔</td><td>(B′ ∨ A′) ∧ (B′ ∨ A)</td><td>Comutatividade (∨ e ∧)</td></tr>
        <tr><td></td><td>⇔</td><td>B′ ∨ (A′ ∧ A)</td><td>Distributividade: fator comum B′</td></tr>
        <tr><td></td><td>⇔</td><td>B′ ∨ 0</td><td>Complementaridade: A′ ∧ A ⇔ 0</td></tr>
        <tr><td></td><td>⇔</td><td>B′</td><td>Elemento neutro: 0 ∨ B′ ⇔ B′</td></tr>
      </tbody>
    </table>
    <p class="closure">Cada ⇔ deve ser justificável por uma linha da tabela acima — é isso que a correção espera na Q1.c.</p>
  </div>
  <article class="concept">
    <h3>2.4 Quando travar, tente…</h3>
    <ol>
      <li>De Morgan em negações de parênteses.</li>
      <li>Trocar → por ′ ∨ (condicional como disjunção).</li>
      <li>Achar P ∨ P′ ou P ∧ P′ para colapsar.</li>
      <li>Distributividade para fatorar o que você quer isolar.</li>
    </ol>
  </article>
  <aside class="resumao">
    <h4>Resumão de Bolso</h4>
    <ul class="takeaways">
      <li>⇔ entre fbfs = mesma tabela-verdade.</li>
      <li>Condicional: P → Q ⇔ P′ ∨ Q.</li>
      <li>De Morgan sempre troca ∧/∨ ao negar grupo.</li>
      <li>Prova por cadeia: simplifique o lado mais “pesado”.</li>
      <li>Q1.c não pede tabela — pede nomes de regras.</li>
    </ul>
    <p class="practice-hint">📝 Pratique esta seção: Ex. 1.1.11 a Ex. 1.1.18</p>
  </aside>
</section>
''')

add(r'''
<!-- Section 3 - Gersting 1.2 -->
<section id="sec-3" class="section-argumentos">
  <h2>3. Argumentos em lógica proposicional</h2>
  <article class="concept">
    <h3>3.1 Argumento válido</h3>
    <p>Um argumento é um conjunto de premissas e uma conclusão. É <strong>válido</strong> quando não existe linha da tabela (nem interpretação) em que todas as premissas sejam V e a conclusão seja F.</p>
    <p>Intuição: se o “mundo das premissas” for verdadeiro, a conclusão não pode falhar.</p>
  </article>
  <article class="concept">
    <h3>3.2 Duas técnicas de prova</h3>
    <ul>
      <li><strong>Cadeia de equivalências</strong> — transforma a conclusão a partir das premissas (estilo Q2).</li>
      <li><strong>Regras de inferência</strong> — linhas numeradas com mp, mt, etc. (estilo Ex. 1.2.12).</li>
    </ul>
  </article>
  <article class="concept">
    <h3>3.3 Regras de inferência principais</h3>
    <table>
      <thead><tr><th>Sigla</th><th>Forma</th><th>Quando usar</th></tr></thead>
      <tbody>
        <tr><td>mp</td><td>P, P → Q ⊢ Q</td><td>Tem condicional e antecedente V</td></tr>
        <tr><td>mt</td><td>P → Q, Q′ ⊢ P′</td><td>Condicional e consequente F</td></tr>
        <tr><td>sd</td><td>P ∨ Q, P′ ⊢ Q</td><td>Disjunção e uma perna negada</td></tr>
        <tr><td>sh</td><td>P → Q, Q → R ⊢ P → R</td><td>Cadeia de condicionais</td></tr>
        <tr><td>simp</td><td>P ∧ Q ⊢ P (ou Q)</td><td>Extrair uma conjunta</td></tr>
        <tr><td>conj</td><td>P, Q ⊢ P ∧ Q</td><td>Juntar duas premissas V</td></tr>
        <tr><td>ad</td><td>P ⊢ P ∨ Q</td><td>Generalizar disjunção</td></tr>
      </tbody>
    </table>
    <p class="ref">📖 Livro: pp. 33–48 | 📝 Pratique: Ex. 1.2.1 a 1.2.14</p>
  </article>
  <div class="worked-example">
    <h4>Exemplo resolvido: validade por equivalência (estrutura Q2 — tarifas)</h4>
    <p class="setup">Letras: T = tarifas sobem, U = contas de luz sobem, E = custos de energia sobem, C = contas do consumidor caem. Premissas traduzidas: (T → U)′ ∧ (E ∨ C′)′. Conclusão-alvo após simplificação: U′ ∧ C.</p>
    <ol class="steps">
      <li><span class="step">(T → U)′ ⇔ T ∧ U′</span><span class="thinking">💭 Negação de condicional: só falha quando T→U seria F, ou seja T∧U′.</span></li>
      <li><span class="step">(E ∨ C′)′ ⇔ E′ ∧ C</span><span class="thinking">💭 De Morgan no segundo bloco — não negue só metade.</span></li>
      <li><span class="step">Premissas juntas: T ∧ U′ ∧ E′ ∧ C</span><span class="thinking">💭 Conjunção das duas premissas simplificadas.</span></li>
      <li><span class="step">De T ∧ U′ ∧ E′ ∧ C extrai-se U′ ∧ C por simp</span><span class="thinking">💭 A conclusão pedida é parte do que já temos V.</span></li>
    </ol>
    <p class="closure">Moral: metade da Q2 é traduzir “não é verdade que (se… então…)” como negação do condicional inteiro.</p>
  </div>
  <div class="worked-example">
    <h4>Exemplo resolvido: validade por regras de inferência</h4>
    <p class="setup">Premissas: P → Q, P. Conclusão: Q.</p>
    <table class="formal-proof">
      <thead><tr><th>#</th><th>Fórmula</th><th>Justificativa</th><th>💭 Por quê</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>P → Q</td><td>Premissa</td><td>—</td></tr>
        <tr><td>2</td><td>P</td><td>Premissa</td><td>—</td></tr>
        <tr><td>3</td><td>Q</td><td>mp em 1, 2</td><td>Antecedente V + condicional → consequente</td></tr>
      </tbody>
    </table>
    <p class="closure">Modus ponens (mp) é a regra mais usada depois de traduzir bem.</p>
  </div>
  <aside class="pegadinha">⚠️ <strong>Pegadinha:</strong> → (operador), ⊢ (consequência) e ⇔ (equivalência) são coisas diferentes — não misture na justificativa.</aside>
  <aside class="resumao">
    <h4>Resumão de Bolso</h4>
    <ul class="takeaways">
      <li>Válido = impossível premissas V com conclusão F.</li>
      <li>Q2: equivalências após tradução correta.</li>
      <li>Exercícios longos de livro: sequência mp/mt/sd.</li>
      <li>Negar (P → Q) ⇒ P ∧ Q′, não P′ → Q′.</li>
    </ul>
    <p class="practice-hint">📝 Pratique esta seção: Ex. 1.2.8 a Ex. 1.2.14</p>
  </aside>
</section>
''')

if __name__ == "__main__":
    body = HTML.replace("<!-- PLACEHOLDER_SECTIONS -->", "\n".join(SECTIONS))
    OUT.write_text(body, encoding="utf-8")
    print(f"Wrote {OUT} ({len(body.splitlines())} lines)")
