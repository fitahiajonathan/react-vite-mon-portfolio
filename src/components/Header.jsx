  import { useState, useEffect } from "react";
  import { FiMenu, FiX } from "react-icons/fi";
  import { FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
  import { motion, AnimatePresence } from "framer-motion";

  export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const [scrolled, setScrolled] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    const navItems = [
      { name: "Accueil", href: "#home" },
      { name: "Projets", href: "#projects" },
      { name: "Compétences", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
      setHasMounted(true);
      const handleScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      }, { threshold: 0.5 });
      sections.forEach((section) => observer.observe(section));
      return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const handleLinkClick = (href) => {
      setIsOpen(false);
      setActiveLink(href);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!hasMounted) return null;

    return (
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 10 }}
        className={`fixed w-full z-50 ${
          scrolled ? "py-2 bg-gray-900/95 backdrop-blur-sm" : "py-4 bg-gray-900/90"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-3xl font-bold flex items-center"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-indigo-500">J</span>
              <span className="text-white">Portfolio</span>
            </motion.a>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Liens */}
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`text-lg font-medium transition-colors ${
                    activeLink === item.href
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "text-gray-300 hover:text-indigo-400"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Réseaux sociaux sur PC*/}
              <div className="flex items-center gap-x-4 text-gray-400 ">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors duration-200">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors duration-200">
                  <FaInstagram size={20} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors duration-200">
                  <FaWhatsapp size={20} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6e5494] transition-colors duration-200">
                  <FaGithub size={20} />
                </a>
              </div>
            </nav>

            {/* Bouton Menu Mobile */}
            <motion.button
              className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </motion.button>
          </div>

          {/* Menu Mobile */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-gray-800 py-2 rounded-lg shadow-xl"
              >
                {/* Liens */}
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`block px-6 py-3 text-lg ${
                      activeLink === item.href
                        ? "text-indigo-500 font-medium bg-gray-700/50"
                        : "text-gray-200 hover:text-indigo-400 hover:bg-gray-700/30"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Réseaux sociaux */}
                <div className="flex justify-center gap-x-5 my-4 text-gray-400">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors duration-200">
                    <FaFacebookF size={22} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors duration-200">
                    <FaInstagram size={22} />
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors duration-200">
                    <FaWhatsapp size={22} />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6e5494] transition-colors duration-200">
                    <FaGithub size={22} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    );
  }
