import type { Meta, StoryObj } from '@storybook/react';
import {
  createToaster,
  Toaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { SquareCheck, AlertCircle, Info } from 'lucide-react';

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  offsets: "1.6rem",
  max: 3,
});

const meta = {
  title: 'Cosmic UI/Toast',
  component: ToastRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toaster.create({
            title: "Success!",
            description: "Your changes have been saved successfully.",
            duration: 5000,
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <ToastRoot key={toast.id}>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
            <ToastCloseTrigger />
          </ToastRoot>
        )}
      </Toaster>
    </>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toaster.create({
            title: (
              <>
                <SquareCheck className="flex-none size-4 me-2.5" />
                Success! Event has been created!
              </>
            ),
            description: "This is a toast with icon, title and description.",
            duration: 5000,
          });
        }}
      >
        Success Toast
      </Button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <ToastRoot key={toast.id}>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
            <ToastCloseTrigger />
          </ToastRoot>
        )}
      </Toaster>
    </>
  ),
};

export const MultipleToasts: Story = {
  render: () => (
    <>
      <div className="flex gap-4">
        <Button
          onClick={() => {
            toaster.create({
              title: (
                <>
                  <SquareCheck className="flex-none size-4 me-2.5" />
                  Success!
                </>
              ),
              description: "Operation completed successfully.",
              duration: 5000,
            });
          }}
          variant="success"
        >
          Success
        </Button>
        <Button
          onClick={() => {
            toaster.create({
              title: (
                <>
                  <AlertCircle className="flex-none size-4 me-2.5" />
                  Warning!
                </>
              ),
              description: "Please review your changes.",
              duration: 5000,
            });
          }}
          variant="accent"
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            toaster.create({
              title: (
                <>
                  <Info className="flex-none size-4 me-2.5" />
                  Info
                </>
              ),
              description: "Here's some information for you.",
              duration: 5000,
            });
          }}
          variant="secondary"
        >
          Info
        </Button>
      </div>
      <Toaster toaster={toaster}>
        {(toast) => (
          <ToastRoot key={toast.id}>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
            <ToastCloseTrigger />
          </ToastRoot>
        )}
      </Toaster>
    </>
  ),
};
