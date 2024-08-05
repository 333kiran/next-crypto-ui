// // "use client";

// // import { useState } from 'react';
// // import Image from 'next/image';
// // // import contactImage from '/public/images/contactImage.jpg'; // Replace with your image path

// // export default function QueryForm() {
// //   const [email, setEmail] = useState('');
// //   const [projectName, setProjectName] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const handleEmailChange = (e) => setEmail(e.target.value);
// //   const handleProjectNameChange = (e) => setProjectName(e.target.value);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setSuccess('');

// //     // Basic validation
// //     if (!email || !projectName) {
// //       setError('Please fill in both fields.');
// //       return;
// //     }

// //     // Prepare data to send to Formspree
// //     const formData = new FormData();
// //     formData.append('email', email);
// //     formData.append('project_name', projectName);

// //     try {
// //       // Replace 'YOUR_FORM_ENDPOINT' with your Formspree endpoint
// //       const response = await fetch('https://formspree.io/f/YOUR_FORM_ENDPOINT', {
// //         method: 'POST',
// //         body: formData,
// //         headers: {
// //           'Accept': 'application/json',
// //         },
// //       });

// //       if (response.ok) {
// //         setSuccess('Thank you for reaching out! We will get back to you soon.');
// //         setEmail('');
// //         setProjectName('');
// //       } else {
// //         setError('There was an issue with your submission. Please try again.');
// //       }
// //     } catch (err) {
// //       setError('There was an issue with your submission. Please try again.');
// //     }
// //   };

// // const contactImage = "https://image.pngaaa.com/870/4605870-small.png";

// //   return (
// //     <div className="bg-gray-100 py-40 px-4 h-screen">
// //       <div className="container mx-auto">
// //         <div className="text-center mb-10">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4">Can't find an answer</h1>
// //           <h2 className="text-2xl md:text-3xl">Leave your contact and we will contact you shortly.</h2>
// //         </div>
        
// //         <div className="flex flex-col md:flex-row items-center justify-center">
// //           <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
// //             <img
// //               src={contactImage}
// //               alt="Contact Us"
// //               className="rounded-lg shadow-lg"
// //               width={600}  // Set appropriate width
// //               height={400} // Set appropriate height
// //             />
// //           </div>
// //           <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col items-center pr-10">
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={handleEmailChange}
// //               placeholder="Enter your email"
// //               className="w-full px-4 py-3 mb-4 rounded-lg text-black text-lg border-2 border-transparent focus:outline-none focus:border-blue-500"
// //             />
// //             <input
// //               type="text"
// //               value={projectName}
// //               onChange={handleProjectNameChange}
// //               placeholder="Enter your project name"
// //               className="w-full px-4 py-3 mb-4 rounded-lg text-black text-lg border-2 border-transparent focus:outline-none focus:border-blue-500"
// //             />
// //             <button type="submit" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transition-transform">
// //               Let's Connect
// //             </button>
// //             {error && <p className="text-red-500 mt-4">{error}</p>}
// //             {success && <p className="text-green-500 mt-4">{success}</p>}
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import { useState } from 'react';
// // import contactImage from '/public/images/contactImage.jpg'; // Replace with your image path

// export default function QueryForm() {
//   const [email, setEmail] = useState('');
//   const [projectName, setProjectName] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleProjectNameChange = (e) => setProjectName(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     // Basic validation
//     if (!email || !projectName) {
//       setError('Please fill in both fields.');
//       return;
//     }

//     // Prepare data to send to Formspree
//     const formData = new FormData();
//     formData.append('email', email);
//     formData.append('project_name', projectName);

//     try {
//       // Replace 'YOUR_FORM_ENDPOINT' with your Formspree endpoint
//       const response = await fetch('https://formspree.io/f/YOUR_FORM_ENDPOINT', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Accept': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setSuccess('Thank you for reaching out! We will get back to you soon.');
//         setEmail('');
//         setProjectName('');
//       } else {
//         setError('There was an issue with your submission. Please try again.');
//       }
//     } catch (err) {
//       setError('There was an issue with your submission. Please try again.');
//     }
//   };

//   const contactImage = "https://image.pngaaa.com/870/4605870-small.png";

//   return (
//     <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
//       <div className="container mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Can't find an answer</h1>
//           <h2 className="text-lg sm:text-xl md:text-2xl">Leave your contact and we will contact you shortly.</h2>
//         </div>
        
//         <div className="flex flex-col md:flex-row items-center justify-center">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
//             <img
//               src={contactImage}
//               alt="Contact Us"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//           <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col items-center">
//             <input
//               type="email"
//               value={email}
//               onChange={handleEmailChange}
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 mb-4 rounded-lg text-black text-lg border-2 border-transparent focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="text"
//               value={projectName}
//               onChange={handleProjectNameChange}
//               placeholder="Enter your project name"
//               className="w-full px-4 py-3 mb-4 rounded-lg text-black text-lg border-2 border-transparent focus:outline-none focus:border-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:scale-105 transition-transform"
//             >
//               Let's Connect
//             </button>
//             {error && <p className="text-red-500 mt-4">{error}</p>}
//             {success && <p className="text-green-500 mt-4">{success}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from 'react';

export default function QueryForm() {
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

    // Basic validation
    if (!email || !projectName) {
      setError('Please fill in both fields.');
      return;
    }

    // Prepare data to send to Formspree
    const formData = new FormData();
    formData.append('email', email);
    formData.append('project_name', projectName);

    try {
      // Replace 'YOUR_FORM_ENDPOINT' with your Formspree endpoint
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

  const contactImage = "https://static.vecteezy.com/system/resources/thumbnails/009/350/155/small_2x/question-help-support-png.png";

  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto" style={{maxWidth:'80%'}}>
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-900">Can't find an answer?</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-blue-700">Leave your contact and we will reach out to you shortly.</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col items-center bg-blue-50 p-8 rounded-lg shadow-lg">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 mb-4 rounded-lg text-black text-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              value={projectName}
              onChange={handleProjectNameChange}
              placeholder="Enter your project name"
              className="w-full px-4 py-3 mb-4 rounded-lg text-black text-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:scale-105 transition-transform"
            >
              Let's Connect
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
