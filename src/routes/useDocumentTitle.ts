import { useEffect } from "react";

const TITLE_PREFIX = "trulsbv.dev";

export function useDocumentTitle(suffix: string): void {
  useEffect(() => {
    if (!suffix) {
      document.title = TITLE_PREFIX;
      return;
    }
    document.title = `${TITLE_PREFIX} - ${suffix}`;
  }, [suffix]);
}
