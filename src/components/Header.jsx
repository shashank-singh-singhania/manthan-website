"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: "about-manthan", label: "About Manthan",    type: "scroll" },
    { id: "about-kiet",    label: "About KIET",       type: "scroll" },
    { id: "/rules",        label: "Rules & Regulations", type: "link"   },
    { id: "/faqs",         label: "FAQs",             type: "link"   },
    { id: "/contact",      label: "Contact Us",       type: "link"   },
  ];

  const handleNavigation = (item) => {
    setIsMenuOpen(false);
    if (item.type === "scroll") {
      if (pathname !== "/") {
        router.push(`/#${item.id}`);
      } else {
        const section = document.getElementById(item.id);
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(item.id);
    }
  };

  useEffect(() => {
    if (pathname !== "/") { setActiveSection(pathname); return; }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let current = "home";
      menuItems.forEach((item) => {
        if (item.type === "scroll") {
          const el = document.getElementById(item.id);
          if (el && window.scrollY >= el.offsetTop - 80) current = item.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-lg border-b border-primary/20"
          : "border-b border-transparent"
      }`}
      style={{
        background: isScrolled
          ? "rgba(13, 9, 32, 0.95)"
          : "rgba(13, 9, 32, 0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Top gold line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-primary via-gold to-accent" />

      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              className="flex items-center px-3 py-1.5 rounded-xl transition-all duration-200 group-hover:shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 0 0 1px rgba(245,197,24,0.2)",
              }}
            >
              <img
                src="/images/kietLogo.jpg"
                alt="KIET Deemed To Be University"
                className="h-8 w-auto transition-all duration-200"
              />
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id || pathname === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-gold bg-gold/10 border border-gold/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <a
              href="https://quiz.kiet.edu/login/index.php"
              target="_blank"
              rel="noreferrer"
              className="ml-3 px-5 py-2 text-sm font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-gold/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)", color: "#0d0920" }}
            >
              Attempt Mock Quiz
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 animate-fadeIn">
            <div className="py-3 space-y-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id || pathname === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`block w-full text-left px-5 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-gold bg-gold/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <a
                href="https://quiz.kiet.edu/login/index.php"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-5 py-3 text-sm font-bold rounded-lg mt-2"
                style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)", color: "#0d0920" }}
              >
                Attempt Mock Quiz
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
