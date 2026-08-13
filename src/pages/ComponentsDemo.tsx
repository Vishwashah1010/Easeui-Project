import React, { useState } from "react";
import { Code, Eye } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code, showCode = false }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(showCode);

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-2xs transition-colors">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-800/50">
        <div className="flex items-center gap-2">
          <Eye size={14} className="text-zinc-500 dark:text-zinc-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            Interactive Preview
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-all shadow-2xs border ${
            isCodeVisible
              ? "bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              : "bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700"
          }`}
        >
          <Code size={13} />
          <span>{isCodeVisible ? "Hide Code" : "View Code"}</span>
        </button>
      </div>

      <div className="p-6 sm:p-10 flex items-center justify-center min-h-[160px] bg-zinc-50/40 dark:bg-zinc-950/30">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-zinc-200 dark:border-zinc-800 animate-fadeIn">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
