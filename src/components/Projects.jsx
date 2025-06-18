import { motion } from "framer-motion";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

const imageProject = [
  {
    image: image1,
    titre: "Portfolio React",
    description: "Mon portfolio personnel réalisé avec React.js et TailwindCSS.",
    link: "https://monportfolio-react.example.com"
  },
  {
    image: image2,
    titre: "E-commerce Vue",
    description: "Site de vente en ligne développé avec Vue.js et Firebase.",
    link: "https://mon-ecommerce-vue.example.com"
  },
  {
    image: image3,
    titre: "Application ToDo",
    description: "Application de gestion de tâches avec MongoDB, Express et Node.",
    link: "https://mon-todo-app.example.com"
  },
  {
    image: image4,
    titre: "Landing Page HTML/CSS",
    description: "Une simple page d’accueil optimisée pour le référencement.",
    link: "https://landingpage.example.com"
  },
  {
    image: image5,
    titre: "Blog Next.js",
    description: "Blog dynamique avec Next.js et contenu généré statiquement.",
    link: "https://blog-nextjs.example.com"
  },
  {
    image: image6,
    titre: "Dashboard Admin",
    description: "Interface admin avec React et Chart.js pour les statistiques.",
    link: "https://dashboard-admin.example.com"
  }
];

const ProjectCard = ({ image, titre, description, link }) => {
  return (
    <motion.article
      className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500 rounded-full blur-3xl opacity-50 -top-5 right-20"></div>
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={titre}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-indigo-500 bg-opacity-50 opacity-0
              group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-indigo-500">
              Live preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{titre}</h3>
            <p className="text-gray-200 text-base">{description}</p>
          </header>
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-80px)] bg-gray-900 py-20 px-6 overflow-hidden"
    >
      <h2 className="text-center font-bold text-4xl md:text-5xl mb-16 text-white">
        Mes <span className="text-indigo-500">Projects</span>
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageProject.map((card, index) => (
            <ProjectCard
              key={index}
              image={card.image}
              titre={card.titre}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
