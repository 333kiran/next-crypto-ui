
"use client";

import { useState } from 'react';
import Image from 'next/image';

const dummyBlogs = [
  {
    image: '/images/images1.jpg',
    date: 'July 20, 2024',
    title: 'Understanding Cryptocurrency Trends',
    excerpt: 'An in-depth look into the latest trends in the cryptocurrency market and how they can affect your investments.',
    slug: 'understanding-cryptocurrency-trends',
    content: 'Full content of the blog post goes here. It can be a more detailed explanation or analysis about the topic.'
  },
  {
    image: '/images/image2.jpeg',
    date: 'July 18, 2024',
    title: 'How to Invest in Bitcoin',
    excerpt: 'A comprehensive guide on investing in Bitcoin, from basics to advanced strategies for maximizing returns.',
    slug: 'how-to-invest-in-bitcoin',
    content: 'Full content of the blog post goes here. It can be a more detailed explanation or analysis about the topic.'
  },
  {
    image: '/images/image3.png',
    date: 'July 18, 2024',
    title: 'How to Invest in Bitcoin',
    excerpt: 'A comprehensive guide on investing in Bitcoin, from basics to advanced strategies for maximizing returns.',
    slug: 'how-to-invest-in-bitcoin',
    content: 'Full content of the blog post goes here. It can be a more detailed explanation or analysis about the topic.'
  },
  {
    image: '/images/images1.jpg',
    date: 'July 18, 2024',
    title: 'How to Invest in Bitcoin',
    excerpt: 'A comprehensive guide on investing in Bitcoin, from basics to advanced strategies for maximizing returns.',
    slug: 'how-to-invest-in-bitcoin',
    content: 'Full content of the blog post goes here. It can be a more detailed explanation or analysis about the topic.'
  },
  // Add more blog entries as needed
];

export default function BlogPage() {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen py-20">
      {/* Background Image and Blog Header */}
      {/* <div className="relative h-[20vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://www.wipro.com/content/dam/nexus/en/latest-blog-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Our Latest Blogs
          </h1>
        </div>
      </div> */}

<div className="relative h-[20vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://www.wipro.com/content/dam/nexus/en/latest-blog-bg.jpg")' }}>
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
          Our Latest Blogs
        </h1>
      </div>
    </div>
     
      {/* Blog Cards */}
      <div className="container mx-auto py-8 px-4 md:px-8" style={{maxWidth:'80%'}}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 card-container" >
          {dummyBlogs.map((blog, index) => (
            <div
              key={index}
              className={`card relative w-full  ${flippedCardIndex === index ? 'flip' : ''}`}
              style={{height:'auto',marginBottom:90}}
              onClick={() => handleFlip(index)}
            >
              {/* Front Side */}
              <div className="card-face front  rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 text-white  backdrop-blur-lg  flex flex-col hover:scale-105 duration-300 shadow-lg hover:shadow-blue-900">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6" style={{paddingBottom:30}}>
                  <p className="text-sm text-black-400">{blog.date}</p>
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-blue-900 mb-4">{blog.excerpt}</p>
                  <button className="text-white-500 hover:underline" >Read More</button>
                </div>
              </div>
              
              {/* Back Side */}
              <div className="card-face back  rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 text-white bg-opacity-50 backdrop-blur-lg  flex flex-col ">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-blue-900 mb-4">{blog.content}</p>
                  <button onClick={() => handleFlip(index)} className="text-white-500 hover:underline">Close</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  //   <div className="bg-blue-50 text-blue-900 min-h-screen py-20">
  //   {/* Background Image and Blog Header */}
    // <div className="relative h-[20vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://www.wipro.com/content/dam/nexus/en/latest-blog-bg.jpg")' }}>
    //   <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
    //     <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
    //       Our Latest Blogs
    //     </h1>
    //   </div>
    // </div>
    
  //   {/* Blog Cards */}
  //   <div className="container mx-auto py-8 px-4 md:px-8">
  //     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  //       {dummyBlogs.map((blog, index) => (
  //         <div
  //           key={index}
  //           className={`relative w-full h-auto ${flippedCardIndex === index ? 'flip' : ''}`}
  //           onClick={() => handleFlip(index)}
  //         >
  //           {/* Front Side */}
  //           <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col">
  //             <Image
  //               src={blog.image}
  //               alt={blog.title}
  //               width={500}
  //               height={300}
  //               layout="responsive"
  //               objectFit="cover"
  //               className="w-full h-48 object-cover"
  //             />
  //             <div className="p-6">
  //               <p className="text-sm text-blue-600">{blog.date}</p>
  //               <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
  //               <p className="text-blue-800 mb-4">{blog.excerpt}</p>
  //               <button className="text-blue-600 hover:underline">Read More</button>
  //             </div>
  //           </div>
            
  //           {/* Back Side */}
  //           <div className={`absolute top-0 left-0 w-full h-full bg-white rounded-lg overflow-hidden shadow-lg flex flex-col transform transition-transform duration-300 ${flippedCardIndex === index ? 'rotate-y-180' : 'rotate-y-0'}`}>
  //             <div className="p-6">
  //               <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
  //               <p className="text-blue-800 mb-4">{blog.content}</p>
  //               <button onClick={() => handleFlip(index)} className="text-blue-600 hover:underline">Close</button>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>
  );
}
