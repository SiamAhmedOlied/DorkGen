import React, { useState, useEffect } from 'react';
import { Copy, Search } from 'lucide-react';
import { DorkParameter, DorkQuery } from '../types';
import QueryOutput from './QueryOutput';
import DorkTypeSelector from './DorkTypeSelector';
import DorkParametersForm from './DorkParametersForm';
import { dorkTypes } from '../data/dorkTypes';
import { createInitialParameters } from '../utils/dorkUtils';

export default function DorkBuilder() {
  const [selectedDorkType, setSelectedDorkType] = useState('custom');
  const [query, setQuery] = useState<DorkQuery>({
    parameters: createInitialParameters(),
    searchTerm: '',
    exactMatch: false,
    useWildcard: false,
  });

  useEffect(() => {
    const dorkType = dorkTypes.find(t => t.id === selectedDorkType);
    if (dorkType) {
      setQuery(prev => ({
        ...prev,
        parameters: createInitialParameters().map(param => ({
          ...param,
          suggestions: dorkType.parameters[param.type as keyof typeof dorkType.parameters] || [],
        })),
      }));
    }
  }, [selectedDorkType]);

  const generateDorkQuery = () => {
    let dorkQuery = query.parameters
      .filter((param) => param.value)
      .map((param) => `${param.type}:${param.value}`)
      .join(' ');

    if (query.searchTerm) {
      const term = query.exactMatch ? `"${query.searchTerm}"` : query.searchTerm;
      dorkQuery = `${dorkQuery} ${term}`;
    }

    if (query.useWildcard) {
      dorkQuery = `${dorkQuery} *`;
    }

    return dorkQuery.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateDorkQuery());
  };

  const searchGoogle = () => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(generateDorkQuery())}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <DorkTypeSelector
        selectedType={selectedDorkType}
        onSelect={setSelectedDorkType}
      />

      <DorkParametersForm
        query={query}
        onChange={setQuery}
        dorkType={selectedDorkType}
      />

      <QueryOutput query={generateDorkQuery()} />

      <div className="flex space-x-4">
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-100"
        >
          <Copy className="w-4 h-4" />
          <span>Copy</span>
        </button>
        <button
          onClick={searchGoogle}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}