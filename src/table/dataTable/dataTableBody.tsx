import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";

import type { Optional } from "@/types/utils";
import type { Row, Table } from "@tanstack/react-table";

export type DataTableBodyProps<TData> = {
  table: Table<TData>;
  tbodyProps: Optional<React.ComponentPropsWithoutRef<"tbody">>;
  tbodyRowProps: Optional<React.ComponentPropsWithoutRef<"tr">>;
  getRowClassName: Optional<(row: TData) => string>;
  onRowClick: Optional<
    (
      row: Row<TData>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
    ) => void
  >;
};

export function DataTableBody<TData>({
  table,
  tbodyProps,
  tbodyRowProps,
  getRowClassName,
  onRowClick,
}: DataTableBodyProps<TData>) {
  return (
    <TableBody {...tbodyProps}>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
            onClick={(e) => onRowClick?.(row, e)}
            className={cn(getRowClassName?.(row.original), {
              "cursor-pointer": onRowClick,
            })}
            {...tbodyRowProps}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                className={cn(
                  "text-sm",
                  cell.column.columnDef.meta?.tdClassName
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow className="hover:bg-inherit" title="No Results">
          <TableCell
            colSpan={table.getVisibleLeafColumns().length}
            className="h-60 text-center text-2xl font-semibold"
          >
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
