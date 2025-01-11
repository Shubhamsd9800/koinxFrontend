import React from 'react';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from '../components/Navbar';
import CoinInfo from '../components/CoinInfo';
import GetStartedCard from '../components/GetStartedCard';
import TabNavigation from '../components/TabNavigation';
import TrendingCoins from '../components/TrendingCoins';
import Analyst from '../components/Analyst';
import Fundamentals from '../components/Fundamentals';
import KeyEvents from '../components/KeyEvents';
import Performance from '../components/Performance';
import CryptoSection from '../components/CryptoSection';
import Tokenomics from '../components/Tokenomics';
import Team from '../components/Team';
import TrendingCa from '../components/demo/TrendingCa';

const API_KEY = 'CG-8i7mrY75KgkefTUZmy819f8X';

function ErrorFallback({error}) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

const HomePage = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWithAPI = async (url) => {
    try {
      const response = await fetch(url, {
        headers: {
          'x-cg-demo-api-key': API_KEY,
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      setError(error.message);
      throw error;
    }
  };

  const fetchBitcoinData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchWithAPI(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true&include_market_cap=true'
      );
      setBitcoinData(data.bitcoin);
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTrendingCoins = async () => {
    try {
      const data = await fetchWithAPI(
        'https://api.coingecko.com/api/v3/search/trending'
      );
      setTrendingCoins(data.coins);
    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };

  useEffect(() => {
    let pollInterval = 60000;
    const maxInterval = 300000;
    let timeoutId;

    const fetchData = async () => {
      try {
        await Promise.all([fetchBitcoinData(), fetchTrendingCoins()]);
        pollInterval = 60000;
        timeoutId = setTimeout(fetchData, pollInterval);
      } catch (error) {
        pollInterval = Math.min(pollInterval * 2, maxInterval);
        console.log(`Adjusting poll interval to ${pollInterval}ms`);
        timeoutId = setTimeout(fetchData, pollInterval);
      }
    };

    fetchData();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bgColor">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <div className="text-sm text-gray-600 mb-3 lg:mb-4">
          Cryptocurrencies {'>>'} <span className='font-semibold text-base text-black'>Bitcoin</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
          <div className="w-full lg:w-[70%] space-y-3 lg:space-y-6">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {isLoading ? (
                <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
              ) : (
                bitcoinData && <CoinInfo data={bitcoinData} />
              )}
            </ErrorBoundary>
            <TabNavigation />
            <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-sm">
              <Performance />
              <Fundamentals data={bitcoinData} />
            </div>
            <div className='bg-white rounded-2xl shadow-sm p-4 lg:p-6'>
              <KeyEvents />
              <Analyst />
            </div>
            <div className='bg-white rounded-2xl shadow-sm p-4 lg:p-6'>
              <CryptoSection/>
            </div>
            <div className='bg-white rounded-2xl shadow-sm p-4 lg:p-6'>
              <Tokenomics/>
            </div>
            <div className='bg-white rounded-2xl shadow-sm p-4 lg:p-6'>
              <Team />
              <div className=" block lg:hidden">
                <TrendingCa/>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[30%] space-y-3 lg:space-y-6">
            <GetStartedCard />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <TrendingCoins coins={trendingCoins} />
            </ErrorBoundary>
          </div>
        </div>
      </div>

      <div className=' hidden lg:block w-full'>
        <TrendingCa/>
      </div>
      
    </div>
  );
};

export default HomePage;
