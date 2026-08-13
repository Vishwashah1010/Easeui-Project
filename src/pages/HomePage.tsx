

import { useNavigate } from "react-router";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Input } from "@/components/Input/Input";
import { Sparkles, ArrowRight, Layers, Zap, Shield, Play } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

const HomePage = () => {
  const navigate = useNavigate();

  const installCode = `npm install dev-ease-ui`;
  const quickStartCode = `import { Button, Card, Modal, Input } from "dev-ease-ui";
import "dev-ease-ui/style.css";

export default function App() {
  return (
    <Card
      title="Welcome to EaseUI"
      description="Animated React UI library with GSAP and Tailwind CSS."
      footer={
        <Button variant="primary" hoverAnimation="jiggle">
          Get Started
        </Button>
      }
    />
  );
}`;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
          <Sparkles size={16} />
          <span>Modern React Component Library</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Build fluid, animated interfaces with{" "}
          <span className="text-blue-600 dark:text-blue-400">EaseUI</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          A collection of accessible, highly customizable, and GSAP-animated
          UI components tailored for fast React applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            hoverAnimation="bounce"
            onClick={() => navigate("/components/button")}
            className="flex items-center gap-2"
          >
            Explore Components <ArrowRight size={18} />
          </Button>

          <Button
            variant="outline"
            size="lg"
            hoverAnimation="scale"
            onClick={() => navigate("/components/card")}
          >
            View Live Demos
          </Button>
        </div>
      </section>

      {/* Interactive Showcase Preview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-zinc-900/60 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <Play size={14} /> Interactive Preview
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Components with built-in physics & GSAP motions
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Every component comes with configurable entrance and hover micro-interactions, dark mode readiness, and Radix slot polymorphism.
          </p>

          <div className="space-y-4 pt-2">
            <Input
              label="Interactive Search Input"
              placeholder="Type to test input styling..."
              size="md"
            />
            <div className="flex gap-3 flex-wrap">
              <Button variant="primary" hoverAnimation="jiggle" size="sm">
                Jiggle Button
              </Button>
              <Button variant="secondary" hoverAnimation="bounce" size="sm">
                Bounce Effect
              </Button>
              <Button variant="dark" hoverAnimation="scale" size="sm">
                Scale Dark
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <Card
              title="Interactive Card Demo"
              description="Hover or click over this card to preview 3D float interactions powered by GSAP."
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
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
                  Inspect Component
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
            <Zap size={20} />
          </div>
          <h3 className="text-lg font-bold">GSAP Powered</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            High performance spring and easing animations for entrance and hover gestures.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
            <Layers size={20} />
          </div>
          <h3 className="text-lg font-bold">Class Variance Authority</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Structured variants and flexible sizes configured through Tailwind CSS utility classes.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <Shield size={20} />
          </div>
          <h3 className="text-lg font-bold">Fully Typed</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            100% TypeScript with complete props autocompletion, forwardRef, and slot polymorphism.
          </p>
        </div>
      </section>

      {/* Quick Start & Installation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Quick Start</h2>
        <div className="space-y-4">
          <CodeBlock code={installCode} language="bash" />
          <CodeBlock code={quickStartCode} language="tsx" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
