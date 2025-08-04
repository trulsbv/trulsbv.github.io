import React from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../routes/types";

const ComponentDetailPage: React.FC = () => {
  const { componentName } = useParams<{ componentName: string }>();

  if (!componentName) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Component Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">
            The component "{componentName}" doesn't exist.
          </p>
          <Link
            to={ROUTES.COMPONENTS}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          >
            Back to Components
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <Link
              to={ROUTES.COMPONENTS}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4"
            >
              ← Back to Components
            </Link>
            <h1 className="text-4xl font-bold mb-4">{componentName}</h1>
            <p className="text-xl text-gray-300">{componentName}</p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Live Demo */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Live Demo</h2>
              <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
                {componentName}
              </div>
            </div>

            {/* Code */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Code</h2>
              <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{componentName}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                To use this component in your project:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Import the component from the components directory</li>
                <li>Add it to your JSX with any required props</li>
                <li>Customize the styling using Tailwind CSS classes</li>
                <li>Test the component in different scenarios</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetailPage;
