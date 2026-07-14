# Componentes adiados (deferred)

Registro curto de componentes pedidos na auditoria que foram **conscientemente adiados**, com o motivo e o caminho de evolução. Adiar é uma decisão de projeto, não um esquecimento: o lote de produto/dados entregou os componentes de custo/risco baixo e deixou estes dois para depois, por serem grandes e/ou dependentes de APIs nativas (RN/Expo) que o DS ainda não formaliza.

## OP-053 — Chart completo (eixos, grid, tooltip, múltiplas séries)

**Por que adiado:** um gráfico "de verdade" (eixos rotulados, gridlines, tooltip interativo, várias séries, legenda, zoom) é grande e tem forte superfície de acessibilidade (SC 1.4.11 de séries, navegação por teclado dos pontos, `<title>/<desc>`, alternativa textual). Entregar isso bem é um épico próprio; entregar mal cria um componente que todo mundo evita.

**O que já existe:** `MiniChart` (line/bar/area) cobre o caso dominante do app — tendência compacta de um valor no tempo (peso, volume), sem eixos nem interação.

**Caminho:** evoluir a partir do `MiniChart` incrementalmente (adicionar eixos/labels opcionais, depois tooltip, depois multi-série) **antes** de considerar uma lib externa. Só adotar uma lib de charting se o custo de acessibilidade/token-first de reimplementar superar o de embrulhar uma lib — e, nesse caso, via um wrapper token-first que esconda a lib atrás da API do DS. Decidir por ADR quando o caso concreto chegar.

## OP-050 — Upload / ImagePicker (foto de refeição, avatar)

**Por que adiado:** escolher/capturar imagem é intrinsecamente **nativo** — depende de permissões de câmera/galeria e de APIs do Expo (`expo-image-picker`), fora do que um componente de view token-first resolve. Um "ImagePicker" no DS seria em boa parte fachada sobre plataforma, com fluxo de permissão, estados de carregando/erro e recorte que variam por SO.

**Caminho:** usar o **ImagePicker nativo do Expo** para a captura/seleção e permissões; o DS entra só na camada visual reutilizável em volta (botão/placeholder de "adicionar foto", thumbnail, estado de envio/erro) — composta de primitivos já existentes (`Button`, `EmptyState`, `Spinner`, `InlineAlert`). Formalizar esse invólucro visual como componente só quando houver dois consumidores reais, evitando abstrair cedo demais uma superfície que é 80% plataforma.
