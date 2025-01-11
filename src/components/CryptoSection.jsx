
import React from 'react';
import CryptoCard from './CryptoCard';
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";


const CryptoSection = () => {
  const loremText = `Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.`;

  const bottomText = `Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui`;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">About Bitcoin</h2>
        <h3 className=" text-lg font-medium mb-2">What is Bitcoin?</h3>
        <p className="text-gray-700 mb-4">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
        <h3 className=" text-lg font-medium mb-2">Diam praesent massa dapibus</h3>
        <p className="text-gray-700 mb-4">{loremText}</p>
        <p className="text-gray-700">{bottomText}</p>
      </div>

      <div className="">
      <h2 className="text-2xl font-semibold mb-4">Already Holding Bitcoin?</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <CryptoCard
          title="Calculate your Profits"
          image={Card1}
          gradient="bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD]"
        />
        <CryptoCard
          title="Calculate your tax liability"
          image={Card2}
          gradient="bg-gradient-to-r from-[#FF9865] to-[#EF3031]"
        />
      </div>
    </div>
      <p className="mt-4 text-gray-700">{bottomText}</p>
    </div>
  );
};

export default CryptoSection;
