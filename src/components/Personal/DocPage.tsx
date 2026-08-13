import React from "react";
import { BookOpen, Eye, Code, Terminal, Sparkles, Sliders } from "lucide-react";
import CodeBlock from "./CodeBlock";
import PropsTable from "./PropsTable";

export interface PropItem {
  prop: string;
  type: string;
  default: string;
  description: string;
}

export interface ComponentVariant {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
}

export interface DocPageProps {
  title: string;
  description: string;
  category?: string;
  usageCode: string;
  preview: React.ReactNode;
  code: string;
  propsData: PropItem[];
  variants?: ComponentVariant[];
  children?: React.ReactNode;
}

export const DocPage: React.FC<DocPageProps> = ({
  title,
  description,
  category = "Component",
  usageCode,
  preview,
  code,
  propsData,
  variants,
  children,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-10 md:gap-12 pb-16">
      {/* Header Grid Section */}
      <header className="grid grid-cols-1 gap-3 border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
            <Sparkles size={12} />
            <span>{category}</span>
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          {description}
        </p>
      </header>

      {/* Main Standardized Documentation Grid */}
      <div className="grid grid-cols-1 gap-10 md:gap-12">
        {/* 1. Usage Section */}
        <section id="usage-section" className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <BookOpen size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Usage
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Import and standard implementation pattern
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
            <CodeBlock code={usageCode} language="tsx" />
          </div>
        </section>

        {/* 2. Preview Section */}
        <section id="preview-section" className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <Eye size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Preview
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Interactive real-time demonstration
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs overflow-hidden">
            <div className="p-6 sm:p-12 flex items-center justify-center min-h-[200px] bg-zinc-50/50 dark:bg-zinc-950/40">
              {preview}
            </div>
          </div>
        </section>

        {/* 3. View Code Section */}
        <section id="view-code-section" className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <Code size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  View Code
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Source JSX configuration and event handlers
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
            <CodeBlock code={code} language="tsx" />
          </div>
        </section>

        {/* Additional Variants if provided */}
        {variants && variants.length > 0 && (
          <section id="variants-section" className="grid grid-cols-1 gap-6">
            <div className="flex items-center gap-2.5 border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                <Sliders size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Variants & Examples
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Alternative styling configurations and use cases
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {variants.map((v, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 gap-3 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60"
                >
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {v.title}
                    </h3>
                    {v.description && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {v.description}
                      </p>
                    )}
                  </div>
                  <div className="p-6 sm:p-8 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-zinc-800/60">
                    {v.preview}
                  </div>
                  <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                    <CodeBlock code={v.code} language="tsx" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. API Reference Section */}
        <section id="api-reference-section" className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                <Terminal size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  API Reference
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Component properties, parameter types, and default values
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <PropsTable data={propsData} />
          </div>
        </section>

        {/* Custom Extra Children if needed */}
        {children}
      </div>
    </div>
  );
};

export default DocPage;
