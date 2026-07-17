import type { Meta, StoryObj } from "@storybook/react-vite"

import { Switch } from "@/components/ui/switch"

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Switch {...args} size="sm" defaultChecked />
      <Switch {...args} size="default" defaultChecked />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
