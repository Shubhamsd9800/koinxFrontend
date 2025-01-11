import React from 'react';

const CryptoCard = ({ title, image, gradient }) => {
  return (
    <div className={`w-full md:w-1/2 p-4 h-[156px] rounded-2xl ${gradient} overflow-hidden`}>
      <div className="flex h-full">
        <div className="w-[124px] h-full rounded-2xl">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">
            {title}
          </h3>
          <button className="bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base font-medium inline-flex items-center gap-1 md:gap-2 hover:bg-opacity-90 transition-all w-fit">
            Check Now
            <svg 
              width="18" 
              height="18" 
              className="md:w-[21px] md:h-[20px]"
              viewBox="0 0 21 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4.66666 9.99996H16.3333M16.3333 9.99996L10.5 4.16663M16.3333 9.99996L10.5 15.8333" 
                stroke="black" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
