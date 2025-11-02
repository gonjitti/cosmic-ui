import type { Meta, StoryObj } from '@storybook/react';
import { SwitchRoot, SwitchControl, SwitchThumb, SwitchLabel, SwitchHiddenInput } from '@/components/ui/switch';

const meta = {
  title: 'Cosmic UI/Switch',
  component: SwitchRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SwitchRoot>
      <SwitchLabel>Enable notifications</SwitchLabel>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchHiddenInput />
    </SwitchRoot>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <SwitchRoot defaultChecked>
      <SwitchLabel>Dark mode</SwitchLabel>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchHiddenInput />
    </SwitchRoot>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <SwitchRoot>
        <SwitchLabel>Auto-save</SwitchLabel>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchHiddenInput />
      </SwitchRoot>
      <SwitchRoot defaultChecked>
        <SwitchLabel>Sound effects</SwitchLabel>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchHiddenInput />
      </SwitchRoot>
      <SwitchRoot>
        <SwitchLabel>Show tips</SwitchLabel>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchHiddenInput />
      </SwitchRoot>
    </div>
  ),
};
