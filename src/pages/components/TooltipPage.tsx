import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import DocPage from "@/components/Personal/DocPage";
import { HelpCircle, Sparkles, Heart } from "lucide-react";

const TooltipPage = () => {
  const usageCode = `import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";

export default function Example() {
  return (
    <Tooltip content="Tooltip content text" placement="top" variant="dark">
      <Button variant="outline">Hover over me</Button>
    </Tooltip>
  );
}`;

  const previewCode = `<div className="flex flex-wrap items-center justify-center gap-6 py-6">
  <Tooltip content="Tooltip displayed on Top" placement="top">
    <Button variant="outline" size="sm">Top</Button>
  </Tooltip>
  <Tooltip content="Tooltip displayed on Bottom" placement="bottom">
    <Button variant="outline" size="sm">Bottom</Button>
  </Tooltip>
  <Tooltip content="Tooltip displayed on Left" placement="left">
    <Button variant="outline" size="sm">Left</Button>
  </Tooltip>
  <Tooltip content="Tooltip displayed on Right" placement="right">
    <Button variant="outline" size="sm">Right</Button>
  </Tooltip>
</div>`;

  const variants = [
    {
      title: "Themes & Visual Variants",
      description: "Choose from dark, light, primary accent, and outline translucent themes.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
          <Tooltip content="Dark theme tooltip" variant="dark">
            <Button variant="dark" size="sm">Dark Variant</Button>
          </Tooltip>
          <Tooltip content="Light theme tooltip" variant="light">
            <Button variant="outline" size="sm">Light Variant</Button>
          </Tooltip>
          <Tooltip content="Brand accent tooltip" variant="primary">
            <Button variant="primary" size="sm">Primary Variant</Button>
          </Tooltip>
          <Tooltip content="Glassmorphic blur" variant="outline">
            <Button variant="secondary" size="sm">Outline Variant</Button>
          </Tooltip>
        </div>
      ),
      code: `<Tooltip content="Dark theme" variant="dark"><Button variant="dark">Dark</Button></Tooltip>
<Tooltip content="Light theme" variant="light"><Button variant="outline">Light</Button></Tooltip>
<Tooltip content="Brand accent" variant="primary"><Button variant="primary">Primary</Button></Tooltip>
<Tooltip content="Glass blur" variant="outline"><Button variant="secondary">Outline</Button></Tooltip>`,
    },
    {
      title: "Icon Triggers & Rich Content",
      description: "Tooltips can be attached to icons, buttons, or contain complex React children nodes.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-8 py-4">
          <Tooltip
            placement="top"
            variant="primary"
            content={
              <div className="flex items-center gap-2 py-0.5">
                <Sparkles size={14} className="text-yellow-300" />
                <span>Pro feature unlocked</span>
              </div>
            }
          >
            <Button variant="primary" size="sm" hoverAnimation="bounce">
              Rich Content Demo
            </Button>
          </Tooltip>

          <Tooltip content="Help & documentation guidelines" placement="bottom">
            <button className="p-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <HelpCircle size={18} className="text-blue-500" />
            </button>
          </Tooltip>

          <Tooltip content="Bookmark this component" placement="top" variant="dark">
            <button className="p-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <Heart size={18} className="text-rose-500" />
            </button>
          </Tooltip>
        </div>
      ),
      code: `<Tooltip content={<div className="flex items-center gap-2"><Sparkles size={14} /> Pro feature</div>} placement="top">
  <Button variant="primary">Rich Content</Button>
</Tooltip>
<Tooltip content="Help info" placement="bottom">
  <button><HelpCircle size={18} /></button>
</Tooltip>`,
    },
  ];

  const propsData = [
    {
      prop: "content",
      type: "ReactNode | string",
      default: "-",
      description: "Content displayed inside the floating tooltip popover.",
    },
    {
      prop: "placement",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Position of the tooltip relative to the trigger element.",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "outline"',
      default: '"dark"',
      description: "Visual appearance and theme styling of the tooltip container.",
    },
    {
      prop: "delay",
      type: "number",
      default: "150",
      description: "Delay in milliseconds before the tooltip appears on hover/focus.",
    },
    {
      prop: "showArrow",
      type: "boolean",
      default: "true",
      description: "Whether to display the directional arrow pointing to the trigger.",
    },
    {
      prop: "animation",
      type: '"scaleIn" | "fadeIn" | "slide" | "bounce"',
      default: '"scaleIn"',
      description: "Entrance animation effect powered by GSAP.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Trigger element that activates the tooltip on hover and focus.",
    },
  ];

  return (
    <DocPage
      title="Tooltip"
      description="Displays contextual information when a user hovers over, focuses, or taps an interactive element."
      category="Floating Popover"
      usageCode={usageCode}
      preview={
        <div className="flex flex-wrap items-center justify-center gap-6 py-6">
          <Tooltip content="Tooltip displayed on Top" placement="top">
            <Button variant="outline" size="sm">
              Top
            </Button>
          </Tooltip>

          <Tooltip content="Tooltip displayed on Bottom" placement="bottom">
            <Button variant="outline" size="sm">
              Bottom
            </Button>
          </Tooltip>

          <Tooltip content="Tooltip displayed on Left" placement="left">
            <Button variant="outline" size="sm">
              Left
            </Button>
          </Tooltip>

          <Tooltip content="Tooltip displayed on Right" placement="right">
            <Button variant="outline" size="sm">
              Right
            </Button>
          </Tooltip>
        </div>
      }
      code={previewCode}
      propsData={propsData}
      variants={variants}
    />
  );
};

export default TooltipPage;
