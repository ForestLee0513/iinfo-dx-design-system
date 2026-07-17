import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

const meta = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "end"],
    },
  },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Message {...args} className="max-w-md">
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Assistant</MessageHeader>
        <div className="rounded-2xl bg-muted px-3.5 py-2.5">
          Hi there! How can I help you today?
        </div>
      </MessageContent>
    </Message>
  ),
}

export const Conversation: Story = {
  render: () => (
    <MessageGroup className="max-w-md">
      <Message align="start">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Assistant</MessageHeader>
          <div className="rounded-2xl bg-muted px-3.5 py-2.5">
            Hi there! How can I help you today?
          </div>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <div className="rounded-2xl bg-primary px-3.5 py-2.5 text-primary-foreground">
            Can you show me a story example?
          </div>
          <MessageFooter>Sent just now</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
