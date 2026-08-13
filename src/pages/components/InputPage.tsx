import DocPage from "@/components/Personal/DocPage";
import { Input } from "@/components";
import { PasswordInput } from "@/components/Input/PasswordInput";
import {
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
  NumberInput,
} from "@/components/Input";
import { Search } from "lucide-react";

const InputPage = () => {
  const usageCode = `import { Input } from "@/components/Input";

export default function Example() {
  return (
    <Input
      label="Email Address"
      type="email"
      placeholder="jane@example.com"
      size="md"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}`;

  const previewCode = `<div className="flex flex-col gap-4 w-full max-w-md">
  <Input label="Small Scale (sm)" placeholder="Enter short text..." size="sm" />
  <Input label="Standard Scale (md)" type="email" placeholder="user@easeui.dev" size="md" />
  <Input label="Prominent Scale (lg)" placeholder="Search or command..." size="lg" />
</div>`;

  const variants = [
    {
      title: "Specialized Variants & Interactions",
      description: "Enhanced inputs including animated border rings, floating labels, search icon prefixes, and stepper controls.",
      preview: (
        <div className="flex flex-col gap-4 w-full max-w-md">
          <PasswordInput label="Secure Password" placeholder="Enter password" />
          <InputWithIcon
            label="Search Query"
            placeholder="Find components, hooks..."
            icon={<Search size={16} className="text-zinc-400" />}
          />
          <FloatingLabelInput label="Floating Label Input" />
          <AnimatedInput label="Animated Border Glow" placeholder="Focus to trigger animation" />
          <NumberInput label="Quantity Stepper" />
        </div>
      ),
      code: `<PasswordInput label="Secure Password" placeholder="Enter password" />
<InputWithIcon label="Search Query" placeholder="Find components..." icon={<Search size={16} />} />
<FloatingLabelInput label="Floating Label Input" />
<AnimatedInput label="Animated Border Glow" placeholder="Focus to trigger animation" />
<NumberInput label="Quantity Stepper" />`,
    },
  ];

  const propsData = [
    {
      prop: "label",
      type: "string",
      default: "undefined",
      description: "Descriptive label displayed above or floating inside the input field.",
    },
    {
      prop: "placeholder",
      type: "string",
      default: "undefined",
      description: "Helper placeholder text when the input value is empty.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Height scale, font size, and internal padding of the field.",
    },
    {
      prop: "type",
      type: "string",
      default: '"text"',
      description: "HTML input type attribute (text, email, password, number, etc.).",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Prevents user interaction and applies muted opacity styling.",
    },
    {
      prop: "onChange",
      type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
      default: "undefined",
      description: "Change callback invoked on input value updates.",
    },
  ];

  return (
    <DocPage
      title="Input"
      description="Versatile text inputs with animated focus outlines, floating labels, password reveal toggles, and icon adornments."
      category="Form Controls"
      usageCode={usageCode}
      preview={
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Input
            label="Small Scale (sm)"
            placeholder="Enter short text..."
            size="sm"
          />
          <Input
            label="Standard Scale (md)"
            type="email"
            placeholder="user@easeui.dev"
            size="md"
          />
          <Input
            label="Prominent Scale (lg)"
            placeholder="Search or command..."
            size="lg"
          />
        </div>
      }
      code={previewCode}
      propsData={propsData}
      variants={variants}
    />
  );
};

export default InputPage;
