import React, { useState, useEffect} from 'react';
import { memo } from 'react';
import { FaExclamationCircle } from "react-icons/fa";


const MetricRow = ({ label, value, additionalInfo }) => (
  <div className="flex justify-between py-3 border-b border-gray-200">
    <span className="text-gray-600">{label}</span>
    <div className="text-right">
      <span className="font-medium">{value}</span>
      {additionalInfo && (
        <span className={`ml-2 ${additionalInfo.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
          {additionalInfo}
        </span>
      )}
    </div>
  </div>
);

const API_KEY = 'CG-8i7mrY75KgkefTUZmy819f8X';

const Fundamentals = memo(() => {
  const [fundamentalsData, setFundamentalsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFundamentals = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false',
          {
            headers: {
              'x-cg-demo-api-key': API_KEY,
              'Accept': 'application/json',
            }
          }
        );
        const data = await response.json();
        setFundamentalsData(data);
      } catch (error) {
        console.error('Error fetching fundamentals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFundamentals();
  }, [API_KEY]);

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>;
  }

  if (!fundamentalsData) {
    return <div>Failed to load fundamentals data</div>;
  }

  const marketData = fundamentalsData.market_data;

  return (
    <div className="mt-8">
      <div className="flex gap-4 mb-4">
        <h2 className="text-xl font-medium">Fundamentals</h2>
        <span className="text-gray-500 cursor-help" title="Key market metrics"><FaExclamationCircle className=' text-xl mt-1 text-black'/></span>
      </div>
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <MetricRow 
            label="Bitcoin Price" 
            value={`$${marketData.current_price.usd.toLocaleString()}`} 
          />
          <MetricRow 
            label="24h Low / 24h High" 
            value={`$${marketData.low_24h.usd.toLocaleString()} / $${marketData.high_24h.usd.toLocaleString()}`} 
          />
          <MetricRow 
            label="7d Low / 7d High" 
            value={`$${marketData.low_24h.usd.toLocaleString()} / $${marketData.high_24h.usd.toLocaleString()}`} 
          />
          <MetricRow 
            label="Trading Volume" 
            value={`$${marketData.total_volume.usd.toLocaleString()}`} 
          />
          <MetricRow 
            label="Market Cap Rank" 
            value={`#${fundamentalsData.market_cap_rank}`} 
          />
        </div>
        <div>
          <MetricRow 
            label="Market Cap" 
            value={`$${marketData.market_cap.usd.toLocaleString()}`} 
          />
          <MetricRow 
            label="Market Cap Dominance" 
            value={`${(marketData.market_cap_dominance || 0).toFixed(2)}%`} 
          />
          <MetricRow 
            label="Volume / Market Cap" 
            value={(marketData.total_volume.usd / marketData.market_cap.usd).toFixed(4)} 
          />
          <MetricRow 
            label="All-Time High" 
            value={`$${marketData.ath.usd.toLocaleString()}`} 
            additionalInfo={`${marketData.ath_change_percentage.usd.toFixed(1)}%`} 
          />
          <MetricRow 
            label="All-Time Low" 
            value={`$${marketData.atl.usd.toLocaleString()}`} 
            additionalInfo={`${marketData.atl_change_percentage.usd.toFixed(1)}%`} 
          />
        </div>
      </div>
    </div>
  );
});

export default Fundamentals;
