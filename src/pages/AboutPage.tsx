import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 py-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <Sparkles size={14} /> About EaseUI
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Crafted for fluid, accessible, motion-first UIs
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          EaseUI was built to bridge the gap between static design systems and expressive micro-interactions.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Motion with GSAP"
          description="Every component features customizable entrance animations and tactile hover physics, from spring jiggles to 3D perspective tilts."
          variant="light"
          hoverAnimation="scale"
        />

        <Card
          title="Tailwind CSS & CVA"
          description="Powered by Class Variance Authority for seamless variant and size composition with no styling overhead or CSS conflicts."
          variant="light"
          hoverAnimation="scale"
        />

        <Card
          title="Accessible Radix Slots"
          description="Built-in polymorphic `asChild` support via Radix UI Slot allows turning any component into anchors, links, or custom routing triggers."
          variant="light"
          hoverAnimation="scale"
        />

        <Card
          title="Zero Runtime Clutter"
          description="Lightweight bundle footprint with TypeScript type safety and zero unnecessary dependencies."
          variant="light"
          hoverAnimation="scale"
        />
      </section>

      <div className="text-center pt-6">
        <Button
          variant="primary"
          size="lg"
          hoverAnimation="bounce"
          onClick={() => navigate("/components/button")}
          className="inline-flex items-center gap-2"
        >
          Explore Component Catalog <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
