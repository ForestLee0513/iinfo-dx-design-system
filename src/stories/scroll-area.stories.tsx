import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }, (_, i) => `v1.${50 - i}.0`)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-56 rounded-md border border-border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border border-border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="flex size-24 shrink-0 items-center justify-center rounded-md bg-muted text-sm font-medium"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
