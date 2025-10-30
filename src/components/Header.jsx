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
    { id: "about-kiet", label: "About KIET", type: "scroll" },
    { id: "about-manthan", label: "About Manthan", type: "scroll" },
    { id: "/rules", label: "Rules & Regulations", type: "link" },
    { id: "/faqs", label: "FAQs", type: "link" },
    { id: "/contact", label: "Contact Us", type: "link" },
  ];

  const handleNavigation = (item) => {
    setIsMenuOpen(false);
    if (item.type === "scroll") {
      if (pathname !== "/") {
        router.push(`/#${item.id}`);
      } else {
        const section = document.getElementById(item.id);
        if (section)
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (item.type === "link") {
      router.push(item.id);
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let current = "home";
      menuItems.forEach((item) => {
        if (item.type === "scroll") {
          const section = document.getElementById(item.id);
          if (section) {
            const top = section.offsetTop - 80;
            if (window.scrollY >= top) current = item.id;
          }
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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <button
            onClick={() => router.push("/")}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/images/kietLogo.jpg"
              alt="Logo"
              className="h-13 w-auto"
            />
          </button>

          <div className="hidden md:flex items-center space-x-1 ">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-lg cursor-pointer ${
                  activeSection === item.id || pathname === item.id
                    ? "text-primary bg-primary/10"
                    : "text-textLight hover:text-textDark"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={22} className="text-textDark" />
            ) : (
              <Menu size={22} className="text-textDark" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 animate-fadeIn">
            <div className="py-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                    activeSection === item.id || pathname === item.id
                      ? "text-primary bg-primary/10"
                      : "text-textLight hover:text-textDark hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
