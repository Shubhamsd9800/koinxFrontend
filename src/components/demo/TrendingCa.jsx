"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Area, AreaChart, YAxis } from "recharts";

const API_KEY = 'CG-8i7mrY75KgkefTUZmy819f8X';

const CoinCard = ({ coin }) => {
  const priceChangeColor = parseFloat(coin.price_change_percentage_24h) >= 0 
    ? "text-green-500" 
    : "text-red-500";
  
  const chartData = coin.sparkline_in_7d?.price.map((price, index) => ({
    value: price
  })) || [];

  const isPositiveTrend = coin.price_change_percentage_24h >= 0;
  const gradientColor = isPositiveTrend ? "#22c55e" : "#ef4444";
  
  return (
    <Card className="hover:bg-gray-50 cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img 
            src={coin.image} 
            alt={coin.symbol} 
            className="w-6 h-6 rounded-full"
          />
          <span className="font-medium uppercase">{coin.symbol}</span>
          <span className={`text-sm ${priceChangeColor}`}>
            {coin.price_change_percentage_24h >= 0 ? '+' : ''}
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </div>
        <div className="font-semibold">
          ${coin.current_price?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </div>
        <div className="w-full h-16 mt-2">
          <AreaChart
            width={200}
            height={60}
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`gradient-${coin.symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={gradientColor} stopOpacity={0.2} />
                <stop offset="100%" stopColor={gradientColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis hide domain={['dataMin', 'dataMax']} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={gradientColor}
              fill={`url(#gradient-${coin.symbol})`}
              strokeWidth={1.5}
            />
          </AreaChart>
        </div>
      </CardContent>
    </Card>
  );
};

const TrendingCa = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrendingCoins = async () => {
    try {
      setIsLoading(true);
      const trendingResponse = await fetch(
        'https://api.coingecko.com/api/v3/search/trending',
        {
          headers: {
            'x-cg-demo-api-key': API_KEY
          }
        }
      );

      if (!trendingResponse.ok) {
        throw new Error('Failed to fetch trending coins');
      }

      const trendingData = await trendingResponse.json();
      const coinIds = trendingData.coins.map(coin => coin.item.id).join(',');

      const detailedResponse = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h`,
        {
          headers: {
            'x-cg-demo-api-key': API_KEY
          }
        }
      );

      if (!detailedResponse.ok) {
        throw new Error('Failed to fetch coin details');
      }

      const detailedData = await detailedResponse.json();
      setTrendingCoins(detailedData);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
    const interval = setInterval(fetchTrendingCoins, 60000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (isLoading) {
    return <div className="animate-pulse">Loading trending coins...</div>;
  }

  const sections = ["You May Also Like", "Trending Coins"];

  return (
    <div className="bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {sections.map((title) => (
          <div key={title} className="w-full relative">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <Carousel
              opts={{
                align: "start",
                dragFree: true,
                loop: true
              }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4 cursor-grab active:cursor-grabbing">
                {trendingCoins.map((coin) => (
                  <CarouselItem 
                    key={coin.id} 
                    className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transition-transform duration-300 ease-in-out"
                  >
                    <CoinCard coin={coin} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 -translate-x-1/2 md:flex" />
              <CarouselNext className="absolute right-0 translate-x-1/2 md:flex" />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCa;