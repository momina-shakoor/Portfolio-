import utis from "../assets/utis.png"
import marfatalquran from "../assets/marfatalquran.png"

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Company Portfolio",
    description: "Portfolio for the company designed in React.js",
    image: utis,
    technologies: ["React", "TailwindCSS"],
    link: "https://utis.pk",
  },
  {
    title: "Quran Learning Application",
    description: "A full stack Learning platform for students and teachers",
    image: marfatalquran,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "http://marfatalquran.utis.pk",
  },
];

function Projects() {
  return (
    <section className="border-b border-black bg-amber-100 px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <article
              className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
              key={project.title}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover sm:h-56"
                  />
                ) : (
                  <div
                    className="flex h-48 items-center justify-center bg-amber-100 text-sm text-amber-800 sm:h-56"
                    aria-hidden="true"
                  >
                    Project preview
                  </div>
                )}
              </a>

              <div className="p-5 sm:p-6">
                <h2 className="text-xl text-gray-900">
                  {project.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      className="rounded-full  px-3 py-1 text-xs font-medium text-[#6d3df5] border border-[#6d3df5] hover:border-[#5e0f92] hover:text-[#5e0f92] sm:text-sm"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;