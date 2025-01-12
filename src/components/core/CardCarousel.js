import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"

const cardData = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in.",
    icon: icon1,
    bgColor: "bg-blue-50",
    iconBgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    id: 2,
    heading: "Another key event.",
    content:
      "Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in.",
    icon: icon2,
    bgColor: "bg-green-50",
    iconBgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    id: 3,
    heading: "Third key event.",
    content:
      "Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in.Ac phasellus risus est faucibus metus quis.",
    icon:icon1,
    bgColor: "bg-blue-50",
    iconBgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
];

function CardCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
        <div className="flex gap-2">
            <h3 className="text-md font-medium mb-4">Key Events</h3>
            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#73777d" }} className="mt-[8px] text-[12px]" />
        </div>
      
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-4" 
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`min-w-[350px] max-w-[350px] h-[160px] ${card.bgColor} rounded-lg shadow-sm p-4`}
            >
                <div className="flex gap-1 max-h-[40px]">
                    <img src={card.icon} alt="" className="h-24 w-10"></img>
                    <h4 className={`text-sm font-semibold ${card.textColor}`}>
                    {card.heading}
                    </h4>
                </div>
                <div>
                    <p className="text-sm text-gray-600 ml-10">{card.content}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
