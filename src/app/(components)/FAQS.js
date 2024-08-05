"use client";

import { useState } from 'react';
import { faqs } from '../data/FAQs';


export default function FAQs({data}) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-900 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center mb-12">
        {data && data ? (  <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{marginLeft:20,marginRight:20}}>{data}</h1>):(  <h1 className="text-3xl md:text-4xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h1>)}
      
      </div>
      <div className="container mx-auto max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-blue-800 rounded-lg shadow-md overflow-hidden mb-4">
            <div
              className="p-4 cursor-pointer border-b border-gray-700"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>
            <div 
              className={`p-4 text-sm text-gray-300 border-t border-gray-700 ${openIndex === index ? 'block' : 'hidden'}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
