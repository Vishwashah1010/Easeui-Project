import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { LayoutTemplate } from "lucide-react";
import { useNavigate } from "react-router";

export const TemplatesPage = () => {
  const navigate = useNavigate();

  const templates = [
    {
      title: "SaaS Landing Page",
      description: "Hero header, feature grids, animated pricing cards, and interactive modal signups.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Analytics Dashboard",
      description: "Dark-themed metric stacks, responsive grid layouts, and quick action tooltips.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "E-Commerce Showcase",
      description: "Fluid product image carousel, floating label search inputs, and modern item cards.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 py-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <LayoutTemplate size={14} /> Ready-Made Layouts
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Starter Templates powered by EaseUI
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore complete production-ready examples and starter blueprints assembled with EaseUI components.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {templates.map((tpl, i) => (
          <Card
            key={i}
            title={tpl.title}
            description={tpl.description}
            image={tpl.image}
            variant="light"
            hoverAnimation="float3D"
            footer={
              <Button
                variant="primary"
                size="sm"
                hoverAnimation="jiggle"
                onClick={() => navigate("/components/card")}
                className="w-full"
              >
                Preview Components
              </Button>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
