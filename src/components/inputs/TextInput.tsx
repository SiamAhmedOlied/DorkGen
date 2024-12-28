import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export default function TextInput({ value, onChange, label }: TextInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  );
}