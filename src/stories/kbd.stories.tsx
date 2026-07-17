import type { Meta, StoryObj } from "@storybook/react-vite"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  args: {
    children: "K",
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
}

export const CommandPalette: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-sm">
      <span>Open command palette</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  ),
}
