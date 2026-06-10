# CareWatch — Contexto do Projeto

## O que é

App mobile de monitoramento de saúde para idosos. Exibe métricas de saúde (pressão arterial, frequência cardíaca, quedas) com histórico, alertas e autenticação de cuidadores. Estado atual: **protótipo funcional com dados mockados** — sem backend real, autenticação via AsyncStorage.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Expo ~54 (SDK managed workflow) |
| Runtime | React Native 0.81.5 |
| Linguagem | TypeScript ~5.9 |
| Estilos | styled-components ^6.4 |
| Navegação | React Navigation 7 (bottom tabs, native stack) |
| Validação | Yup ^1.7 |
| Storage | @react-native-async-storage/async-storage |
| Ícones | lucide-react-native |
| Gráficos | react-native-chart-kit + react-native-svg |
| Gradientes | expo-linear-gradient |
| Fontes | @expo-google-fonts/poppins (Poppins 400/600/700) |
| Toast | Utilitário próprio (`src/utils/toast.ts`) |

## Estrutura de arquivos

```
App.tsx                         # Entry: ThemeProvider + SafeAreaProvider + Routes + Toaster
index.ts                        # registerRootComponent (Expo)
src/
  @types/styled.d.ts            # Augmenta DefaultTheme com o tema do projeto
  theme/index.ts                # Tokens centralizados (cores, fontes, tamanhos, bordas)
  navigation/
    index.tsx                   # NavigationContainer + Routes (atualmente UserRoutes)
    app.routes.tsx              # Bottom tabs autenticados: Dashboard, BloodPressure, HeartRate, Falls
    user.routes.tsx             # Bottom tabs de auth: Login, Register
  screens/
    Dashboard/                  # Tela principal com métricas em tempo real
    BloodPressureHistory/       # Histórico de pressão arterial com gráfico
    HeartRateHistory/           # Histórico de frequência cardíaca com gráfico
    FallsHistory/               # Histórico de quedas detectadas
    Login/                      # Autenticação (email + senha)
    Register/                   # Cadastro com validação Yup
    ScreensOverview/            # Tela de prototipagem — lista todas as telas
  components/
    Button/                     # Botão reutilizável
    Card/                       # Card genérico
    FallAlert/                  # Overlay de alerta de queda (animated)
    Input/                      # Campo de texto com estilo padrão
    Label/                      # Rótulo de formulário
    Navigation/                 # Bottom navigation bar customizada
    ProtectedRoute/             # Guarda de rota autenticada
    StatCard/                   # Card de métrica (ícone + valor + label)
    ui/                         # Componentes shadcn/ui — uso WEB apenas
  utils/
    toast.ts                    # Toast cross-platform (sonner no web, Alert/ToastAndroid no native)
    cn.ts                       # Utility classnames (Tailwind/web)
```

## Convenção de plataforma dupla

Cada screen e component que tem comportamento diferente entre native e web mantém dois arquivos:

```
ComponentName/
  index.tsx          # versão web (styled-components sem /native)
  index.native.tsx   # versão React Native (styled-components/native)
  styles.ts          # estilos web
  styles.native.ts   # estilos React Native
```

O Metro bundler resolve automaticamente o `.native.tsx` para iOS/Android e `.tsx` para web.

> **Atenção**: `src/components/ui/` são componentes shadcn/ui exclusivamente para a versão web (usam Tailwind CSS). Não misturar com a camada native.

## Tema (`src/theme/index.ts`)

Todos os valores de design ficam aqui. Acesse via `useTheme()` ou props do styled-components.

```ts
theme.COLORS.BLUE[600]         // cor primária (#2563EB)
theme.COLORS.GRAY[50]          // fundo geral de telas autenticadas
theme.COLORS.RED[600]          // alertas críticos / quedas
theme.FONTS.Sansation_Regular  // Poppins_400Regular
theme.FONTS.Sansation_Bold     // Poppins_700Bold
theme.FONT_SIZES.sm            // 14 (número, sem unidade)
theme.FONT_SIZES['2xl']        // 24
theme.BORDER_RADIUS.lg         // 12
theme.BORDER_RADIUS.full       // 9999
theme.STATUS.normal            // { text, background, icon } verde
theme.STATUS.warning           // amarelo
theme.STATUS.danger            // vermelho
```

## Regras críticas de styled-components/native (v6)

styled-components v6 usa parser CSS estrito. Violações causam erros silenciosos ou crash.

**1. Unidades: sempre `px`, nunca `rem`/`em`**
```ts
// ERRADO
padding: 1rem;
font-size: 0.875rem;

// CERTO
padding: 16px;
font-size: 14px;
```

**2. Interpolações de tema precisam de `px` sufixo**
```ts
// ERRADO — "12" sem unidade quebra o parser
border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};

// CERTO
border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
```

**3. `line-height` deve ser número em px**
```ts
// ERRADO — React Native interpreta como 1.5px (invisível)
line-height: 1.5;

// CERTO
line-height: 21px;
// ou simplesmente omitir
```

**4. `max-width` e CSS shorthand**

`max-width` não existe no React Native. Nos arquivos `.native.ts`, usar `width: 100%` com `align-self: center` ou passar largura calculada.

Shorthand de padding/margin com múltiplos valores (`padding: 24px 16px 28px`) funciona em styled-components/native mas deve ser testado.

## Safe Area (notch / Dynamic Island)

Toda screen que tem header ou conteúdo próximo ao topo deve usar `useSafeAreaInsets`.

**Padrão implementado nos headers:**
```tsx
// index.native.tsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function MinhaScreen() {
  const insets = useSafeAreaInsets();
  return (
    <Screen>
      <PageHeader $topInset={insets.top}>
        ...
      </PageHeader>
    </Screen>
  );
}
```

```ts
// styles.native.ts
export const PageHeader = styled(LinearGradient).attrs(...)<{ $topInset?: number }>`
  padding-top: ${({ $topInset = 0 }) => 24 + $topInset}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 28px;
`;
```

O `SafeAreaProvider` está no `App.tsx` — não é necessário adicionar nas screens individuais.

## Telas com scroll

Quando o conteúdo pode ultrapassar a altura da tela (ex.: Register), usar `ScrollView` com `contentContainerStyle`:

```tsx
<Container>
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: insets.top + 32,
      paddingBottom: insets.bottom + 32,
      paddingHorizontal: 16,
    }}
    keyboardShouldPersistTaps="handled"
  >
    {/* conteúdo */}
  </ScrollView>
</Container>
```

`flexGrow: 1` + `justifyContent: 'center'` garante: centralizado quando cabe, scrollável quando não cabe.

## Validação de formulários (Yup)

Schemas ficam em `schema.ts` dentro da pasta da screen.

```
screens/Register/
  index.tsx     # componente
  schema.ts     # registerSchema + RegisterFormData type
  styles.ts     # estilos
```

**Padrão de uso:**
```tsx
import { ValidationError } from 'yup';
import { registerSchema } from './schema';

const handleSubmit = async () => {
  try {
    const validated = await registerSchema.validate(formData, { abortEarly: true });
    // usar validated.* (tipado e transformado)
  } catch (err) {
    if (err instanceof ValidationError) {
      toast.error(err.message);
    }
  }
};
```

O schema pode usar `.transform()` para normalizar dados (ex.: `braceletSerial` auto-uppercase).

## Autenticação (protótipo)

Sem backend. Dados persistidos via AsyncStorage:

| Chave | Conteúdo |
|-------|---------|
| `users` | `JSON[]` — lista de usuários cadastrados |
| `isAuthenticated` | `'true'` \| ausente |
| `currentUser` | `JSON` — usuário logado |

A navegação entre `UserRoutes` ↔ `AppRoutes` é feita via `navigation.navigate()`. O componente `ProtectedRoute` pode ser usado para guardar rotas autenticadas.

## Navegação

```
NavigationContainer
└── UserRoutes (bottom tabs oculto)
    ├── Login
    └── Register
        └── → MainTabs (AppRoutes após login)

AppRoutes (bottom tabs oculto — tab bar customizada via Navigation component)
├── Dashboard
├── BloodPressure
├── HeartRate
└── Falls
```

A tab bar nativa está com `display: 'none'`. A navegação visual é feita pelo componente `Navigation` customizado.

## Toast

```ts
import { toast } from '../../utils/toast';

toast.success('Mensagem de sucesso');
toast.error('Mensagem de erro');
```

- **Web**: usa `sonner` (Toaster configurado no App.tsx)
- **Android**: `ToastAndroid.show`
- **iOS**: `Alert.alert`

## Comandos

```bash
npm start          # Expo Go / dev server
npm run ios        # simulador iOS
npm run android    # emulador Android
npm run web        # versão web
```
