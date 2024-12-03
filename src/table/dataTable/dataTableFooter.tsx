import { TableFooter, TableHead, TableRow } from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";

import type { Optional } from "@/types/utils";
import type { Table } from "@tanstack/react-table";

export type DataTableFooterProps<TData> = {
  table: Table<TData>;
  tfootProps: Optional<React.ComponentPropsWithoutRef<"tfoot">>;
  showFooter: Optional<boolean>;
};

export function DataTableFooter<TData>({
  showFooter,
  table,
  tfootProps,
}: DataTableFooterProps<TData>) {
  if (!showFooter) {
    return null;
  }

  return (
    <TableFooter {...tfootProps}>
      {table.getFooterGroups().map((footerGroup) => (
        <TableRow key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <TableHead key={header.id} className="text-center">
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableFooter>
  );
}
