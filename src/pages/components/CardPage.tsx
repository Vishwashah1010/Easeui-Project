import { Card } from "@/components/Card/Card";
import DocPage from "@/components/Personal/DocPage";
import { Button } from "@/components";

const CardPage = () => {
  const usageCode = `import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function Example() {
  return (
    <Card
      title="Modern Animated Card"
      description="Interactive container featuring smooth GSAP cursor tracking and physics."
      image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
      variant="light"
      size="md"
      animate
      hoverAnimation="float3D"
      footer={
        <Button variant="primary" size="sm" className="w-full">
          Explore Showcase
        </Button>
      }
    />
  );
}`;

  const previewCode = `<Card
  title="Modern Animated Card"
  description="This card features realistic 3D float physics responding dynamically to cursor position."
  image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  variant="light"
  size="md"
  animate
  hoverAnimation="float3D"
  footer={
    <Button animation="scaleIn" variant="primary" hoverAnimation="jiggle" size="sm" className="w-full">
      Explore Showcase
    </Button>
  }
/>`;

  const variants = [
    {
      title: "Dark Theme Variant",
      description: "High contrast dark container with crisp borders and subtle hover reactions.",
      preview: (
        <div className="w-full max-w-sm">
          <Card
            title="Dark Surface Card"
            description="Deep zinc canvas designed for dark-mode interfaces and developer dashboards."
            image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
            variant="dark"
            size="md"
            animate
            hoverAnimation="jiggle"
            footer={
              <Button
                animation="scaleIn"
                variant="primary"
                hoverAnimation="bounce"
                size="sm"
                className="w-full"
              >
                View Details
              </Button>
            }
          />
        </div>
      ),
      code: `<Card
  title="Dark Surface Card"
  description="Deep zinc canvas designed for dark-mode interfaces."
  image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
  variant="dark"
  size="md"
  hoverAnimation="jiggle"
  footer={<Button variant="primary" size="sm" className="w-full">View Details</Button>}
/>`,
    },
    {
      title: "Elastic Spring & Outline",
      description: "Dynamic spring physics for playful and engaging content highlights.",
      preview: (
        <div className="w-full max-w-sm">
          <Card
            title="Elastic Spring Card"
            description="Hover to trigger responsive spring wobble animations powered by GSAP."
            image="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800"
            variant="outline"
            size="md"
            animate
            hoverAnimation="bounce"
            footer={
              <Button
                variant="secondary"
                hoverAnimation="scale"
                size="sm"
                className="w-full"
              >
                Interact
              </Button>
            }
          />
        </div>
      ),
      code: `<Card
  title="Elastic Spring Card"
  description="Hover to trigger responsive spring wobble animations."
  image="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800"
  variant="outline"
  size="md"
  hoverAnimation="bounce"
  footer={<Button variant="secondary" size="sm" className="w-full">Interact</Button>}
/>`,
    },
  ];

  const propsData = [
    {
      prop: "variant",
      type: `"light" | "dark" | "outline"`,
      default: `"light"`,
      description:
        "Defines the visual style of the card background and border.",
    },
    {
      prop: "hoverAnimation",
      type: `"none" | "jiggle" | "scale" | "shadowPulse" | "float3D" | "wobbleFollow"`,
      default: `"none"`,
      description:
        "Specifies the GSAP-powered hover animation for interactive motion effects.",
    },
    {
      prop: "animate",
      type: "boolean",
      default: "false",
      description:
        "When true, the card will apply an entrance animation defined by `animationType`.",
    },
    {
      prop: "animationType",
      type: `"fadeIn" | "slideUp" | "zoomIn" | "bounceIn"`,
      default: `"fadeIn"`,
      description:
        "Specifies which entrance animation to use when card mounts.",
    },
    {
      prop: "title",
      type: "string",
      default: "-",
      description: "Optional title displayed at the top of the card.",
    },
    {
      prop: "description",
      type: "string",
      default: "-",
      description: "Optional description text displayed below the title.",
    },
    {
      prop: "image",
      type: "string",
      default: "-",
      description:
        "URL of an image displayed at the top of the card with aspect ratio control.",
    },
    {
      prop: "ratio",
      type: `"square" | "16:9" | "4:3"`,
      default: `"16:9"`,
      description: "Controls the image aspect ratio for visual balance.",
    },
    {
      prop: "size",
      type: `"sm" | "md" | "lg"`,
      default: `"md"`,
      description:
        "Controls the internal padding and text size of the card content.",
    },
    {
      prop: "footer",
      type: "React.ReactNode",
      default: "-",
      description:
        "Optional footer content (e.g., buttons or links) rendered at the bottom of the card.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "If true, allows you to render the Card as a different HTML element using Radix Slot.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom class names for extended styling.",
    },
  ];

  return (
    <DocPage
      title="Card"
      description="Structured containers for grouping media, titles, descriptive body copy, and action triggers with 3D cursor physics."
      category="Interactive Surface"
      usageCode={usageCode}
      preview={
        <div className="w-full max-w-sm">
          <Card
            title="Modern Animated Card"
            description="This card features realistic 3D float physics responding dynamically to cursor position."
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
            variant="light"
            size="md"
            animate
            hoverAnimation="float3D"
            footer={
              <Button
                animation="scaleIn"
                variant="primary"
                hoverAnimation="jiggle"
                size="sm"
                className="w-full"
              >
                Explore Showcase
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

export default CardPage;
