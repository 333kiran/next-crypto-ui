"use client";

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function SupportPage() {
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleProjectNameChange = (e) => setProjectName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !projectName) {
      setError('Please fill in both fields.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('project_name', projectName);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSuccess('Thank you for reaching out! We will get back to you soon.');
        setEmail('');
        setProjectName('');
      } else {
        setError('There was an issue with your submission. Please try again.');
      }
    } catch (err) {
      setError('There was an issue with your submission. Please try again.');
    }
  };

  const contactImage = "https://png.pngtree.com/png-clipart/20190604/original/pngtree-work-png-image_1450260.jpg";

  return (
    // <div className="pt-12 bg-gray-100 min-h-screen flex flex-col items-center">
    //   <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-16 px-4 md:px-8">
    //     <div className="w-full md:w-1/2 mb-8 md:mb-0">
    //       <img
    //         src={contactImage}
    //         alt="Contact Us"
    //         className="rounded-lg shadow-lg w-full h-auto object-cover"
    //       />
    //     </div>
    //     <div className="w-full md:w-1/2">
    //       <div className=" rounded-lg p-6 md:p-10 ">
    //         <h1 className="text-3xl font-bold mb-6">Need Assistance?</h1>
    //         <p className="text-lg mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
    //         <form onSubmit={handleSubmit} className="space-y-6">
    //           <div>
    //             <input
    //               type="email"
    //               value={email}
    //               onChange={handleEmailChange}
    //               placeholder="Enter your email"
    //               className="w-full px-4 py-3 mb-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
    //             />
    //           </div>
    //           <div>
    //             <input
    //               type="text"
    //               value={projectName}
    //               onChange={handleProjectNameChange}
    //               placeholder="Enter your project name"
    //               className="w-full px-4 py-3 mb-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 rounded-lg text-lg hover:scale-105 transition-transform"
    //           >
    //             Submit
    //           </button>
    //           {error && <p className="text-red-500 mt-4">{error}</p>}
    //           {success && <p className="text-green-500 mt-4">{success}</p>}
    //         </form>

    //         <div className="mt-8">
    //           <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
    //           <div className="flex flex-col space-y-4">
    //             <div className="flex items-center space-x-3">
    //               <FaPhone className="text-orange-500 text-2xl" />
    //               <p className="text-lg">+1 234 567 890</p>
    //             </div>
    //             <div className="flex items-center space-x-3">
    //               <FaEnvelope className="text-orange-500 text-2xl" />
    //               <p className="text-lg">contact@example.com</p>
    //             </div>
    //             <div className="flex items-center space-x-3">
    //               <FaMapMarkerAlt className="text-orange-500 text-2xl" />
    //               <p className="text-lg">123 Main St, City, Country</p>
    //             </div>
    //           </div>
    //         </div>
            
    //       </div>
         
    //     </div>
    //   </div>
    // </div>

    <div className="pt-12 bg-white min-h-screen flex flex-col items-center">
    <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-16 px-4 md:px-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={contactImage} // Replace with your image path
          alt="Contact Us"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-lg bg-white p-6 md:p-10 ">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Need Assistance?</h1>
          <p className="text-lg mb-6 text-blue-700">Fill out the form below and we'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 mb-4 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={projectName}
                onChange={handleProjectNameChange}
                placeholder="Enter your project name"
                className="w-full px-4 py-3 mb-4 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 rounded-lg text-lg hover:scale-105 transition-transform"
            >
              Submit
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">{success}</p>}
          </form>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Contact Information</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-600 text-2xl" />
                <p className="text-lg text-blue-700">+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <p className="text-lg text-blue-700">contact@example.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <p className="text-lg text-blue-700">123 Main St, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
