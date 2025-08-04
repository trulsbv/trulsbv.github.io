// Dynamic component content loader
// This approach uses Vite's import.meta.glob to dynamically load component files

// Import all component files as raw text using Vite's glob import
const componentModules = import.meta.glob("../../../components/*.tsx", {
  as: "raw",
  eager: true,
});

// Extract component names from file paths and create the dictionary
export const componentDictionary: { [key: string]: string } = {};

// Process each imported module
Object.entries(componentModules).forEach(([filePath, content]) => {
  // Extract filename without .tsx extension
  const filename = filePath.split("/").pop()?.replace(".tsx", "");
  if (filename && typeof content === "string") {
    componentDictionary[filename] = content;
  }
});

// Utility function to get component content by filename
export const getComponentContent = (filename: string): string | null => {
  return componentDictionary[filename] || null;
};

// Get all available component filenames
export const getAvailableComponents = (): string[] => {
  return Object.keys(componentDictionary);
};

// Type for the component dictionary
export type ComponentDictionary = typeof componentDictionary;
