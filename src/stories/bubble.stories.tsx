import type { Meta, StoryObj } from "@storybook/react-vite"

import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/ui/bubble"

const meta = {
  title: "Components/Bubble",
  component: Bubble,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "muted",
        "tinted",
        "outline",
        "ghost",
        "destructive",
      ],
    },
    align: {
      control: "select",
      options: ["start", "end"],
    },
  },
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Bubble {...args}>
      <BubbleContent>Hey, how&apos;s it going?</BubbleContent>
    </Bubble>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Bubble variant="default">
        <BubbleContent>Default bubble</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary bubble</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted bubble</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Tinted bubble</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline bubble</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Destructive bubble</BubbleContent>
      </Bubble>
    </div>
  ),
}

export const Conversation: Story = {
  render: () => (
    <BubbleGroup className="w-80">
      <Bubble variant="muted" align="start">
        <BubbleContent>Hi! Do you have a moment to chat?</BubbleContent>
      </Bubble>
      <Bubble variant="default" align="end">
        <BubbleContent>Sure, what&apos;s up?</BubbleContent>
      </Bubble>
      <Bubble variant="muted" align="start">
        <BubbleContent>
          Just wanted to check in on the project status.
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}

export const WithReactions: Story = {
  render: () => (
    <Bubble className="mb-3" variant="default" align="end">
      <BubbleContent>Great work on the release!</BubbleContent>
      <BubbleReactions>🎉 2</BubbleReactions>
    </Bubble>
  ),
}
