import udemyCertificate from "../assets/udemycertificate.png";

type Certificate = {
  title: string;
  issuingOrganization: string;
  date: string;
  technologies: string[];
  verificationUrl: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    title: "Full Stack Web Development Bootcamp",
    issuingOrganization: "Udemy",
    date: "November 25, 2025",
    technologies: ["PostgreSQL", "Express.js", "React", "Node.js"],
    verificationUrl:
      "https://www.udemy.com/certificate/UC-01c1abb2-e30f-471b-b199-2dfe97826c49/",
    image: udemyCertificate,
  },
];

function Certificates() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="bg-[#f6f1e7] px-5 py-20 text-[#1c1638] sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-semibold font-mono uppercase tracking-[0.2em] text-[#6d3df5]">
            Learning & Growth
          </p>

          <h2
            id="certifications-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Certifications
            <span className="text-[#6d3df5]">.</span>
          </h2>

          <p className="mt-4 font-mono max-w-xl text-base leading-7 text-[#5b5675] sm:text-lg">
            Courses I have completed to strengthen my skills and keep growing as
            a developer.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.verificationUrl}
              className="group overflow-hidden rounded-2xl border border-[#1c1638]/10 bg-[#ece4d3] shadow-[0_8px_24px_-12px_#1c1638] transition-all duration-300 hover:-translate-y-1 hover:border-[#6d3df5] hover:shadow-[0_18px_35px_-15px_#1c1638]"
            >
              <div className="overflow-hidden border-b border-[#1c1638]/10 bg-[#ffffff] p-4 sm:p-6">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate issued by ${certificate.issuingOrganization}`}
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col p-5 sm:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full font-mono bg-[#6d3df5]/10 px-3 py-1 text-xs font-semibold text-[#6d3df5]">
                    {certificate.issuingOrganization}
                  </span>

                  <time
                    dateTime="2025-11-25"
                    className="text-xs font-mono font-medium text-[#5b5675]"
                  >
                    {certificate.date}
                  </time>
                </div>

                <h3 className="text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  {certificate.title}
                </h3>

                <ul
                  aria-label="Technologies covered"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {certificate.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md font-mono border border-[#1c1638]/10 bg-[#f6f1e7] px-3 py-1.5 text-xs font-medium text-[#5b5675] transition-colors duration-200 hover:border-[#6d3df5] hover:text-[#6d3df5] sm:text-sm"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                {/* Verification link */}
                <div className="mt-7 border-t border-[#1c1638]/10 pt-5">
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#6d3df5] px-5 py-3 text-sm font-semibold text-[#ffffff] transition-colors duration-200 hover:bg-[#e8590c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6bff]"
                  >
                    Verify Certificate
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
