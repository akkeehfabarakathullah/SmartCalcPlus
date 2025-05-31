import React, { useEffect } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import CalculationForm from './components/CalculationForm';
import HistoryList from './components/HistoryList';
import useCalculatorStore from './store/calculatorStore';
import { Calculator, History } from 'lucide-react';

function App() {
  const { theme } = useCalculatorStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative"
         style={{ backgroundImage: "url('https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      {/* Overlay to dim background */}
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 z-0" />

      {/* Main content */}
      <div className="relative z-10 text-slate-900 dark:text-white transition-colors duration-200">
        <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <Calculator className="text-teal-600 dark:text-teal-400 mr-2" size={24} />
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 text-transparent bg-clip-text">SmartCalc+</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <Display />
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20 dark:border-slate-700/20">
                <Keypad />
              </div>
              <div className="mt-4">
                <CalculationForm />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20 dark:border-slate-700/20 mb-4">
                <div className="flex items-center mb-4">
                  <History className="text-teal-600 dark:text-teal-400 mr-2" size={20} />
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 text-transparent bg-clip-text">Calculation History</h2>
                </div>
                <HistoryList />
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-auto py-4 text-center text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <p className="text-sm">&copy; {new Date().getFullYear()} SmartCalc+ | An advanced calculator with memory</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
