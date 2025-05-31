import React from 'react';
import CalculationForm from './CalculationForm'; // Your form component

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&q=80';

const PageWithBackground: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CalculationForm />
    </div>
  );
};

export default PageWithBackground;

