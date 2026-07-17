import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconAlignLeft, IconAlignCenter, IconAlignRight } from "@tabler/icons-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
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
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args} defaultValue={["center"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <IconAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <IconAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <IconAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  render: (args) => (
    <ToggleGroup {...args} variant="outline" defaultValue={["left"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <IconAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <IconAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <IconAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  render: (args) => (
    <ToggleGroup {...args} multiple defaultValue={["left", "right"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <IconAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <IconAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <IconAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <ToggleGroup {...args} disabled defaultValue={["center"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <IconAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <IconAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <IconAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}
