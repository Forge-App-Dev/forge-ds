# Forge Design System — Arquitetura de Tokens (fonte única DTCG)

**Status:** Especificação aprovada para implementação · **Data:** 2026-07-14
**Autor:** Design Tokens Architect (persona) · **OP:** 001, 004, 084, 085, 087, 095, 098, 099, 101
**Decisão-mãe:** ver `decisions/ADR-0040-arquitetura-de-tokens.md`

Este documento é a **especificação de implementação**. Não é o `tokens.json` final — é o
contrato que o engenheiro segue para escrever `tokens/tokens.json` + `scripts/build-tokens.mjs`.
Objetivo inegociável (OP-001): **o gerador deve emitir exatamente os `tokens/*.css` atuais**
(mesmos nomes `--forge-*`, mesmos valores). Nada de comportamento visual pode mudar na
primeira entrega; a mudança é só de *fonte de verdade* (JSON passa a ser a origem; CSS/JS
viram artefatos gerados).

---

## 1. Princípios

1. **Fidelidade acima de elegância teórica.** As escalas (gray, tipo, espaço) são ancoradas
   nos valores *já embarcados* — não "arredondadas" para uma grade ideal. Uma escala matematicamente
   perfeita que mudasse `#161E2E` para `#151E2E` está errada: quebraria a paridade DS↔app. Onde a
   escala teórica e o valor real divergem, vence o valor real; a divergência é documentada.
2. **3 camadas, com a 3ª sob demanda.** Primitivo → Semântico → Componente. A camada de
   componente só existe onde ≥2 consumidores divergem (OP-004 rec. b). Hoje ela é mínima.
3. **Um namespace só: `--forge-*`** (OP-096). Todo CSS var gerado é prefixado. Os nomes curtos
   legados (`--radius-card`, `--space-card`, `--surface-card`…) continuam sendo emitidos **como
   alias reverso** enquanto os consumidores migram — o gerador os produz a partir de um bloco
   `aliases` explícito no JSON, nunca à mão.
4. **Formato W3C DTCG** (OP-101): todo token é `{ "$value", "$type", "$description" }`. Grupos
   carregam `$type` herdado. Referências entre tokens usam a sintaxe de chaves `{grupo.token}`.
5. **Tema = troca da camada semântica, nunca da primitiva.** Primitivos são absolutos e
   theme-agnostic. `.forge-theme-light` só reaponta referências semânticas (OP-098).
6. **px = dp = pt** (OP-095). Toda dimensão é um número único; a unidade é decisão de *plataforma*
   no gerador (web→`px`, Android→`dp`, iOS→`pt`). Não há modo "compacto"; uma densidade só.

---

## 2. Estrutura de camadas

```
tokens/tokens.json
├─ primitive/           camada 1 — valores absolutos, sem intenção, sem tema
│   ├─ color            famílias brand (red, blue, violet, emerald, amber, …)
│   ├─ graphite         neutro FRIO (grafite azulado) — superfícies/bordas do tema dark
│   ├─ stone            neutro QUENTE — superfícies/bordas do tema light (sibling)
│   ├─ gray             neutro quase-puro — TEXTO dos dois temas
│   ├─ overlay          pretos com alpha (scrims)
│   ├─ dimension        escala de espaço, raios, tamanhos, larguras, ícones
│   ├─ fontFamily / fontWeight / fontSize / lineHeight / letterSpacing
│   ├─ duration / cubicBezier
│   └─ number           opacidades, z-index, breakpoints
│
├─ semantic/            camada 2 — intenção, com tema (base=dark, +light override)
│   ├─ surface  text  border  action  feedback  scrim  focus
│   ├─ category (paleta atribuível)  ·  macro (identidade fixa)
│   └─ elevation (nível 0/1/2 por cor, ver OP-089)
│
├─ component/           camada 3 — só onde há divergência real (mínima hoje)
│   ├─ button  ·  input  ·  card  ·  panel  ·  chip  ·  control (alturas)
│
└─ aliases/             nomes curtos legados → semântico/primitivo (compat, OP-097)
```

**Regra de consumo:** componentes de UI consomem **apenas** `semantic/` e `component/`.
Nunca `primitive/` direto. Primitivo é matéria-prima do sistema de tokens, não vocabulário de tela.

---

## 3. Camada 1 — Primitivos

### 3.1 Neutros — a decisão-chave (OP-084)

Forge tem **três** famílias neutras distintas, e isso é intencional (padrão Radix: `gray`+`slate`+`sage`
coexistem). Forçar um único ramp quebraria a fidelidade (as superfícies dark são azuladas; o texto é
quase-puro; o tema light é quente). Portanto:

#### `graphite` — neutro frio (hue ≈ 222°): superfícies e bordas do tema **dark**

Ancorado exatamente nos grafites embarcados (700–950 + `panel`); 50–600 interpolados mantendo a matiz.

| step | hex | origem | uso semântico (dark) |
|------|-----|--------|----------------------|
| `graphite.50`  | `#EEF1F6` | interpolado | — (disponível) |
| `graphite.100` | `#DDE3ED` | interpolado | — |
| `graphite.200` | `#BCC6D8` | interpolado | — |
| `graphite.300` | `#94A2BC` | interpolado | — |
| `graphite.400` | `#6C7C9A` | interpolado | — |
| `graphite.500` | `#4C5B77` | interpolado | — |
| `graphite.600` | `#3A475E` | interpolado | — |
| `graphite.700` | `#2E3A4D` | **shipped** | `border.input` |
| `graphite.800` | `#2A3344` | **shipped** | `border.default` |
| `graphite.850` | `#1B2536` | **shipped** | `surface.raised`, `border.divider` |
| `graphite.900` | `#161E2E` | **shipped** | `surface.default` |
| `graphite.950` | `#0B0F19` | **shipped** | `surface.canvas` (bg) |
| `graphite.panel` | `#121215` | **shipped** | `surface.panel` (near-black, mais neutro de propósito) |

> Nota de escala: o ramp é **denso no extremo escuro** (700/800/850/900/950 + panel) porque é ali que
> vive toda a hierarquia de profundidade do dark theme (OP-089). Os steps claros existem só para
> completude futura. `graphite.panel` fica *entre* 900 e 950 em luminância mas com matiz quase-neutra
> (não azulada) — por isso recebe nome próprio em vez de `graphite.925`.

#### `stone` — neutro quente: superfícies e bordas do tema **light** (sibling "Fuel")

Ancorado exatamente nas superfícies claras embarcadas (0–300); 400–900 interpolados.

| step | hex | origem | uso semântico (light) |
|------|-----|--------|----------------------|
| `stone.0`   | `#FFFFFF` | **shipped** | `surface.default`, `surface.panel` |
| `stone.50`  | `#F7F6F4` | **shipped** | `surface.canvas` (bg) |
| `stone.100` | `#F0EFEC` | **shipped** | `surface.raised` |
| `stone.150` | `#EAE8E3` | **shipped** | `border.divider` |
| `stone.200` | `#E4E2DD` | **shipped** | `border.default` |
| `stone.300` | `#DAD7D0` | **shipped** | `border.input` |
| `stone.400` | `#B8B4AB` | interpolado | — |
| `stone.500` | `#948F84` | interpolado | — |
| `stone.600` | `#6F6A5F` | interpolado | — |
| `stone.700` | `#514D45` | interpolado | — |
| `stone.800` | `#34322C` | interpolado | — |
| `stone.900` | `#1F1E1A` | interpolado | — |

#### `gray` — neutro quase-puro (faint cool): **texto dos dois temas**

Elegância do modelo: o tema **dark lê o extremo claro** do ramp (texto claro sobre fundo escuro);
o tema **light lê o extremo escuro** (texto escuro sobre fundo claro). É o mesmo ramp, ancorado em
ambos os conjuntos de valores embarcados. Todos os anchors verificados monotônicos por luminância.

| step | hex | origem | uso semântico |
|------|-----|--------|---------------|
| `gray.50`  | `#F0F0F2` | **shipped** | dark `text.primary` |
| `gray.100` | `#D8D8DC` | interpolado | — |
| `gray.200` | `#BFBFC5` | interpolado | — |
| `gray.300` | `#A8A8AF` | interpolado | — |
| `gray.400` | `#9A9AA2` | **shipped** | dark `text.secondary` |
| `gray.450` | `#9898A0` | **shipped** | dark `text.tertiary` |
| `gray.500` | `#8C8C94` | **shipped** | dark `text.quaternary` |
| `gray.550` | `#87898F` | **shipped** | light `text.disabled` (decorativo, ~3:1) |
| `gray.600` | `#6C6C74` | **shipped** | dark `text.disabled` (decorativo, ~3:1) |
| `gray.650` | `#696B71` | **shipped** | light `text.quaternary` |
| `gray.700` | `#5F6167` | **shipped** | light `text.tertiary` |
| `gray.750` | `#5C5E66` | **shipped** | light `text.secondary` |
| `gray.800` | `#3A3B40` | interpolado | — |
| `gray.900` | `#1B1D22` | **shipped** | light `text.primary` |
| `gray.950` | `#0E0F12` | interpolado | — |

> Os half-steps (450/550/650/750) existem porque o dark e o light empilham cinco níveis de texto
> cada, e alguns caem muito próximos em luminância (ex.: 56.5 vs 54.5). Preferimos fidelidade a
> snapar para uma grade de 100 em 100 (que mudaria a cor do texto embarcado). Documentado, aceito.

### 3.2 Cores brand / categoria / macro

Os valores atuais são, na prática, a paleta Tailwind. Modelamos por família e step para dar
significado; só os steps em uso são definidos agora (o ramp completo por família fica para depois).

```jsonc
"color": {
  "red":     { "500": { "$value": "#EF4444", "$type": "color", "$description": "Vermelho de marca Forge. Base do accent do tema dark e da categoria 1." } },
  "coral":   { "400": { "$value": "#e36a5a", "$type": "color", "$description": "Coral quente. Base de feedback.danger e da tendência negativa no dark." },
               "600": { "$value": "#c94b3b", "$type": "color", "$description": "Coral escuro. Tendência negativa no tema light (maior contraste sobre fundo claro)." } },
  "emerald": { "400": { "$value": "#34D399", "$type": "color" },
               "500": { "$value": "#10B981", "$type": "color", "$description": "Verde Forge. success, nutrition (Fuel) e accent do tema light." } },
  "amber":   { "400": { "$value": "#FBBF24", "$type": "color" },
               "500": { "$value": "#F59E0B", "$type": "color", "$description": "Âmbar. feedback.warning e categoria 5." } },
  "blue":    { "600": { "$value": "#2563EB", "$type": "color" } },
  "violet":  { "400": { "$value": "#A78BFA", "$type": "color" }, "500": { "$value": "#8B5CF6", "$type": "color" } },
  "pink":    { "400": { "$value": "#F472B6", "$type": "color" }, "500": { "$value": "#EC4899", "$type": "color" } },
  "sky":     { "400": { "$value": "#38BDF8", "$type": "color" } },
  "orange":  { "400": { "$value": "#FB923C", "$type": "color" } },
  "lime":    { "500": { "$value": "#84CC16", "$type": "color" } },
  "cyan":    { "400": { "$value": "#22D3EE", "$type": "color" } },
  "indigo":  { "400": { "$value": "#818CF8", "$type": "color" } },
  "white":   { "$value": "#FFFFFF", "$type": "color" },
  "google-text": { "$value": "#1a1a1a", "$type": "color", "$description": "Texto do botão 'Continuar com Google' — marca terceira, não temável (OP-020)." }
}
```

Cores macro (identidade fixa da família, **nunca** mudam nem por tema — OP-102):

```jsonc
"macro": {
  "protein": { "$value": "#E5645E", "$type": "color", "$description": "Proteína. Cor fixa de identidade — não temável, não reatribuível." },
  "carb":    { "$value": "#E0A23B", "$type": "color" },
  "fat":     { "$value": "#4C9BD6", "$type": "color" }
}
```

### 3.3 Overlay (scrims)

```jsonc
"overlay": {
  "scrim-dark":  { "$value": "rgba(10, 10, 12, 0.82)", "$type": "color", "$description": "Scrim padrão do tema dark (Panel/FullScreen)." },
  "scrim-heavy-dark": { "$value": "rgba(0, 0, 0, 0.94)", "$type": "color", "$description": "Scrim pesado do dark (VideoModal)." },
  "scrim-light": { "$value": "rgba(20, 20, 24, 0.55)", "$type": "color" },
  "scrim-heavy-light": { "$value": "rgba(0, 0, 0, 0.88)", "$type": "color" }
}
```

### 3.4 Dimensão (OP-081/082, px=dp — OP-095)

`$type: "dimension"`. Armazenar como número + unidade `px` no JSON; o gerador troca a unidade por
plataforma. Escala base-2 (OP-081):

```jsonc
"dimension": {
  "space": {
    "0":{"$value":"0px"},"1":{"$value":"2px"},"2":{"$value":"4px"},"3":{"$value":"6px"},
    "4":{"$value":"8px"},"5":{"$value":"10px"},"6":{"$value":"12px"},"8":{"$value":"16px"},
    "10":{"$value":"20px"},"12":{"$value":"24px"},"16":{"$value":"32px"},"20":{"$value":"40px"}
  },
  "radius": { "chip":{"$value":"8px"},"input":{"$value":"10px"},"button":{"$value":"11px"},
              "video":{"$value":"12px"},"card":{"$value":"14px"},"panel":{"$value":"18px"},"pill":{"$value":"999px"} },
  "control": { "sm":{"$value":"36px"},"md":{"$value":"44px"},"lg":{"$value":"46px"} },
  "icon": { "sm":{"$value":"16px"},"md":{"$value":"20px"},"lg":{"$value":"24px"},"xl":{"$value":"30px"} },
  "border-w": { "default":{"$value":"1px"},"strong":{"$value":"1.5px"} },
  "focus": { "ring-w":{"$value":"2px"},"ring-offset":{"$value":"2px"} },
  "layout": { "app-max-width":{"$value":"480px"},"tap-target-min":{"$value":"44px"} }
}
```

Todo o `$type:"dimension"` carrega `$description` com o `$type` herdado do grupo.

### 3.5 Tipografia (OP-085)

```jsonc
"fontFamily": {
  "title": { "$value": ["Barlow Condensed","sans-serif"], "$type": "fontFamily", "$description": "Títulos, logo, números grandes. SEMPRE caixa alta, leve tracking." },
  "body":  { "$value": ["Inter","sans-serif"], "$type": "fontFamily" }
},
"fontWeight": {
  "title-semi":{"$value":600},"title-bold":{"$value":700},"title-extra":{"$value":800},
  "body-regular":{"$value":400},"body-medium":{"$value":500},"body-semi":{"$value":600},
  "body-bold":{"$value":700},"body-extra":{"$value":800}
},
"fontSize": {
  "logo-lg":{"$value":"40px"},"screen-title":{"$value":"34px"},"panel-title":{"$value":"22px"},
  "card-title":{"$value":"16px"},"input":{"$value":"14.5px"},"list-item":{"$value":"14px"},
  "body":{"$value":"13.5px"},"body-sm":{"$value":"13px"},"chip":{"$value":"12.5px"},
  "label":{"$value":"11.5px"},"mini-label":{"$value":"10.5px"}
},
"lineHeight": {
  "logo-lg":{"$value":"44px"},"screen-title":{"$value":"36px"},"panel-title":{"$value":"24px"},
  "card-title":{"$value":"20px"},"input":{"$value":"20px"},"list-item":{"$value":"19px"},
  "body":{"$value":"19px"},"body-sm":{"$value":"18px"},"chip":{"$value":"16px"},
  "label":{"$value":"15px"},"mini-label":{"$value":"14px"}
},
"letterSpacing": { "title":{"$value":"0.5px"},"label":{"$value":"1px"},"eyebrow":{"$value":"2px"} }
```

**Racional da escala (OP-085) — por que 34 / 22 / 16 / 14.5 / …:** não é uma escala modular de
razão fixa; é uma **escala funcional/óptica de duas faixas**:

- **Faixa display (Barlow Condensed): 40 / 34 / 22.** Saltos grandes e deliberados (~1.5×) porque
  display serve hierarquia e "peso de tela", não densidade. Barlow Condensed é estreita, então
  tamanhos altos custam pouca largura — dá para ser generoso. LH ≈ 1.05–1.09 (display quer respiro
  vertical mínimo).
- **Faixa corpo/UI (Inter): 16 / 14.5 / 14 / 13.5 / 13 / 12.5 / 11.5 / 10.5.** Incrementos **pequenos
  (0.5–1px)** de propósito: é uma UI mobile densa (max-width 480), com muitos níveis coexistindo num
  card (título, valor, rótulo, hint). Uma escala modular de 1.2× produziria degraus grandes demais e
  telas "gritando". A diferenciação aqui é de *função* (input vs list-item vs body vs chip vs label),
  não de tamanho dramático. LH ≈ 1.35 no corpo (legibilidade), colapsando para ~1.28 nos rótulos.
- **Meio-pixels (14.5 / 13.5 / 12.5 / 11.5 / 10.5): herança web** (o DS nasceu como React web e o
  browser rasteriza subpixel). **No React Native / Android eles serão arredondados para inteiro**
  (14 / 13 / 12 / 11 / 10) por um *transform de plataforma* no gerador (§7.3) — RN não rasteriza
  meio-pixel de forma confiável e `dp` fracionário é ruído. O `tokens.json` guarda o valor canônico
  web (14.5); a plataforma decide o arredondamento. Fonte única preservada; fidelidade por alvo.

### 3.6 Motion (OP-005)

```jsonc
"duration": {
  "instant":{"$value":"100ms"},"fast":{"$value":"150ms"},"base":{"$value":"300ms"},
  "slow":{"$value":"400ms"},"loop-spin":{"$value":"1000ms"},"loop-pulse":{"$value":"1400ms"}
},
"cubicBezier": {
  "standard":{"$value":"ease"},"linear":{"$value":"linear"},
  "emphasized":{"$value":[0.2,0,0,1],"$type":"cubicBezier"}
}
```

> `ease`/`linear` são keywords CSS; no JSON ficam como string com `$type:"cubicBezier"` e o gerador
> as emite verbatim. `emphasized` é modelado como array DTCG e serializado para `cubic-bezier(...)`.

### 3.7 Number (opacidade, z-index, breakpoints)

```jsonc
"number": {
  "opacity": { "press":{"$value":0.85},"disabled":{"$value":0.5} },
  "z": { "nav":{"$value":10},"overlay":{"$value":50},"fullscreen":{"$value":60},"video":{"$value":70},"top":{"$value":100} },
  "breakpoint": { "phone":{"$value":480},"large":{"$value":600},"xlarge":{"$value":840} }
}
```

---

## 4. Camada 2 — Semânticos (com tema)

### 4.1 Modelo DTCG de tema (base + light override)

DTCG ainda não padroniza "modes". Adotamos o padrão mais simples e sem-dependência: cada token
semântico **temável** tem `$value` = valor do tema **base (dark)** e um bloco
`$extensions["com.forge.theme"].light` com a referência do tema **light**. Tokens **não-temáveis**
têm só `$value`.

```jsonc
"semantic": {
  "surface": {
    "canvas":  { "$value": "{graphite.950}", "$type": "color",
                 "$description": "Fundo raiz do app (bg). USE: background da tela. NÃO: cards.",
                 "$extensions": { "com.forge.theme": { "light": "{stone.50}" } } },
    "default": { "$value": "{graphite.900}", "$type": "color",
                 "$description": "Superfície de card padrão.",
                 "$extensions": { "com.forge.theme": { "light": "{stone.0}" } } },
    "raised":  { "$value": "{graphite.850}", "$type": "color",
                 "$extensions": { "com.forge.theme": { "light": "{stone.100}" } } },
    "panel":   { "$value": "{graphite.panel}", "$type": "color",
                 "$extensions": { "com.forge.theme": { "light": "{stone.0}" } } }
  },
  "text": {
    "primary":    { "$value": "{gray.50}",  "$extensions": { "com.forge.theme": { "light": "{gray.900}" } } },
    "secondary":  { "$value": "{gray.400}", "$extensions": { "com.forge.theme": { "light": "{gray.750}" } } },
    "tertiary":   { "$value": "{gray.450}", "$extensions": { "com.forge.theme": { "light": "{gray.700}" } } },
    "quaternary": { "$value": "{gray.500}", "$extensions": { "com.forge.theme": { "light": "{gray.650}" } } },
    "disabled":   { "$value": "{gray.600}", "$extensions": { "com.forge.theme": { "light": "{gray.550}" } },
                    "$description": "Decorativo / desabilitado (~3:1). NÃO usar em texto informativo." }
  },
  "border": {
    "default": { "$value": "{graphite.800}", "$extensions": { "com.forge.theme": { "light": "{stone.200}" } } },
    "input":   { "$value": "{graphite.700}", "$extensions": { "com.forge.theme": { "light": "{stone.300}" } } },
    "divider": { "$value": "{graphite.850}", "$extensions": { "com.forge.theme": { "light": "{stone.150}" } } },
    "focus":   { "$value": "{semantic.action.accent}" }  /* alias vivo → segue o accent do tema */
  },
  "action": {
    "accent":       { "$value": "{color.red.500}", "$type": "color",
                      "$description": "Cor de ação/marca primária. É O QUE O TEMA TROCA.",
                      "$extensions": { "com.forge.theme": { "light": "{color.emerald.500}" } } },
    "on-accent":    { "$value": "{color.white}" },       /* fixo nos dois temas */
    "on-light":     { "$value": "{graphite.950}" },      /* saída de onColor() — OP-011/015 */
    "on-dark":      { "$value": "{color.white}" }
  },
  "feedback": {
    "success":  { "$value": "{color.emerald.500}" },     /* NÃO temável hoje (mesmo valor nos 2) */
    "warning":  { "$value": "{color.amber.500}" },
    "danger":   { "$value": "{color.coral.400}", "$description": "Destrutivo. Distinto de 'negative'." },
    "negative": { "$value": "{color.coral.400}", "$description": "Tendência negativa (não destrutiva) — OP-129.",
                  "$extensions": { "com.forge.theme": { "light": "{color.coral.600}" } } }
  },
  "scrim": {
    "default": { "$value": "{overlay.scrim-dark}",  "$extensions": { "com.forge.theme": { "light": "{overlay.scrim-light}" } } },
    "heavy":   { "$value": "{overlay.scrim-heavy-dark}", "$extensions": { "com.forge.theme": { "light": "{overlay.scrim-heavy-light}" } } }
  },
  "category": {  /* paleta atribuível, ordem canônica — NÃO temável, NÃO fixa por macro */
    "1":{"$value":"{color.red.500}"},"2":{"$value":"{color.blue.600}"},"3":{"$value":"{color.violet.500}"},
    "4":{"$value":"{color.emerald.500}"},"5":{"$value":"{color.amber.500}"},"6":{"$value":"{color.pink.500}"},
    "ext-1":{"$value":"{color.sky.400}"},"ext-2":{"$value":"{color.emerald.400}"},"ext-3":{"$value":"{color.orange.400}"},
    "ext-4":{"$value":"{color.lime.500}"},"ext-5":{"$value":"{color.pink.400}"},"ext-6":{"$value":"{color.cyan.400}"},
    "ext-7":{"$value":"{color.violet.400}"},"ext-8":{"$value":"{color.amber.400}"},"ext-9":{"$value":"{color.indigo.400}"}
  },
  "brand-google": {
    "bg":   { "$value": "{color.white}" },
    "text": { "$value": "{color.google-text}" }
  }
}
```

> `border.focus` e `action.on-*` são **aliases vivos** (referência a outro token semântico), não
> valores. O gerador os emite como `var(--forge-...)`, preservando o `var(--forge-accent)` atual do
> `--forge-focus-ring`.

### 4.2 Mapa completo: token semântico → primitivo (verificação de output)

Esta tabela é o oráculo do teste do gerador: emitir `:root` e `.forge-theme-light` deve reproduzir
byte-a-byte os valores atuais de `tokens/colors.css`.

| CSS var (`--forge-*`) | Semântico | Primitivo (dark/base) | Primitivo (light) |
|---|---|---|---|
| `--forge-bg` | surface.canvas | graphite.950 `#0B0F19` | stone.50 `#F7F6F4` |
| `--forge-surface` | surface.default | graphite.900 `#161E2E` | stone.0 `#FFFFFF` |
| `--forge-surface-raised` | surface.raised | graphite.850 `#1B2536` | stone.100 `#F0EFEC` |
| `--forge-panel` | surface.panel | graphite.panel `#121215` | stone.0 `#FFFFFF` |
| `--forge-border` | border.default | graphite.800 `#2A3344` | stone.200 `#E4E2DD` |
| `--forge-border-input` | border.input | graphite.700 `#2E3A4D` | stone.300 `#DAD7D0` |
| `--forge-divider` | border.divider | graphite.850 `#1B2536` | stone.150 `#EAE8E3` |
| `--forge-text` | text.primary | gray.50 `#F0F0F2` | gray.900 `#1B1D22` |
| `--forge-text-muted` | text.secondary | gray.400 `#9A9AA2` | gray.750 `#5C5E66` |
| `--forge-text-dim` | text.tertiary | gray.450 `#9898A0` | gray.700 `#5F6167` |
| `--forge-text-faint` | text.quaternary | gray.500 `#8C8C94` | gray.650 `#696B71` |
| `--forge-text-dimmer` | text.disabled | gray.600 `#6C6C74` | gray.550 `#87898F` |
| `--forge-accent` | action.accent | color.red.500 `#EF4444` | color.emerald.500 `#10B981` |
| `--forge-on-accent` | action.on-accent | color.white `#FFFFFF` | (idem) |
| `--forge-on-light` | action.on-light | graphite.950 `#0B0F19` | (idem) |
| `--forge-on-dark` | action.on-dark | color.white `#FFFFFF` | (idem) |
| `--forge-success` | feedback.success | color.emerald.500 `#10B981` | (idem) |
| `--forge-warning` | feedback.warning | color.amber.500 `#F59E0B` | (idem) |
| `--forge-danger` | feedback.danger | color.coral.400 `#e36a5a` | (idem) |
| `--forge-negative` | feedback.negative | color.coral.400 `#e36a5a` | color.coral.600 `#c94b3b` |
| `--forge-nutrition` | feedback.success (alias) | color.emerald.500 `#10B981` | (idem) |
| `--forge-scrim` | scrim.default | overlay.scrim-dark | overlay.scrim-light |
| `--forge-scrim-heavy` | scrim.heavy | overlay.scrim-heavy-dark | overlay.scrim-heavy-light |
| `--forge-focus-ring` | border.focus → action.accent | `var(--forge-accent)` | `var(--forge-accent)` |
| `--forge-macro-protein/carb/fat` | macro.* | fixos | (idem) |
| `--forge-cat-*`, `--forge-cat-ext-*` | category.* | fixos | (idem) |
| `--forge-on-brand-google-bg/text` | brand-google.* | fixos | (idem) |

### 4.3 Elevation (OP-089)

Nível declarado como semântico, sem sombra — profundidade por cor/borda:

```jsonc
"elevation": {
  "0": { "$value": "{semantic.surface.canvas}",  "$description": "Nível 0 — fundo." },
  "1": { "$value": "{semantic.surface.default}",  "$description": "Nível 1 — card." },
  "2": { "$value": "{semantic.surface.raised}",   "$description": "Nível 2 — elemento elevado sobre card." }
}
```

---

## 5. Camada 3 — Componente (mínima)

Só onde ≥2 consumidores divergem hoje. Exemplos concretos que já têm identidade própria:

```jsonc
"component": {
  "button": {
    "radius":     { "$value": "{dimension.radius.button}" },
    "height-sm":  { "$value": "{dimension.control.sm}" },
    "height-md":  { "$value": "{dimension.control.md}" },
    "height-lg":  { "$value": "{dimension.control.lg}" },
    "bg-primary": { "$value": "{semantic.action.accent}" },
    "fg-primary": { "$value": "{semantic.action.on-accent}" }
  },
  "input":  { "radius":{"$value":"{dimension.radius.input}"}, "height":{"$value":"{dimension.control.md}"},
              "border":{"$value":"{semantic.border.input}"}, "border-focus":{"$value":"{semantic.border.focus}"} },
  "card":   { "radius":{"$value":"{dimension.radius.card}"}, "padding":{"$value":"{dimension.space.8}"} },
  "panel":  { "radius":{"$value":"{dimension.radius.panel}"} },
  "chip":   { "radius":{"$value":"{dimension.radius.chip}"} }
}
```

> Regra escrita: **não crie component token especulativo.** Um raio de card = `dimension.radius.card`
> direto no CSS é aceitável até um segundo card querer raio diferente. A camada 3 nasce da divergência,
> não da simetria.

---

## 6. Contrato de tema + validação no build (OP-098)

### 6.1 O contrato (lista fechada)

**PODE trocar por tema** (namespaces temáveis):
`semantic.surface.*`, `semantic.text.*`, `semantic.border.*`, `semantic.action.accent`,
`semantic.scrim.*`, `semantic.feedback.negative`. (`action.on-*`, `feedback.success/warning/danger`
são semânticos mas fixos hoje — permitido, mas não *exigido*, ter override.)

**NUNCA troca** (imutável entre temas):
`primitive.*` inteiro, `semantic.macro.*`, `semantic.category.*`, `semantic.brand-google.*`,
`dimension.*`, `radius`, `fontSize/lineHeight/fontFamily/fontWeight/letterSpacing`, `duration`,
`cubicBezier`, `number.*` (z-index, opacidade, breakpoints).

### 6.2 Validação (o build falha se violado)

`scripts/build-tokens.mjs` roda estas asserções **antes** de emitir; qualquer falha aborta com exit≠0
(pluga em CI — OP-169):

1. **Cobertura de tema.** Todo token em namespace **temável** tem `$value` (base) resolvível **e** o
   gerador consegue produzir seu valor no tema light — seja por `$extensions.com.forge.theme.light`,
   seja porque é alias vivo de outro token que já muda. Faltou o par light de um `surface.*`/`text.*`/
   `border.*` → **erro** "token X sem valor no tema light".
2. **Pureza do override.** Nenhum token em namespace **imutável** declara `com.forge.theme.light`.
   Se alguém puser um override de tema num raio/tamanho/tipo → **erro** "token imutável X não pode ser
   temável".
3. **Referências resolvem.** Toda `{ref}` aponta para um token existente; sem ciclos.
4. **Fidelidade (snapshot).** O CSS emitido é comparado com um snapshot dos `tokens/*.css` atuais
   (fixtures committadas na 1ª entrega). Divergência de valor → **erro** "output divergiu do baseline
   em --forge-X". Este é o guarda-corpo que garante "não quebrei nada".
5. **Contraste (OP-102/015).** Para cada par (text.* sobre surface.*) e macro/category sobre surface,
   calcular razão WCAG; texto informativo exige ≥4.5:1, decorativo ≥3:1. Abaixo do piso → warning
   (não bloqueia, mas reporta) nos dois temas.

Pseudo-código da asserção 1–2:

```js
const THEMEABLE = ["surface","text","border","scrim"];         // + action.accent, feedback.negative
const IMMUTABLE_ROOTS = ["primitive","dimension","duration","cubicBezier","number"];
const IMMUTABLE_SEMANTIC = ["macro","category","brand-google"];

for (const t of allTokens) {
  const light = t.$extensions?.["com.forge.theme"]?.light;
  if (isThemeable(t) && !light && !isLiveAlias(t))
    fail(`${t.path}: token temável sem par no tema light`);
  if (isImmutable(t) && light)
    fail(`${t.path}: token imutável não pode declarar override de tema`);
}
```

---

## 7. Plano do gerador (`scripts/build-tokens.mjs`) — OP-001/099

Node ESM puro (mesmo estilo de `scripts/build-index.mjs`), **zero dependências novas**. ~150 linhas.
Roda via `npm run build:tokens`. Entrada: `tokens/tokens.json`. Saídas:

### 7.1 Alvos de saída

| Saída | Conteúdo | Observação |
|---|---|---|
| `tokens/colors.css` | `:root{}` + `.forge-theme-light{}` de todos os tokens de cor + aliases | header "GENERATED — do not edit" |
| `tokens/typography.css` | `@import` da fonte (static header) + `:root{}` de type | o `@import` Google Fonts é template estático |
| `tokens/spacing.css` | `:root{}` de dimension/number + aliases legados | |
| `tokens/motion.css` | `:root{}` de duration/easing (static footer: keyframes + classes + media query) | keyframes/classes NÃO são tokens → preservados como bloco estático |
| `tokens/base.css` | **não gerado** — utilitários/reset puros, permanece manual | |
| `styles.css` | **não gerado** — só os `@import`, permanece manual | |
| `tokens.d.ts` | tipos TS (OP-099) | ver §7.4 |
| `dist/tokens.platform.json` | saída flat por plataforma (web/android/ios) | opcional 1ª entrega; barato depois |

> **Partes estáticas:** motion.css e typography.css têm conteúdo que não é token (keyframes, classes
> `.forge-anim-*`, `@media reduced-motion`, `@import` de fonte). O gerador guarda esses blocos como
> *templates* (arquivos `scripts/templates/motion.footer.css`, `typography.header.css`) e concatena:
> `header estático + :root gerado + footer estático`. Assim o output continua idêntico.

### 7.2 Pipeline

```
1. parse tokens.json
2. validar (§6.2)  ── falha aborta
3. resolver referências {a.b} → valor final (2 passes: base e light)
4. aplicar platform transforms (§7.3) por alvo
5. serializar cada grupo → bloco :root / .forge-theme-light
6. concatenar com templates estáticos
7. escrever arquivos + tokens.d.ts
8. rodar snapshot diff vs baseline; reportar
```

Nome de CSS var: `--forge-` + caminho semântico achatado com `-`. Regra de compat: os nomes atuais
(`--forge-surface-raised`, `--forge-text-muted`, `--forge-space-8`, `--forge-radius-card`, `--forge-
duration-base`…) são a **saída canônica** — o mapa nome→token vive no JSON como propriedade
`$extensions.com.forge.cssVar` quando o nome não deriva trivialmente do caminho (ex.: `text.secondary`
→ `--forge-text-muted`). Assim garantimos byte-fidelidade sem renomear nada agora.

### 7.3 Platform transforms (OP-095/099)

| Transform | web | android | ios |
|---|---|---|---|
| unidade de dimensão | `px` | número puro (dp) | número puro (pt) |
| meio-pixel de fontSize | mantém `14.5px` | **arredonda p/ 14** | arredonda p/ 14 (avaliar `15`) |
| cor | hex/rgba literal | `#AARRGGBB` ou `Color(...)` | idem |
| duração | `ms` string | Long ms | TimeInterval s |

px=dp=pt: o número é o mesmo; só a unidade/label muda. Sem modo compacto — uma densidade (OP-095).

### 7.4 `tokens.d.ts` (OP-099)

Gerar duas coisas — a união literal dos nomes de CSS var (para lint/autocomplete de `var()`) e um
objeto tipado com os valores (para consumo JS/RN):

```ts
// GENERATED — do not edit. Fonte: tokens/tokens.json
export type ForgeCssVar =
  | "--forge-bg" | "--forge-surface" | "--forge-surface-raised" | "--forge-panel"
  | "--forge-text" | "--forge-text-muted" | "--forge-accent" /* … todos … */;

export interface ForgeTokens {
  color: { accent: string; onAccent: string; success: string; /* … */ };
  surface: { canvas: string; default: string; raised: string; panel: string };
  text: { primary: string; secondary: string; tertiary: string; quaternary: string; disabled: string };
  space: Record<0|1|2|3|4|5|6|8|10|12|16|20, number>;
  radius: { chip:number; input:number; button:number; video:number; card:number; panel:number; pill:number };
  duration: Record<"instant"|"fast"|"base"|"slow"|"loopSpin"|"loopPulse", number>;
  /* … */
}
export declare const tokens: ForgeTokens;           // valores do tema base (dark)
export declare const tokensLight: Partial<ForgeTokens>; // só o que o tema light troca
```

O `src/theme/tokens.js` do forge-app passa a ser **gerado** deste mesmo pipeline (OP-001): o gerador
emite também um `tokens.js` (objeto runtime) que o app importa, e o `.d.ts` o tipa. O fluxo do
`FLUXO_EVOLUCAO_DS.md` ganha o passo: *mudou token → edita `tokens.json` → `npm run build:tokens` →
commit dos artefatos nos dois repos*.

---

## 8. Grid, densidade e decisões documentais

- **Grid (OP-087):** decisão formal — **1 coluna, mobile-first, `app-max-width` 480px centralizado,
  gutter = padding horizontal de tela (`space-screen-h` = 20px). NÃO há grid de 12 colunas.** Layout
  de cards é fluxo vertical + gap (`space-card-gap` = 10px). Breakpoints (480/600/840) são
  **documentais** (OP-088): marcam limiares de "phone / tablet pequeno / foldable aberto", não
  disparam um sistema de colunas. Tablet = mesma coluna centralizada, não reflow multi-coluna.
- **Densidade (OP-095):** `px = dp = pt`. Uma densidade única. **Não existe modo "compacto"** e não
  está no roadmap; se algum dia existir, será um *tema* (troca de escala de espaço/controle), não um
  flag por componente.
- **Elevation (OP-089):** profundidade por cor/borda (surface→raised→panel = níveis 0/1/2). **Nunca
  sombra.** Ver `component`/`elevation` acima.

---

## 9. Ordem de implementação sugerida (para o engenheiro)

1. Criar `tokens/tokens.json` com **primitivos + semânticos + aliases** conforme §3–4 (component §5
   pode entrar magro).
2. Escrever `scripts/build-tokens.mjs` (pipeline §7) + templates estáticos de motion/typography.
3. Committar os `tokens/*.css` atuais como **baseline snapshot** (fixtures) antes de trocar a origem.
4. Rodar `build:tokens`; ajustar até o **snapshot diff = 0** (asserção §6.2.4). Só então os CSS
   passam a ser artefatos gerados.
5. Ligar validações §6.2.1–3 (contrato de tema) e §6.2.5 (contraste, warning).
6. Gerar `tokens.d.ts` + `tokens.js`; apontar o forge-app para o `tokens.js` gerado.
7. Adicionar `npm run build:tokens` ao CI e ao protocolo do `FLUXO_EVOLUCAO_DS.md`.

**Invariante de aceite:** depois do passo 4, `git diff tokens/*.css` = vazio. A fonte mudou; o produto não.
</content>
</invoke>
