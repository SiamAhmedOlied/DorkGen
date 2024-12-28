import React from 'react';
import { DorkParameter } from '../types';
import TextInput from './inputs/TextInput';
import DropdownInput from './inputs/DropdownInput';
import { fileTypeSuggestions } from '../data/dorkSuggestions';

interface DorkInputProps {
  parameter: DorkParameter;
  onChange: (value: string) => void;
}

export default function DorkInput({ parameter, onChange }: DorkInputProps) {
  if (parameter.type === 'filetype') {
    return (
      <DropdownInput
        value={parameter.value}
        onChange={onChange}
        label={parameter.label}
        suggestions={fileTypeSuggestions}
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