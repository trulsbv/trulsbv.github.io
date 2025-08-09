// Dynamic example component loader
// Load all exports from co-located `story` files and group by component folder

import type { ComponentType } from "react";

type ExampleEntry = { title: string; Component: ComponentType };

// Import all story modules for all components
const storyModules = import.meta.glob("../../../components/*/story/*.tsx", {
  eager: true,
});

// Dictionary keyed by component folder name (e.g., "Modal") to a list of examples
export const exampleDictionaryByComponent: { [componentName: string]: ExampleEntry[] } = {};

const toTitleCase = (str: string) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

Object.entries(storyModules).forEach(([filePath, module]) => {
  // Extract component folder name from path: components/<Folder>/story/<File>.tsx
  const parts = filePath.split("/");
  const folderIndex = parts.findIndex((p) => p === "components");
  const componentFolder = parts[folderIndex + 1];
  const filename = parts[parts.length - 1]?.replace(".tsx", "");

  if (!componentFolder || !module || typeof module !== "object") return;

  const entries: ExampleEntry[] = exampleDictionaryByComponent[componentFolder] || [];
  const mod = module as Record<string, unknown>;

  // Include default export, if present
  if (typeof mod.default === "function") {
    const title = filename ? toTitleCase(filename.replace(/Example$/i, "")) : "Default";
    entries.push({ title, Component: mod.default as ComponentType });
  }

  // Include all function exports (components)
  Object.entries(mod).forEach(([exportName, value]) => {
    if (exportName === "default") return;
    if (typeof value === "function") {
      const title = toTitleCase(exportName.replace(/Example$/i, ""));
      entries.push({ title, Component: value as ComponentType });
    }
  });

  // Deduplicate by title (in case default equals a named export)
  const seen = new Set<string>();
  exampleDictionaryByComponent[componentFolder] = entries.filter((e) => {
    if (seen.has(e.title)) return false;
    seen.add(e.title);
    return true;
  });
});

// Utility: get all example entries for a component name (case-insensitive)
export const getExampleComponents = (componentName: string): ExampleEntry[] => {
  const exact = exampleDictionaryByComponent[componentName];
  if (exact) return exact;
  const normalized = componentName.toLowerCase();
  const key = Object.keys(exampleDictionaryByComponent).find(
    (k) => k.toLowerCase() === normalized
  );
  return key ? exampleDictionaryByComponent[key] : [];
};

// Back-compat: return the first example if available
export const getExampleComponent = (
  componentName: string
): ComponentType | null => {
  const list = getExampleComponents(componentName);
  return list.length > 0 ? list[0].Component : null;
};

// Get all available example component names
export const getAvailableExamples = (): string[] => {
  return Object.keys(exampleDictionaryByComponent);
};

export type ExampleDictionary = typeof exampleDictionaryByComponent;
