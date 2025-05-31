import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { evaluate } from 'mathjs';
import { Calculation, CalculatorMode, ThemeMode } from '../types';

interface CalculatorState {
  expression: string;
  result: string;
  history: Calculation[];
  currentName: string;
  currentTags: string[];
  mode: CalculatorMode;
  theme: ThemeMode;
  allTags: string[];
  searchQuery: string;
  activeFilter: string | null;
  setExpression: (expression: string) => void;
  appendToExpression: (value: string) => void;
  calculateResult: () => void;
  clearExpression: () => void;
  deleteLastChar: () => void;
  saveCalculation: () => void;
  setCurrentName: (name: string) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  toggleMode: () => void;
  toggleTheme: () => void;
  toggleFavorite: (id: string) => void;
  deleteCalculation: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setActiveFilter: (filter: string | null) => void;
}

const useCalculatorStore = create<CalculatorState>()(
  persist(
    (set, get) => ({
      expression: '',
      result: '',
      history: [],
      currentName: '',
      currentTags: [],
      mode: 'basic',
      theme: 'light',
      allTags: [],
      searchQuery: '',
      activeFilter: null,
      
      setExpression: (expression) => set({ expression }),
      
      appendToExpression: (value) => {
        set((state) => ({
          expression: state.expression + value,
        }));
      },
      
      calculateResult: () => {
        const { expression } = get();
        if (!expression) return;
        
        try {
          const calculatedResult = evaluate(expression).toString();
          set({ result: calculatedResult });
        } catch (error) {
          set({ result: 'Error' });
        }
      },
      
      clearExpression: () => set({ expression: '', result: '' }),
      
      deleteLastChar: () => {
        set((state) => ({
          expression: state.expression.slice(0, -1),
        }));
      },
      
      saveCalculation: () => {
        const { expression, result, currentName, currentTags, history, allTags } = get();
        if (!expression || result === 'Error') return;
        
        const newCalculation: Calculation = {
          id: Date.now().toString(),
          expression,
          result,
          name: currentName || `Calculation ${history.length + 1}`,
          timestamp: Date.now(),
          tags: [...currentTags],
          isFavorite: false,
        };
        
        // Update all tags
        const uniqueTags = Array.from(new Set([...allTags, ...currentTags]));
        
        set({
          history: [newCalculation, ...history],
          currentName: '',
          currentTags: [],
          expression: '',
          result: '',
          allTags: uniqueTags,
        });
      },
      
      setCurrentName: (name) => set({ currentName: name }),
      
      addTag: (tag) => {
        if (!tag) return;
        set((state) => ({
          currentTags: [...state.currentTags, tag],
        }));
      },
      
      removeTag: (tag) => {
        set((state) => ({
          currentTags: state.currentTags.filter((t) => t !== tag),
        }));
      },
      
      toggleMode: () => {
        set((state) => ({
          mode: state.mode === 'basic' ? 'scientific' : 'basic',
        }));
      },
      
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        }));
      },
      
      toggleFavorite: (id) => {
        set((state) => ({
          history: state.history.map((calc) =>
            calc.id === id ? { ...calc, isFavorite: !calc.isFavorite } : calc
          ),
        }));
      },
      
      deleteCalculation: (id) => {
        set((state) => ({
          history: state.history.filter((calc) => calc.id !== id),
        }));
      },
      
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      setActiveFilter: (filter) => set({ activeFilter: filter }),
    }),
    {
      name: 'smartcalc-storage',
    }
  )
);

export default useCalculatorStore;