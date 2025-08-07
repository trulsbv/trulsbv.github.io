// Dynamic example component loader
// This approach uses dynamic imports to load example components

import type { ComponentType } from "react";

// Import all example components
const exampleModules = import.meta.glob("./*.tsx", {
  eager: true,
});

// Extract example names from file paths and create the dictionary
export const exampleDictionary: { [key: string]: ComponentType } = {};

// Process each imported module
Object.entries(exampleModules).forEach(([filePath, module]) => {
  // Extract filename without .tsx extension
  const filename = filePath.split("/").pop()?.replace(".tsx", "");
  if (filename && typeof module === "object" && module !== null) {
    // Get the default export or named export
    const moduleObj = module as Record<string, ComponentType>;
    const component =
      moduleObj.default ||
      moduleObj[filename.replace("Example", "") + "Example"];
    if (component) {
      // Map component name (e.g., "ModalExample" -> "Modal")
      const componentName = filename.replace("Example", "");
      exampleDictionary[componentName] = component;
    }
  }
});

// Utility function to get example component by component name
// This function handles different case formats (Modal, modal, MODAL)
export const getExampleComponent = (
  componentName: string
): ComponentType | null => {
  // Try exact match first
  if (exampleDictionary[componentName]) {
    return exampleDictionary[componentName];
  }

  // Try case-insensitive match
  const normalizedName = componentName.toLowerCase();
  for (const [key, component] of Object.entries(exampleDictionary)) {
    if (key.toLowerCase() === normalizedName) {
      return component;
    }
  }

  return null;
};

// Get all available example component names
export const getAvailableExamples = (): string[] => {
  return Object.keys(exampleDictionary);
};

// Type for the example dictionary
export type ExampleDictionary = typeof exampleDictionary; 