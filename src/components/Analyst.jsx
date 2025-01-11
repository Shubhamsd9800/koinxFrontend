import React, { memo } from 'react'
import { FaExclamationCircle } from "react-icons/fa";

const EstimateBar = memo(({ label, percentage, color }) => (
  <div className="flex items-center gap-4">
    <span className="w-10">{label}</span>
    <div className="flex-1 bg-gray-200 rounded h-2">
      <div 
        className={`h-full ${color} rounded`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <span>{percentage}%</span>
  </div>
));

const PercentageCircle = memo(({ value }) => (
  <div className="relative w-32 h-32">
    <div className="w-full h-full rounded-full bg-green-50 flex items-center justify-center">
      <span className="text-4xl text-green-500 font-semibold">{value}</span>
      <span className="text-2xl text-green-500">%</span>
    </div>
  </div>
));

const Analyst = memo(() => {
  const estimates = {
    buy: 76,
    hold: 8,
    sell: 16
  };
  
  return (
    <div className="mt-8">
      <div className="flex gap-2 items-center mb-4">
        <h3 className="text-lg font-normal">Analyst Estimates</h3>
        <span className="text-gray-500 cursor-help" title="Important events affecting the market">
          <FaExclamationCircle className="mt-[3px]" />
        </span>
      </div>
      <div className="flex items-center gap-8 mt-4">
        <PercentageCircle value={estimates.buy} />
        <div className="flex-1 space-y-2">
          <EstimateBar label="Buy" percentage={estimates.buy} color="bg-green-500" />
          <EstimateBar label="Hold" percentage={estimates.hold} color="bg-gray-300" />
          <EstimateBar label="Sell" percentage={estimates.sell} color="bg-red-500" />
        </div>
      </div>
    </div>
  );
});

export default Analyst;
