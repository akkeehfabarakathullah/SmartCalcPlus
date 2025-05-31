import React, { useMemo } from 'react';
import useCalculatorStore from '../store/calculatorStore';
import HistoryItem from './HistoryItem';
import { Search, Bookmark, X } from 'lucide-react';

const HistoryList: React.FC = () => {
  const {
    history,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    allTags,
  } = useCalculatorStore();
  
  const filteredHistory = useMemo(() => {
    let filtered = history;
    
    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (calc) =>
          calc.name.toLowerCase().includes(lowerQuery) ||
          calc.expression.toLowerCase().includes(lowerQuery) ||
          calc.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    }
    
    // Filter by active filter (tag or favorites)
    if (activeFilter) {
      if (activeFilter === 'favorites') {
        filtered = filtered.filter((calc) => calc.isFavorite);
      } else {
        filtered = filtered.filter((calc) => calc.tags.includes(activeFilter));
      }
    }
    
    return filtered;
  }, [history, searchQuery, activeFilter]);
  
  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md text-center">
        <p className="text-slate-600 dark:text-slate-300">
          No calculations saved yet. Perform a calculation and save it to see your history.
        </p>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-slate-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search calculations..."
          className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
        />
      </div>
      
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter('favorites')}
          className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
            activeFilter === 'favorites'
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100'
              : 'bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-amber-700 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-amber-800/30 dark:hover:text-amber-200'
          }`}
        >
          <Bookmark size={14} className="mr-1" />
          Favorites
        </button>
        
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
              activeFilter === tag
                ? 'bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100'
                : 'bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-700 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-teal-800/30 dark:hover:text-teal-200'
            }`}
          >
            {tag}
          </button>
        ))}
        
        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            className="flex items-center px-3 py-1.5 rounded-full text-sm bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-200"
          >
            <X size={14} className="mr-1" />
            Clear Filter
          </button>
        )}
      </div>
      
      <div className="space-y-3">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((calc) => (
            <HistoryItem key={calc.id} calculation={calc} />
          ))
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md text-center">
            <p className="text-slate-600 dark:text-slate-300">
              No calculations match your search or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryList;