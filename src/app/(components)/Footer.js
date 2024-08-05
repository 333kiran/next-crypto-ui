// import React from 'react';
// import Image from 'next/image';
// import logo from '/public/images/latestLogo.png'; // Import your logo image
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto px-4 text-center">
//         <div className="flex flex-col lg:flex-row justify-between items-center">
//           {/* Logo and Social Media Section */}
//           <div className="flex flex-col items-center mb-6 lg:mb-0 lg:items-start">
//             <div className="relative w-40 h-36 mb-4">
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
            
//           </div>
//           <div>
//           <div className="flex space-x-4 mb-4 justify-center">
//   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:text-blue-700">
//     <FaFacebook className="text-3xl font-bold" />
//   </a>
//   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white-400 hover:text-blue-500">
//     <FaTwitter className="text-3xl font-bold" />
//   </a>
//   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:text-pink-600">
//     <FaInstagram className="text-3xl font-bold" />
//   </a>
//   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white-700 hover:text-blue-800">
//     <FaLinkedin className="text-3xl font-bold" />
//   </a>
// </div>

//           </div>

//           {/* Quick Links Section */}
//           <div className="flex flex-col items-center mb-6 lg:mb-0">
//             <h4 className="text-lg font-bold mb-2">Quick Links</h4>
//             <ul className="list-none space-y-1">
//               <li><a href="/" className="text-gray-400 hover:text-gray-300">Services</a></li>
//               <li><a href="/support" className="text-gray-400 hover:text-gray-300">Support</a></li>
//             </ul>
//           </div>
//         </div>
// <hr/>
//         {/* Copyright */}
//         <div className="text-center text-gray-400 text-sm mt-6 lg:mt-8">
//           <p>&copy; {new Date().getFullYear()} Crypto Kothi. All rights reserved.</p>
//           <a href="/privacy-policy" className="text-teal-400 hover:underline">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Image from 'next/image';
import logo from '/public/images/latestLogo.png'; // Import your logo image
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  text-white py-8">
      <div className="container mx-auto px-4 text-center" style={{ maxWidth: '75%' }}>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-center mb-6 lg:mb-0 lg:items-start">
            <div className="relative w-40 h-36 mb-4">
              <Image
                src={logo}
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex space-x-4 mb-4 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaFacebook className="text-3xl font-bold" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                <FaTwitter className="text-3xl font-bold" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
                <FaInstagram className="text-3xl font-bold" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <FaLinkedin className="text-3xl font-bold" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="list-none space-y-1">
              <li><a href="/services" className="text-white hover:text-gray-200">Services</a></li>
              <li><a href="/support" className="text-white hover:text-gray-200">Support</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-200 w-full my-4" />
        {/* Copyright */}
        <div className="text-center text-white text-sm mt-6 lg:mt-8">
          <p>&copy; {new Date().getFullYear()} Crypto Kothi. All rights reserved.</p>
          <a href="/privacy-policy" className="text-blue-200 hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

