/**
 * CareWatch — Design Tokens
 *
 * Arquivo de tema centralizado inspirado na estrutura do styled-components theme.
 * Contém todas as cores, fontes e tamanhos de fonte utilizados no aplicativo.
 */

const theme = {
  // ─────────────────────────────────────────────
  // CORES
  // ─────────────────────────────────────────────
  COLORS: {
    /**
     * Azul primário — cor principal do CareWatch.
     * Usada em headers, botões, links e elementos de destaque.
     */
    BLUE: {
      900: '#1E3A5F',   // Azul muito escuro (sombras, textos sobre fundo escuro)
      800: '#1E40AF',   // blue-800 — gradiente de header
      700: '#1D4ED8',   // blue-700 — hover de botões primários
      600: '#2563EB',   // blue-600 — cor primária principal (botões, ícones, links)
      500: '#3B82F6',   // blue-500 — destaques, badges
      200: '#BFDBFE',   // blue-200 — bordas suaves, separadores
      100: '#DBEAFE',   // blue-100 — fundo de ícones, badges claros
      50:  '#EFF6FF',   // blue-50  — fundo de cards informativos
    },

    /**
     * Roxo — cor secundária, usada no gradiente de fundo das telas de auth.
     */
    PURPLE: {
      800: '#5B21B6',   // purple-800 — ponta do gradiente de login/register
      700: '#6D28D9',   // purple-700 — variação de gradiente
    },

    /**
     * Vermelho — alertas críticos, quedas, erros e logout.
     */
    RED: {
      900: '#7F1D1D',   // red-900  — texto de erro forte
      700: '#B91C1C',   // red-700  — hover de elementos de perigo
      600: '#DC2626',   // red-600  — fundo do FallAlert, status "danger"
      200: '#FECACA',   // red-200  — borda do botão de logout
      50:  '#FEF2F2',   // red-50   — fundo hover do botão de logout
    },

    /**
     * Verde — status normal / saudável / conectado.
     */
    GREEN: {
      700: '#15803D',   // green-700 — hover de badge "Conectado"
      600: '#16A34A',   // green-600 — ícones de status normal
      500: '#22C55E',   // green-500 — badge "Conectado"
      50:  '#F0FDF4',   // green-50  — fundo de status normal
    },

    /**
     * Amarelo — alertas intermediários (ex.: quedas, avisos).
     */
    YELLOW: {
      700: '#A16207',   // yellow-700 — hover/texto escuro de aviso
      600: '#CA8A04',   // yellow-600 — valor de stat em status "warning"
      50:  '#FEFCE8',   // yellow-50  — fundo de status warning
    },

    /**
     * Cinza — textos secundários, bordas, fundos neutros.
     */
    GRAY: {
      900: '#111827',   // gray-900 — títulos principais
      700: '#374151',   // gray-700 — texto escuro
      600: '#4B5563',   // gray-600 — texto secundário / labels
      500: '#6B7280',   // gray-500 — texto de apoio / ícones neutros
      400: '#9CA3AF',   // gray-400 — placeholders, ícones desabilitados
      200: '#E5E7EB',   // gray-200 — divisores, bordas leves
      100: '#F3F4F6',   // gray-100 — fundo de inputs
      50:  '#F9FAFB',   // gray-50  — fundo geral de telas autenticadas
    },

    WHITE:  '#FFFFFF',
    BLACK:  '#000000',

    /**
     * Sobreposições com opacidade — usadas em headers e alertas.
     */
    WITH_OPACITY: {
      WHITE_20: 'rgba(255, 255, 255, 0.20)', // Ícones de header / badges de alerta
      WHITE_65: 'rgba(255, 255, 255, 0.65)', // Texto suave sobre fundo colorido
      WHITE_90: 'rgba(255, 255, 255, 0.90)', // Conteúdo quase opaco sobre gradiente
    },

    /**
     * Gradientes prontos para uso direto como background.
     */
    GRADIENTS: {
      PRIMARY:     'linear-gradient(to right, #2563EB, #1E40AF)',          // Header do Dashboard
      AUTH:        'linear-gradient(to bottom right, #2563EB, #1D4ED8, #5B21B6)', // Login / Register
      CARD_HEADER: 'linear-gradient(to bottom right, #2563EB, #7C3AED)',   // Cards de destaque
    },
  },

  // ─────────────────────────────────────────────
  // FONTES
  // ─────────────────────────────────────────────
  FONTS: {
    /**
     * Fonte decorativa — usada no logotipo "CareWatch" e títulos especiais.
     * Mantida como fallback usando Poppins sem quebra visual.
     */
    send_flowers: 'Poppins_600SemiBold',

    /**
     * Fonte principal sem serifa — corpo de texto, labels e inputs.
     */
    Sansation_Regular: 'Poppins_400Regular',

    /**
     * Fonte principal sem serifa — negrito — títulos, valores de métricas e botões.
     */
    Sansation_Bold: 'Poppins_700Bold',
  },

  // ─────────────────────────────────────────────
  // TAMANHOS DE FONTE  (escala Tailwind / rem)
  // ─────────────────────────────────────────────
  FONT_SIZES: {
    /** 10px — informações muito pequenas, timestamps */
    xxs:  10,

    /** 12px — labels auxiliares, hints, textos de apoio (text-xs) */
    xs:   12,

    /** 14px — body secundário, descrições, rótulos de formulário (text-sm) */
    sm:   14,

    /** 16px — body principal, inputs, botões (text-base) */
    base: 16,

    /** 18px — subtítulos de seção, cabeçalhos de card (text-lg) */
    lg:   18,

    /** 20px — títulos de página secundários (text-xl) */
    xl:   20,

    /** 24px — valores principais de métricas, títulos de tela (text-2xl) */
    '2xl': 24,

    /** 30px — título principal "CareWatch" / "Criar Conta" (text-3xl) */
    '3xl': 30,
  },

  // ─────────────────────────────────────────────
  // PESOS DE FONTE
  // ─────────────────────────────────────────────
  FONT_WEIGHTS: {
    normal:    '400', // Corpo de texto, inputs
    medium:    '500', // Labels, badges
    semibold:  '600', // Valores de métricas, títulos de card
    bold:      '700', // Título principal, alertas críticos
  },

  // ─────────────────────────────────────────────
  // ESPAÇAMENTOS / RAIOS DE BORDA
  // ─────────────────────────────────────────────
  BORDER_RADIUS: {
    sm:   6,           // 6px  — inputs, badges
    md:   8,           // 8px  — cards internos, botões
    lg:   12,          // 12px — cards principais, alertas
    xl:   16,          // 16px — modais, overlays
    full: 9999,        // Círculos — avatares, ícones arredondados
  },

  // ─────────────────────────────────────────────
  // SOMBRAS
  // ─────────────────────────────────────────────
  SHADOWS: {
    sm:  '0 1px 2px rgba(0,0,0,0.05)',
    md:  '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    lg:  '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    xl:  '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
    /** Sombra do FallAlert e modais de alerta crítico */
    alert: '0 25px 50px -12px rgba(0,0,0,0.25)',
  },

  // ─────────────────────────────────────────────
  // STATUS DAS MÉTRICAS
  // ─────────────────────────────────────────────
  STATUS: {
    normal: {
      text:       '#16A34A', // green-600
      background: '#F0FDF4', // green-50
      icon:       '#16A34A',
    },
    warning: {
      text:       '#CA8A04', // yellow-600
      background: '#FEFCE8', // yellow-50
      icon:       '#CA8A04',
    },
    danger: {
      text:       '#DC2626', // red-600
      background: '#FEF2F2', // red-50
      icon:       '#DC2626',
    },
  },
} as const;

export default theme;

// ─────────────────────────────────────────────
// Exports nomeados para conveniência
// ─────────────────────────────────────────────
export const { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS, SHADOWS, STATUS } = theme;
