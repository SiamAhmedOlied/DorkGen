export type DorkParameterType = 'filetype' | 'site' | 'intitle' | 'inurl' | 'ext' | 'custom';

export interface DorkParameter {
  id: string;
  label: string;
  value: string;
  type: DorkParameterType;
  suggestions?: string[];
}

export interface DorkQuery {
  parameters: DorkParameter[];
  searchTerm: string;
  exactMatch: boolean;
  useWildcard: boolean;
}