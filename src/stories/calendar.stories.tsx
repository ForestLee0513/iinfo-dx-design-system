import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-2xl border"
      />
    )
  },
}

export const RangeSelection: Story = {
  render: function Render() {
    const [range, setRange] = React.useState<
      { from: Date | undefined; to?: Date | undefined } | undefined
    >({
      from: new Date(),
      to: undefined,
    })
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-2xl border"
      />
    )
  },
}

export const DropdownCaption: Story = {
  render: function Render() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        className="rounded-2xl border"
      />
    )
  },
}
