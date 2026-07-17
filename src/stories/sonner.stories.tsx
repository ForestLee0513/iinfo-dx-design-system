import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"

import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div>
      <Toaster {...args} />
      <Button onClick={() => toast("Event has been created.")}>
        Show Toast
      </Button>
    </div>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div>
      <Toaster {...args} />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast.success("Successfully saved!")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.info("Here is some information.")}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning("Please double check this.")}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Something went wrong.")}
        >
          Error
        </Button>
      </div>
    </div>
  ),
}
