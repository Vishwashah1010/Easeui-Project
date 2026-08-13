import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Menu,
  Search,
  X,
  MousePointerClick,
  LayoutDashboard,
  Maximize2,
  TextCursorInput,
  PanelTop,
  SlidersHorizontal,
  HelpCircle,
  LayoutGrid,
  Terminal,
  Check,
  Copy,
  BookOpen,
} from "lucide-react";

interface ComponentItem {
  name: string;
  tag: string;
  category: "Actions & Forms" | "Surfaces & Layout" | "Overlays & Feedback";
  icon: React.ElementType;
}

const components: ComponentItem[] = [
  {
    name: "Button",
    tag: "Physics",
    category: "Actions & Forms",
    icon: MousePointerClick,
  },
  {
    name: "Input",
    tag: "Forms",
    category: "Actions & Forms",
    icon: TextCursorInput,
  },
  {
    name: "Card",
    tag: "3D Motion",
    category: "Surfaces & Layout",
    icon: LayoutDashboard,
  },
  {
    name: "Layout",
    tag: "Primitives",
    category: "Surfaces & Layout",
    icon: LayoutGrid,
  },
  {
    name: "Navbar",
    tag: "Navigation",
    category: "Surfaces & Layout",
    icon: PanelTop,
  },
  {
    name: "Modal",
    tag: "Dialog",
    category: "Overlays & Feedback",
    icon: Maximize2,
  },
  {
    name: "Tooltip",
    tag: "Popover",
    category: "Overlays & Feedback",
    icon: HelpCircle,
  },
  {
    name: "Carousel",
    tag: "Slider",
    category: "Overlays & Feedback",
    icon: SlidersHorizontal,
  },
];

const categories: ComponentItem["category"][] = [
  "Actions & Forms",
  "Surfaces & Layout",
  "Overlays & Feedback",
];

const ComponentLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [copiedInstall, setCopiedInstall] = useState(false);

  const filteredComponents = components.filter((item) =>
    item.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    item.tag.toLowerCase().includes(filterQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("npm i dev-ease-ui");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden animate-fadeIn"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-72 flex flex-col justify-between shrink-0
          border-r border-zinc-200 dark:border-zinc-800
          fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)] z-50
          bg-white dark:bg-zinc-900/95
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-200 ease-out
          md:translate-x-0 select-none
        `}
      >
        {/* Top Section & Search */}
        <div className="p-4 border-b border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                <BookOpen size={14} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                Components
              </span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {components.length}
              </span>
            </div>
            <button
              type="button"
              className="md:hidden p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close Sidebar"
            >
              <X size={16} />
            </button>
          </div>

          {/* Search / Filter Input */}
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter components..."
              className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-lg pl-8 pr-7 py-1.5 text-xs outline-hidden border border-zinc-200 dark:border-zinc-700/80 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 transition-all shadow-2xs"
            />
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Component Navigation List with Categories */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
          {filterQuery ? (
            /* Filtered Flat List */
            <div className="space-y-1">
              <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Matching ({filteredComponents.length})
              </div>
              {filteredComponents.map((item) => {
                const path = `/components/${item.name.toLowerCase()}`;
                const isActive =
                  location.pathname === path ||
                  (item.name === "Button" && location.pathname === "/components");
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.name}
                    onClick={() => {
                      navigate(path);
                      setSidebarOpen(false);
                    }}
                    className={`group flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer text-xs font-medium transition-all ${
                      isActive
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border-l-2 border-blue-600 dark:border-blue-400 pl-2.5"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent
                        size={15}
                        className={
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
                        }
                      />
                      <span>{item.name}</span>
                    </div>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        isActive
                          ? "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Categorized Grouping */
            categories.map((category) => {
              const categoryItems = components.filter(
                (item) => item.category === category
              );

              return (
                <div key={category} className="space-y-1">
                  <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {category}
                  </div>
                  {categoryItems.map((item) => {
                    const path = `/components/${item.name.toLowerCase()}`;
                    const isActive =
                      location.pathname === path ||
                      (item.name === "Button" && location.pathname === "/components");
                    const IconComponent = item.icon;

                    return (
                      <div
                        key={item.name}
                        onClick={() => {
                          navigate(path);
                          setSidebarOpen(false);
                        }}
                        className={`group flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer text-xs font-medium transition-all ${
                          isActive
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border-l-2 border-blue-600 dark:border-blue-400 pl-2.5"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComponent
                            size={15}
                            className={
                              isActive
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
                            }
                          />
                          <span>{item.name}</span>
                        </div>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                            isActive
                              ? "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}

          {filteredComponents.length === 0 && (
            <div className="py-8 text-center space-y-2">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                No components matching "{filterQuery}"
              </p>
              <button
                type="button"
                onClick={() => setFilterQuery("")}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Footer: Package Info & Copy Snippet */}
        <div className="p-3 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 px-1">
            <span className="font-semibold">EaseUI Library</span>
            <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              v1.0.6
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyInstall}
            className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-[11px] font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all shadow-2xs group"
          >
            <div className="flex items-center gap-1.5 truncate">
              <Terminal size={12} className="text-zinc-400 shrink-0" />
              <span className="truncate">npm i dev-ease-ui</span>
            </div>
            {copiedInstall ? (
              <Check size={12} className="text-emerald-500 shrink-0" />
            ) : (
              <Copy size={12} className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 shrink-0" />
            )}
          </button>
        </div>
      </aside>

      {/* Main Documentation Area */}
      <div className="flex-1 w-full overflow-y-auto p-4 sm:p-8 lg:p-10">
        <button
          type="button"
          aria-label="Open Components Sidebar"
          className="md:hidden mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm font-medium bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-2xs"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={16} />
          <span>Browse Components</span>
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;

