import React, { useEffect, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p>Something went wrong with the chart:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

const TradingViewWidget = () => {
    const container = useRef();
    const scriptRef = useRef(null);

    useEffect(() => {

        const widgetContainer = document.createElement("div");
        widgetContainer.className = "tradingview-widget-container__widget";
        container.current?.appendChild(widgetContainer);


        const script = document.createElement("script");
        scriptRef.current = script;
        
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        
        script.innerHTML = JSON.stringify({
            "symbols": [
                "BITSTAMP:BTCUSD|1D"
            ],
            "chartOnly": false,
            "width": "100%",
            "height": "400",
            "locale": "en",
            "colorTheme": "light",
            "autosize": true,
            "showVolume": true,
            "hideDateRanges": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "12",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "candlesticks"
        });

        if (container.current) {
            container.current.appendChild(script);
        }

        return () => {
            if (container.current) {
                if (widgetContainer.parentNode === container.current) {
                    container.current.removeChild(widgetContainer);
                }
                if (scriptRef.current && scriptRef.current.parentNode === container.current) {
                    container.current.removeChild(scriptRef.current);
                }
            }
        };
    }, []);

    return <div ref={container} />;
};

const CoinInfo = ({ data }) => {
    if (!data) return null;

    return (
        <div className=" bg-white rounded-lg p-6 shadow">
            <div className="flex items-center space-x-3 mb-6">
                <h1 className="text-2xl font-bold">Bitcoin</h1>
                <span className="text-gray-500">BTC</span>
                <span className="bg-gray-500 text-white px-3 py-1 rounded text-sm">
                    Rank #1
                </span>
            </div>
            <div className="mb-6">
                <div className="text-3xl font-bold">
                    ${data.usd.toLocaleString()}
                </div>
                <div className="text-gray-600">
                    ₹{data.inr.toLocaleString()}
                </div>
                <div className="flex items-center mt-2">
                    <span className={`flex items-center ${data.usd_24h_change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            {data.usd_24h_change > 0 ? (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            )}
                        </svg>
                        {Math.abs(data.usd_24h_change).toFixed(2)}%
                    </span>
                    <span className="text-gray-500 ml-2">(24H)</span>
                </div>
            </div>
            <div className="tradingview-widget-container">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <TradingViewWidget />
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default CoinInfo;
