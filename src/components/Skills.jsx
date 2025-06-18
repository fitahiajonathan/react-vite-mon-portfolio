import { motion } from "framer-motion";
import { SiReact, SiJavascript, SiTailwindcss, SiLaravel } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      icon: <SiReact className="text-4xl text-cyan-400" />,
      title: "React JS",
      description: "Développement d'applications modernes avec React",
      details: "Hooks, Context API, React Router, Composants réutilisables"
    },
    {
      icon: <SiJavascript className="text-4xl text-yellow-400" />,
      title: "JavaScript",
      description: "Expérience avancée en JavaScript ES6+",
      details: "Async/Await, Promises, Manipulation du DOM, API Fetch"
    },
    {
      icon: <SiTailwindcss className="text-4xl text-sky-400" />,
      title: "Tailwind CSS",
      description: "Stylisation efficace avec Tailwind",
      details: "Utility-first, Design responsive, Dark mode, Animations"
    },
    {
      icon: <SiLaravel className="text-4xl text-red-500" />,
      title: "Laravel",
      description: "Développement back-end avec Laravel",
      details: "Eloquent ORM, Blade, Artisan, Système de routing"
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gradient-to-br bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center font-bold text-4xl md:text-5xl mb-16 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mes <span className="text-indigo-500">compétences</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card group bg-gray-800 hover:bg-gray-700 overflow-hidden shadow-lg rounded-lg transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center p-8">
                <motion.div
                  className="icon-container mb-6 p-4 rounded-full bg-gray-900 group-hover:bg-cyan-900/20 transition-colors duration-300"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{skill.description}</p>
                <div className="mt-auto w-full">
                  <div className="text-sm text-cyan-400 font-mono p-3 bg-gray-900/50 rounded-lg">
                    {skill.details}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
