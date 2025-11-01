import type { Meta, StoryObj } from '@storybook/react';
import { AlertRoot, AlertTitle, AlertDescription, AlertCloseTrigger } from '@/components/ui/alert';

const meta = {
  title: 'Cosmic UI/Alert',
  component: AlertRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertRoot className="w-96">
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        This is a cosmic-themed alert component with a custom frame design.
      </AlertDescription>
      <AlertCloseTrigger />
    </AlertRoot>
  ),
};

export const LongContent: Story = {
  render: () => (
    <AlertRoot className="w-96">
      <AlertTitle>Important Notification</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris.
      </AlertDescription>
      <AlertCloseTrigger />
    </AlertRoot>
  ),
};

export const WithoutClose: Story = {
  render: () => (
    <AlertRoot className="w-96">
      <AlertTitle>System Message</AlertTitle>
      <AlertDescription>
        This alert cannot be dismissed and will remain visible.
      </AlertDescription>
    </AlertRoot>
  ),
};
