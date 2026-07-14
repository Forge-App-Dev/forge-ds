# Glossário — Forge DS

OP-180. Termos que confundem por terem história ou parecerem sinônimos. Ordem alfabética.

- **Accent (acento)** — a cor de marca que carrega quase toda a energia visual. Global =
  vermelho `--forge-accent` (`#EF4444`); cada módulo pode ter o seu (Nutrição = verde
  `--forge-nutrition`). **Não confundir com `danger`** (ver abaixo).

- **Aderência (lint de)** — regras em `_adherence.oxlintrc.json` que impõem tokens-only,
  fontes permitidas e contrato de props. "Violar a aderência" = usar hex/px cru, fonte
  proibida ou prop inexistente.

- **Anti-pattern** — prática proibida no sistema (sombra, gradiente, toast, bottom sheet,
  uppercase em Inter, hex cru). Ver `guidelines/anti-patterns.card.html` e ADR-0001/0002.

- **Card (componente `Card`)** — superfície plana (`surface` + hairline + raio 14px, sem
  sombra) com stripe colorida opcional à esquerda. **≠ `.card.html`** (specimen do catálogo).

- **`.card.html` (specimen)** — arquivo estático de demonstração com cabeçalho `@dsCard`
  que alimenta o índice do Pages. É documentação, não componente.

- **Ciclo de vida** — `experimental → stable → deprecated → removed`. Estado de
  maturidade por componente. ADR-0070.

- **Danger** — cor semântica de ação destrutiva (`--forge-danger`, um vermelho **distinto**
  do accent de marca). Regra: destrutivo nunca é um toque só (ver **ConfirmButton**).

- **Deprecated** — estado formal de "marcado para remoção, use o substituto". Sobrevive
  ≥ 1 minor com aviso; some só em major. ADR-0071.

- **Drift** — divergência entre o DS (espelho) e o `forge-app` (origem). Detectado pelos
  `sourceHash` do bundle (OP-014). Ver `docs/ARCHITECTURE.md`.

- **FullScreen** — overlay de tela cheia (header próprio, corpo rolável, footer fixo) para
  **fluxos longos / multi-seção**. Contraste com **Panel**.

- **Macro colors** — trio fixo proteína/carboidrato/gordura (`--forge-macro-*`). **Nunca**
  reutilizados para outra coisa — não são paleta geral.

- **Manifest (`_ds_manifest.json`)** — índice gerado de componentes e previews. Não editar
  à mão. `docs/DS_ARTIFACTS.md`.

- **Módulo (Module)** — uma área funcional do app com accent próprio: **Treino** (vermelho),
  **Nutrição** (verde), **Perfil**. `ModuleHeader`/`ModuleTabBar` são escopados por módulo.

- **Panel** — overlay **central** com scrim escuro (≤440px, ≤80% da viewport), tap-fora
  fecha. É a escolha **default e mais leve** para escolhas/confirmações curtas.
  **Panel ≠ Sheet:** era um "Sheet" inferior, renomeado para painel central em **v1.2.0**.
  Não existe bottom sheet no sistema (anti-pattern).

- **Primitivo** — componente domain-free, white-label-safe (core, typography, layout, forms,
  overlays, navigation, feedback). Oposto da **camada de produto**.

- **Produto (camada)** — componentes que conhecem o domínio Forge e carregam copy
  (`PRCelebration`, `RestTimer`, `SetLogger`). Compõem primitivos, não vivem entre eles.

- **Ring** — o motivo gráfico de assinatura: progresso circular (track + arco de accent).
  Único grafismo do sistema; também é o spinner de loading.

- **Semver (num DS)** — major = quebra de API de componente/token ou breaking visual;
  minor = adição retrocompatível ou deprecação; patch = fix/valor de token. ADR-0071.

- **Stripe** — faixa colorida de 4px na borda esquerda de um card, marcando "pertence a X".
  É um flex child, não overlay absoluto (armadilha conhecida do readme).

- **Token** — variável de design (`--forge-*`) em `tokens/*.css`. Camada mais estável e
  mais protegida. Renomear/remover token = major.
