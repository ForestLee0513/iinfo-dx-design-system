import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "@/components/ui/input"

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "file"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    placeholder: "Email",
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Input {...args} className="w-72" />,
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Input {...args} className="w-72" />,
}

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "not-an-email",
  },
  render: (args) => <Input {...args} className="w-72" />,
}

export const File: Story = {
  args: {
    type: "file",
  },
  render: (args) => <Input {...args} className="w-72" />,
}
