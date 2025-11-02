import type { Meta, StoryObj } from '@storybook/react';
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const meta = {
  title: 'Cosmic UI/Tabs',
  component: TabsRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TabsRoot defaultValue="tab1" className="w-96">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 text-foreground">
          Content for Tab 1. This is the first tab panel.
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 text-foreground">
          Content for Tab 2. This is the second tab panel.
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 text-foreground">
          Content for Tab 3. This is the third tab panel.
        </div>
      </TabsContent>
    </TabsRoot>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <TabsRoot defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="docs">Docs</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 text-foreground">
          <h3 className="font-bold mb-2">Project Overview</h3>
          <p>This is a cosmic-themed UI component library with futuristic design elements.</p>
        </div>
      </TabsContent>
      <TabsContent value="features">
        <div className="p-4 text-foreground">
          <h3 className="font-bold mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Custom frame-based components</li>
            <li>Tailwind CSS v4 integration</li>
            <li>Responsive and accessible</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="docs">
        <div className="p-4 text-foreground">
          <h3 className="font-bold mb-2">Documentation</h3>
          <p>Comprehensive documentation for all components and utilities.</p>
        </div>
      </TabsContent>
    </TabsRoot>
  ),
};
