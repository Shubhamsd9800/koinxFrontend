// TrendingCoins.jsx
import React, { useEffect, useState } from 'react'

const TrendingCoins = ({ coins }) => {
  const [trendingCoinsData, setTrendingCoinsData] = useState([]);
  const API_KEY = 'CG-8i7mrY75KgkefTUZmy819f8X';

  useEffect(() => {
    const fetchPriceData = async () => {
      if (!coins || coins.length === 0) return;

      try {
        const coinIds = coins.slice(0, 3).map(coin => coin.item.id).join(',');
        
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true`,
          {
            headers: {
              'x-cg-demo-api-key': API_KEY,
              'Accept': 'application/json',
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch price data');
        }

        const priceData = await response.json();
        
        const enrichedCoins = coins.slice(0, 3).map(coin => ({
          ...coin,
          priceChange: priceData[coin.item.id]?.usd_24h_change
        }));

        setTrendingCoinsData(enrichedCoins);
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    fetchPriceData();
  }, [coins]);

  if (!trendingCoinsData || trendingCoinsData.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow w-full sm:w-auto sm:mx-0 mx-0">
      <h2 className="text-lg font-medium mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4 text-sm">
        {trendingCoinsData.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={coin.item.small} 
                alt={coin.item.name}
                className="w-6 h-6 mr-2"
              />
              <span>{coin.item.name} ({coin.item.symbol})</span>
            </div>
            <div className={`flex items-center ${coin.priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
              <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                {coin.priceChange > 0 ? (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                )}
              </svg>
              {Math.abs(coin.priceChange?.toFixed(2) || 0)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCoins

