// import React, { useState } from "react";
// import Card from "../Card/Card";
// import Pagination from "../Pagination/Pagination";
// import "./SectionContain.css";


// const cardsData = [
//   {
//     date: "Jan 27, 2024",
//     title: "Empowering young girls ",
//     description: "SAWA Kenya is a 501(c)(3) nonprofit organization empowering young girls in ...",
//     donations: 900,
//     imageUrl: "/images/schoolkids.png" 
//   },
//   {
//     date: "July 18, 2024",
//     title: "Tsunami in Malika",
//     description: "Emergency! A tsunami has just hit Malika, Tarasudi District. Help our affected brothers and sisters.",
//     donations: 1099,
//     imageUrl: "/images/flood.png" 
//   },
//   {
//     date: "May 24, 2023",
//     title: "Help African Children",
//     description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
//     donations: 748,
//     imageUrl: "/images/African-childerns.png" 
//   },
//   {
//     date: "feb 25, 2024",
//     title: "Sianka Forest Fire",
//     description: "The Sianka forest has caught fire and affected the surrounding community. Let's help buy their health facilities.......",
//     donations: 748,
//     imageUrl: "/images/fIre-in-forest.png" 
//   }, 
  
//   {
//     date: "April 5, 2023",
//     title: "Soporo Earthquake",
//     description: "A magnitude 7.3 earthquake has shaken Saporo sub-district, help them recover with food and medicine.",
//     donations: 769,
//     imageUrl: "/images/earthquake.png" 
//   },
//   {
//     date: "Dec 20, 2023",
//     title: "Lidu Land Drought",
//     description: "The people of Tanah Lidu are currently suffering from drought, help them get clean water. Let's help them",
//     donations: 748,
//     imageUrl: "/images/land-drought.png" 
//   },
//   {
//     date: "April 5, 2023",
//     title: "Soporo Earthquake",
//     description: "A magnitude 7.3 earthquake has shaken Saporo sub-district, help them recover with food and medicine.",
//     donations: 690,
//     imageUrl: "/images/earthquake.png" 
//   },
//   {
//     date: "May 24, 2023",
//     title: "Help African Children",
//     description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
//     donations: 748,
//     imageUrl: "/images/schoolkids.png" 
//   },
//   {
//     date: "May 24, 2023",
//     title: "Help African Children",
//     description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
//     donations: 748,
//     imageUrl: "/images/schoolkids.png" 
//   },
  
//   {
//     date: "May 24, 2023",
//     title: "Help African Children",
//     description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
//     donations: 748,
//     imageUrl: "/images/schoolkids.png" 
//   },
//   {
//     date: "May 24, 2023",
//     title: "Help African Children",
//     description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
//     donations: 748,
//     imageUrl: "/images/schoolkids.png" 
//   },
//   {
//     date: "May 24, 2023",
//     title: "Help African Children",
//     description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
//     donations: 748,
//     imageUrl: "/images/schoolkids.png" 
//   },
//   {
//     date: "May 24, 2023",
//     title: "Help African Children",
//     description: "African children need your help to get proper food and water. Prolonged crisis is a real urgency.",
//     donations: 748,
//     imageUrl: "/images/schoolkids.png" 
//   },
// ];


// const ITEMS_PER_PAGE = 9;

// const SectionContain = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(cardsData.length / ITEMS_PER_PAGE);
//   const currentCards = cardsData.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   return (

//     <div className="section-contain">
//       <div className="card-container">
//         {currentCards.map((card, index) => (
//           <Card
//             key={index}
//             date={card.date}
//             title={card.title}
//             description={card.description}
//             donations={card.donations}
//             imageUrl={card.imageUrl}
            
//           />
//         ))}

//       </div>
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default SectionContain;

import React, { useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import "./SectionContain.css";

const cardsData = [
  {
    id: "1",
    date: "Jan 27, 2024",
    title: "Empowering young girls ",
    description: "In Kenya, many young girls face barriers to education, but there's hope. Our initiative aims to empower these girls through education. Led by passionate educators and community leaders, we provide scholarships, school supplies, and transportation for remote areas. We also offer programs to promote confidence and leadership skills. Despite challenges, we're making a difference. With your support, we can ensure every girl has the opportunity to thrive. Join us in rewriting the story for Kenya's young girls.",
    donations: 900,
    imageUrl: "/images/schoolkids.png"
  },
  {
    id: "2",
    date: "July 18, 4",
    title: "Tsunami in Malika",
    description: "Emergency! A tsunami has just hit Malika, Tarasudi District. Help our affected brothers and sisters.",
    donations: 1099,
    imageUrl: "/images/flood.png"
  },
  {
    id: "2",
    date: "July 18, 4",
    title: "Tsunami in Malika",
    description: "Emergency! A tsunami has just hit Malika, Tarasudi District. Help our affected brothers and sisters.",
    donations: 1099,
    imageUrl: "/images/flood.png"
  },
  // Add more card data as needed
];

const ITEMS_PER_PAGE = 9;

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
        {currentCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
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
