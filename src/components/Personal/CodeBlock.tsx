import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative text-left font-mono">
      <div className="flex items-center justify-between bg-zinc-900 text-zinc-300 px-4 py-2 border-b border-zinc-800">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">
          {language}
        </span>
        <button
          type="button"
          onClick={copyToClipboard}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-all shadow-xs ${
            copied
              ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
              : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
          }`}
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          <span>{copied ? "Copied!" : "Copy code"}</span>
        </button>
      </div>
      <pre className="bg-zinc-950 p-4 sm:p-5 overflow-x-auto text-xs leading-relaxed text-zinc-100 selection:bg-blue-900 selection:text-white">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
