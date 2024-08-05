// "use client"

// import React, { useState } from 'react';

// const ContactForm = ({heading}) => {
//   const [selectedMethod, setSelectedMethod] = useState('whatsapp');
//   const [formData, setFormData] = useState({
//     contact: '',
//     email: '',
//     project: '',
//   });
//   const [submissionStatus, setSubmissionStatus] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.contact && selectedMethod === 'whatsapp') {
//       newErrors.contact = 'Mobile number is required';
//     }
//     if (!formData.email) {
//       newErrors.email = 'Email address is required';
//     }
//     if (!formData.project) {
//       newErrors.project = 'Project name is required';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await fetch('/api/contact', { // Change to your API route
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmissionStatus('Success');
//         setFormData({
//           contact: '',
//           email: '',
//           project: '',
//         });
//         setSelectedMethod('');
//         setTimeout(() => setSubmissionStatus(''), 2000); // Clear status after 2 seconds
//       } else {
//         setSubmissionStatus('Error');
//       }
//     } catch (error) {
//       setSubmissionStatus('Error');
//       console.error('Submission error:', error);
//     }
//   };

//   return (
//     <div className="min-h-autp flex items-center rounded-lg justify-center  p-2 z-1">
//       <div className=" text-white p-8 rounded-lg max-w-md w-full">
//         <h2 className="text-3xl font-bold mb-4">{heading}</h2>
//         <p className="mb-4">Choose a messanger to contact you:</p>
//         <div className="flex justify-start mb-4">
//           <button
//             onClick={() => setSelectedMethod('whatsapp')}
//             className={`p-4 rounded-full ${selectedMethod === 'whatsapp' ? 'bg-green-500' : 'bg-gray-700'}`}
//             style={{marginRight:10}}
//           >
//             WhatsApp
//           </button>
//           <button
//             onClick={() => setSelectedMethod('telegram')}
//             className={`p-4 rounded-full ${selectedMethod === 'telegram' ? 'bg-blue-500' : 'bg-gray-700'}`}
//           >
//             Telegram
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {selectedMethod === 'whatsapp' && (
//             <>
//               <input
//                 type="tel"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Mobile Number"
//                 className={`w-full p-2 rounded bg-gray-700 border border-gray-600 ${errors.contact ? 'border-red-500' : ''}`}
//               />
//               {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
//             </>
//           )}

//           {selectedMethod === 'telegram' && (
//             <>
//               <input
//                 type="text"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Username or Mobile Number"
//                 className={`w-full p-2 rounded bg-gray-700 border border-gray-600 ${errors.contact ? 'border-red-500' : ''}`}
//               />
//               {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
//             </>
//           )}

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             className={`w-full p-2 rounded bg-gray-700 border border-gray-600 ${errors.email ? 'border-red-500' : ''}`}
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//           <input
//             type="text"
//             name="project"
//             value={formData.project}
//             onChange={handleChange}
//             placeholder="Project Name"
//             className={`w-full p-2 rounded bg-gray-700 border border-gray-600 ${errors.project ? 'border-red-500' : ''}`}
//           />
//           {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}

//           <p className="text-xs text-gray-400">
//             By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
//           </p>
          
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600"
//           >
//             Contact Me
//           </button>

//           {submissionStatus === 'Success' && <p className="text-green-400 mt-2">Your message has been sent!</p>}
//           {submissionStatus === 'Error' && <p className="text-red-400 mt-2">There was an error sending your message. Please try again.</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


"use client";

import React, { useState } from 'react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const ContactForm = ({ heading }) => {
  const [selectedMethod, setSelectedMethod] = useState('telegram');
  const [formData, setFormData] = useState({
    contact: '',
    email: '',
    project: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.contact && selectedMethod === 'whatsapp') {
      newErrors.contact = 'Mobile number is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    }
    if (!formData.project) {
      newErrors.project = 'Project name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/contact', { // Change to your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Success');
        setFormData({
          contact: '',
          email: '',
          project: '',
        });
        setSelectedMethod('');
        setTimeout(() => setSubmissionStatus(''), 2000); // Clear status after 2 seconds
      } else {
        setSubmissionStatus('Error');
      }
    } catch (error) {
      setSubmissionStatus('Error');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg max-w-md w-full ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h2>
        <p className="text-gray-600 mb-4">Choose a messenger to contact you:</p>
        <div className="flex mb-6">
          <button
            onClick={() => setSelectedMethod('telegram')}
            className={`flex items-center p-4 rounded-full ${
              selectedMethod === 'telegram' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            style={{ marginRight: 10 }}
          >
            <FaTelegramPlane className="text-2xl" />
          </button>
          <button
            onClick={() => setSelectedMethod('whatsapp')}
            className={`flex items-center p-4 rounded-full ${
              selectedMethod === 'whatsapp' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
          >
            <FaWhatsapp className="text-2xl" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {selectedMethod === 'whatsapp' && (
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Mobile Number"
              className={`w-full p-2 rounded bg-gray-200 border border-gray-300 ${
                errors.contact ? 'border-red-500' : ''
              }`}
            />
          )}

          {selectedMethod === 'telegram' && (
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Username or Mobile Number"
              className={`w-full p-2 rounded bg-gray-200 border border-gray-300 ${
                errors.contact ? 'border-red-500' : ''
              }`}
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={`w-full p-2 rounded bg-gray-200 border border-gray-300 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Project Name"
            className={`w-full p-2 rounded bg-gray-200 border border-gray-300 ${
              errors.project ? 'border-red-500' : ''
            }`}
          />
          {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}

          <p className="text-xs text-gray-500">
            By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
          </p>
          
          <button
            type="submit"
            className="w-full p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </button>

          {submissionStatus === 'Success' && <p className="text-green-500 mt-2">Your message has been sent!</p>}
          {submissionStatus === 'Error' && <p className="text-red-500 mt-2">There was an error sending your message. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
