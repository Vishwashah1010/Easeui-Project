import {
  Container,
  Grid,
  Stack,
} from "@/components/Layout/Layout";
import { Button } from "@/components/Button/Button";
import DocPage from "@/components/Personal/DocPage";

const LayoutPage = () => {
  const usageCode = `import { Container, Grid, Stack, Section } from "@/components/Layout";
import { Button } from "@/components/Button";

export default function Example() {
  return (
    <Section variant="card" padding="md">
      <Container size="lg">
        <Stack direction="row" justify="between" align="center">
          <div>
            <h3 className="font-bold text-lg">Project Dashboard</h3>
            <p className="text-sm text-zinc-500">Overview and layout structure</p>
          </div>
          <Button variant="primary" size="sm">New Task</Button>
        </Stack>
      </Container>
    </Section>
  );
}`;

  const previewCode = `<div className="w-full space-y-4">
  <Container size="md" className="w-full bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 text-center">
    <h3 className="font-bold text-blue-600 dark:text-blue-400">Centered Container</h3>
    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Constrains content width cleanly with responsive gutters.</p>
  </Container>
</div>`;

  const variants = [
    {
      title: "Responsive Grid",
      description: "Fluid columns that adapt across mobile, tablet, and desktop screens with customizable gap spacing.",
      preview: (
        <div className="w-full">
          <Grid cols={3} gap="md">
            <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center shadow-xs">
              <span className="font-semibold text-blue-600 dark:text-blue-400">Column 1</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Responsive cell</p>
            </div>
            <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center shadow-xs">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Column 2</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Responsive cell</p>
            </div>
            <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center shadow-xs">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Column 3</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Responsive cell</p>
            </div>
          </Grid>
        </div>
      ),
      code: `<Grid cols={3} gap="md">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</Grid>`,
    },
    {
      title: "Flex Stack & Alignment",
      description: "A flexible container for horizontal and vertical item alignment, distribution, and gap spacing.",
      preview: (
        <div className="w-full bg-white dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700">
          <Stack
            direction="row"
            gap="md"
            align="center"
            justify="between"
            wrap={true}
          >
            <div>
              <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Project Settings</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Manage notification preferences</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button variant="primary" size="sm">
                Save Changes
              </Button>
            </div>
          </Stack>
        </div>
      ),
      code: `<Stack direction="row" gap="md" align="center" justify="between" wrap={true}>
  <div>Settings</div>
  <Button variant="primary">Save Changes</Button>
</Stack>`,
    },
  ];

  const propsData = [
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "xl" | "2xl" | "full"',
      default: '"xl"',
      description: "Max-width breakpoint constraint for the centered container.",
    },
    {
      prop: "cols",
      type: "1 | 2 | 3 | 4 | 6 | 12",
      default: "3",
      description: "Number of responsive grid columns (Grid).",
    },
    {
      prop: "gap",
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Spacing gap between children (Grid / Stack).",
    },
    {
      prop: "direction",
      type: '"row" | "col" | "row-reverse" | "col-reverse"',
      default: '"col"',
      description: "Flexbox direction orientation for child elements (Stack).",
    },
    {
      prop: "align",
      type: '"start" | "center" | "end" | "baseline" | "stretch"',
      default: '"stretch"',
      description: "Cross-axis alignment (Stack / Grid).",
    },
    {
      prop: "justify",
      type: '"start" | "center" | "end" | "between" | "around"',
      default: '"start"',
      description: "Main-axis distribution (Stack).",
    },
  ];

  return (
    <DocPage
      title="Layout"
      description="Foundational layout utilities including responsive Grid, Container, Stack, and Section components."
      category="Structure Primitives"
      usageCode={usageCode}
      preview={
        <Container size="md" className="w-full bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 text-center">
          <h3 className="font-bold text-blue-600 dark:text-blue-400">Centered Container</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Constrains content width cleanly with responsive gutters.
          </p>
        </Container>
      }
      code={previewCode}
      propsData={propsData}
      variants={variants}
    />
  );
};

export default LayoutPage;
