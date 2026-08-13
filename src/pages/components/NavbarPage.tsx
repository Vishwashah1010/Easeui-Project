import { Navbar } from "@/components/navbar/Navbar";
import DocPage from "@/components/Personal/DocPage";
import { Button } from "@/components/Button/Button";

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

export default function Example() {
  return (
    <Navbar
      variant="light"
      logo={<span className="font-bold text-xl tracking-tight text-blue-600">EaseUI</span>}
      links={[
        { label: "Home", href: "#", active: true },
        { label: "Components", href: "#" },
        { label: "Documentation", href: "#" },
      ]}
      actions={
        <Button variant="primary" size="sm">
          Get Started
        </Button>
      }
    />
  );
}`;

  const previewCode = `<Navbar
  variant="light"
  logo={<span className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">EaseUI</span>}
  links={[
    { label: "Home", href: "#", active: true },
    { label: "Components", href: "#" },
    { label: "Documentation", href: "#" },
  ]}
  actions={<Button variant="primary" size="sm">Get Started</Button>}
/>`;

  const variants = [
    {
      title: "Dark Theme Navbar",
      description: "High-contrast dark bar with subtle borders and action triggers.",
      preview: (
        <div className="w-full py-2">
          <Navbar
            variant="dark"
            logo={
              <span className="font-bold text-xl tracking-tight text-zinc-100">
                DarkNav
              </span>
            }
            links={[
              { label: "Dashboard", href: "#" },
              { label: "Analytics", href: "#" },
              { label: "Settings", href: "#" },
            ]}
            actions={
              <Button variant="outline" size="sm" className="text-white border-zinc-700">
                Profile
              </Button>
            }
          />
        </div>
      ),
      code: `<Navbar
  variant="dark"
  logo={<span className="font-bold text-xl text-zinc-100">DarkNav</span>}
  links={[
    { label: "Dashboard", href: "#" },
    { label: "Analytics", href: "#" },
  ]}
  actions={<Button variant="outline" size="sm">Profile</Button>}
/>`,
    },
    {
      title: "Glassmorphic Translucent Navbar",
      description: "Translucent backdrop with frosted glass blur effect.",
      preview: (
        <div className="w-full py-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 p-4 rounded-2xl">
          <Navbar
            variant="glass"
            logo={
              <span className="font-bold text-xl tracking-tight">
                GlassUI
              </span>
            }
            links={[
              { label: "Features", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Blog", href: "#" },
            ]}
            actions={
              <Button variant="primary" size="sm">
                Launch
              </Button>
            }
          />
        </div>
      ),
      code: `<Navbar
  variant="glass"
  logo={<span>GlassUI</span>}
  links={[{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }]}
  actions={<Button variant="primary" size="sm">Launch</Button>}
/>`,
    },
  ];

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass" | "outline"',
      default: '"light"',
      description: "Visual style variant for the navbar container.",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "Height and padding scale for the navigation bar.",
    },
    {
      prop: "logo",
      type: "ReactNode",
      default: '"EaseUI"',
      description: "Brand logo or title displayed on the left.",
    },
    {
      prop: "links",
      type: "NavLinkItem[]",
      default: "[]",
      description: "Array of navigation items with label, href, onClick, and active state.",
    },
    {
      prop: "actions",
      type: "ReactNode",
      default: "-",
      description: "Custom action buttons or profile trigger on the right side.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "none"',
      default: '"fadeIn"',
      description: "Mount entrance animation powered by GSAP.",
    },
    {
      prop: "hoverAnimation",
      type: '"scale" | "jiggle" | "bounce" | "none"',
      default: '"none"',
      description: "Micro-interaction effect triggered on navbar hover.",
    },
  ];

  return (
    <DocPage
      title="Navbar"
      description="Responsive navigation headers with brand logo slots, animated menu links, action button areas, and mobile drawer support."
      category="Navigation Header"
      usageCode={usageCode}
      preview={
        <div className="w-full py-2">
          <Navbar
            variant="light"
            logo={
              <span className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
                EaseUI
              </span>
            }
            links={[
              { label: "Home", href: "#", active: true },
              { label: "Components", href: "#" },
              { label: "Documentation", href: "#" },
            ]}
            actions={
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            }
          />
        </div>
      }
      code={previewCode}
      propsData={propsData}
      variants={variants}
    />
  );
};

export default NavbarPage;
