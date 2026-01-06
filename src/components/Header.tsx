"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { label: "Home", route: "/", icon: "/home.svg" },
  { label: "Our Category", route: "/", icon: "/category.svg" },
  { label: "About Us", route: "/", icon: "/about.svg" },
  { label: "Contact Us", route: "/", icon: "/contact.svg" },
  { label: "FAQs", route: "/", icon: "/faq.svg" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 bg-white px-[4%] lg:px-[8%] transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left Section - Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0"
            >
              <Link href="/" className="block">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="h-8 w-auto sm:h-10 lg:h-12"
                />
              </Link>
            </motion.div>

            {/* Center Section - Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.route}
                    className="flex items-center gap-2 text-text hover:text-primary transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-5 w-5"
                    />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Section - Action Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              {/* Shopping Cart */}
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="/cart" className="block">
                  <img
                    src="/cart.svg"
                    alt="Cart"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </Link>
              </motion.div>

              {/* Notification */}
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hidden sm:block"
              >
                <Link href="/notification" className="block">
                  <img
                    src="/notification.svg"
                    alt="Notifications"
                    className="h-6 w-6"
                  />
                </Link>
              </motion.div>

              {/* Heart */}
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hidden sm:block"
              >
                <Link href="/love" className="block">
                  <img
                    src="/love.svg"
                    alt="Favorites"
                    className="h-6 w-6"
                  />
                </Link>
              </motion.div>

              {/* Language Selector (Desktop) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden lg:flex items-center gap-1 text-black cursor-pointer"
              >
                <span className="font-medium">EN</span>
                <IoIosArrowDown />
              </motion.div>

              {/* User Profile */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden sm:flex items-center gap-1 text-black cursor-pointer"
              >
                <img
                  src="/user.svg"
                  alt="User profile"
                  className="h-6 w-6"
                />
                <IoIosArrowDown className="hidden lg:block" />
              </motion.div>

              {/* Burger Menu Button (Mobile) */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-black p-1"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <IoClose className="h-7 w-7" />
                ) : (
                  <HiMenuAlt3 className="h-7 w-7" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-70 sm:w-[320px] bg-white z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <IoClose className="h-6 w-6 text-black" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.route}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 text-text hover:text-primary hover:bg-gray-50 p-3 rounded-lg transition-colors"
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-5 w-5"
                        />
                        <span className="font-medium text-base">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200" />

                {/* Additional Actions */}
                <div className="space-y-4">
                  {/* Mobile-only icons */}
                  <div className="flex items-center gap-4 sm:hidden">
                    <Link
                      href="/notification"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 text-text hover:text-primary p-2"
                    >
                      <img
                        src="/notification.svg"
                        alt="Notifications"
                        className="h-6 w-6"
                      />
                      <span className="font-medium">Notifications</span>
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 sm:hidden">
                    <Link
                      href="/love"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 text-text hover:text-primary p-2"
                    >
                      <img
                        src="/love.svg"
                        alt="Favorites"
                        className="h-6 w-6"
                      />
                      <span className="font-medium">Favorites</span>
                    </Link>
                  </div>

                  {/* Language Selector */}
                  <button className="flex items-center justify-between w-full text-black hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <span className="font-medium">Language</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">EN</span>
                      <IoIosArrowDown />
                    </div>
                  </button>

                  {/* User Profile */}
                  <button className="flex items-center justify-between w-full text-black hover:bg-gray-50 p-3 rounded-lg transition-colors sm:hidden">
                    <span className="font-medium">Profile</span>
                    <div className="flex items-center gap-2">
                      <img
                        src="/user.svg"
                        alt="User profile"
                        className="h-5 w-5"
                      />
                      <IoIosArrowDown />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}