import React, { Fragment } from "react";

import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";

import type { Header } from "@tanstack/react-table";

export type RenderHeader = <TData>(
  header: Header<TData, unknown>,
  options?: React.ComponentPropsWithoutRef<"div"> & {
    actionProps?: React.ComponentPropsWithoutRef<"div">;
  }
) => React.ReactNode;

export default function chainRenderHeader<TData>(
  ...renderActionComponents: RenderHeader[]
) {
  return function renderHeader(
    header: Header<TData, unknown>,
    options?: React.ComponentPropsWithoutRef<"div"> & {
      actionProps?: React.ComponentPropsWithoutRef<"div">;
    }
  ) {
    const { className, actionProps, ...props } = options ?? {};
    const { className: actionClassName, ..._actionProps } = actionProps ?? {};
    return (
      <div
        className={cn(
          "inline-flex w-full items-center justify-between gap-2",
          className
        )}
        {...props}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
        <div
          className={cn("inline-flex items-center gap-1", actionClassName)}
          {..._actionProps}
        >
          {renderActionComponents.map((render, index) => (
            <Fragment key={index}>{render(header)}</Fragment>
          ))}
        </div>
      </div>
    );
  };
}
