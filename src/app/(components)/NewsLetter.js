// // "use client";

// // import { useState } from 'react';

// // export default function Newsletter() {
// //   const [email, setEmail] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const handleEmailChange = (e) => {
// //     setEmail(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setSuccess('');

// //     // Email validation
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       setError('Please enter a valid email address.');
// //       return;
// //     }

// //     try {
// //       const res = await fetch('/api/subscribe', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email }),
// //       });

// //       const data = await res.json();

// //       if (res.ok) {
// //         setSuccess(data.message);
// //         setEmail('');
// //       } else {
// //         setError(data.message);
// //       }
// //     } catch (err) {
// //       setError('Something went wrong. Please try again later.');
// //     }
// //   };

// //   return (
// //     <div className="relative w-screen h-auto py-40 overflow-hidden">
// //       <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://cyber.securityhq.com/hubfs/New%20Background%20image%20-%20sign-up%20to%20newsletter.png")' }}></div>
// //       <div className="absolute top-0 left-0 w-full h-full  "></div>
      
// //       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
// //         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">SUBSCRIBE TO OUR NEWSLETTER</h1>
// //         <h3 className="text-2xl md:text-3xl mb-6">And be the first to know about all important news</h3>
        
// //         <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
// //           <div className="flex flex-col md:flex-row items-center">
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={handleEmailChange}
// //               placeholder="Enter your email"
// //               className="w-full px-12 py-4 mb-4 md:mb-0 md:mr-4 rounded-lg text-black text-lg"
// //             />
// //             <button type="submit" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg md:text-xl hover:scale-105 transition-transform">
// //               Subscribe
// //             </button>
// //           </div>
// //         </form>

// //         {error && <p className="text-red-500 mt-4">{error}</p>}
// //         {success && <p className="text-green-500 mt-4">{success}</p>}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from 'react';

// export default function Newsletter() {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     try {
//       const res = await fetch('/api/subscribe', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setSuccess(data.message);
//         setEmail('');
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div className="relative w-full h-auto py-16 md:py-24 lg:py-32 overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://cyber.securityhq.com/hubfs/New%20Background%20image%20-%20sign-up%20to%20newsletter.png")' }}></div>
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
//       <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 lg:px-16">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-shadow-lg">SUBSCRIBE TO OUR NEWSLETTER</h1>
//         <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">And be the first to know about all important news</h3>
        
//         <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
//           <div className="flex flex-col md:flex-row items-center justify-center">
//             <input
//               type="email"
//               value={email}
//               onChange={handleEmailChange}
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 mb-4 md:mb-0 md:mr-4  rounded-lg text-black text-lg border-2 border-transparent focus:outline-none focus:border-blue-500"
//             />
//             <button type="submit" className="w-full md:w-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-lg text-lg md:text-xl hover:scale-105 transition-transform">
//               Subscribe
//             </button>
//           </div>
//         </form>

//         {error && <p className="text-red-500 mt-4">{error}</p>}
//         {success && <p className="text-green-500 mt-4">{success}</p>}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setEmail('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-white" style={{ backgroundImage: 'url("https://cyber.securityhq.com/hubfs/New%20Background%20image%20-%20sign-up%20to%20newsletter.png")' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center text-blue-900 px-4 md:px-8 lg:px-16 h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6  text-white">And be the first to know about all important news</h3>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 mb-4 md:mb-0 md:mr-4 rounded-lg text-black text-lg border-2 border-blue-500 focus:outline-none"
            />
            <button type="submit" className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-lg text-lg md:text-xl hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
}
