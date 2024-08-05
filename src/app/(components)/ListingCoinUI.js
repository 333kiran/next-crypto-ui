
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import { exchangeData } from '../data/servicesData';
import WhyUs from './WhyComapny';
import Team from '../team/page';
import MeetTheTeam from './TeamMembers';
import FAQs from './FAQS';

export const ListingCoinUI = ({option}) => {

    const [isFormOpen, setIsFormOpen] = useState(false);
    
  
  
    
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const handleCloseForm = () => {
      setIsFormOpen(false);
    };
  
const tokenAbout = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOiz0IqNTBKWUr5G2-KoxAytTOTKZzZKGyBeP7YCRG_i83lumT690QRI8m-qB1WT--iA&usqp=CAU";

const heading = `WHY LIST YOUR COIN ON ${option} WITH CRYPTO KOTHI?`;

    return (
        <>
        <div className="relative w-screen h-screen overflow-hidden">
            {/* main screen */}
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://media.istockphoto.com/id/1128952607/video/beautiful-spaceship-tunnel-with-opening-metal-gates-and-flight-out-through-it-to-white-light.mp4?s=mp4-640x640-is&k=20&c=7L1ZC60IyEhIDfhSqyIn9eSRp3b5-s66omR-Pve3cpw=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Linear gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-black/10 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">LIST YOUR COIN</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ON {option}</h1>

        {/* Token Listing Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <p className="text-xl md:text-2xl text-v">Ready to take your coin to the next level? Let's work towards listing your token on Binance, the top cryptocurrency exchange worldwide.</p>
         
        </div>
        <div className="relative text-lg md:text-2xl bg-grey-900 bg-opacity-50 backdrop-blur-lg p-4 rounded-lg text-shadow-lg w-48 h-20 flex items-center justify-center overflow-hidden" style={{marginBottom:20}}>
            {option}
          </div>

        <button 
             onClick={handleOpenForm}
        className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 px-8 text-shadow-lg rounded-lg text-lg md:text-xl hover:scale-105 transition-transform">
          GET FREE CONSULTATION
        </button>
      </div>

      <div className="relative mt-10 overflow-hidden">
        {/* Add your continuously scrolling slider here */}
      </div>
      {/* <ContactForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} /> */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg max-w-md w-full relative">
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

    </div>
      {/* About section */}
      <div className="px-4 py-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          About {option}
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
            <img src={tokenAbout} alt="token img" className="w-[1000] rounded-lg shadow-md" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Token Description</h3>
            <p className="text-gray-300 mb-4">

            {option}, the centralized cryptocurrency exchange established in 2017 and registered in the Cayman Islands, needs no introduction. As the powerhouse in the world of cryptocurrency exchanges, it's the largest one, handling more trading volume than any other platform. Currently, there are 380 coins and 1240 trading pairs available there. This means it's where millions of people go to buy, sell, and trade digital currencies. With Binance, your coin gets access to a massive audience and a super-active marketplace. It's like putting your coin on the biggest stage in the crypto world.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Key Metrics</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Metric</th>
                <th className="px-4 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {exchangeData.metrics.map((metric, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="px-4 py-2">{metric.name}</td>
                  <td className="px-4 py-2">{metric.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col lg:flex-col items-center">
          <h3 className="text-4xl font-semibold mb-4 lg:mb-0 lg:mr-8" style={{marginBottom:15}}>LISTING ON  {option} SERVICE</h3>

          {/* <div className="bg-gray-800 shadow-md rounded-lg p-6 lg:w-1/2">
            {exchangeData.benefits.map((benefit, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-xl font-semibold">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div> */}

<div className="bg-gray-800 shadow-md rounded-lg p-6 lg:w-1/2">
            {exchangeData.benefits.map((benefit, index) => (
              <div key={index} className="mb-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <WhyUs heading={heading}/>
    {/* <MeetTheTeam/> */}
    <FAQs data ="START HERE! DIVE INTO OUR FAQ FOR HANDY ANSWERS TO POPULAR QUESTIONS."/>
</>

    )
}