
import Header from './Header';
import Footer from './Footer';
import { FaWhatsapp, FaTwitter, FaTelegramPlane } from 'react-icons/fa';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {/* Floating Links */}
      <div className="fixed right-2 top-3/4 transform -translate-y-1/2 z-50 flex flex-col space-y-4 z-0">
        <a 
          href="https://wa.me/yourwhatsapplink" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white p-4 rounded-full shadow-lg shadow-white hover:bg-green-600 transition"
          style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}
        >
          <FaWhatsapp className="text-3xl font-bold" />
        </a>
        <a 
          href="https://twitter.com/yourtwitterlink" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg shadow-white hover:bg-blue-600 transition"
          style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}
        >
          <FaTelegramPlane className="text-3xl font-bold" />
        </a>
      </div>
    </div>
  );
}
