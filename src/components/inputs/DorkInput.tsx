import React from 'react';
import { DorkParameter } from '../../types';
import TextInput from './TextInput';
import DropdownInput from './DropdownInput';

interface DorkInputProps {
  parameter: DorkParameter;
  onChange: (value: string) => void;
}

export default function DorkInput({ parameter, onChange }: DorkInputProps) {
  // Force text input for specific cases
  const forceTextInput = (
    (parameter.type === 'inurl' && parameter.suggestions?.includes('admin')) || // Vulnerability Finding
    (parameter.type === 'intitle' && parameter.suggestions?.includes('confidential')) // Exposed Data
  );

  // Show dropdown only for filetype or if the parameter has suggestions and isn't forced to text input
  if ((parameter.type === 'filetype' || parameter.suggestions?.length) && !forceTextInput) {
    return (
      <DropdownInput
        value={parameter.value}
        onChange={onChange}
        label={parameter.label}
        suggestions={parameter.suggestions || []}
      />
    );
  }

  return (
    <TextInput
      value={parameter.value}
      onChange={onChange}
      label={parameter.label}
    />
  );
}