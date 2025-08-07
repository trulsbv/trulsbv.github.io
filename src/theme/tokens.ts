// Color tokens grouped by color, then semantic usage aliases

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  blackA: {
    5: "rgba(0, 0, 0, 0.05)",
    6: "rgba(0, 0, 0, 0.06)",
    8: "rgba(0, 0, 0, 0.08)",
    10: "rgba(0, 0, 0, 0.10)",
    12: "rgba(0, 0, 0, 0.12)",
    15: "rgba(0, 0, 0, 0.15)",
    20: "rgba(0, 0, 0, 0.20)",
    25: "rgba(0, 0, 0, 0.25)",
  },
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
  },
  green: {
    600: "#059669",
    700: "#047857",
  },
  red: {
    500: "#EF4444",
  },
  emerald: {
    500: "#10B981",
  },
  amber: {
    500: "#F59E0B",
  },
  violet: {
    500: "#8B5CF6",
  },
  sand: {
    100: "#F4F2F0", // code background
  },
};

// Semantic tokens (usage) aliasing the base palette above
export const semantic = {
  layout: {
    backgroundStart: "#F8FAFC",
    backgroundEnd: "#EEF2F7",
  },
  header: {
    background: "rgba(255, 255, 255, 0.7)",
    border: "rgba(17, 24, 39, 0.08)",
    shadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    text: colors.gray[900],
    link: colors.gray[900],
    linkHoverBg: "rgba(17, 24, 39, 0.06)",
    linkActiveBg: "rgba(17, 24, 39, 0.12)",
    focusRing: "rgba(59, 130, 246, 0.8)",
  },
  footer: {
    background: "rgba(255, 255, 255, 0.7)",
    border: "rgba(17, 24, 39, 0.08)",
    shadow: "0 -2px 12px rgba(0, 0, 0, 0.08)",
    textMuted: "rgba(17, 24, 39, 0.7)",
  },
  hero: {
    title: "#0F172A",
    text: colors.gray[700],
    foreground: colors.gray[900],
  },
  componentCard: {
    background: colors.white,
    border: colors.gray[200],
    title: colors.gray[900],
    description: colors.gray[500],
    hoverBorder: colors.blue[500],
    focusOutline: colors.blue[700],
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    hoverShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  button: {
    primaryBackground: colors.blue[500], // example alias of blue500
    primaryHoverBackground: colors.blue[600],
    primaryDisabledBackground: colors.blue[300], // example alias of blue300
    primaryText: colors.white,
    secondaryBackground: colors.gray[100],
    secondaryHoverBackground: colors.gray[200],
    secondaryDisabledBackground: colors.gray[200],
    secondaryText: colors.gray[700],
    secondaryDisabledText: colors.gray[400],
    focusOutline: colors.blue[700],
  },
  code: {
    containerBackground: colors.sand[100],
    headerBackground: colors.gray[100],
    border: colors.gray[200],
    text: colors.gray[900],
    selectionBackground: "rgba(59, 130, 246, 0.25)",
    copyBackground: colors.blue[500],
    copyHoverBackground: colors.blue[600],
    copyActiveBackground: colors.blue[700],
    copySuccessBackground: colors.green[600],
    copySuccessHoverBackground: colors.green[700],
  },
};

export type Colors = typeof colors;
export type Semantic = typeof semantic;
