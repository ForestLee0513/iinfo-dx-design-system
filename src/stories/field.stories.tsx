import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" type="email" placeholder="you@example.com" />
        <FieldDescription>
          We&apos;ll never share your email with anyone else.
        </FieldDescription>
      </Field>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-96">
      <Field data-invalid="true">
        <FieldLabel htmlFor="field-username">Username</FieldLabel>
        <Input
          id="field-username"
          aria-invalid
          defaultValue="taken-username"
        />
        <FieldError errors={[{ message: "This username is already taken." }]} />
      </Field>
    </div>
  ),
}

export const FormLayout: Story = {
  render: () => (
    <div className="w-96">
      <FieldSet>
        <FieldLegend>Notifications</FieldLegend>
        <FieldDescription>
          Choose how you want to be notified.
        </FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="field-email-notify" defaultChecked />
            <FieldContent>
              <FieldTitle>Email notifications</FieldTitle>
              <FieldDescription>
                Receive updates via email.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="field-sms-notify" />
            <FieldContent>
              <FieldTitle>SMS notifications</FieldTitle>
              <FieldDescription>
                Receive updates via text message.
              </FieldDescription>
            </FieldContent>
          </Field>
          <FieldSeparator>or</FieldSeparator>
          <Field>
            <FieldLabel htmlFor="field-phone">Phone number</FieldLabel>
            <Input id="field-phone" type="tel" placeholder="+1 (555) 000-0000" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}
