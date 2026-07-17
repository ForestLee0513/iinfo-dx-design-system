import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-2xl border border-dashed border-input text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithSubmenuAndChecks: Story = {
  render: function Render() {
    const [showBookmarks, setShowBookmarks] = React.useState(true)
    const [showFullUrls, setShowFullUrls] = React.useState(false)
    const [person, setPerson] = React.useState("pedro")

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-2xl border border-dashed border-input text-sm text-muted-foreground">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showFullUrls}
            onCheckedChange={setShowFullUrls}
          >
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Save Page As...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuLabel>Assigned to</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}
