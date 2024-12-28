import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  suggestions: string[];
}

export default function DropdownInput({ value, onChange, label, suggestions }: DropdownInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full bg-gray-800 border border-gray-700 rounded-md pl-4 pr-10 py-2 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
          <ul className="py-1 max-h-48 overflow-auto">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-gray-300"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}