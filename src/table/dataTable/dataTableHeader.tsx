import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";

import type { Optional as TOptional } from "@/types/utils";
import { Optional } from "@/utils/optional";
import type { Header, Table } from "@tanstack/react-table";
import type { CSSProperties } from "react";

export type DataTableHeaderProps<TData> = {
  table: Table<TData>;
  theadProps: TOptional<React.ComponentPropsWithoutRef<"thead">>;
  thRowProps: TOptional<React.ComponentPropsWithoutRef<"tr">>;
  thProps: TOptional<React.ComponentPropsWithoutRef<"th">>;
  renderHeader: TOptional<(header: Header<TData, unknown>) => React.ReactNode>;
  columnPinProps: TOptional<{
    getThStylesForPinning: (header: Header<TData, unknown>) => CSSProperties;
  }>;
};

export function DataTableHeader<TData>({
  table,
  renderHeader,
  columnPinProps,
  theadProps,
  thProps,
  thRowProps,
}: DataTableHeaderProps<TData>) {
  return (
    <TableHeader
      {...theadProps}
      className={cn("sticky z-10", theadProps?.className)}
    >
      {table.getHeaderGroups().map((hGroup) => (
        <TableRow
          key={hGroup.id}
          {...thRowProps}
          className={cn(
            "sticky top-0 bg-blue-100 hover:bg-blue-100",
            thRowProps?.className
          )}
        >
          {hGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              style={{
                width: header.column.getSize(),
                minWidth: header.column.getSize(),
                ...columnPinProps?.getThStylesForPinning(header),
              }}
              className={cn(
                thProps?.className,
                header.column.columnDef.meta?.thClassName,
                "text-black"
              )}
            >
              {header.isPlaceholder
                ? null
                : Optional.from(renderHeader)
                    .map((renderHeader) => renderHeader(header))
                    .or(
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
}
