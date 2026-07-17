import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="icon">
        <IconBold />
      </Button>
      <Button variant="outline" size="icon">
        <IconItalic />
      </Button>
      <Button variant="outline" size="icon">
        <IconUnderline />
      </Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline" size="icon">
        <IconBold />
      </Button>
      <Button variant="outline" size="icon">
        <IconItalic />
      </Button>
      <Button variant="outline" size="icon">
        <IconUnderline />
      </Button>
    </ButtonGroup>
  ),
}

export const WithSeparatorAndText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <Button variant="outline">Paste</Button>
      <ButtonGroupSeparator />
      <ButtonGroupText>12 items</ButtonGroupText>
    </ButtonGroup>
  ),
}
