import type { Meta, StoryObj } from '@storybook/react';
import {
  ComboboxRoot,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxPositioner,
  ComboboxContent,
  ComboboxItemGrouo,
  ComboboxItem,
  ComboboxItemText,
  ComboboxItemIndicator,
} from '@/components/ui/combobox';
import { Combobox, useListCollection } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { useState } from 'react';

const meta = {
  title: 'Cosmic UI/Combobox',
  component: ComboboxRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComboboxRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [state, setState] = useState([""]);
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      initialItems: ["React", "Vue", "Angular", "Svelte", "Solid"],
      filter: contains,
    });

    const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
      filter(details.inputValue);
    };

    return (
      <ComboboxRoot
        value={state}
        collection={collection}
        onInputValueChange={handleInputChange}
        onValueChange={(details) => setState(details.value)}
      >
        <ComboboxControl>
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxInput />
            <ComboboxItemGrouo>
              {collection.items.map((item) => (
                <ComboboxItem key={item} item={item}>
                  <ComboboxItemText>{item}</ComboboxItemText>
                  <ComboboxItemIndicator />
                </ComboboxItem>
              ))}
            </ComboboxItemGrouo>
          </ComboboxContent>
        </ComboboxPositioner>
      </ComboboxRoot>
    );
  },
};

export const WithManyItems: Story = {
  render: () => {
    const [state, setState] = useState([""]);
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      initialItems: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "Ruby",
        "Go",
        "Rust",
        "Swift",
        "Kotlin",
        "PHP",
      ],
      filter: contains,
    });

    const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
      filter(details.inputValue);
    };

    return (
      <ComboboxRoot
        value={state}
        collection={collection}
        onInputValueChange={handleInputChange}
        onValueChange={(details) => setState(details.value)}
      >
        <ComboboxControl>
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxInput />
            <ComboboxItemGrouo>
              {collection.items.map((item) => (
                <ComboboxItem key={item} item={item}>
                  <ComboboxItemText>{item}</ComboboxItemText>
                  <ComboboxItemIndicator />
                </ComboboxItem>
              ))}
            </ComboboxItemGrouo>
          </ComboboxContent>
        </ComboboxPositioner>
      </ComboboxRoot>
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [state, setState] = useState([""]);
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      initialItems: [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew",
      ],
      filter: contains,
    });

    const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
      filter(details.inputValue);
    };

    return (
      <ComboboxRoot
        value={state}
        collection={collection}
        onInputValueChange={handleInputChange}
        onValueChange={(details) => setState(details.value)}
      >
        <ComboboxControl>
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxInput placeholder="Search fruits..." />
            <ComboboxItemGrouo>
              {collection.items.map((item) => (
                <ComboboxItem key={item} item={item}>
                  <ComboboxItemText>{item}</ComboboxItemText>
                  <ComboboxItemIndicator />
                </ComboboxItem>
              ))}
            </ComboboxItemGrouo>
          </ComboboxContent>
        </ComboboxPositioner>
      </ComboboxRoot>
    );
  },
};
