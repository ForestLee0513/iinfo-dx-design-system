import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconCalendar,
  IconCreditCard,
  IconSettings,
  IconMoodSmile,
  IconUser,
} from "@tabler/icons-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="w-80 border border-input/50">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <IconCalendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <IconMoodSmile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <IconUser />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <IconSettings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconCreditCard />
            <span>Billing</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <Command className="w-80 border border-input/50">
      <CommandInput placeholder="Search actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <IconUser />
            <span>View profile</span>
          </CommandItem>
          <CommandItem disabled>
            <IconCreditCard />
            <span>Upgrade plan (unavailable)</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
