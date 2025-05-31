import React, { useRef, useEffect } from 'react';
import useCalculatorStore from '../store/calculatorStore';

const Display: React.FC = () => {
  const { expression, result } = useCalculatorStore();
  const expressionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (expressionRef.current) {
      expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
    }
  }, [expression]);

  return (
    <div className="flex flex-col bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg p-6 shadow-lg mb-4 w-full border border-white/20 dark:border-slate-700/20 transition-all duration-300">
      <div
        ref={expressionRef}
        className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-2 h-10 overflow-x-auto whitespace-nowrap transition-colors duration-300"
      >
        {expression || '0'}
      </div>
      <div className="text-3xl md:text-4xl bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 text-transparent bg-clip-text font-semibold min-h-[40px] transition-colors duration-300">
        {result || ''}
      </div>
    </div>
  );
};

export default Display