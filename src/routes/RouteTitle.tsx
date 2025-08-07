import { useEffect } from "react";
import { useMatches } from "react-router-dom";

const TITLE_PREFIX = "trulsbv.dev";

type TitleHandle = {
  title?: string;
  getTitle?: (params: Record<string, string>) => string;
};

export const RouteTitle = () => {
  const matches = useMatches();

  useEffect(() => {
    let suffix = "";

    for (let i = matches.length - 1; i >= 0; i--) {
      const handle = (matches[i] as any).handle as TitleHandle | undefined;
      if (!handle) continue;

      if (typeof handle.title === "string" && handle.title.length > 0) {
        suffix = handle.title;
        break;
      }

      if (typeof handle.getTitle === "function") {
        try {
          const computed = handle.getTitle(matches[i].params as Record<string, string>);
          if (computed) {
            suffix = computed;
            break;
          }
        } catch {
          // ignore
        }
      }
    }

    document.title = suffix ? `${TITLE_PREFIX} - ${suffix}` : TITLE_PREFIX;
  }, [matches]);

  return null;
};
