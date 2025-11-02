import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Frame } from "@/components/ui/frame";
import { Combobox } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { ChevronsUpDown, Search, Check } from "lucide-react";
import { createContext, useContext } from "react";

const ValueContext = createContext<string[] | undefined>(undefined);

function ComboboxRoot({
  children,
  value,
  ...rest
}: React.ComponentProps<typeof Combobox.Root<string>>) {
  return (
    <ValueContext.Provider value={value}>
      <Combobox.Root selectionBehavior="clear" {...rest}>
        {children}
      </Combobox.Root>
    </ValueContext.Provider>
  );
}

function ComboboxControl({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.Control>) {
  return (
    <Combobox.Control className={twMerge(["cosmic-combobox-control", className])} {...rest}>
      {children}
    </Combobox.Control>
  );
}

function ComboboxTrigger({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.Trigger>) {
  const value = useContext(ValueContext);

  return (
    <Combobox.Trigger asChild {...rest}>
      <Button className={twMerge(["cosmic-combobox-trigger", className])}>
        {value && value[0].length ? value : "Select option..."}{" "}
        <ChevronsUpDown className="size-4 ms-auto opacity-70" />
      </Button>
    </Combobox.Trigger>
  );
}

function ComboboxPositioner({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.Positioner>) {
  return (
    <Portal>
      <Combobox.Positioner className={className} {...rest}>
        {children}
      </Combobox.Positioner>
    </Portal>
  );
}

function ComboboxContent({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.Content>) {
  return (
    <Combobox.Content
      className={twMerge(["group cosmic-combobox-content", className])}
      {...rest}
    >
      <div className="cosmic-combobox-content-frame">
        <Frame
          paths={JSON.parse(
            '[{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","14","6"],["L","50% - 7","6"],["L","50% - 2","0"],["L","50% + 4","0"],["L","50% + 9","6"],["L","100% - 13","6"],["L","100% + 0","19"],["L","100% + 0","100% - 26"],["L","100% - 13","100% - 12"],["L","50% + 13","100% - 12"],["L","50% - 0","100% + 0"],["L","0% + 14","100% + 0"],["L","0% + 0","100% - 13"],["L","0","0% + 19"],["L","14","6"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% + 16","100% - 8"],["L","50% + 25","100% - 8"],["L","50% + 18","100% - 2"],["L","50% + 9","100% - 2"],["L","50% + 16","100% - 8"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% + 30","100% - 8"],["L","50% + 37","100% - 8"],["L","50% + 32","100% - 3"],["L","50% + 25","100% - 3"],["L","50% + 30","100% - 8"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% + 42","100% - 8"],["L","50% + 48","100% - 8"],["L","50% + 44","100% - 4"],["L","50% + 38","100% - 4"],["L","50% + 42","100% - 8"]]}]'
          )}
          enableBackdropBlur={true}
        />
      </div>
      {children}
    </Combobox.Content>
  );
}

function ComboboxInput({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.Input>) {
  return (
    <div className="cosmic-combobox-input-wrapper border-b border-primary/30">
      <div className="absolute size-3.5 inset-y-0 my-auto ml-5">
        <Search className="size-full mt-0.5 opacity-70" />
      </div>
      <Combobox.Input
        className={twMerge(["cosmic-combobox-input ps-11 pe-6 pt-2.5 pb-3 mt-2", className])}
        placeholder="Search..."
        {...rest}
      />
    </div>
  );
}

function ComboboxItemGrouo({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.ItemGroup>) {
  return (
    <Combobox.ItemGroup
      className={twMerge(["cosmic-combobox-content-inner px-6 pt-4 pb-7", className])}
      {...rest}
    >
      {children}
    </Combobox.ItemGroup>
  );
}

function ComboboxItem({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.Item>) {
  return (
    <Combobox.Item
      className={twMerge(["cosmic-combobox-item", className])}
      {...rest}
    >
      {children}
    </Combobox.Item>
  );
}

function ComboboxItemText({
  children,
  ...rest
}: React.ComponentProps<typeof Combobox.ItemText>) {
  return <Combobox.ItemText {...rest}>{children}</Combobox.ItemText>;
}

function ComboboxItemIndicator({
  className,
  ...rest
}: React.ComponentProps<typeof Combobox.ItemIndicator>) {
  return (
    <Combobox.ItemIndicator
      className={twMerge(["ms-auto", className])}
      {...rest}
    >
      <Check className="size-3.5" />
    </Combobox.ItemIndicator>
  );
}

export {
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
};
