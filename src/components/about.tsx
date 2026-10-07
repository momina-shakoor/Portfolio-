function About() {
  return (
    <div className="border-b border-black bg-amber-50 flex flex-col lg:flex-row justify-center items-center py-12 sm:py-16 lg:py-20 px-5 sm:px-8 gap-10 lg:gap-0">

      {/* Left */}
      <div className="w-full lg:w-1/2 max-w-2xl lg:pl-12 xl:pl-20">
        <h1 className="font-extrabold text-3xl">About Me</h1>

        <div className="flex items-start justify-start py-8 sm:py-10 gap-6 sm:gap-8">
          
          <div>
            <h1 className="text-3xl text-[#6d3df5]">4</h1>
            <h2 className="text-gray-600 text-sm sm:text-base">
              Core Technologies
            </h2>
          </div>

          <div>
            <h1 className="text-3xl text-[#f24400]">∞</h1>
            <h2 className="text-gray-600 text-sm sm:text-base">
              Things to Build
            </h2>
          </div>

          <div>
            <h1 className="text-3xl text-[#2f6bff]">1</h1>
            <h2 className="text-gray-600 text-sm sm:text-base">
              Developer
            </h2>
            <h2 className="text-gray-600 text-sm sm:text-base">
              Getting Better Every Day
            </h2>
          </div>

        </div>
      </div>


      {/* Right */}
      <div className="w-full lg:w-1/2 max-w-2xl">
        
        <div className="text-gray-600 py-3 border-b border-gray-600">
          <p className="mb-2">
            I'm a full-stack developer focused on building fast, reliable and
            maintainable web applications with PostgreSQL, Express, React and
            Node.js
          </p>

          <p className="mt-3">
            I enjoy turning ideas into clean, functional products with readable
            code, accessible interfaces and thoughtful user experience. I'm
            continuously learning, improving my skills and looking for
            opportunities to build software that solves real problems.
          </p>
        </div>

        <div className="py-3">
          <h1 className="font-semibold text-blue-950">
            Tech I work with
          </h1>

          <div className="flex flex-wrap items-start gap-3 sm:gap-4 py-3">
            
            <div className="border border-[#6d3df5] p-3 rounded-lg text-[#6d3df5] hover:cursor-pointer hover:text-[#f24400] hover:border-[#f24400]">
              PostgreSQL
            </div>

            <div className="border border-[#6d3df5] p-3 rounded-lg text-[#6d3df5] hover:cursor-pointer hover:text-[#f24400] hover:border-[#f24400]">
              Express
            </div>

            <div className="border border-[#6d3df5] p-3 rounded-lg text-[#6d3df5] hover:cursor-pointer hover:text-[#f24400] hover:border-[#f24400]">
              React
            </div>

            <div className="border border-[#6d3df5] p-3 rounded-lg text-[#6d3df5] hover:cursor-pointer hover:text-[#f24400] hover:border-[#f24400]">
              Node.js
            </div>

            <div className="border border-[#6d3df5] p-3 rounded-lg text-[#6d3df5] hover:cursor-pointer hover:text-[#f24400] hover:border-[#f24400]">
              Tailwind CSS
            </div>

            <div className="border border-[#6d3df5] p-3 rounded-lg text-[#6d3df5] hover:cursor-pointer hover:text-[#f24400] hover:border-[#f24400]">
              Typescript
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default About;