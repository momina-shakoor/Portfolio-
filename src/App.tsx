import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Certificates from "./components/certifications";
import ScrollToTopButton from "./components/scrollToTopButton";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
