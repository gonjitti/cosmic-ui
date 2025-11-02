import type { Meta, StoryObj } from '@storybook/react';
import {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioItemText,
  RadioItemControl,
  RadioItemHiddenInput,
} from '@/components/ui/radio-group';

const meta = {
  title: 'Cosmic UI/RadioGroup',
  component: RadioGroupRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroupRoot>
      <RadioGroupLabel>Choose your option</RadioGroupLabel>
      <RadioGroupItem value="option1">
        <RadioItemControl />
        <RadioItemText>Option 1</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value="option2">
        <RadioItemControl />
        <RadioItemText>Option 2</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value="option3">
        <RadioItemControl />
        <RadioItemText>Option 3</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
    </RadioGroupRoot>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroupRoot defaultValue="option2">
      <RadioGroupLabel>Select your preference</RadioGroupLabel>
      <RadioGroupItem value="option1">
        <RadioItemControl />
        <RadioItemText>Low priority</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value="option2">
        <RadioItemControl />
        <RadioItemText>Medium priority (selected)</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value="option3">
        <RadioItemControl />
        <RadioItemText>High priority</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
    </RadioGroupRoot>
  ),
};

export const WithLongLabels: Story = {
  render: () => (
    <RadioGroupRoot className="w-96">
      <RadioGroupLabel>Choose your subscription plan</RadioGroupLabel>
      <RadioGroupItem value="free">
        <RadioItemControl />
        <RadioItemText>Free Plan - Basic features for individuals</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value="pro">
        <RadioItemControl />
        <RadioItemText>Pro Plan - Advanced features for professionals</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value="enterprise">
        <RadioItemControl />
        <RadioItemText>Enterprise Plan - Full features for organizations</RadioItemText>
        <RadioItemHiddenInput />
      </RadioGroupItem>
    </RadioGroupRoot>
  ),
};
