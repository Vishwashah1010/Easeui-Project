import { useState } from "react";
import { Carousel, type CarouselSlide } from "@/components/Carousel/Carousel";
import DocPage from "@/components/Personal/DocPage";
import { Button } from "@/components/Button/Button";

const sampleSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Mountain Expedition",
    description: "Explore the highest peaks and scenic alpine landscapes.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Coastal Horizons",
    description: "Serene ocean breezes and vibrant sunsets along the coastline.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Urban Architecture",
    description: "Futuristic skyscrapers and modern structural aesthetics.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
];

const customContentSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <div className="text-center space-y-3 max-w-md">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
          Slide 1
        </span>
        <h4 className="text-2xl font-bold">Interactive Custom Content</h4>
        <p className="text-sm opacity-80">
          Carousels support rich React elements, custom layouts, and interactive buttons.
        </p>
        <Button variant="primary" size="sm" hoverAnimation="bounce">
          Action Button
        </Button>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="text-center space-y-3 max-w-md">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          Slide 2
        </span>
        <h4 className="text-2xl font-bold">Fluid Transitions</h4>
        <p className="text-sm opacity-80">
          Powered by smooth fading transitions and responsive aspect ratios.
        </p>
        <Button variant="secondary" size="sm" hoverAnimation="scale">
          Learn More
        </Button>
      </div>
    ),
  },
];

const CarouselPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const usageCode = `import { Carousel } from "@/components/Carousel";

const slides = [
  {
    id: 1,
    title: "Mountain Expedition",
    description: "Explore the highest peaks and scenic alpine landscapes.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Coastal Horizons",
    description: "Serene ocean breezes and vibrant sunsets.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Example() {
  return (
    <Carousel
      slides={slides}
      variant="default"
      autoPlay={true}
      interval={4000}
      aspectRatio="video"
      showArrows={true}
      showDots={true}
    />
  );
}`;

  const previewCode = `<Carousel
  slides={sampleSlides}
  variant="default"
  size="lg"
  autoPlay={true}
  interval={4000}
  aspectRatio="video"
  showArrows={true}
  showDots={true}
  hoverAnimation="scale"
/>`;

  const variants = [
    {
      title: "Custom React Content Slides",
      description: "Render arbitrary React components, form triggers, or styled cards inside slide items.",
      preview: (
        <div className="w-full flex justify-center py-2">
          <Carousel
            slides={customContentSlides}
            variant="outline"
            size="md"
            aspectRatio="auto"
            showArrows={true}
            showDots={true}
          />
        </div>
      ),
      code: `const customSlides = [
  {
    id: 1,
    content: (
      <div className="text-center space-y-3">
        <h4 className="text-2xl font-bold">Custom React Node Slide</h4>
        <Button variant="primary">Take Action</Button>
      </div>
    ),
  },
];

<Carousel slides={customSlides} variant="outline" aspectRatio="auto" />`,
    },
  ];

  const propsData = [
    {
      prop: "slides",
      type: "CarouselSlide[]",
      default: "[]",
      description: "Array of slide objects with title, description, image, or custom content node.",
    },
    {
      prop: "variant",
      type: '"default" | "dark" | "light" | "outline" | "glass"',
      default: '"default"',
      description: "Visual container theme styling for the carousel.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "full"',
      default: '"md"',
      description: "Max-width container size of the carousel wrapper.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically cycle through slides on an interval (pauses on hover).",
    },
    {
      prop: "interval",
      type: "number",
      default: "4000",
      description: "Delay in milliseconds between automatic slide transitions.",
    },
    {
      prop: "aspectRatio",
      type: '"video" | "square" | "wide" | "auto"',
      default: '"video"',
      description: "Aspect ratio styling for slide media rendering.",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Whether to render navigation next/prev arrow buttons.",
    },
    {
      prop: "showDots",
      type: "boolean",
      default: "true",
      description: "Whether to display bottom indicator pagination dots.",
    },
    {
      prop: "onSlideChange",
      type: "(index: number) => void",
      default: "undefined",
      description: "Callback invoked whenever the active slide index changes.",
    },
  ];

  return (
    <DocPage
      title="Carousel"
      description="Fluid slide showcase component supporting auto-advancing timers, pagination indicators, gestures, and custom React elements."
      category="Interactive Slider"
      usageCode={usageCode}
      preview={
        <div className="w-full flex flex-col items-center gap-3 py-2">
          <Carousel
            slides={sampleSlides}
            variant="default"
            size="lg"
            autoPlay={true}
            interval={4000}
            aspectRatio="video"
            showArrows={true}
            showDots={true}
            hoverAnimation="scale"
            onSlideChange={(i) => setActiveSlide(i)}
          />
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Active slide: <span className="font-semibold text-blue-600 dark:text-blue-400">{activeSlide + 1} / {sampleSlides.length}</span>
          </p>
        </div>
      }
      code={previewCode}
      propsData={propsData}
      variants={variants}
    />
  );
};

export default CarouselPage;
