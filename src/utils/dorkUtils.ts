import { DorkParameter } from '../types';

export const createInitialParameters = (): DorkParameter[] => [
  { id: 'filetype', label: 'File Type', value: '', type: 'filetype' },
  { id: 'site', label: 'Site', value: '', type: 'site' },
  { id: 'intitle', label: 'Title', value: '', type: 'intitle' },
  { id: 'inurl', label: 'URL', value: '', type: 'inurl' },
];