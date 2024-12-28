import React from 'react';
import { dorkTypes } from '../data/dorkTypes';

interface DorkTypeSelectorProps {
  selectedType: string;
  onSelect: (typeId: string) => void;
}

export default function DorkTypeSelector({ selectedType, onSelect }: DorkTypeSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {dorkTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className={`p-4 rounded-lg border transition-all ${
            selectedType === type.id
              ? 'bg-blue-600 border-blue-500 text-white'
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-500'
          }`}
        >
          <h3 className="font-semibold mb-2">{type.label}</h3>
          <p className="text-sm opacity-80">{type.description}</p>
        </button>
      ))}
    </div>
  );
}