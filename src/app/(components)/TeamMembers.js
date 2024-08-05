// "use client";

// import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// const teamMembers = [
//   {
//     name: 'John Doe',
//     designation: 'CEO',
//     image: '/images/john.jpg',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Jane Smith',
//     designation: 'CTO',
//     image: '/images/jane.jpg',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Alice Johnson',
//     designation: 'CMO',
//     image: '/images/alice.jpg',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },

//   {
//     name: 'John Doe',
//     designation: 'CEO',
//     image: '/images/john.jpg',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Jane Smith',
//     designation: 'CTO',
//     image: '/images/jane.jpg',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Alice Johnson',
//     designation: 'CMO',
//     image: '/images/alice.jpg',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   // Add more team members as needed
// ];

// export default function MeetTheTeam() {
//   return (
//     <div className="bg-gray-900 py-16 px-4 md:px-8">
//       <div className="container mx-auto text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-lg">MEET THE TEAM</h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-12 text-shadow">
//           Get to know the amazing team behind our success.
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center items-center gap-8">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="relative bg-transparent bg-opacity-90 backdrop-blur-lg rounded-lg p-6 w-full md:w-1/3 lg:w-1/4 border border-gray-600 transform transition-transform hover:scale-105 duration-300"
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600 object-cover"
//             />
//             <h2 className="text-xl font-semibold mb-2 text-center text-white text-shadow">{member.name}</h2>
//             <p className="text-gray-300 text-center mb-4 text-shadow">{member.designation}</p>
//             <div className="flex justify-center space-x-4">
//               {member.social.linkedin && (
//                 <a href={member.social.linkedin} className="text-blue-500 hover:text-blue-700">
//                   <FaLinkedin size={24} />
//                 </a>
//               )}
//               {member.social.twitter && (
//                 <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
//                   <FaTwitter size={24} />
//                 </a>
//               )}
//               {member.social.github && (
//                 <a href={member.social.github} className="text-gray-400 hover:text-gray-600">
//                   <FaGithub size={24} />
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    designation: 'CEO',
    image: '/images/john.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Jane Smith',
    designation: 'CTO',
    image: '/images/jane.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Alice Johnson',
    designation: 'CMO',
    image: '/images/alice.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'John Doe',
    designation: 'CEO',
    image: '/images/john.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Jane Smith',
    designation: 'CTO',
    image: '/images/jane.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Alice Johnson',
    designation: 'CMO',
    image: '/images/alice.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  // Add more team members as needed
];

export default function MeetTheTeam() {
  return (
    <div id="team" className="bg-gray-900 py-20 px-4 md:px-8" >
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-lg">MEET THE TEAM</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 text-shadow">
          Get to know the amazing team behind our success.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-5 backdrop-blur-lg shadow-lg  rounded-lg p-6 w-full md:w-1/3 lg:w-1/4  transform transition-transform hover:scale-105 duration-300 shadow-lg hover:shadow-white"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2 text-center text-white text-shadow">{member.name}</h2>
            <p className="text-gray-300 text-center mb-4 text-shadow">{member.designation}</p>
            <div className="flex justify-center space-x-4">
              {member.social.linkedin && (
                <a href={member.social.linkedin} className="text-blue-500 hover:text-blue-700">
                  <FaLinkedin size={24} />
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} className="text-gray-400 hover:text-gray-600">
                  <FaGithub size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

