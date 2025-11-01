import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxRoot, CheckboxLabel, CheckboxControl, CheckboxHiddenInput } from '@/components/ui/checkbox';

const meta = {
  title: 'Cosmic UI/Checkbox',
  component: CheckboxRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CheckboxRoot>
      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
      <CheckboxControl />
      <CheckboxHiddenInput />
    </CheckboxRoot>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <CheckboxRoot defaultChecked>
      <CheckboxLabel>Subscribe to newsletter</CheckboxLabel>
      <CheckboxControl />
      <CheckboxHiddenInput />
    </CheckboxRoot>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxRoot>
        <CheckboxLabel>Option 1</CheckboxLabel>
        <CheckboxControl />
        <CheckboxHiddenInput />
      </CheckboxRoot>
      <CheckboxRoot defaultChecked>
        <CheckboxLabel>Option 2 (checked)</CheckboxLabel>
        <CheckboxControl />
        <CheckboxHiddenInput />
      </CheckboxRoot>
      <CheckboxRoot>
        <CheckboxLabel>Option 3</CheckboxLabel>
        <CheckboxControl />
        <CheckboxHiddenInput />
      </CheckboxRoot>
    </div>
  ),
};
