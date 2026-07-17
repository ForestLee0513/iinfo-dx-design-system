import type { Meta, StoryObj } from "@storybook/react-vite"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="text-sm font-medium underline underline-offset-4">
        @shadcn
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">@shadcn</p>
          <p className="text-sm text-muted-foreground">
            Building beautiful, accessible component libraries.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger className="text-sm font-medium underline underline-offset-4">
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <p className="text-sm">Content on the {side} side.</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
}
