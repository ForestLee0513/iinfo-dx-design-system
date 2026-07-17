import type { Meta, StoryObj } from "@storybook/react-vite"

import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Type your message here.",
    className: "w-80",
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    defaultValue: "This is some pre-filled text in the textarea.",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "This textarea is disabled.",
  },
}

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "This value failed validation.",
  },
}
