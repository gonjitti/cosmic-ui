import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Menu } from "@ark-ui/react/menu";
import { Portal } from "@ark-ui/react/portal";

function MenuRoot({
  children,
  ...rest
}: React.ComponentProps<typeof Menu.Root>) {
  return <Menu.Root {...rest}>{children}</Menu.Root>;
}

function MenuTrigger({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<typeof Menu.Trigger>) {
  return (
    <Menu.Trigger asChild {...rest}>
      {!asChild ? (
        <Button className={twMerge(["cosmic-menu-trigger", className])}>
          {children}
          <Menu.Indicator className="ms-auto transition-transform group-data-[state=open]:rotate-180">
            <ChevronDown className="size-4" />
          </Menu.Indicator>
        </Button>
      ) : (
        children
      )}
    </Menu.Trigger>
  );
}

function MenuPositioner({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Menu.Positioner>) {
  return (
    <Portal>
      <Menu.Positioner className={className} {...rest}>
        {children}
      </Menu.Positioner>
    </Portal>
  );
}

function MenuContent({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Menu.Content>) {
  return (
    <Menu.Content
      className={twMerge(["group cosmic-menu-content", className])}
      {...rest}
    >
      <div className="cosmic-menu-content-frame">
        <Frame
          paths={JSON.parse(
            '[{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","14","6"],["L","50% - 7","6"],["L","50% - 2","0"],["L","50% + 4","0"],["L","50% + 9","6"],["L","100% - 13","6"],["L","100% + 0","19"],["L","100% + 0","100% - 26"],["L","100% - 13","100% - 12"],["L","50% + 13","100% - 12"],["L","50% - 0","100% + 0"],["L","0% + 14","100% + 0"],["L","0% + 0","100% - 13"],["L","0","0% + 19"],["L","14","6"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% + 16","100% - 8"],["L","50% + 25","100% - 8"],["L","50% + 18","100% - 2"],["L","50% + 9","100% - 2"],["L","50% + 16","100% - 8"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% + 30","100% - 8"],["L","50% + 37","100% - 8"],["L","50% + 32","100% - 3"],["L","50% + 25","100% - 3"],["L","50% + 30","100% - 8"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% + 42","100% - 8"],["L","50% + 48","100% - 8"],["L","50% + 44","100% - 4"],["L","50% + 38","100% - 4"],["L","50% + 42","100% - 8"]]}]'
          )}
          enableBackdropBlur={true}
        />
      </div>
      <div className="cosmic-menu-content-inner">{children}</div>
    </Menu.Content>
  );
}

function MenuItem({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<typeof Menu.Item>) {
  return (
    <Menu.Item asChild {...rest}>
      {!asChild ? (
        <div className={twMerge(["cosmic-menu-item", className])}>
          {children}
        </div>
      ) : (
        children
      )}
    </Menu.Item>
  );
}

export { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem };
