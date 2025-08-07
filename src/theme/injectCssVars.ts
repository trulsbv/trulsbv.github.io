import { semantic, colors } from "./tokens";

function setVar(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

export function injectCssVars(): void {
  // Base palette
  setVar("--white", colors.white);
  setVar("--black", colors.black);
  setVar("--gray-50", colors.gray[50]);
  setVar("--gray-100", colors.gray[100]);
  setVar("--gray-200", colors.gray[200]);
  setVar("--gray-300", colors.gray[300]);
  setVar("--gray-400", colors.gray[400]);
  setVar("--gray-500", colors.gray[500]);
  setVar("--gray-600", colors.gray[600]);
  setVar("--gray-700", colors.gray[700]);
  setVar("--gray-800", colors.gray[800]);
  setVar("--gray-900", colors.gray[900]);
  setVar("--blue-300", colors.blue[300]);
  setVar("--blue-500", colors.blue[500]);
  setVar("--blue-600", colors.blue[600]);
  setVar("--blue-700", colors.blue[700]);
  setVar("--green-600", colors.green[600]);
  setVar("--green-700", colors.green[700]);
  setVar("--sand-100", colors.sand[100]);

  // Semantic defaults
  setVar("--foreground", semantic.hero.foreground);
  setVar("--text-foreground", "#333");
  setVar("--muted-foreground", semantic.hero.text);
  setVar("--accent", semantic.button.primaryBackground);
  setVar("--accent-hover", semantic.button.primaryHoverBackground);
  setVar("--accent-active", colors.blue[700]);
  setVar("--accent-foreground", colors.white);
  setVar("--success", colors.green[600]);
  setVar("--success-hover", colors.green[700]);
  setVar("--focus-ring", "rgba(59, 130, 246, 0.6)");
  setVar("--selection-bg", semantic.code.selectionBackground);
  setVar("--code-container-bg", semantic.code.containerBackground);
  setVar("--code-header-bg", colors.gray[100]);
  setVar("--code-border", colors.gray[200]);
}
