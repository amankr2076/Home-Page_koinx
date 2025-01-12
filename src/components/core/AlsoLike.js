import { useEffect, useState } from "react";
import AlsoLikeCarousel from "./AlsoLikeCarousel";

const AlsoLike = () => {

    const text1=`You May Also Like`;
    const text2=`Trendings Coins`;
    const [stockData, setStockData]=useState([]);

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
            const top20Trending = data.coins.slice(0, 20);
            setStockData(top20Trending);
    
            // Log the data to the console
            console.log('Trending Coins:', top20Trending[0].item.data.sparkline);
          } catch (error) {
            console.error('Error fetching trending coins:', error);
          }
        };
    
        fetchTrendingCoins();
      }, []);



  return (
     <div className="bg-white p-16 flex flex-col gap-12">
        <AlsoLikeCarousel stockData={stockData} text={text1}></AlsoLikeCarousel>
        <AlsoLikeCarousel stockData={stockData} text={text2}></AlsoLikeCarousel>
     </div>
  );
};

export default AlsoLike;
