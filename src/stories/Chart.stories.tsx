import type { Meta, StoryObj } from '@storybook/react';
import { Chart, getColor } from '@/components/ui/chart';

const meta = {
  title: 'Cosmic UI/Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BarChart: Story = {
  render: () => (
    <div className="w-[500px]">
      <Chart
        config={{
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: getColor('--color-primary', 0.7),
                borderColor: getColor('--color-primary'),
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: getColor('--color-foreground'),
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: getColor('--color-foreground', 0.7),
                },
                grid: {
                  color: getColor('--color-primary', 0.1),
                },
              },
              x: {
                ticks: {
                  color: getColor('--color-foreground', 0.7),
                },
                grid: {
                  color: getColor('--color-primary', 0.1),
                },
              },
            },
          },
        }}
      />
    </div>
  ),
};

export const LineChart: Story = {
  render: () => (
    <div className="w-[500px]">
      <Chart
        config={{
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Users',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: getColor('--color-primary'),
                backgroundColor: getColor('--color-primary', 0.2),
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: getColor('--color-foreground'),
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: getColor('--color-foreground', 0.7),
                },
                grid: {
                  color: getColor('--color-primary', 0.1),
                },
              },
              x: {
                ticks: {
                  color: getColor('--color-foreground', 0.7),
                },
                grid: {
                  color: getColor('--color-primary', 0.1),
                },
              },
            },
          },
        }}
      />
    </div>
  ),
};

export const DoughnutChart: Story = {
  render: () => (
    <div className="w-[400px]">
      <Chart
        config={{
          type: 'doughnut',
          data: {
            labels: ['React', 'Vue', 'Angular', 'Svelte', 'Other'],
            datasets: [
              {
                label: 'Framework Usage',
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                  getColor('--color-primary', 0.8),
                  getColor('--color-accent', 0.8),
                  getColor('--color-success', 0.8),
                  getColor('--color-secondary', 0.8),
                  getColor('--color-destructive', 0.8),
                ],
                borderColor: [
                  getColor('--color-primary'),
                  getColor('--color-accent'),
                  getColor('--color-success'),
                  getColor('--color-secondary'),
                  getColor('--color-destructive'),
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  color: getColor('--color-foreground'),
                  padding: 15,
                },
              },
            },
          },
        }}
      />
    </div>
  ),
};

export const MultiLineChart: Story = {
  render: () => (
    <div className="w-[600px]">
      <Chart
        config={{
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Revenue',
                data: [30, 45, 28, 60, 75, 90],
                borderColor: getColor('--color-primary'),
                backgroundColor: getColor('--color-primary', 0.1),
                tension: 0.4,
                fill: true,
              },
              {
                label: 'Expenses',
                data: [20, 30, 25, 40, 50, 45],
                borderColor: getColor('--color-accent'),
                backgroundColor: getColor('--color-accent', 0.1),
                tension: 0.4,
                fill: true,
              },
              {
                label: 'Profit',
                data: [10, 15, 3, 20, 25, 45],
                borderColor: getColor('--color-success'),
                backgroundColor: getColor('--color-success', 0.1),
                tension: 0.4,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: getColor('--color-foreground'),
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: getColor('--color-foreground', 0.7),
                },
                grid: {
                  color: getColor('--color-primary', 0.1),
                },
              },
              x: {
                ticks: {
                  color: getColor('--color-foreground', 0.7),
                },
                grid: {
                  color: getColor('--color-primary', 0.1),
                },
              },
            },
          },
        }}
      />
    </div>
  ),
};
