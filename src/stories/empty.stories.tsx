import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconDatabase, IconFolderOpen } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const meta = {
  title: "Components/Empty",
  component: Empty,
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty className="w-96 border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderOpen />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Project</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Empty className="w-96 border">
      <EmptyHeader>
        <EmptyMedia>
          <IconDatabase className="size-10 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your filters or search term.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button variant="outline">Clear filters</Button>
          <Button variant="ghost">Reset search</Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
}
