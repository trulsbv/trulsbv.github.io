// Dynamic component content loader
// This approach uses Vite's import.meta.glob to dynamically load component files

// Import all component files as raw text using Vite's glob import
const componentModules = import.meta.glob("../../../components/*/*.tsx", {
  as: "raw",
  eager: true,
});

// Extract component names from file paths and create the dictionary
export const componentDictionary: { [key: string]: string } = {};

// Process each imported module
Object.entries(componentModules).forEach(([filePath, content]) => {
  // Extract component name from path (e.g., "components/Button/Button.tsx" -> "Button")
  const pathParts = filePath.split("/");
  const componentFolder = pathParts[pathParts.length - 2]; // Get folder name
  const filename = pathParts[pathParts.length - 1]?.replace(".tsx", "");

  // Only include main component files (not story files)
  if (
    filename &&
    typeof content === "string" &&
    !filePath.includes("/story/")
  ) {
    // Use the folder name as the key (e.g., "Button" for "components/Button/Button.tsx")
    componentDictionary[componentFolder] = content;
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
