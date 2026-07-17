import type { Meta, StoryObj } from "@storybook/react-vite"

import { Slider } from "@/components/ui/slider"

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    className: "w-64",
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [40],
    disabled: true,
  },
}

export const Vertical: Story = {
  args: {
    defaultValue: [30],
    orientation: "vertical",
    className: "h-40",
  },
}
