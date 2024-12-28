export interface DorkType {
  id: string;
  label: string;
  description: string;
  parameters: {
    filetype?: string[];
    site?: string[];
    intitle?: string[];
    inurl?: string[];
  };
}

export const dorkTypes: DorkType[] = [
  {
    id: 'file-finding',
    label: 'File Finding',
    description: 'Search for specific file types across the web',
    parameters: {
      filetype: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'],
    },
  },
  {
    id: 'vulnerability-finding',
    label: 'Vulnerability Finding',
    description: 'Discover potential security vulnerabilities',
    parameters: {
      intitle: ['index of', 'error', 'admin', 'login'],
      inurl: ['admin', 'login', 'config', 'setup'],
    },
  },
  {
    id: 'exposed-data',
    label: 'Exposed Data',
    description: 'Find potentially exposed sensitive information',
    parameters: {
      filetype: ['sql', 'env', 'log', 'backup'],
      intitle: ['confidential', 'private', 'backup'],
    },
  },
  {
    id: 'custom',
    label: 'Custom Search',
    description: 'Build your own custom dork query',
    parameters: {},
  },
];