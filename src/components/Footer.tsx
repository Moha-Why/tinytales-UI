'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
  const helpLinks = ['My Account', 'FAQs', 'Categories', 'All Products'];
  const policyLinks = [
    'Refund Policy',
    'About Us',
    'Cancellation Policy',
    'Terms and Conditions',
    'Privacy Policy',
  ];

  const socialIcons = [
    { name: 'Facebook', Icon: FaFacebookF },
    { name: 'Twitter', Icon: FaTwitter },
    { name: 'Instagram', Icon: FaInstagram },
    { name: 'LinkedIn', Icon: FaLinkedinIn },
    { name: 'WhatsApp', Icon: FaWhatsapp },
    { name: 'Telegram', Icon: FaTelegramPlane },
  ];

  return (
    <footer
      className="relative w-full py-16 px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/footer.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#020202]/75 to-[#020202]/70"></div>

      <div className="relative z-10 max-w-7xl p-2 mx-auto flex flex-wrap justify-center md:flex-row md:flex-wrap lg:flex-nowrap md:justify-between gap-12">
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <img src="logo.svg" className='w-16 h-16' alt="" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Ipsum in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam in eos qui
            consequatur ab cum maxime.Soluta dolor quae
          </p>
        </div>

        <div className="flex flex-col w-[40%] md:w-auto">
          <h3 className="text-white font-semibold text-lg mb-6">Let Us Help</h3>
          <ul className="space-y-3">
            {helpLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-[40%] md:w-auto">
          <h3 className="text-white font-semibold text-lg mb-6">Policies</h3>
          <ul className="space-y-3">
            {policyLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-lg mb-6">Send Email</h3>
          <div className="flex gap-2 mb-8">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-rose-300 text-white rounded-full font-medium"
            >
              Send
            </motion.button>
          </div>

          <h4 className="text-white font-semibold text-base mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {socialIcons.map((social, index) => {
              const Icon = social.Icon;
              return (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <Icon className="text-sm" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;