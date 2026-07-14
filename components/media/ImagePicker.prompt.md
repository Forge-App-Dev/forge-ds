The **visual layer** of a photo picker — the "add photo" placeholder, the selected thumbnail with a remove control, and the loading state. Circular or square, sized to taste, ≥44px targets.

> **Escopo (OP-050):** este componente **não captura nem seleciona** a imagem. A captura/seleção e as permissões são **nativas** e ficam no app (Expo `expo-image-picker`). Ligue o picker nativo ao `onPick`, e passe a URI resultante em `src`. O DS entra só na camada visual reutilizável em volta.

```jsx
{/* Empty — pressable placeholder; onPick opens the native picker */}
<ImagePicker onPick={openExpoPicker} label="Adicionar foto" />

{/* Filled — square thumbnail with a remove button */}
<ImagePicker src={uri} onRemove={() => setUri(null)} shape="square" />

{/* Circular avatar-style picker */}
<ImagePicker src={uri} onRemove={clear} shape="circle" size={72} />

{/* Loading — pulse while the upload runs */}
<ImagePicker loading size={96} />
```

Fluxo típico no app (fora do DS):
```jsx
async function openExpoPicker() {
  const res = await ImagePickerExpo.launchCameraAsync({ /* permissões, recorte */ });
  if (!res.canceled) setUri(res.assets[0].uri);
}
```

## Quando usar

- Anexar uma foto: foto de refeição, foto de progresso, avatar de perfil.
- Onde é preciso um placeholder pressável + thumbnail + remover, com estado de envio.

## Quando NÃO usar

- Exibir uma foto de perfil que o usuário não edita ali → não precisa do placeholder/remover.
- A lógica de captura/permissão em si — isso é nativo (Expo), não do DS.

## Em vez disso use

- Só exibir avatar com fallback de iniciais → **`Avatar`**.
- Placeholder de conteúdo vazio genérico (sem imagem) → **`EmptyState`**.
- Pulse de carregamento isolado → **`Skeleton`** (o ImagePicker já o usa no estado `loading`).

## Acessibilidade

Ver regras transversais + "Botões e pressáveis" e "Ícones" do checklist.

- **Papel / leitor de tela:** placeholder vazio é um `<button>` nativo (anuncia "botão"); botão remover idem. O glifo de câmera é decorativo (`aria-hidden`).
- **Nome acessível:** vazio usa `label` ("Adicionar foto"); remover usa "Remover foto"; a imagem usa `alt` (padrão "Foto selecionada").
- **Foco / alvo:** classe `forge-focusable` em ambos os botões; alvo ≥44px via `--forge-tap-target-min` (o remover tem área de toque de 44px com badge visual menor).
- **Estado:** `loading` renderiza `Skeleton` dentro de `role="status"` "Carregando foto"; respeita reduced-motion (pulse global).
- **Contraste:** ícone/label em `--forge-text-faint` sobre `--forge-surface`; borda tracejada em `--forge-border-input` ≥ 3:1 (SC 1.4.11).
- **Observações:** não depende de cor para transmitir estado — sempre há ícone + rótulo.
