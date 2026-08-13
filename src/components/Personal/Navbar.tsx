import { useState, useEffect, useRef } from "react";
import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, X, ArrowRight, Layers, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";

const componentsList = [
  { name: "Button", path: "/components/button", desc: "Interactive button with variants, sizes, and GSAP animations" },
  { name: "Card", path: "/components/card", desc: "Animated card with 3D float physics, images, and custom footers" },
  { name: "Modal", path: "/components/modal", desc: "Dialog overlay with light/dark/outline themes and transitions" },
  { name: "Input", path: "/components/input", desc: "Forms inputs: password, floating label, animated, and number" },
  { name: "Navbar", path: "/components/navbar", desc: "Responsive navigation bar with branding, links, and drawer" },
  { name: "Carousel", path: "/components/carousel", desc: "Multi-slide image and content slider with autoplay and dots" },
  { name: "Tooltip", path: "/components/tooltip", desc: "Contextual hover/focus popovers with 4-way placements" },
  { name: "Layout", path: "/components/layout", desc: "Responsive Grid, Container, Stack, and Section utilities" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const filteredComponents = componentsList.filter((comp) =>
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectComponent = (path: string) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery("");
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="h-16 w-full flex items-center justify-between px-4 sm:px-8 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40 transition-colors">
        {/* Brand & Search */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 font-bold text-xl cursor-pointer tracking-tight text-blue-600 dark:text-blue-400 select-none group"
          >
            <div className="p-1.5 rounded-lg bg-blue-600 text-white dark:bg-blue-500 shadow-xs group-hover:scale-105 transition-transform">
              <Layers size={18} />
            </div>
            <span className="text-zinc-900 dark:text-zinc-50 font-extrabold tracking-tight">
              Ease<span className="text-blue-600 dark:text-blue-400">UI</span>
            </span>
          </div>

          {/* Search Trigger Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex items-center bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-lg px-3 py-1.5 text-xs sm:text-sm border border-zinc-200 dark:border-zinc-800 transition-all gap-2.5 shadow-2xs group"
          >
            <Search size={15} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <span className="hidden sm:inline">Search components...</span>
            <span className="sm:hidden">Search</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded shadow-2xs">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          <li>
            <button
              onClick={() => navigate("/components/button")}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                location.pathname.startsWith("/components")
                  ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              }`}
            >
              Components
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/about")}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                location.pathname === "/about"
                  ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              }`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/templates")}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                location.pathname === "/templates"
                  ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              }`}
            >
              Templates
            </button>
          </li>

          {/* Theme Toggle Button */}
          <li className="ml-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
            <button
              type="button"
              aria-label="Toggle Theme"
              className="cursor-pointer p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              onClick={() => dispatch(toggleTheme())}
            >
              {mode === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-zinc-700" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => dispatch(toggleTheme())}
          >
            {mode === "dark" ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-zinc-700" />
            )}
          </button>

          <button
            type="button"
            aria-label="Toggle Navigation"
            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 space-y-2 z-30 shadow-lg animate-fadeIn">
          <button
            onClick={() => {
              navigate("/components/button");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left font-medium py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-sm text-zinc-800 dark:text-zinc-200"
          >
            Components Catalog
          </button>
          <button
            onClick={() => {
              navigate("/about");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left font-medium py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-sm text-zinc-800 dark:text-zinc-200"
          >
            About EaseUI
          </button>
          <button
            onClick={() => {
              navigate("/templates");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left font-medium py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-sm text-zinc-800 dark:text-zinc-200"
          >
            Starter Templates
          </button>
        </div>
      )}

      {/* Search Modal Backdrop & Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSearchOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden z-10 animate-fadeIn">
            <div className="flex items-center px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
              <Search size={18} className="text-zinc-400 mr-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search component documentation..."
                className="w-full bg-transparent outline-hidden text-sm placeholder-zinc-400 text-zinc-900 dark:text-zinc-100"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filteredComponents.length > 0 ? (
                <div className="space-y-1">
                  {filteredComponents.map((comp) => (
                    <button
                      key={comp.name}
                      type="button"
                      onClick={() => handleSelectComponent(comp.path)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800/80 text-left transition-colors group"
                    >
                      <div>
                        <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {comp.name}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          {comp.desc}
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-sm text-zinc-500">
                  No components found matching &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </div>

            <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 text-[11px] text-zinc-400 flex justify-between">
              <span>Press ESC to close</span>
              <span>8 Components Available</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
