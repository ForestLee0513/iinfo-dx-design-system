import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconBold } from "@tabler/icons-react"

import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
  args: {
    children: "Toggle",
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    children: <IconBold />,
    "aria-label": "Toggle bold",
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} variant="default">
        Default
      </Toggle>
      <Toggle {...args} variant="outline">
        Outline
      </Toggle>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} size="sm">
        Small
      </Toggle>
      <Toggle {...args} size="default">
        Default
      </Toggle>
      <Toggle {...args} size="lg">
        Large
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
