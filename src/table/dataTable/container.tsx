import { cn } from "@/lib/utils";

import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type TableContainerProps = PropsWithChildren<{
  maxHeight: number | string;
  containerProps?: ComponentPropsWithoutRef<"div">;
}>;

export function TableContainer({
  maxHeight,
  containerProps: { className, ...containerProps } = {},
  ...props
}: TableContainerProps) {
  return (
    <div
      id="table_container"
      className={cn(
        "scroll-bar flex h-screen flex-col justify-between overflow-y-scroll",
        className
      )}
      style={{ maxHeight }}
      {...containerProps}
    >
      {props.children}
    </div>
  );
}
