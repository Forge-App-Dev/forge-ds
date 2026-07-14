# Template "Quando usar / Acessibilidade" por componente

Gabarito a **colar no final de cada `.prompt.md`** de componente (ADR-0057, OP-135 + OP-174). Preencha as listas com o conteúdo do componente; a estrutura não muda. Docs de foundation (não-componentes) usam só o bloco 1 quando aplicável.

---

## Quando usar

- <situação em que este é o componente certo>
- <situação>

## Quando NÃO usar

- <situação em que ele é a escolha errada>
- <situação>

## Em vez disso use

- <caso> → **`<OutroComponente>`** (por quê, em uma linha)
- <caso> → **`<OutroComponente>`**

## Acessibilidade

Cole a seção do **tipo** deste componente de `docs/accessibility-checklist.md` e marque o que se aplica. Sempre cobrir: papel, nome acessível (pt-BR, sem repetir o papel), valor/estado, foco visível, alvo ≥44px, contraste, terminologia de leitor de tela (ADR-0054), e "cor não é o único meio" quando houver cor semântica.

- **Papel / leitor de tela:** <role + como TalkBack/VoiceOver anuncia, ex.: "botão">
- **Nome acessível:** <de onde vem — label, aria-label, aria-labelledby>
- **Valor / estado:** <aria-pressed / aria-valuenow / aria-invalid / etc.>
- **Contraste:** <par relevante + razão; usar onColor() se houver fill>
- **Foco / alvo:** <forge-focusable; alvo ≥44px>
- **Observações:** <cor-não-única, reflow, reduced-motion, se aplicável>

---

## Exemplos preenchidos (referência)

### Panel

**Quando usar:** escolha/seletor rápido (pegar um alimento ou exercício), confirmação, replicar dia, formulário curto. É a escolha padrão e mais leve — na dúvida, use Panel.
**Quando NÃO usar:** fluxo longo de edição multi-seção; qualquer coisa com rodapé de ação persistente e várias etapas.
**Em vez disso use:** fluxo longo de build/edição → **`FullScreen`**; vídeo → **`VideoModal`**; aviso inline sem interromper → **`InlineAlert`**.
**Acessibilidade:** ver seção "Diálogos e overlays" do checklist — `role="dialog"` + `aria-modal`, título via `aria-labelledby`, foco preso, Escape fecha, foco volta ao gatilho.

### MacroMeter vs MetaBar vs Ring

**Quando usar MacroMeter:** progresso de um macro contra sua meta, com rótulo + valor.
**Quando NÃO usar:** progresso genérico de uma única tarefa/percentual → é ruído de domínio.
**Em vez disso use:** percentual único de conclusão → **`Ring`**; barra de meta genérica não-macro → **`MetaBar`**.
**Acessibilidade:** `role="progressbar"` + valuenow/min/max + label; **cor + rótulo + valor sempre juntos** (ADR-0052), ordem proteína→carbo→gordura.

### Button vs Pill vs HeaderAction

**Quando usar Button:** ação primária/secundária de uma tela ou diálogo.
**Quando NÃO usar Button:** filtro/toggle selecionável numa linha → parece ação, mas é estado.
**Em vez disso use:** filtro/toggle → **`Pill`** (com `aria-pressed`); ação compacta no header → **`HeaderAction`** (a caminho de virar variante de Button, OP-006).
**Acessibilidade:** ver "Botões e pressáveis"; cor de texto via `onColor()`; alvo ≥44px.
