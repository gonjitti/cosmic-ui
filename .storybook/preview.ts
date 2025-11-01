import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'cosmic',
      values: [
        {
          name: 'cosmic',
          value: '#0a1929',
        },
      ],
    },
  },
};

export default preview;