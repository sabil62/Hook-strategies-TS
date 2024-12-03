import {
  TableContainer,
  TableContainerProps,
} from "@/components/dataTable/container";
import {
  DataTableBody,
  DataTableBodyProps,
} from "@/components/dataTable/dataTableBody";
import {
  DataTableBodyLoading,
  DataTableBodyLoadingProps,
} from "@/components/dataTable/dataTableBodyLoading";
import {
  DataTableFooter,
  DataTableFooterProps,
} from "@/components/dataTable/dataTableFooter";
import {
  DataTableHeader,
  DataTableHeaderProps,
} from "@/components/dataTable/dataTableHeader";
import { DataTablePagination } from "@/components/dataTable/dataTablePagination";
import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { isDefined } from "@/utils/validation";

import type { Table as TTable } from "@tanstack/react-table";

type DataTable<TData> = {
  table: TTable<TData>;
  className?: string;
  loading?: boolean;
} & Partial<DataTableHeaderProps<TData>> &
  Partial<DataTableBodyLoadingProps> &
  Partial<DataTableBodyProps<TData>> &
  Partial<DataTableFooterProps<TData>> &
  Partial<DataTablePagination<TData>> &
  TableContainerProps;

export function DataTable<TData>({
  table,
  className,
  loading,
  ...props
}: DataTable<TData>) {
  const columns = table.getAllColumns();

  return (
    <TableContainer
      maxHeight={props.maxHeight}
      containerProps={props.containerProps}
    >
      <Table
        className={cn("scroll-bar", className)}
        style={{
          width: isDefined(props.columnPinProps) ? table.getTotalSize() : "max",
        }}
      >
        <DataTableHeader
          table={table}
          theadProps={props.theadProps}
          thProps={props.thProps}
          thRowProps={props.thRowProps}
          renderHeader={props.renderHeader}
          columnPinProps={props.columnPinProps}
        />

        <DataTableBodyLoading
          loading={loading}
          colSpan={columns.length}
          showFooter={props.showFooter}
        >
          <DataTableBody
            table={table}
            tbodyProps={props.tbodyProps}
            tbodyRowProps={props.tbodyRowProps}
            getRowClassName={props.getRowClassName}
            onRowClick={props.onRowClick}
          />
          <DataTableFooter
            table={table}
            showFooter={props.showFooter}
            tfootProps={props.tfootProps}
          />
        </DataTableBodyLoading>
      </Table>

      <DataTablePagination
        table={table}
        showPagination={props.showPagination}
        showTotal={props.showTotal}
        paginationProps={props.paginationProps}
      />
    </TableContainer>
  );
}
