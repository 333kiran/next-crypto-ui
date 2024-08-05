
// // "use client";

// // import React from 'react';
// // import Slider from 'react-slick';
// // import Image from 'next/image';
// // import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// // const blogs = [
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 20, 2024',
// //     title: 'Understanding Cryptocurrency Trends',
// //   },
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 18, 2024',
// //     title: 'How to Invest in Bitcoin',
// //   },
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 15, 2024',
// //     title: 'The Future of Blockchain Technology',
// //   },
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 10, 2024',
// //     title: 'Top 10 DeFi Projects to Watch',
// //   },
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 20, 2024',
// //     title: 'Understanding Cryptocurrency Trends',
// //   },
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 18, 2024',
// //     title: 'How to Invest in Bitcoin',
// //   },
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 15, 2024',
// //     title: 'The Future of Blockchain Technology',
// //   },
// //   {
// //     image: '/images/logo.jpg',
// //     date: 'July 10, 2024',
// //     title: 'Top 10 DeFi Projects to Watch',
// //   },
// // ];

// // export default function BlogSection() {
// //   const settings = {
// //     dots: false, // Disable dots
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 4,
// //     slidesToScroll: 1,
// //     arrows: true,
// //     prevArrow: <SamplePrevArrow />,
// //     nextArrow: <SampleNextArrow />,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 3,
// //         },
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: {
// //           slidesToShow: 1,
// //         },
// //       },
// //     ],
// //   };

// //   // Custom Previous Arrow
// //   function SamplePrevArrow(props) {
// //     const { onClick } = props;
// //     return (
// //       <div
// //         className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer z-10"
// //         onClick={onClick}
// //       >
// //         <FaArrowLeft />
// //       </div>
// //     );
// //   }

// //   // Custom Next Arrow
// //   function SampleNextArrow(props) {
// //     const { onClick } = props;
// //     return (
// //       <div
// //         className="absolute h-screen top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer z-10"
// //         onClick={onClick}
// //       >
// //         <FaArrowRight />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-gray-100 py-16 px-4 md:px-8">
// //       <div className="container mx-auto text-left mb-12">
// //         <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Blog</h1>
// //         <p className="text-lg md:text-xl mb-6">Stay updated with the latest trends and insights from our blog.</p>
// //       </div>

// //       <Slider {...settings} className="relative">
// //         {blogs.map((blog, index) => (
// //           <div
// //             key={index}
// //             className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 md:mx-6 mb-6" // Margin added for space
// //           >
// //             <Image
// //               src={blog.image}
// //               alt={`Blog Image ${index + 1}`}
// //               width={300} // Adjust width
// //               height={200} // Adjust height
// //               layout="responsive"
// //               objectFit="cover"
// //             />
// //             <div className="p-4">
// //               <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
// //               <h3 className="text-md font-semibold mb-2">{blog.title}</h3>
// //             </div>
// //           </div>
// //         ))}
// //       </Slider>

// //       {/* Blog Button */}
// //       <div className="text-center mt-8">
// //         <a href="/blog" className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-6 rounded-lg text-lg hover:scale-105 transition-transform">
// //           Explore Our Blog
// //           <FaArrowRight className="inline ml-2" />
// //         </a>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import React from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const blogs = [
//   {
//     image: '/images/logo.jpg',
//     date: 'July 20, 2024',
//     title: 'Understanding Cryptocurrency Trends',
//   },
//   {
//     image: '/images/logo.jpg',
//     date: 'July 18, 2024',
//     title: 'How to Invest in Bitcoin',
//   },
//   {
//     image: '/images/logo.jpg',
//     date: 'July 15, 2024',
//     title: 'The Future of Blockchain Technology',
//   },
//   {
//     image: '/images/logo.jpg',
//     date: 'July 10, 2024',
//     title: 'Top 10 DeFi Projects to Watch',
//   },
//   {
//     image: '/images/logo.jpg',
//     date: 'July 20, 2024',
//     title: 'Understanding Cryptocurrency Trends',
//   },
//   {
//     image: '/images/logo.jpg',
//     date: 'July 18, 2024',
//     title: 'How to Invest in Bitcoin',
//   },
//   {
//     image: '/images/logo.jpg',
//     date: 'July 15, 2024',
//     title: 'The Future of Blockchain Technology',
//   },
//   {
//     image: '/images/logo.jpg',
//     date: 'July 10, 2024',
//     title: 'Top 10 DeFi Projects to Watch',
//   },
// ];

// export default function BlogSection() {
//   const settings = {
//     dots: false, // Disable dots
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   // Custom Previous Arrow
//   function SamplePrevArrow(props) {
//     const { onClick } = props;
//     return (
//       <div
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full cursor-pointer z-10 hover:bg-gray-600 transition-colors"
//         onClick={onClick}
//       >
//         <FaArrowLeft />
//       </div>
//     );
//   }

//   // Custom Next Arrow
//   function SampleNextArrow(props) {
//     const { onClick } = props;
//     return (
//       <div
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full cursor-pointer z-10 hover:bg-gray-600 transition-colors"
//         onClick={onClick}
//       >
//         <FaArrowRight />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 py-16 px-4 md:px-8">
//       <div className="container mx-auto text-left mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Blog</h1>
//         <p className="text-lg md:text-xl mb-6">Stay updated with the latest trends and insights from our blog.</p>
//       </div>

//       <Slider {...settings} className="relative">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 md:mx-6 mb-6 hover:shadow-xl transition-shadow duration-300" // Added hover effect
//           >
//             <Image
//               src={blog.image}
//               alt={`Blog Image ${index + 1}`}
//               width={300} // Adjust width
//               height={200} // Adjust height
//               layout="responsive"
//               objectFit="cover"
//             />
//             <div className="p-4">
//               <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
//               <h3 className="text-md font-semibold mb-2">{blog.title}</h3>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* Blog Button */}
//       <div className="text-center mt-8">
//         <a href="/blog" className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-6 rounded-lg text-lg hover:scale-105 transition-transform">
//           Explore Our Blog
//           <FaArrowRight className="inline ml-2" />
//         </a>
//       </div>
//     </div>
//   );
// }

"use client";

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const blogs = [
  {
    image: '/images/logo.jpg',
    date: 'July 20, 2024',
    title: 'Understanding Cryptocurrency Trends',
  },
  {
    image: '/images/logo.jpg',
    date: 'July 18, 2024',
    title: 'How to Invest in Bitcoin',
  },
  {
    image: '/images/logo.jpg',
    date: 'July 15, 2024',
    title: 'The Future of Blockchain Technology',
  },
  {
    image: '/images/logo.jpg',
    date: 'July 10, 2024',
    title: 'Top 10 DeFi Projects to Watch',
  },
  {
    image: '/images/logo.jpg',
    date: 'July 20, 2024',
    title: 'Understanding Cryptocurrency Trends',
  },
  {
    image: '/images/logo.jpg',
    date: 'July 18, 2024',
    title: 'How to Invest in Bitcoin',
  },
  {
    image: '/images/logo.jpg',
    date: 'July 15, 2024',
    title: 'The Future of Blockchain Technology',
  },
  {
    image: '/images/logo.jpg',
    date: 'July 10, 2024',
    title: 'Top 10 DeFi Projects to Watch',
  },
];

export default function BlogSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full cursor-pointer z-10 hover:bg-opacity-80 transition-opacity"
        onClick={onClick}
      >
        <FaArrowLeft size={24} />
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full cursor-pointer z-10 hover:bg-opacity-80 transition-opacity"
        onClick={onClick}
      >
        <FaArrowRight size={24} />
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4 md:px-8">
      <div className="container mx-auto text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Featured Blogs</h1>
        <p className="text-lg md:text-xl text-blue-700 mb-6">Discover the latest insights and trends from our blog.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 my-4 flex flex-col items-center"
            >
              <Image
                src={blog.image}
                alt={`Blog Image ${index + 1}`}
                width={300}
                height={200}
                layout="responsive"
                objectFit="cover"
                className="w-full"
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-md font-semibold">{blog.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-8">
        <a href="/blog" className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg hover:scale-105 transition-transform">
          Explore Our Blog
          <FaArrowRight className="inline ml-2" />
        </a>
      </div>
    </section>
  );
}
