import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const TrendingCoins = () => {


    const [stockData,setStockData]=useState([]);

    useEffect(() => {
            const fetchTrendingCoins = async () => {
              const url = 'https://api.coingecko.com/api/v3/search/trending';
        
              try {
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error('Failed to fetch trending data');
                }
        
                const data = await response.json();
        
                // Store the data in the state (only first 20 if there are more)
                const top3Trending = data.coins.slice(0, 3);
                setStockData(top3Trending);
        
                // Log the data to the console
                console.log('Trending Coins:', top3Trending);
              } catch (error) {
                console.error('Error fetching trending coins:', error);
              }
            };
        
            fetchTrendingCoins();
          }, []);
  return (
    <div className='flex flex-col bg-white p-8 rounded-lg gap-6 shadow-lg'>
        <h1 className='font-bold text-xl'>Trending Coins (24h)</h1>
        <div className='flex flex-col gap-5'>

            {stockData.map((item)=>(

                <div className='flex justify-between'>
                <div className='flex gap-1 w-[250px]'>
                    <img src={item?.item.thumb} alt='' className="h-[20px] rounded-full mt-1"></img>
                    <p>{item?.item.name}({item?.item.symbol})</p>
                </div>
                <div className={`flex gap-1 justify-center items-center rounded-lg pr-2 ${item?.item.data.price_change_percentage_24h.usd > 0 ? "bg-[#d6f4ea]" : "bg-red-100"}`}>
                {item?.item.data.price_change_percentage_24h.usd < 0 && 
                    <div className="text-3xl text-red-500"><IoMdArrowDropdown /></div>}
                {item?.item.data.price_change_percentage_24h.usd > 0 &&
                    <div className="text-3xl text-[#14B079]"><IoMdArrowDropup /></div>}
                    <p className={`${item?.item.data.price_change_percentage_24h.usd > 0 ? "text-[#14B079]": "text-red-500"}`}>{parseFloat(item?.item.data.price_change_percentage_24h.usd).toFixed(2)}%</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingCoins