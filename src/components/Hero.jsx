import { motion } from "framer-motion";
import Header from "./Header";
import react from "../assets/react.svg";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Section Hero simple */}
      <section
        className="flex flex-col pt-28 md:flex-row gap-8 md:gap-[30%] items-center container mx-auto min-h-[calc(100vh-80px)] px-4 py-8 md:py-0"
        id="home"
      >
        <div className="px-6 order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Bonjour
          </motion.h1>
          <p className="text-lg text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis tempora sunt inventore autem a ipsum nostrum at debitis
            qui corrupti!
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-gray-300 mb-8"
          >
            Bienvenue sur mon portfolio
          </motion.p>
          <button className="bg-indigo-500 hover:bg-indigo-700 py-4 px-8 rounded font-bold text-lg transition-all duration-300 hover:translate-x-2">
            Télécharger Cv
          </button>
        </div>

        <img
          src={react}
          alt="monImage"
          className="size-[200px] md:size-[18%] order-1 md:order-2 mb-8 md:mb-0"
        />
      </section>
    </div>
  );
}
