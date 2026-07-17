import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm">Width</label>
            <input
              className="h-8 w-24 rounded-md border border-border bg-input/50 px-2 text-sm"
              defaultValue="100%"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm">Height</label>
            <input
              className="h-8 w-24 rounded-md border border-border bg-input/50 px-2 text-sm"
              defaultValue="25px"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger
            render={
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            }
          />
          <PopoverContent side={side}>
            <p>Popover positioned on the {side}.</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
