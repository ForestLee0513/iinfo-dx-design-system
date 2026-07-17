import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    className: "h-4 w-48",
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  ),
}

export const CardPlaceholder: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}
