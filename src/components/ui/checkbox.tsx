import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Check } from "lucide-react";
import { Checkbox } from "@ark-ui/react/checkbox";

function CheckboxRoot({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Checkbox.Root>) {
  return (
    <Checkbox.Root className={twMerge(["cosmic-checkbox", className])} {...rest}>
      {children}
    </Checkbox.Root>
  );
}

function CheckboxLabel({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Checkbox.Label>) {
  return (
    <Checkbox.Label className={twMerge(["cosmic-checkbox-label", className])} {...rest}>
      {children}
    </Checkbox.Label>
  );
}

function CheckboxControl({
  className,
  ...rest
}: React.ComponentProps<typeof Checkbox.Control>) {
  return (
    <Checkbox.Control className={twMerge(["cosmic-checkbox-control", className])} {...rest}>
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","50% - 28.125%","0"],["L","50% + 28.125%","0"],["L","100% + 0","50% - 28.125%"],["L","100% + 0","50% + 28.125%"],["L","50% + 28.125%","100% - 0"],["L","50% - 28.125%","100% + 0"],["L","0","50% + 28.125%"],["L","0","50% - 28.125%"],["L","50% - 28.125%","0"]]}]'
        )}
      />
      <Check className="cosmic-checkbox-indicator" />
    </Checkbox.Control>
  );
}

function CheckboxHiddenInput() {
  return <Checkbox.HiddenInput />;
}

export { CheckboxRoot, CheckboxLabel, CheckboxControl, CheckboxHiddenInput };
