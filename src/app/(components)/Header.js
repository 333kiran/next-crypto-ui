
"use client";

import Image from 'next/image';
import logo from '/public/images/latestLogo.png';
import { useState } from 'react';
import { MenuOutlined, CloseOutlined, DownOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [isListingOpen, setIsListingOpen] = useState(false);

  const toggleDropdown = (type) => {
    if (type === 'services') {
      setActiveDropdown(activeDropdown === 'services' ? '' : 'services');
      setIsListingOpen(false); 
    } else if (type === 'listing') {
      setIsListingOpen(!isListingOpen);
    }
  };

  const handleLinkClick = () => {
    setActiveDropdown('');
    setIsListingOpen(false);
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white text-black flex items-center z-50 border-b border-gray-200">
      <div className="w-full mx-auto flex justify-between items-center h-full px-4 md:px-6" style={{ maxWidth: '75%' }}>
        {/* Logo Container */}
        <div className="flex items-center">
          <Link href='/'>
            <div className="flex items-center">
              <div className="relative w-32 h-32 md:w-30 md:h-30" style={{ marginTop: 10 }}>
                <Image
                  src={logo}
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center" style={{ paddingTop: 10 }}>
          <Link href="/" className="text-[#00264D] text-sm md:text-base hover:text-blue-600 hover:c" onClick={handleLinkClick}>Home</Link>
          <Link href="/blog" className="text-[#00264D] text-sm md:text-base hover:text-blue-600 hover:border-b-2 hover:border-blue-600" onClick={handleLinkClick}>Blog</Link>
          <Link href="/support" className="text-[#00264D] text-sm md:text-base hover:text-blue-600 hover:border-b-2 hover:border-blue-600" onClick={handleLinkClick}>Support</Link>
         
          <div className="relative">
      <button
        className="text-[#00264D] text-sm md:text-base hover:text-blue-600 hover:border-b-2 hover:border-blue-600 flex items-center"
        onClick={() => toggleDropdown('services')}
      >
        Services <DownOutlined className={`ml-1 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
      </button>
      {activeDropdown === 'services' && (
        <div className="absolute top-full mt-5 w-48 bg-white shadow-lg rounded-md  z-10" style={{borderBottom:'2px solid blue'}}>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white flex items-center"
            onClick={() => toggleDropdown('listing')}
          >
            Listing <DownOutlined className={`ml-1 transition-transform ${isListingOpen ? 'rotate-180' : ''} `} />
          </button>
          {isListingOpen && (
            <div className="absolute right-full top-0 mt-1 ml-1 w-48 bg-white shadow-lg rounded-md z-20" style={{borderBottom:'2px solid blue'}}>
             <Link href="/services/listing/Binance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>  Listing on Binance</Link>
             <Link href="/services/listing/OKX" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on OKX</Link>
             <Link href="/services/listing/Kucoin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Listing on Kucoin</Link>
             <Link href="/services/listing/Upbit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on Upbit</Link>
             <Link href="/services/listing/Gate.io" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Listing on Gate.io</Link>
             <Link href="/services/listing/Bitfinex" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on Bitfinex</Link>
             <Link href="/services/listing/Bybit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on Bybit</Link>
             <Link href="/services/listing/Bitmart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>  Listing on Bitmart</Link>
              <Link href="/services/listing/Indodax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>  Listing on Indodax</Link>
            </div>
          )}
          <Link href="/services/funding/explore" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Funding</Link>
          <Link href="/services/marketing/explore" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Marketing</Link>
          <Link href="/services/market-making/explore" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Market-making</Link>
          <Link href="/services/advisory-services/explore" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Advisory Services</Link>
        </div>
      )}
    </div>
         
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <MenuOutlined className="text-2xl" />
        </button>

        {/* Call-to-Action Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden lg:inline-block px-5 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm md:text-base font-bold overflow-hidden transition-transform transform hover:scale-105"
          onClick={handleLinkClick}
        >
          <span>Book a Call with Us</span>
        </Link>
      </div>
      

      {/* Drawer Menu (Mobile) */}
      <div className={`fixed inset-0 z-40 md:hidden transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`} style={{ height: '100vh', background: 'rgba(0,0,0,0.7)' }}>
        <div className="flex flex-col h-full p-6 backdrop-filter backdrop-blur-lg bg-white bg-opacity-80">
          <button
            className="text-black self-end mb-4"
            onClick={toggleMenu}
          >
            <CloseOutlined className="text-2xl" />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-[#00264D] text-lg font-bold hover:text-blue-600" onClick={handleLinkClick}>Home</Link>
            <Link href="/blog" className="text-[#00264D] text-lg font-bold hover:text-blue-600" onClick={handleLinkClick}>Blog</Link>
            <Link href="/support" className="text-[#00264D] text-lg font-bold hover:text-blue-600" onClick={handleLinkClick}>Support</Link>
            <div className="relative">
              <button 
                className="text-[#00264D] text-lg font-bold hover:text-blue-600 flex items-center" 
                onClick={() => toggleDropdown('services')}
              >
                Services <DownOutlined className={`ml-1 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="flex flex-col mt-2 space-y-2 rounded bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold " style={{borderBottom:'2px solid blue'}}>
                    <div className="relative">
                    <button 
                      className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 flex items-center" 
                      onClick={() => toggleDropdown('listing')}
                    >
                      Listing <DownOutlined className={`ml-1 transition-transform ${ isListingOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isListingOpen && (
                      <div className="flex flex-col mt-2 space-y-2 bg-white" style={{borderBottom:'2px solid blue'}}>
                         <Link href="/services/listing/Binance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>  Listing on Binance</Link>
             <Link href="/services/listing/OKX" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on OKX</Link>
             <Link href="/services/listing/Kucoin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Listing on Kucoin</Link>
             <Link href="/services/listing/Upbit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on Upbit</Link>
             <Link href="/services/listing/Gate.io" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>Listing on Gate.io</Link>
             <Link href="/services/listing/Bitfinex" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on Bitfinex</Link>
             <Link href="/services/listing/Bybit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}> Listing on Bybit</Link>
             <Link href="/services/listing/Bitmart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>  Listing on Bitmart</Link>
              <Link href="/services/listing/Indodax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white" onClick={handleLinkClick}>  Listing on Indodax</Link>
                      </div>
                    )}
                  </div>
                  <Link href="/services/funding/explore" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Funding</Link>
                  <Link href="/services/marketing/explore" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Marketing</Link>
                  <Link href="/services/market-making/explore" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Market-making</Link>
                  <Link href="/services/advisory-services/explore" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>Advisory Services</Link>
                </div>
              )}
            </div>

            
            <Link
              href="/contact"
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold overflow-hidden transition-transform transform hover:scale-105"
              onClick={handleLinkClick}
            >
              <span>Book a Call with Us</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


