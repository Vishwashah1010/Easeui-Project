import { useState } from "react";
import DocPage from "@/components/Personal/DocPage";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

const ModalPage = () => {
  const [lightModal, setLightModal] = useState(false);
  const [darkModal, setDarkModal] = useState(false);
  const [outlineModal, setOutlineModal] = useState(false);

  const usageCode = `import { useState } from "react";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        variant="light"
        size="md"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2 className="text-lg font-bold">Confirm Transaction</h2>
        <p className="text-sm opacity-75 mt-1">
          Are you sure you want to proceed with this deployment?
        </p>
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}`;

  const previewCode = `<div className="flex gap-4 flex-wrap items-center justify-center py-6">
  <Button variant="primary" onClick={() => setIsOpen(true)} hoverAnimation="jiggle">
    Open Modal Dialog
  </Button>
</div>`;

  const variants = [
    {
      title: "Dark Theme Modal",
      description: "High contrast dark mode styling for critical confirmations and alerts.",
      preview: (
        <div className="flex items-center justify-center">
          <Button
            variant="dark"
            onClick={() => setDarkModal(true)}
            hoverAnimation="bounce"
          >
            Launch Dark Modal
          </Button>
          <Modal
            variant="dark"
            size="md"
            isOpen={darkModal}
            onClose={() => setDarkModal(false)}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100">Security Checkpoint</h3>
                  <p className="text-xs text-zinc-400">Two-factor authentication required</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Please confirm that you want to export the project assets to the production registry.
              </p>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" size="sm" onClick={() => setDarkModal(false)}>
                  Dismiss
                </Button>
                <Button variant="primary" size="sm" onClick={() => setDarkModal(false)}>
                  Confirm
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      ),
      code: `<Modal variant="dark" size="md" isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h3 className="font-bold text-zinc-100">Security Checkpoint</h3>
  <p className="text-sm text-zinc-300">Two-factor authentication required</p>
</Modal>`,
    },
    {
      title: "Glass Outline Modal",
      description: "Frosted translucent border effect with soft backdrop blur.",
      preview: (
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            onClick={() => setOutlineModal(true)}
            hoverAnimation="scale"
          >
            Launch Outline Modal
          </Button>
          <Modal
            variant="outline"
            size="md"
            isOpen={outlineModal}
            onClose={() => setOutlineModal(false)}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-amber-500/20 text-amber-500">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold">Unsaved Changes</h3>
                  <p className="text-xs text-zinc-500">Warning notification</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                You have unsaved changes in your editor session. Would you like to save them before leaving?
              </p>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" size="sm" onClick={() => setOutlineModal(false)}>
                  Discard
                </Button>
                <Button variant="destructive" size="sm" onClick={() => setOutlineModal(false)}>
                  Save & Exit
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      ),
      code: `<Modal variant="outline" size="md" isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <AlertTriangle size={20} className="text-amber-500" />
  <h3>Unsaved Changes</h3>
</Modal>`,
    },
  ];

  const propsData = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "false",
      description: "Controls modal visibility and overlay mount state.",
    },
    {
      prop: "variant",
      type: '"light" | "dark" | "outline"',
      default: '"light"',
      description: "Visual style variant for the dialog box surface.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Maximum width constraint for the modal container.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "-",
      description: "Callback invoked when clicking backdrop, close button, or pressing ESC.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Content displayed inside the modal dialog.",
    },
  ];

  return (
    <DocPage
      title="Modal"
      description="Accessible dialog windows with backdrop blur, smooth GSAP scale transitions, and keyboard escape handling."
      category="Overlay Dialog"
      usageCode={usageCode}
      preview={
        <div className="flex gap-4 flex-wrap items-center justify-center py-6">
          <Button
            variant="primary"
            onClick={() => setLightModal(true)}
            hoverAnimation="jiggle"
          >
            Launch Interactive Modal
          </Button>
          <Modal
            variant="light"
            size="md"
            isOpen={lightModal}
            onClose={() => setLightModal(false)}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold">Account Verification</h3>
                  <p className="text-xs text-zinc-500">Your profile has been authenticated</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Welcome to EaseUI! You now have unrestricted access to all component modules and design tokens.
              </p>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" size="sm" onClick={() => setLightModal(false)}>
                  Close
                </Button>
                <Button variant="primary" size="sm" onClick={() => setLightModal(false)}>
                  Accept & Continue
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      }
      code={previewCode}
      propsData={propsData}
      variants={variants}
    />
  );
};

export default ModalPage;
