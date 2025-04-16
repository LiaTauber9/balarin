import { motion } from 'framer-motion';
import { FaYoutube, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

interface SocialMediaIconsProps {
  className?: string; // Allow custom container classes
}

const SocialMediaIcons = ({ className = '' }: SocialMediaIconsProps) => {
  const icons = [
    { icon: FaYoutube, link: 'https://youtube.com' },
    { icon: FaFacebook, link: 'https://facebook.com' },
    { icon: FaWhatsapp, link: 'https://whatsapp.com' },
    { icon: FaInstagram, link: 'https://instagram.com' },
    { icon: FaTiktok, link: 'https://tiktok.com' },
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {icons.map(({ icon: Icon, link }, index) => (
        <motion.a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-3xl text-white hover:text-[#FC1EB5] transition-colors duration-300"
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;









// import {motion} from 'framer-motion';
// import { FaYoutube, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

// const SocialMediaIcons = () => {
//     const icons = [
//       { icon: FaYoutube, link: 'https://youtube.com' },
//       { icon: FaFacebook, link: 'https://facebook.com' },
//       { icon: FaWhatsapp, link: 'https://whatsapp.com' },
//       { icon: FaInstagram, link: 'https://instagram.com' },
//       { icon: FaTiktok, link: 'https://tiktok.com' },
//     ];
  
//     return (
//       <header className="w-full flex justify-center space-x-6 py-4 bg-gray-900 text-white">
//         {icons.map(({ icon: Icon, link }, index) => (
//           <motion.a
//             key={index}
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2, rotate: 10 }}
//             whileTap={{ scale: 0.9 }}
//             className="text-3xl hover:text-red-500 transition-colors duration-300"
//           >
//             <Icon />
//           </motion.a>
//         ))}
//       </header>
//     );
//   };
  
//   export default SocialMediaIcons;