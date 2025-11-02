import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { RadioGroup } from "@ark-ui/react/radio-group";

function RadioGroupRoot({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.Root>) {
  return (
    <RadioGroup.Root
      className={twMerge(["cosmic-radio-group", className])}
      {...rest}
    >
      {children}
    </RadioGroup.Root>
  );
}

function RadioGroupLabel({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.Label>) {
  return (
    <RadioGroup.Label className={twMerge(["cosmic-radio-group-label", className])} {...rest}>
      {children}
    </RadioGroup.Label>
  );
}

function RadioGroupItem({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.Item>) {
  return (
    <RadioGroup.Item
      className={twMerge(["cosmic-radio-item", className])}
      {...rest}
    >
      {children}
    </RadioGroup.Item>
  );
}

function RadioItemText({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.ItemText>) {
  return (
    <RadioGroup.ItemText className={twMerge(["cosmic-radio-item-text", className])} {...rest}>
      {children}
    </RadioGroup.ItemText>
  );
}

function RadioItemHiddenInput() {
  return <RadioGroup.ItemHiddenInput />;
}

function RadioItemControl({
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.ItemControl>) {
  return (
    <RadioGroup.ItemControl
      className={twMerge(["group cosmic-radio-item-control", className])}
      {...rest}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","50% - 28.125%","0"],["L","50% + 28.125%","0"],["L","100% + 0","50% - 28.125%"],["L","100% + 0","50% + 28.125%"],["L","50% + 28.125%","100% - 0"],["L","50% - 28.125%","100% + 0"],["L","0","50% + 28.125%"],["L","0","50% - 28.125%"],["L","50% - 28.125%","0"]]}]'
        )}
      />
      <div className="cosmic-radio-item-indicator">
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","50% - 28.125%","0"],["L","50% + 28.125%","0"],["L","100% + 0","50% - 28.125%"],["L","100% + 0","50% + 28.125%"],["L","50% + 28.125%","100% - 0"],["L","50% - 28.125%","100% + 0"],["L","0","50% + 28.125%"],["L","0","50% - 28.125%"],["L","50% - 28.125%","0"]]}]'
          )}
        />
      </div>
    </RadioGroup.ItemControl>
  );
}

export {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioItemText,
  RadioItemHiddenInput,
  RadioItemControl,
};
