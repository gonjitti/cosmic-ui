import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";
import { Switch } from "@ark-ui/react/switch";

function SwitchRoot({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Switch.Root>) {
  return (
    <Switch.Root className={twMerge(["cosmic-switch", className])} {...rest}>
      {children}
    </Switch.Root>
  );
}

function SwitchHiddenInput() {
  return <Switch.HiddenInput />;
}

function SwitchControl({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Switch.Control>) {
  return (
    <Switch.Control className={twMerge(["group cosmic-switch-control", className])} {...rest}>
      <div className="cosmic-switch-frame">
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","11","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 12"],["L","11","0"]]}]'
          )}
        />
      </div>
      {children}
    </Switch.Control>
  );
}

function SwitchThumb({
  className,
  ...rest
}: React.ComponentProps<typeof Switch.Thumb>) {
  return (
    <Switch.Thumb className={twMerge(["cosmic-switch-thumb", className])} {...rest}>
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","7","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 7"],["L","7","0"]]}]'
        )}
      />
    </Switch.Thumb>
  );
}

function SwitchLabel({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Switch.Label>) {
  return (
    <Switch.Label className={className} {...rest}>
      {children}
    </Switch.Label>
  );
}

export {
  SwitchRoot,
  SwitchHiddenInput,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
};
