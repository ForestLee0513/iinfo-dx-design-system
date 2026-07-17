import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconArrowsSort } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium">@peduarte starred 3 repositories</p>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" />}
        >
          <IconArrowsSort />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-2xl border border-input/50 px-4 py-2 font-mono text-sm">
        @base_ui/react
      </div>
      <CollapsibleContent className="flex flex-col gap-2 pt-2">
        <div className="rounded-2xl border border-input/50 px-4 py-2 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <div className="rounded-2xl border border-input/50 px-4 py-2 font-mono text-sm">
          @tanstack/react-table
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-72">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium">Advanced settings</p>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" />}
        >
          <IconArrowsSort />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2 pt-2">
        <div className="rounded-2xl border border-input/50 px-4 py-2 text-sm">
          Enable beta features
        </div>
        <div className="rounded-2xl border border-input/50 px-4 py-2 text-sm">
          Allow telemetry
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
