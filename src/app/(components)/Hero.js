
// "use client";

// import { useState, useEffect } from 'react';
// import { FaEthereum, FaBitcoin, FaRipple, FaLitecoin, FaDotCircle, FaStar } from 'react-icons/fa';
// import ContactForm from './ContactForm';

// const tokens = [
//   { name: "Binance", icon: <FaBitcoin /> },
//   { name: "OKX", icon: <FaEthereum /> },
//   { name: "KUCOIN", icon: <FaDotCircle /> },
//   { name: "UPBIT", icon: <FaStar /> },
//   { name: "GATE.IO", icon: <FaStar /> },
//   { name: "BITMART", icon: <FaStar /> },
//   { name: "INDODAX", icon: <FaStar /> },
//   { name: "BITFINEX", icon: <FaStar /> },
//   { name: "BYBIT", icon: <FaStar /> },
// ];

// export default function Hero() {
//   const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
//   const [isFormOpen, setIsFormOpen] = useState(false);
  


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTokenIndex((prevIndex) => (prevIndex + 1) % tokens.length);
//     }, 2000); // Change token name every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

  // const handleOpenForm = () => {
  //   setIsFormOpen(true);
  // };

  // const handleCloseForm = () => {
  //   setIsFormOpen(false);
  // };


//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Background video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="https://media.istockphoto.com/id/1128952607/video/beautiful-spaceship-tunnel-with-opening-metal-gates-and-flight-out-through-it-to-white-light.mp4?s=mp4-640x640-is&k=20&c=7L1ZC60IyEhIDfhSqyIn9eSRp3b5-s66omR-Pve3cpw=" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Linear gradient overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-black/10 backdrop-blur-md"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
//         <h1 className="text-4xl md:text-8xl font-bold mb-4">LEADING TOKEN</h1>
//         <h1 className="text-3xl md:text-6xl font-bold mb-4">LISTING AGENCY</h1>

//         {/* Token Listing Section */}
//         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
//           <h2 className="text-2xl md:text-4xl">List your token on</h2>
//           <div className="relative text-lg md:text-2xl bg-grey-800 bg-opacity-50 backdrop-blur-lg p-4 rounded-lg text-shadow-lg w-48 h-20 flex items-center justify-center overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 transform translate-y-0 opacity-100">
//               {tokens[currentTokenIndex].icon}
//               <span className="ml-2">{tokens[currentTokenIndex].name}</span>
//             </div>
//           </div>
//         </div>

//         <button 
//              onClick={handleOpenForm}
//         className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 px-8 text-shadow-lg rounded-lg text-lg md:text-xl hover:scale-105 transition-transform">
//           GET FREE CONSULTATION
//         </button>
//       </div>

//       <div className="relative mt-10 overflow-hidden">
//         {/* Add your continuously scrolling slider here */}
//       </div>
      // {/* <ContactForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} /> */}
      // {isFormOpen && (
      //   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      //     <div className="bg-gray-800 text-white p-6 rounded-lg max-w-md w-full relative">
      //       <button
      //         onClick={handleCloseForm}
      //         className="absolute top-3 right-3 text-gray-400 hover:text-white"
      //       >
      //         ×
      //       </button>
      //       <ContactForm heading={"GET A FREE CONSULTATION"}/>
      //     </div>
      //   </div>
      // )}
//     </div>
//   );
// }

// "use client";

// import React from 'react';
// import Image from 'next/image';
// // import animatedImage from '/public/images/animatedImage.gif'; 
// import { Button } from 'antd'; // Assuming you're using Ant Design for the button

// const HeroSection = () => {
//   const animatedImage = "https://i.gifer.com/AlXf.gif";
//   return (
//     <section className="bg-white py-12" style={{marginTop:80,}}>
//       <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center" >
       

//         {/* Hero Text and Button */}
//         <div className="w-full lg:w-1/2 lg:pl-12">
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//             Your Heading Here
//           </h1>
//           <p className="text-lg text-gray-600 mb-6">
//             Your subheading or description goes here. Provide additional information or context.
//           </p>
//           <Button
//             type="primary"
//             href="/contact"
//             className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold rounded-full py-3 px-6 transition-transform transform hover:scale-105"
//           >
//             Get Free Consultation
//           </Button>
//         </div>
//  {/* Animated Image */}
//  <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//           <div className="relative w-full h-96">
//             <img
//               src={animatedImage}
//               alt="Animated Image"
//               layout="fill"
//               objectFit="cover"
//               // className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd'; // Assuming you're using Ant Design for the button
import ContactForm from './ContactForm';

const HeroSection = () => {
  const animatedImage = "https://i.gifer.com/AlXf.gif";
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <section className="bg-white py-12 lg:py-20 h-auto lg:h-[90vh] " style={{ marginTop: 80,height:'auto' ,}}>
      <div className="container mx-auto px-4 lg:px-6 flex flex-col-reverse lg:flex-row items-center" style={{ maxWidth: '80%' }}>

        {/* Hero Text and Button */}
        <div className="w-full lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
          {/* LEADING TOKEN LISTING AGENCY */}
          Premier Token Listing
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {/* Your subheading or description goes here. Provide additional information or context. */}
            "Experience unparalleled access to the most prestigious exchanges, ensuring your token reaches its full potential."
          </p>
          <Button
            type="primary"
            // href="/contact"
            onClick={handleOpenForm}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-[20px] font-bold rounded-full py-6 px-6 transition-transform transform hover:scale-105"
          >
            Get Free Consultation
          </Button>
        </div>

        {/* Animated Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-96">
            <img
              src={animatedImage}
              alt="Animated Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-white p-3 rounded-lg max-w-md w-full relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ×
            </button>
            <ContactForm heading={"GET A FREE CONSULTATION"}/>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
