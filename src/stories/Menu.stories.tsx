import type { Meta, StoryObj } from '@storybook/react';
import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from '@/components/ui/menu';

const meta = {
  title: 'Cosmic UI/Menu',
  component: MenuRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>Open Menu</MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          <MenuItem>Profile Settings</MenuItem>
          <MenuItem>Account</MenuItem>
          <MenuItem>Preferences</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  ),
};

export const WithManyItems: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>Actions</MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          <MenuItem>New File</MenuItem>
          <MenuItem>Open File</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save As...</MenuItem>
          <MenuItem>Export</MenuItem>
          <MenuItem>Import</MenuItem>
          <MenuItem>Print</MenuItem>
          <MenuItem>Close</MenuItem>
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>Options</MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          <MenuItem>
            <span className="mr-2">👤</span> Profile
          </MenuItem>
          <MenuItem>
            <span className="mr-2">⚙️</span> Settings
          </MenuItem>
          <MenuItem>
            <span className="mr-2">🔔</span> Notifications
          </MenuItem>
          <MenuItem>
            <span className="mr-2">🚪</span> Sign Out
          </MenuItem>
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  ),
};
