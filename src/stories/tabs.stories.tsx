import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="settings">
        Manage your general settings here.
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="overview" className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content goes here.</TabsContent>
      <TabsContent value="analytics">Analytics content goes here.</TabsContent>
      <TabsContent value="reports">Reports content goes here.</TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab1" orientation="vertical" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for tab 1.</TabsContent>
      <TabsContent value="tab2">Content for tab 2.</TabsContent>
      <TabsContent value="tab3">Content for tab 3.</TabsContent>
    </Tabs>
  ),
}
