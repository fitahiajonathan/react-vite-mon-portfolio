import {
  FaReact,
  FaUser,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Composant animé
const FadeUpBox = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-80px)] bg-gray-900 py-20 px-6 overflow-hidden"
    >
      <FadeUpBox>
        <h2 className="text-center font-bold text-4xl md:text-5xl mb-16 text-white">
          Contactez-<span className="text-indigo-500">nous</span>
        </h2>
      </FadeUpBox>

      <div className="flex flex-col justify-center items-center gap-12 lg:gap-16">
        {/* Icône React animée */}
        <FadeUpBox delay={0.2}>
          <div className="hidden lg:block animate-spin-slow">
            <FaReact className="text-indigo-400 text-9xl" />
          </div>
        </FadeUpBox>

        {/* Formulaire */}
        <div className="w-full max-w-2xl">
          <FadeUpBox delay={0.3}>
            <div className="mb-6">
              <label className="text-lg font-medium text-gray-300 flex items-center gap-2">
                <FaUser className="text-indigo-500" />
                Nom
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full py-3 px-5 rounded-lg text-gray-200 mt-2 bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
              />
            </div>
          </FadeUpBox>

          <FadeUpBox delay={0.4}>
            <div className="mb-6">
              <label className="text-lg font-medium text-gray-300 flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" />
                Email
              </label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full py-3 px-5 rounded-lg text-gray-200 mt-2 bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
              />
            </div>
          </FadeUpBox>

          <FadeUpBox delay={0.5}>
            <div className="mb-8">
              <label className="text-lg font-medium text-gray-300 flex items-center gap-2">
                <FaComment className="text-indigo-500" />
                Message
              </label>
              <textarea
                placeholder="Votre message"
                rows={5}
                className="w-full py-3 px-5 rounded-lg text-gray-200 mt-2 bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
              ></textarea>
            </div>
          </FadeUpBox>

          <FadeUpBox delay={0.6}>
            <button
  className="w-full flex items-center justify-center gap-2 
             bg-indigo-600 hover:bg-indigo-700 text-white 
             font-bold py-3 px-6 rounded-lg 
             transition-all duration-300 ease-in-out 
             transform hover:-translate-y-1 hover:translate-x-2 
             active:translate-y-0 
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
  Envoyer <FaPaperPlane />
</button>
          </FadeUpBox>
        </div>
      </div>
    </section>
  );
}
