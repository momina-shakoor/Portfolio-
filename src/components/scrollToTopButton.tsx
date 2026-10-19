import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set the right state if the page is already scrolled

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#6d3df5] px-4 py-3 text-white shadow-lg hover:bg-[#e8590c]"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
