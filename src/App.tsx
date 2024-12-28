import { Terminal } from 'lucide-react';
import DorkBuilder from './components/DorkBuilder';

function App() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-gray-100"
      style={{ userSelect: 'none' }} // Disables mouse drag selection
    >
      <header className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Terminal className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold">DorkGen</h1>
          </div>
          <p className="mt-2 text-gray-400">
            Advanced Google Dork Query Generator
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <DorkBuilder />
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">About Google Dorks</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Google Dorks are advanced search queries that use Google's search
              operators to find specific types of information. When used
              ethically, they are powerful tools for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Security research and vulnerability assessment</li>
              <li>Finding specific file types or documents</li>
              <li>Discovering publicly available information</li>
              <li>Website analysis and content discovery</li>
            </ul>
            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-md">
              <h3 className="text-yellow-500 font-medium mb-2">
                ⚠️ Ethical Usage Notice
              </h3>
              <p className="text-gray-300">
                This tool is intended for ethical use only, such as security
                research, penetration testing with permission, or finding public
                information. Always respect privacy, terms of service, and
                applicable laws.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} DorkGen by Siam Ahmed Olied. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
