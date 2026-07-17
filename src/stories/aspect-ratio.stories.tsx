import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args} className="overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Landscape photograph"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Square: Story = {
  args: {
    ratio: 1,
  },
}

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
}
