import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    value: 40,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <Progress {...args} className="w-64">
      <div className="flex w-full justify-between">
        <ProgressLabel>Uploading files</ProgressLabel>
        <ProgressValue />
      </div>
    </Progress>
  ),
}

export const Values: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      {[10, 50, 90, 100].map((value) => (
        <Progress key={value} value={value}>
          <div className="flex w-full justify-between">
            <ProgressLabel>{value}%</ProgressLabel>
            <ProgressValue />
          </div>
        </Progress>
      ))}
    </div>
  ),
}

export const Indeterminate: Story = {
  args: {
    value: null,
  },
  render: (args) => (
    <Progress {...args} className="w-64">
      <ProgressLabel>Loading…</ProgressLabel>
    </Progress>
  ),
}
