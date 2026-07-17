import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconCircleCheck } from "@tabler/icons-react"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

const meta = {
  title: "Components/Marker",
  component: Marker,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "separator", "border"],
    },
  },
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Marker {...args} className="w-64">
      <MarkerIcon>
        <IconCircleCheck />
      </MarkerIcon>
      <MarkerContent>Task completed</MarkerContent>
    </Marker>
  ),
}

export const Separator: Story = {
  render: () => (
    <Marker variant="separator" className="w-64">
      <MarkerContent>OR</MarkerContent>
    </Marker>
  ),
}

export const Border: Story = {
  render: () => (
    <Marker variant="border" className="w-64">
      <MarkerContent>Section title</MarkerContent>
    </Marker>
  ),
}
