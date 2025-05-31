import React from 'react';
import KeyButton from './KeyButton';
import useCalculatorStore from '../store/calculatorStore';
import { Calculator, Sun, Moon, LayoutGrid, X } from 'lucide-react';

const Keypad: React.FC = () => {
  const {
    appendToExpression,
    calculateResult,
    clearExpression,
    deleteLastChar,
    toggleMode,
    toggleTheme,
    mode,
    theme,
  } = useCalculatorStore();

  const handleKeyClick = (value: string) => {
    appendToExpression(value);
  };

  return (
    <div className="w-full">
      {/* Control buttons */}
      <div className="flex justify-between mb-4">
        <button
          onClick={toggleMode}
          className="flex items-center justify-center p-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        >
          {mode === 'basic' ? (
            <Calculator size={20} />
          ) : (
            <LayoutGrid size={20} />
          )}
          <span className="ml-2">{mode === 'basic' ? 'Scientific' : 'Basic'}</span>
        </button>
        
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        >
          {theme === 'light' ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
          <span className="ml-2">{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </div>

      {/* Basic keypad */}
      <div className="grid grid-cols-4 gap-2">
        <KeyButton value="C" onClick={clearExpression} variant="clear" />
        <KeyButton value="(" onClick={() => handleKeyClick('(')} variant="operator" />
        <KeyButton value=")" onClick={() => handleKeyClick(')')} variant="operator" />
        <KeyButton value="÷" onClick={() => handleKeyClick('/')} variant="operator" />
        
        <KeyButton value="7" onClick={() => handleKeyClick('7')} />
        <KeyButton value="8" onClick={() => handleKeyClick('8')} />
        <KeyButton value="9" onClick={() => handleKeyClick('9')} />
        <KeyButton value="×" onClick={() => handleKeyClick('*')} variant="operator" />
        
        <KeyButton value="4" onClick={() => handleKeyClick('4')} />
        <KeyButton value="5" onClick={() => handleKeyClick('5')} />
        <KeyButton value="6" onClick={() => handleKeyClick('6')} />
        <KeyButton value="-" onClick={() => handleKeyClick('-')} variant="operator" />
        
        <KeyButton value="1" onClick={() => handleKeyClick('1')} />
        <KeyButton value="2" onClick={() => handleKeyClick('2')} />
        <KeyButton value="3" onClick={() => handleKeyClick('3')} />
        <KeyButton value="+" onClick={() => handleKeyClick('+')} variant="operator" />
        
        <KeyButton value="0" onClick={() => handleKeyClick('0')} wide />
        <KeyButton value="." onClick={() => handleKeyClick('.')} />
        <KeyButton value="=" onClick={calculateResult} variant="equals" />
      </div>

      {/* Scientific keypad, conditionally rendered */}
      {mode === 'scientific' && (
        <div className="grid grid-cols-4 gap-2 mt-4">
          <KeyButton value="%" onClick={() => handleKeyClick('%')} variant="function" />
          <KeyButton value="√" onClick={() => handleKeyClick('sqrt(')} variant="function" />
          <KeyButton value="^" onClick={() => handleKeyClick('^')} variant="function" />
          <KeyButton value="DEL" onClick={deleteLastChar} variant="function" />
          
          <KeyButton value="sin" onClick={() => handleKeyClick('sin(')} variant="function" />
          <KeyButton value="cos" onClick={() => handleKeyClick('cos(')} variant="function" />
          <KeyButton value="tan" onClick={() => handleKeyClick('tan(')} variant="function" />
          <KeyButton value="π" onClick={() => handleKeyClick('pi')} variant="function" />
          
          <KeyButton value="log" onClick={() => handleKeyClick('log10(')} variant="function" />
          <KeyButton value="ln" onClick={() => handleKeyClick('log(')} variant="function" />
          <KeyButton value="e" onClick={() => handleKeyClick('e')} variant="function" />
          <KeyButton value="!" onClick={() => handleKeyClick('!')} variant="function" />
        </div>
      )}
    </div>
  );
};

export default Keypad;