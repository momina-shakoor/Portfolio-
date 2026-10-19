import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <div className="relative flex items-center justify-between bg-amber-50 px-5 py-4 font-mono sm:px-8 md:px-12 lg:px-20">
        <div className="text-sm text-purple-600 md:ml-5 lg:ml-10">
          <h1>&lt;momina.dev/&gt;</h1>
        </div>

        <div className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              scrollToSection("about");
            }}
          >
            About
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            Projects
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              scrollToSection("certifications");
            }}
          >
            Certifications
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            Contact
          </div>
        </div>

        <div className="hidden md:block">
          <a
            className="rounded-md bg-[#6d3df5] px-3 py-1 text-md text-white hover:bg-[#e8590c] cursor-pointer"
            href="/mominashakoor.pdf"
            download="Momina Shakoor.pdf"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl sm:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute left-0 top-full z-10 flex w-full flex-col items-start gap-3 bg-amber-50 py-5 px-4 text-sm:hidden">
            <div
              className="text-gray-600 hover:cursor-pointer"
              onClick={() => {
                scrollToSection("about");
                setMenuOpen(false);
              }}
            >
              About
            </div>
            <div
              className="text-gray-600 hover:cursor-pointer"
              onClick={() => {
                scrollToSection("project");
                setMenuOpen(false);
              }}
            >
              Projects
            </div>
            <div
              className="text-gray-600 hover:cursor-pointer"
              onClick={() => {
                scrollToSection("certifications");
                setMenuOpen(false);
              }}
            >
              Certifications
            </div>
            <div
              className="text-gray-600 hover:cursor-pointer"
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
            >
              contact
            </div>
            <a
              href="/mominashakoor.pdf"
              download="Momina Shakoor.pdf"
              className="text-[#6d3df5] hover:cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </div>

      <div className="relative z-20 flex w-full items-center justify-center border-b border-black">
        <div className="h-1 flex-1 bg-[#6d3df5]" />
        <div className="h-1 flex-1 bg-[#f24400]" />
        <div className="h-1 flex-1 bg-[#2f6bff]" />
      </div>
    </div>
  );
}

export default Navbar;
