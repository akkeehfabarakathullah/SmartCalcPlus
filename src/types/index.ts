export interface Calculation {
  id: string;
  expression: string;
  result: string;
  name: string;
  timestamp: number;
  tags: string[];
  isFavorite: boolean;
}

export type CalculatorMode = 'basic' | 'scientific';
export type ThemeMode = 'light' | 'dark';