import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Message, MessageAvatar, MessageContent, MessageHeader } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const meta = {
  title: "Components/MessageScroller",
  component: MessageScroller,
  tags: ["autodocs"],
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj<typeof meta>

const messages = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  from: i % 2 === 0 ? "Assistant" : "You",
  text: `This is message number ${i + 1} in the conversation.`,
}))

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="h-80 w-96 rounded-2xl border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            {messages.map((message) => (
              <MessageScrollerItem key={message.id}>
                <Message>
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarFallback>
                        {message.from === "Assistant" ? "AI" : "ME"}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <MessageHeader>{message.from}</MessageHeader>
                    <div className="rounded-2xl bg-muted px-3.5 py-2.5">
                      {message.text}
                    </div>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}
