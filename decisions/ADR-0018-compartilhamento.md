# ADR-0018: Compartilhamento — card de PR gerado com a marca
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-076

## Contexto
Momentos de conquista (recorde pessoal, streak) são os mais compartilháveis de um app fitness e um vetor de crescimento orgânico barato. Sem um padrão, compartilhar viraria screenshot cru e fora de marca.

## Decisão
Compartilhamento é a **exportação de uma imagem gerada** (não screenshot da tela), acionada pelo `PRCelebration`/tela de conquista via o share sheet nativo do SO:
- imagem em proporção fixa (ex.: 1080×1080 e/ou 1080×1920 story), fundo grafite sólido, marca `ForgeMark`, o número da conquista em Barlow grande, e o `Ring` quando fizer sentido — mesma linguagem visual do app (sem gradiente, sem sombra — ADR-0001);
- sem dados sensíveis por padrão (nome/foto só com escolha explícita);
- o botão "Compartilhar" é secundário (não rouba o CTA primário da tela — ADR-0004).

## Consequências
- Cada compartilhamento é uma peça de marca consistente → crescimento orgânico.
- Requer um renderizador de imagem (view→imagem) na Fase 3.

## Alternativas consideradas
- **Compartilhar screenshot da tela:** rejeitado — inconsistente, com UI de navegação e dados demais.
- **Link para web:** fora de escopo enquanto não há superfície pública.

## Ratificação
Quais conquistas são compartilháveis, formatos exatos e dados exibidos são **escolha de produto/growth**. **Ratificado (default): começar por PR e streak no formato acima (imagem gerada 1080×1080 / 1080×1920, fundo grafite, ForgeMark, número em Barlow, Ring quando fizer sentido; sem dados sensíveis por padrão).** Delegado pelo owner (Mateus) em 2026-07-14; pode ser revisitado.
