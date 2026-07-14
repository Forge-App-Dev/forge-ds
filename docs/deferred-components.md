# Componentes antes adiados — agora entregues

Este arquivo registrava dois componentes conscientemente adiados (OP-053 e
OP-050). Ambos foram **implementados** desde então. O registro fica como
histórico da decisão e do escopo escolhido.

## OP-053 — Chart completo → **entregue** (`components/feedback/Chart.jsx`)

Gráfico com eixos rotulados, gridlines, série única ou múltiplas séries
(`series`), variantes line/bar/area, legenda automática no multi-série, e
acessibilidade: `role="img"` com resumo auto-gerado (ex.: "Peso: de 80 a 78,6 kg
em 5 semanas"), `<title>`/`<desc>` no SVG, guardas para dados vazios/1 ponto e
contêiner com `overflow-x` para telas estreitas.

O `MiniChart` **permanece** para o caso compacto (tendência de um valor sem
eixos/interação); o `Chart` é o caso rico. Evolução futura possível: tooltip
interativo e navegação por teclado ponto-a-ponto — incrementais sobre o Chart,
sem lib externa (decidir por ADR se algum dia uma lib for cogitada).

## OP-050 — ImagePicker → **entregue (camada visual)** (`components/media/ImagePicker.jsx`)

A **camada visual** foi formalizada: estado vazio (placeholder pressável
"Adicionar foto"), estado com imagem (thumbnail circle/square + remover) e
estado de carregando (Skeleton), com alvos ≥44px e rótulos acessíveis.

A **captura/seleção e permissões continuam nativas** (Expo `expo-image-picker`)
— fora do escopo de um componente de view. O app faz a captura e passa a URI
resultante para o `ImagePicker` via `src`; o DS cuida só da apresentação e dos
estados. Isso mantém a fronteira certa: view no DS, plataforma no app.
