import type { ReactNode } from "react";

function Hero(){

    const lines: string[] = [
        'const developer = {',
        '  name: "Momina Shakoor",',
        '  stack: ["PostgreSQL", "Express", "React", "Node"],',
        '  focus: "fast, accessible web apps",',
        '  openToWork: true,',
        '};',
        '',
        '> npm run hire-me',
    ];

    function colorize(line: string): ReactNode {
        if(line.startsWith(">")) return <span className="text-[#7aa2ff]">{line}</span>;
        return line.split(/("[^"]*")|\b(const|true)\b/g).filter(Boolean).map((p, i) =>
            p.startsWith('"') ? <span key={i} className="text-[#ffa45c]">{p}</span>
    : p === "const" || p === "true" ? <span key={i} className="text-white font-semibold">{p}</span>
    : p
  );

    }
    return(

       <div className="grid-bg bg-amber-50 flex flex-col items-center justify-center gap-12 border-b border-black px-6 py-12 sm:px-10 md:px-16 lg:flex-row lg:gap-10 lg:px-20 xl:px-32">
  
  
  <div className="w-full max-w-2xl lg:w-[50%]">
    <h1 className="p-2 text-[#6d3df5]">
      Available for new projects
    </h1>

    <p className="text-4xl font-extrabold leading-tight text-[#1c1638] sm:text-5xl lg:text-6xl">
      I build fast, reliable web apps from database to browser.
    </p>

    <p className="py-4 text-[#001958]">
      Hi, I'm Momina Shakoor, a full-stack developer working with
      PostgreSQL, Express, React and Node. I turn product ideas into
      clean, tested software.
    </p>

    <div className="flex flex-wrap gap-3">
      <button className="cursor-pointer rounded-md bg-[#6d3df5] px-4 py-3 text-md text-white transition-colors hover:bg-[#e8590c]">
        See my work
      </button>

      <button className="cursor-pointer rounded-md border border-gray-800 px-4 py-3 text-md text-gray-800 transition-colors hover:border-[#6d3df5] hover:text-[#6d3df5]">
        Contact me
      </button>
    </div>
  </div>


  <div className="w-full max-w-2xl min-w-0 lg:w-[50%]">
    <div className="overflow-hidden rounded-xl border-2 border-[#1c1638] bg-[#001441] shadow-[8px_8px_0_#e8590c]">

      <div className="flex items-center gap-2 border-b border-white/15 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff9a4d]" />
        <span className="h-3 w-3 rounded-full bg-[#5b8cff]" />
        <span className="h-3 w-3 rounded-full bg-[#9b7bff]" />

        <span className="ml-3 font-mono text-xs text-white/60">
          developer.js
        </span>
      </div>

      <pre className="min-h-16.25 whitespace-pre-wrap p-5 font-mono text-[13px] leading-7 text-[#e8e4f5] sm:text-sm">
        {lines.map((line, i) => (
          <div key={i}>{colorize(line) || "\u00A0"}</div>
        ))}
        <span className="caret" />
      </pre>

    </div>
  </div>

</div>
    )
}

export default Hero