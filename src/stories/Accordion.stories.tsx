import type { Meta, StoryObj } from '@storybook/react';
import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const meta = {
  title: 'Cosmic UI/Accordion',
  component: AccordionRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AccordionRoot className="w-96">
      <AccordionItem value="item1">
        <AccordionTrigger>What is Cosmic UI?</AccordionTrigger>
        <AccordionContent>
          Cosmic UI is a futuristic component library with custom frame designs
          and a space-themed aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>
          You can install Cosmic UI by cloning the repository and following
          the setup instructions in the README.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes! All components support custom props and className overrides
          for full customization.
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <AccordionRoot className="w-96">
      <AccordionItem value="single">
        <AccordionTrigger>Single Item Accordion</AccordionTrigger>
        <AccordionContent>
          This accordion has only one item. Click the trigger to expand/collapse.
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <AccordionRoot className="w-96">
      <AccordionItem value="intro">
        <AccordionTrigger>Introduction</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="features">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc list-inside space-y-1">
            <li>Custom frame-based design</li>
            <li>Built with Tailwind CSS v4</li>
            <li>Fully accessible components</li>
            <li>TypeScript support</li>
            <li>Responsive and mobile-friendly</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="usage">
        <AccordionTrigger>Usage Examples</AccordionTrigger>
        <AccordionContent>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  ),
};
