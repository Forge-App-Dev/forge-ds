# ADR-0012: Feedback de sucesso pós-ação — estado no gatilho, não toast
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-138

## Contexto
Com toast proibido (ADR-0002), o sistema não tinha padrão definido para confirmar "deu certo" depois de salvar/registrar — lacuna real hoje. Feedback precisa ser local, imediato e acessível.

## Decisão
Sucesso é comunicado por **transição de estado no próprio controle que disparou a ação**, na seguinte hierarquia:
1. **Botão de ação:** `Salvar` → estado busy (spinner) → `Salvo ✓` por ~1,5s, depois volta ao repouso ou o fluxo fecha. O `✓` usa `success`, não o acento.
2. **Registro em linha** (ex.: concluir série no `SetLogger`): a própria linha adota estado "concluída" (check + cor), persistente, não temporário.
3. **Fechamento de FullScreen/Panel após salvar** já é, por si, o sinal de sucesso — não duplicar com mensagem.
4. **`aria-live="polite"`** anuncia o novo estado para leitores de tela.

Nunca usar o acento vermelho para "sucesso"; nunca depender de mensagem efêmera flutuante.

## Consequências
- Feedback ancorado à ação, legível e acessível; fecha a lacuna sem reintroduzir toast.
- `Button` ganha estados `busy`/`done` tokenizados; duração do `✓` é token, respeita reduced-motion.

## Alternativas consideradas
- **Toast "Salvo":** rejeitado (ADR-0002).
- **Check inline temporário solto na tela:** rejeitado — sem âncora clara; o estado mora no gatilho.
