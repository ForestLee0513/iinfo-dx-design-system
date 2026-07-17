import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconMail, IconSearch } from "@tabler/icons-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <IconSearch />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButtonAndText: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput placeholder="you@example.com" />
      <InputGroupAddon>
        <IconMail />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Subscribe</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithBlockAddons: Story = {
  render: () => (
    <InputGroup className="w-80">
      <InputGroupTextarea placeholder="Write your message..." />
      <InputGroupAddon align="block-start">
        <InputGroupText>Message</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="block-end">
        <InputGroupButton>Send</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
