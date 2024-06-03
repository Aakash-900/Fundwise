
import React, { useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import "./SectionContain.css";


const cardsData = [
  {
    date: "Jan 27, 2024",
    title: "Empowering young girls ",
    description: "SAWA Kenya is a 501(c)(3) nonprofit organization empowering young girls in ...",
    donations: 900,
    imageUrl: "/images/schoolkids.png" // Replace with your actual image path
  },
  {
    date: "July 18, 2024",
    title: "Tsunami in Malika",
    description: "Emergency! A tsunami has just hit Malika, Tarasudi District. Help our affected brothers and sisters.",
    donations: 1099,
    imageUrl: "/images/flood.png" // Replace with your actual image path
  },
  {
    date: "May 24, 2023",
    title: "Help African Children",
    description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
    donations: 748,
    imageUrl: "/images/African-childerns.png" // Replace with your actual image path
  },
  {
    date: "feb 25, 2024",
    title: "Sianka Forest Fire",
    description: "The Sianka forest has caught fire and affected the surrounding community. Let's help buy their health facilities.......",
    donations: 748,
    imageUrl: "/images/fIre-in-forest.png" // Replace with your actual image path
  }, 
  {
    date: "April 5, 2023",
    title: "Soporo Earthquake",
    description: "A magnitude 7.3 earthquake has shaken Saporo sub-district, help them recover with food and medicine.",
    donations: 769,
    imageUrl: "/images/earthquake.png" // Replace with your actual image path
  },
  {
    date: "Dec 20, 2023",
    title: "Lidu Land Drought",
    description: "The people of Tanah Lidu are currently suffering from drought, help them get clean water. Let's help them",
    donations: 748,
    imageUrl: "/images/land-drought.png" // Replace with your actual image path
  },
  {
    date: "April 5, 2023",
    title: "Soporo Earthquake",
    description: "A magnitude 7.3 earthquake has shaken Saporo sub-district, help them recover with food and medicine.",
    donations: 690,
    imageUrl: "/images/earthquake.png" // Replace with your actual image path
  },
  {
    date: "May 24, 2023",
    title: "Help African Children",
    description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
    donations: 748,
    imageUrl: "/images/schoolkids.png" // Replace with your actual image path
  },
  {
    date: "May 24, 2023",
    title: "Help African Children",
    description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
    donations: 748,
    imageUrl: "/images/schoolkids.png" // Replace with your actual image path
  }
];

const ITEMS_PER_PAGE = 6;

const SectionContain = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardsData.length / ITEMS_PER_PAGE);
  const currentCards = cardsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="section-contain">
      <div className="card-container">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            date={card.date}
            title={card.title}
            description={card.description}
            donations={card.donations}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SectionContain;
