import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';

const meta = {
  title: 'Cosmic UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['flat', 'lifted', 'simple'],
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    variant: 'lifted',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a cosmic-themed textarea component with a custom frame design.',
    variant: 'lifted',
  },
};

export const LongText: Story = {
  args: {
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    variant: 'lifted',
  },
};

export const WithCustomWidth: Story = {
  render: () => (
    <div className="w-96">
      <Textarea
        placeholder="Custom width textarea..."
        variant="lifted"
      />
    </div>
  ),
};
