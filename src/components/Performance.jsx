import React from 'react';
import { memo } from 'react';
const PriceRange = ({ label, low, high, current }) => {
  const percentage = ((current - low) / (high - low)) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{label} Low</span>
        <span>{label} High</span>
      </div>
      <div className="flex justify-between mb-1">
        <span>${low.toLocaleString()}</span>
        <span>${high.toLocaleString()}</span>
      </div>
      <div className="h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
        <div className="relative">
          <div className="absolute w-3 h-3 bg-black rounded-full -top-0.5"
               style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}>
          </div>
        </div>
      </div>
      <div className="text-center mt-1">
        <span className="text-sm">${current.toLocaleString()}</span>
      </div>
    </div>
  );
};

const Performance = memo(() => {
  return (
    <div className="bg-white p-1 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Performance</h2>
      <PriceRange 
        label="Today's"
        low={46930.22}
        high={49343.83}
        current={48637.83}
      />
      <PriceRange 
        label="52W"
        low={16930.22}
        high={49743.83}
        current={48637.83}
      />
    </div>
  );
});

export default Performance;

