import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconFileText, IconX } from "@tabler/icons-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

const meta = {
  title: "Components/Attachment",
  component: Attachment,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["idle", "uploading", "processing", "error", "done"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <IconFileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>report.pdf</AttachmentTitle>
        <AttachmentDescription>1.2 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction>
          <IconX />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["idle", "uploading", "processing", "error", "done"] as const).map(
        (state) => (
          <Attachment key={state} state={state}>
            <AttachmentMedia>
              <IconFileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>document-{state}.pdf</AttachmentTitle>
              <AttachmentDescription>
                {state === "error" ? "Upload failed" : "820 KB"}
              </AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        )
      )}
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AttachmentGroup>
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&dpr=2&q=80"
            alt="Mountain"
          />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>photo-1.jpg</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia>
          <IconFileText />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>notes.txt</AttachmentTitle>
          <AttachmentDescription>4 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  ),
}
