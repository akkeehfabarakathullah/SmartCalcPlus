import React from 'react';

interface KeyButtonProps {
  value: string;
  onClick: () => void;
  variant?: 'default' | 'operator' | 'function' | 'equals' | 'clear';
  wide?: boolean;
}

const KeyButton: React.FC<KeyButtonProps> = ({
  value,
  onClick,
  variant = 'default',
  wide = false,
}) => {
  const baseClasses = "rounded-lg font-medium text-lg md:text-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 select-none backdrop-blur-sm border border-white/10 dark:border-slate-700/10";
  
  const variantClasses = {
    default: "bg-white/80 hover:bg-white/90 text-slate-800 dark:bg-slate-700/80 dark:hover:bg-slate-700/90 dark:text-white",
    operator: "bg-slate-200/80 hover:bg-slate-200/90 text-slate-700 dark:bg-slate-600/80 dark:hover:bg-slate-600/90 dark:text-white",
    function: "bg-teal-100/80 hover:bg-teal-100/90 text-teal-800 dark:bg-teal-800/80 dark:hover:bg-teal-800/90 dark:text-white",
    equals: "bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl",
    clear: "bg-red-100/80 hover:bg-red-100/90 text-red-800 dark:bg-red-800/80 dark:hover:bg-red-800/90 dark:text-white",
  };
  
  const sizeClasses = wide 
    ? "col-span-2 h-14 md:h-16" 
    : "h-14 md:h-16";
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default KeyButton