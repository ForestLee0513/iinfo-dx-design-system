import type { Meta, StoryObj } from "@storybook/react-vite"

import { DirectionProvider } from "@/components/ui/direction"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const meta = {
  title: "Components/DirectionProvider",
  component: DirectionProvider,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "radio",
      options: ["ltr", "rtl"],
    },
  },
  args: {
    direction: "ltr",
  },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir={args.direction} className="flex items-center gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </div>
    </DirectionProvider>
  ),
}

export const RightToLeft: Story = {
  args: {
    direction: "rtl",
  },
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir={args.direction} className="flex w-64 flex-col gap-3">
        <Select defaultValue="apple">
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">تفاح</SelectItem>
            <SelectItem value="banana">موز</SelectItem>
            <SelectItem value="orange">برتقال</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <Button variant="outline">إلغاء</Button>
          <Button>متابعة</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
}
