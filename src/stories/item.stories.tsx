import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconCircleCheck, IconUser } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const meta = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
    },
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item {...args} variant="outline" className="w-96">
      <ItemMedia variant="icon">
        <IconCircleCheck />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Deployment successful</ItemTitle>
        <ItemDescription>Your app was deployed to production.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          View
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Group: Story = {
  render: () => (
    <ItemGroup className="w-96">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconUser />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Cooper</ItemTitle>
          <ItemDescription>jane.cooper@example.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost">
            Remove
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconUser />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Robert Fox</ItemTitle>
          <ItemDescription>robert.fox@example.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost">
            Remove
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Item variant="outline" size="default">
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemContent>
          <ItemTitle>Extra small size</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  ),
}
