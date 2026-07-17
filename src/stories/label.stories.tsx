import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Email",
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: (args) => (
    <div className="flex w-72 flex-col gap-1.5">
      <Label {...args} htmlFor="email">
        Email
      </Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div
      data-disabled="true"
      className="group flex w-72 flex-col gap-1.5"
    >
      <Label {...args} htmlFor="disabled-email">
        Email
      </Label>
      <Input id="disabled-email" disabled placeholder="you@example.com" />
    </div>
  ),
}
