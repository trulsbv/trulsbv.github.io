import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/types';

// List of available components
const availableComponents = [
  { name: 'hero', displayName: 'Hero', description: 'Main hero section component' },
  { name: 'ai-banner', displayName: 'AI Banner', description: 'AI-powered banner component' },
  { name: 'component-showcase', displayName: 'Component Showcase', description: 'Interactive component showcase' },
  { name: 'example-component', displayName: 'Example Component', description: 'Basic example component' },
  { name: 'typed-link', displayName: 'Typed Link', description: 'Type-safe navigation link component' },
];

const ComponentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Components</h1>
            <p className="text-xl text-gray-300">
              Explore the reusable components used throughout this application.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableComponents.map((component) => (
              <Link
                key={component.name}
                to={`${ROUTES.COMPONENTS}/${component.name}`}
                className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200 hover:bg-gray-750"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  {component.displayName}
                </h3>
                <p className="text-gray-300 text-sm">
                  {component.description}
                </p>
                <div className="mt-4 text-blue-300 text-sm">
                  View details →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">About These Components</h2>
            <p className="text-gray-300 mb-4">
              These components are built with React and TypeScript, featuring modern design patterns
              and best practices. Each component is fully interactive and can be customized for
              different use cases.
            </p>
            <p className="text-gray-300">
              Click on any component above to see it in action and learn more about its implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage; 