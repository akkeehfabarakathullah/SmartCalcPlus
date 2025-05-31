import React, { useState } from 'react';
import useCalculatorStore from '../store/calculatorStore';
import { Tag, X, Plus, Save } from 'lucide-react';

const CalculationForm: React.FC = () => {
  const {
    currentName,
    currentTags,
    setCurrentName,
    addTag,
    removeTag,
    saveCalculation,
    expression,
    result,
    allTags,
  } = useCalculatorStore();
  
  const [tagInput, setTagInput] = useState('');
  
  const handleSave = () => {
    saveCalculation();
    setTagInput('');
  };
  
  const handleAddTag = () => {
    if (tagInput.trim()) {
      addTag(tagInput.trim());
      setTagInput('');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };
  
  const canSave = expression && result && result !== 'Error';

  return (
    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg p-6 shadow-lg mb-4 w-full border border-white/20 dark:border-slate-700/20">
      <div className="flex items-center mb-4">
        <Save className="text-teal-600 dark:text-teal-400 mr-2" size={20} />
        <h2 className="text-lg font-semibold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 text-transparent bg-clip-text">Save Calculation</h2>
      </div>
      
      <div className="mb-4">
        <label htmlFor="calcName" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
          Name
        </label>
        <input
          id="calcName"
          type="text"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          placeholder="e.g., Monthly Budget"
          className="w-full p-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-200"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
          Tags
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {currentTags.map((tag) => (
            <div 
              key={tag}
              className="flex items-center bg-teal-100/80 dark:bg-teal-800/80 backdrop-blur-sm text-teal-800 dark:text-teal-100 px-2 py-1 rounded-md"
            >
              <Tag size={14} className="mr-1" />
              <span>{tag}</span>
              <button 
                onClick={() => removeTag(tag)}
                className="ml-1 text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-100"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a tag..."
            className="flex-1 p-2 border border-slate-200 dark:border-slate-600 rounded-l-md bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-200"
            list="tag-suggestions"
          />
          <datalist id="tag-suggestions">
            {allTags.map((tag) => (
              <option key={tag} value={tag} />
            ))}
          </datalist>
          <button
            onClick={handleAddTag}
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-3 rounded-r-md flex items-center transition-all duration-200"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
      
      <button
        onClick={handleSave}
        disabled={!canSave}
        className={`w-full py-2 rounded-md transition-all duration-200 ${
          canSave
            ? 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl'
            : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400 cursor-not-allowed'
        }`}
      >
        Save Calculation
      </button>
    </div>
  );
};

export default CalculationForm