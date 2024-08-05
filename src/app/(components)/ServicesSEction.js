// "use client";

// import { useState } from 'react';
// import { FaExchangeAlt, FaCogs, FaBullhorn, FaChartLine } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// const services = [
//   {
//     icon: <FaExchangeAlt className="text-4xl md:text-5xl text-orange-500" />,
//     title: 'Exchange Listing',
//     description: 'Get your token listed on top exchanges with our comprehensive listing services.',
//   },
//   {
//     icon: <FaCogs className="text-4xl md:text-5xl text-green-500" />,
//     title: 'Funding',
//     description: 'Access funding solutions to fuel your project’s growth and development.',
//   },
//   {
//     icon: <FaBullhorn className="text-4xl md:text-5xl text-blue-500" />,
//     title: 'Marketing',
//     description: 'Boost your project’s visibility with targeted marketing strategies and campaigns.',
//   },
//   {
//     icon: <FaChartLine className="text-4xl md:text-5xl text-red-500" />,
//     title: 'Market Making',
//     description: 'Enhance liquidity and market presence with our expert market-making services.',
//   },
//   // Add more services as needed
// ];

// export default function Services() {
//   const router = useRouter();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < services.length - 1) {
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     }
//   };

//   return (
//     <div className="relative h-screen bg-gray-100 py-16 px-4 md:px-8">
//       <div className="container mx-auto text-left mb-12 mt-20">
//         <h1 className="text-3xl md:text-5xl font-bold mb-6">OUR SERVICES</h1>
//         <p className="text-base md:text-lg text-gray-700 mb-12">
//           Discover our range of services designed to help you succeed in the crypto world.
//         </p>
//       </div>

//       <div className="relative mt-40">
//         <div className="overflow-hidden relative">
//           <div className="services-carousel h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`services-card flex-shrink-0 w-72 md:w-80 h-80 rounded-full bg-white shadow-lg flex flex-col items-center p-6 mx-4 md:mx-6 transition-transform duration-500 ${index === currentIndex ? 'active' : ''}`}
//               >
//                 <div className="flex items-center justify-center p-4 bg-gray-200 rounded-lg mb-4">
//                   {service.icon}
//                 </div>
//                 <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">{service.title}</h2>
//                 <p className="text-gray-600 text-center mb-4">{service.description}</p>
//                 <button
//                   onClick={() => router.push('/contact')}
//                   className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-6 rounded-lg text-base md:text-lg hover:scale-105 transition-transform"
//                 >
//                   Get in Touch
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={handlePrev}
//             disabled={currentIndex === 0}
//             className={`absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-3 md:p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             &lt;
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={currentIndex === services.length - 1}
//             className={`absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-3 md:p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors ${currentIndex === services.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from 'react';
// import { FaExchangeAlt, FaCogs, FaBullhorn, FaChartLine } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// const services = [
//   {
//     icon: <FaExchangeAlt className="text-4xl md:text-5xl text-orange-500" />,
//     title: 'Exchange Listing',
//     description: 'Get your token listed on top exchanges with our comprehensive listing services.',
//   },
//   {
//     icon: <FaCogs className="text-4xl md:text-5xl text-green-500" />,
//     title: 'Funding',
//     description: 'Access funding solutions to fuel your project’s growth and development.',
//   },
//   {
//     icon: <FaBullhorn className="text-4xl md:text-5xl text-blue-500" />,
//     title: 'Marketing',
//     description: 'Boost your project’s visibility with targeted marketing strategies and campaigns.',
//   },
//   {
//     icon: <FaChartLine className="text-4xl md:text-5xl text-red-500" />,
//     title: 'Market Making',
//     description: 'Enhance liquidity and market presence with our expert market-making services.',
//   },
//   // Add more services as needed
// ];

// export default function Services() {
//   const router = useRouter();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < services.length - 1) {
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     }
//   };

//   return (
//     <div className="relative bg-gray-100 py-16 px-4 md:px-8">
//       <div className="container mx-auto text-left mb-12 mt-20 relative">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className=" text-3xl md:text-5xl font-bold mb-6 ">OUR SERVICES</h1>
//             <p className="text-base md:text-lg text-gray-700 mb-12">
//               Discover our range of services designed to help you succeed in the crypto world.
//             </p>
//           </div>
//           <div className="flex space-x-4">
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className={`p-3 md:p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               &lt;
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={currentIndex === services.length - 1}
//               className={`p-3 md:p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors ${currentIndex === services.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               &gt;
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="relative mt-16">
//         <div className="overflow-hidden relative">
//           <div className="services-carousel flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`services-card rounded-full flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-80  rounded-full bg-white-500 shadow-lg flex flex-col items-center p-6 mx-4 md:mx-6 transition-transform duration-500 ${index === currentIndex ? 'active' : ''}`}
//               >
//                 <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg mb-4">
//                   {service.icon}
//                 </div>
//                 <h2 className="text-lg md:text-xl font-semibold mb-2 text-center text-blue-900">{service.title}</h2>
//                 <p className="text-blue-500 text-center mb-4">{service.description}</p>
//                 <button
//                   onClick={() => router.push('/contact')}
//                   className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg text-base md:text-lg hover:scale-105 transition-transform"
//                 >
//                   Get in Touch
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from 'react';
// import { FaExchangeAlt, FaCogs, FaBullhorn, FaChartLine } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// const services = [
//   {
//     icon: <FaExchangeAlt className="text-4xl md:text-5xl text-white" />,
//     title: 'Exchange Listing',
//     description: 'Get your token listed on top exchanges with our comprehensive listing services.',
//   },
//   {
//     icon: <FaCogs className="text-4xl md:text-5xl text-white" />,
//     title: 'Funding',
//     description: 'Access funding solutions to fuel your project’s growth and development.',
//   },
//   {
//     icon: <FaBullhorn className="text-4xl md:text-5xl text-white" />,
//     title: 'Marketing',
//     description: 'Boost your project’s visibility with targeted marketing strategies and campaigns.',
//   },
//   {
//     icon: <FaChartLine className="text-4xl md:text-5xl text-white" />,
//     title: 'Market Making',
//     description: 'Enhance liquidity and market presence with our expert market-making services.',
//   },
// ];

// export default function Services() {
//   const router = useRouter();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < services.length - 1) {
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     }
//   };

//   return (
//     <div className="relative bg-gray-100 py-16 px-4 md:px-8">
//       <div className="container mx-auto text-left mb-12 mt-20 relative">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl md:text-5xl font-bold mb-6">OUR SERVICES</h1>
//             <p className="text-base md:text-lg text-gray-700 mb-12">
//               Discover our range of services designed to help you succeed in the crypto world.
//             </p>
//           </div>
//           <div className="flex space-x-4">
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className={`p-3 md:p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               &lt;
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={currentIndex === services.length - 1}
//               className={`p-3 md:p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors ${currentIndex === services.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               &gt;
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="relative mt-16">
//         <div className="overflow-hidden relative">
//           <div className="services-carousel flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`services-card flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-80 md:h-80 lg:h-80 bg-white shadow-lg flex flex-col items-center p-6 mx-4 md:mx-6 transition-transform duration-500 ${index === currentIndex ? 'active' : ''} rounded-full md:rounded-full lg:rounded-full rounded-md`}
//               >
//                 <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg mb-4">
//                   {service.icon}
//                 </div>
//                 <h2 className="text-lg md:text-xl font-semibold mb-2 text-center text-blue-900">{service.title}</h2>
//                 <p className="text-blue-500 text-center mb-4">{service.description}</p>
//                 <button
//                   onClick={() => router.push('/contact')}
//                   className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg text-base md:text-lg hover:scale-105 transition-transform"
//                 >
//                   Get in Touch
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from 'react';
import { FaExchangeAlt, FaCogs, FaBullhorn, FaChartLine } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const services = [
  {
    icon: <FaExchangeAlt className="text-6xl text-blue-600" />,
    title: 'Exchange Listing',
    description: 'Get your token listed on top exchanges with our comprehensive listing services.',
  },
  {
    icon: <FaCogs className="text-6xl text-blue-600" />,
    title: 'Funding',
    description: 'Access funding solutions to fuel your project’s growth and development.',
  },
  {
    icon: <FaBullhorn className="text-6xl text-blue-600" />,
    title: 'Marketing',
    description: 'Boost your project’s visibility with targeted marketing strategies and campaigns.',
  },
  {
    icon: <FaChartLine className="text-6xl text-blue-600" />,
    title: 'Market Making',
    description: 'Enhance liquidity and market presence with our expert market-making services.',
  },
];

export default function Services() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-blue-900 text-white py-16 px-4 md:px-8 relative overflow-hidden min-h-[100vh]">
       <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Our Services</h1>
        <p className="text-lg md:text-xl text-blue-200 mb-12 text-center">
          Explore our range of services designed to help you excel in the crypto world.
        </p>
      <div className="container mx-auto text-center mb-12" style={{marginTop:190}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
        <p className="text-lg md:text-xl text-blue-200 mb-12">
          Explore our range of services 
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <div
          className="absolute inset-0 flex justify-center items-center"
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative flex transition-transform duration-700"
            style={{
              transform: `rotateY(-${currentIndex * 90}deg)`,
              transformStyle: 'preserve-3d',
              width: '100%',
              height: '100%',
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="absolute w-full h-full flex justify-center items-center"
                style={{
                  transform: `rotateY(${index * 90}deg) translateZ(400px)`,
                }}
              >
                <div className="bg-white text-blue-900 rounded-xl shadow-lg p-8 text-center w-80 h-96">
                  <div className="flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                  <p className="text-blue-800 mb-6">{service.description}</p>
                  <button
                    onClick={() => router.push('/contact')}
                    className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 px-4 rounded-lg text-base hover:bg-gradient-to-l transition-colors"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-4 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-4 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
