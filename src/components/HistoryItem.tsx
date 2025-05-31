import React from 'react';
import { Calculation } from '../types';
import useCalculatorStore from '../store/calculatorStore';
import { Star, Trash2, Tag } from 'lucide-react';
import { formatDistanceToNow } from '../utils/dateFormat';

interface HistoryItemProps {
  calculation: Calculation;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ calculation }) => {
  const { toggleFavorite, deleteCalculation, setExpression } = useCalculatorStore();
  
  const handleUseCalculation = () => {
    setExpression(calculation.expression);
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium text-slate-800 dark:text-white line-clamp-1">{calculation.name}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => toggleFavorite(calculation.id)}
            className={`p-1 rounded-full ${
              calculation.isFavorite
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-900/30'
                : 'text-slate-400 hover:text-amber-500 bg-transparent hover:bg-amber-50 dark:hover:bg-amber-900/30'
            }`}
          >
            <Star size={18} fill={calculation.isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button 
            onClick={() => deleteCalculation(calculation.id)}
            className="p-1 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      
      <div onClick={handleUseCalculation} className="cursor-pointer">
        <p className="text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-slate-700/50 p-2 rounded mb-1 overflow-x-auto whitespace-nowrap">
          {calculation.expression}
        </p>
        <p className="text-xl text-slate-800 dark:text-white font-semibold">
          = {calculation.result}
        </p>
      </div>
      
      <div className="mt-3 flex justify-between items-center">
        <div className="flex flex-wrap gap-1">
          {calculation.tags.map((tag) => (
            <div 
              key={tag}
              className="flex items-center text-xs bg-teal-100 dark:bg-teal-800/50 text-teal-800 dark:text-teal-100 px-2 py-0.5 rounded"
            >
              <Tag size={10} className="mr-1" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {formatDistanceToNow(calculation.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default HistoryItem;