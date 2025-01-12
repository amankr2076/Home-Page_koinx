import React from 'react';
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"

const About = () => {
    const text1=`Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the
            last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
            7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.`

    const text2=`Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et
            lectus urna et tellus aliquam dictum at. Vivamus dictum facilisis diam ut sed.Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et
            lectus urna et tellus aliquam dictum at. Vivamus dictum facilisis diam ut sed.`

    const text3=`Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
            Integer dignissim augue viverra nulla et quis lobortis phasellus.Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
            Integer dignissim augue viverra nulla et quis lobortis phasellus.`
    
    const text4=`Vivamus dictum facilisis diam ut sed.Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et
            lectus urna et tellus aliquam dictum at. Vivamus dictum facilisis diam ut sed.`

    const text5=`Vivamus dictum facilisis diam ut sed.Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et
            lectus urna et tellus aliquam dictum at. Vivamus dictum facilisis diam ut sed.`
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* About Bitcoin Section */}
      <div className="">
        <h2 className="text-2xl font-bold mb-4">About Bitcoin</h2>

        {/* What is Bitcoin */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">What is Bitcoin?</h3>
          <p className="text-gray-700 font-semibold">{text1}</p>
          <div className='mt-4 border'></div>
        </div>

        {/* Lorem Ipsum Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-700 mb-4 font-semibold">{text2}</p>
          <p className="text-gray-700 mb-4 font-semibold">{text3}</p>
          <p className="text-gray-700 font-semibold">{text4}</p>
          <div className='mt-4 border'></div>
        </div>
      </div>

      {/* Already Holding Bitcoin Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Already Holding Bitcoin?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Card 1 */}
          <div className="bg-custom-gradient1 shadow-md rounded-md p-3 flex flex-col items-start">
                <div className='flex gap-6'>
                    <div>
                        <img src={image1} alt='firstImage' className='h-[100px] w-[130px] rounded-lg'></img>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-white text-xl">Calculate your Profits</h3>
                        <button className="mt-auto bg-white text-black font-semibold px-3 py-1 rounded-md">Check Now →</button>
                    </div>
                </div>
          </div>

          {/* Card 2 */}
          <div className="bg-custom-gradient2 shadow-md rounded-md p-3 flex flex-col items-start">
                <div className='flex gap-6'>
                    <div>
                        <img src={image2} alt='firstImage' className='h-[100px] w-[130px] rounded-lg'></img>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-white text-xl">Calculate your tax liability</h3>
                        <button className="mt-auto bg-white text-black font-semibold px-3 py-1 rounded-md">Check Now →</button>
                    </div>
                </div>
          </div>
        </div>

        <div className='mt-4 border'></div>

        <p className="text-gray-700 mt-6 font-semibold">{text5}</p>
      </div>
    </div>
  );
};

export default About;
