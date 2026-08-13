import { Button } from "@/components/Button/Button";
import DocPage from "@/components/Personal/DocPage";
import { Trash2, ArrowRight } from "lucide-react";

const ButtonPage = () => {
  const usageCode = `import { Button } from "@/components/Button";

export default function Example() {
  return (
    <Button 
      variant="primary" 
      size="lg" 
      hoverAnimation="bounce"
      animation="scaleIn"
      onClick={() => console.log("Clicked!")}
    >
      Get Started
    </Button>
  );
}`;

  const previewCode = `<div className="flex gap-4 flex-wrap items-center justify-center">
  <Button animation="scaleIn" variant="primary" hoverAnimation="jiggle" size="sm">
    Jiggle Effect
  </Button>
  <Button animation="slideUp" variant="secondary" hoverAnimation="bounce" size="lg">
    Bounce Hover
  </Button>
  <Button animation="fadeIn" variant="outline" hoverAnimation="scale" size="xl">
    Scale Hover
  </Button>
  <Button animation="bounceIn" hoverAnimation="none" variant="dark" size="sm">
    Dark Theme
  </Button>
</div>`;

  const variants = [
    {
      title: "Visual Variants",
      description: "Standard visual variants tailored for primary actions, secondary triggers, alerts, and outlines.",
      preview: (
        <div className="flex gap-3 flex-wrap items-center justify-center">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="destructive" size="sm" className="gap-1.5">
            <Trash2 size={14} /> Destructive
          </Button>
          <Button variant="ghost" size="sm">Ghost</Button>
          <Button variant="dark" size="sm">Dark</Button>
          <Button variant="ok" size="sm">Success</Button>
        </div>
      ),
      code: `<Button variant="primary" size="sm">Primary</Button>
<Button variant="secondary" size="sm">Secondary</Button>
<Button variant="outline" size="sm">Outline</Button>
<Button variant="destructive" size="sm"><Trash2 size={14} /> Destructive</Button>
<Button variant="ghost" size="sm">Ghost</Button>
<Button variant="dark" size="sm">Dark</Button>
<Button variant="ok" size="sm">Success</Button>`,
    },
    {
      title: "Sizes Scale",
      description: "Adapt button scale smoothly across compact toolbars to prominent hero action targets.",
      preview: (
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <Button variant="primary" size="sm">Small (sm)</Button>
          <Button variant="primary" size="lg">Large (lg)</Button>
          <Button variant="primary" size="xl" className="gap-2">
            <span>Extra Large (xl)</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      ),
      code: `<Button variant="primary" size="sm">Small (sm)</Button>
<Button variant="primary" size="lg">Large (lg)</Button>
<Button variant="primary" size="xl">
  <span>Extra Large (xl)</span>
  <ArrowRight size={16} />
</Button>`,
    },
  ];

  const propsData = [
    {
      prop: "variant",
      type: '"primary" | "secondary" | "outline" | "destructive" | "ghost" | "dark" | "ok" | "link"',
      default: '"primary"',
      description: "The visual style variant of the button.",
    },
    {
      prop: "size",
      type: '"sm" | "lg" | "xl" | "icon" | "auto" | "full"',
      default: '"lg"',
      description: "Size scale and padding of the button.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"none"',
      description: "Initial mount entrance animation powered by GSAP.",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "Micro-interaction animation triggered on cursor hover.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Merge button behavior and classes into its immediate child element (Radix Slot).",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional custom CSS classes applied to the button element.",
    },
  ];

  return (
    <DocPage
      title="Button"
      description="Trigger actions or navigation events with built-in GSAP hover physics, entrance animations, and full variant authority."
      category="Interactive Primitive"
      usageCode={usageCode}
      preview={
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <Button
            animation="scaleIn"
            variant="primary"
            hoverAnimation="jiggle"
            size="sm"
          >
            Jiggle Effect
          </Button>
          <Button
            animation="slideUp"
            variant="secondary"
            hoverAnimation="bounce"
            size="lg"
          >
            Bounce Hover
          </Button>
          <Button
            animation="fadeIn"
            variant="outline"
            hoverAnimation="scale"
            size="xl"
          >
            Scale Hover
          </Button>
          <Button
            animation="bounceIn"
            hoverAnimation="none"
            variant="dark"
            size="sm"
          >
            Dark Theme
          </Button>
        </div>
      }
      code={previewCode}
      propsData={propsData}
      variants={variants}
    />
  );
};

export default ButtonPage;
