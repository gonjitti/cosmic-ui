import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Cosmic UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'destructive', 'secondary', 'success'],
    },
    shape: {
      control: 'select',
      options: ['default', 'flat', 'simple', 'tab-left', 'tab-center', 'tab-right'],
    },
    enableBackdropBlur: {
      control: 'boolean',
    },
    enableViewBox: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    shape: 'default',
  },
};

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
    shape: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    shape: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    shape: 'default',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'success',
    shape: 'default',
  },
};

export const FlatShape: Story = {
  args: {
    children: 'Flat Button',
    variant: 'default',
    shape: 'flat',
  },
};

export const SimpleShape: Story = {
  args: {
    children: 'Simple Button',
    variant: 'default',
    shape: 'simple',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="default">Default</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="default" shape="flat">Flat</Button>
        <Button variant="accent" shape="flat">Flat Accent</Button>
        <Button variant="destructive" shape="flat">Flat Destructive</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="default" shape="simple">Simple</Button>
        <Button variant="accent" shape="simple">Simple Accent</Button>
      </div>
    </div>
  ),
};
