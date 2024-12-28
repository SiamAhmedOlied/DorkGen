import React from 'react';
import { DorkQuery } from '../types';
import { dorkTypes } from '../data/dorkTypes';
import DorkInput from './inputs/DorkInput';

interface DorkParametersFormProps {
  query: DorkQuery;
  onChange: (query: DorkQuery) => void;
  dorkType: string;
}

export default function DorkParametersForm({ query, onChange, dorkType }: DorkParametersFormProps) {
  const selectedDorkType = dorkTypes.find(t => t.id === dorkType);
  
  const visibleParameters = query.parameters.filter(param => {
    if (dorkType === 'custom') return true;
    return selectedDorkType?.parameters[param.type as keyof typeof selectedDorkType.parameters];
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleParameters.map((param) => (
          <div key={param.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              {param.label}
            </label>
            <DorkInput
              parameter={param}
              onChange={(value) => {
                onChange({
                  ...query,
                  parameters: query.parameters.map((p) =>
                    p.id === param.id ? { ...p, value } : p
                  ),
                });
              }}
            />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Search Term
          </label>
          <input
            type="text"
            value={query.searchTerm}
            onChange={(e) => onChange({ ...query, searchTerm: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
            placeholder="Enter search term"
          />
        </div>

        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={query.exactMatch}
              onChange={(e) => onChange({ ...query, exactMatch: e.target.checked })}
              className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-300">Exact Match</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={query.useWildcard}
              onChange={(e) => onChange({ ...query, useWildcard: e.target.checked })}
              className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-300">Use Wildcard</span>
          </label>
        </div>
      </div>
    </div>
  );
}