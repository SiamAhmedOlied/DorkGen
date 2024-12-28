import React from 'react';
import { Terminal } from 'lucide-react';

interface QueryOutputProps {
  query: string;
}

export default function QueryOutput({ query }: QueryOutputProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-2">
        <Terminal className="w-4 h-4 text-green-500" />
        <span className="text-sm font-medium text-gray-300">Generated Query</span>
      </div>
      <div className="font-mono text-green-500 break-all">
        {query || 'Start building your dork query...'}
      </div>
    </div>
  );
}