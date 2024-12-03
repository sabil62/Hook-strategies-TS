import {
  ColumnDef,
  getCoreRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table";
import { useColSorting } from "./useColSorter";
import { useTableFilter } from "./useTableFilter";
import { useTablePagination } from "./useTablePagination";

export type DataTableProps<TData extends RowData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
};

export function useDataTable<TData extends RowData>({
  data,
  columns,
}: DataTableProps<TData>) {
  const [{ state: filterState, ...filterConfig }] = useTableFilter<TData>();
  const [{ state: paginationState, ...paginationConfig }] =
    useTablePagination<TData>();
  const [{ state: sortingState, ...sortingConfig }] = useColSorting<TData>();

  const reactTable = useReactTable<TData>({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      ...filterState,
      ...paginationState,
      ...sortingState,
    },
    ...filterConfig,
    ...paginationConfig,
    ...sortingConfig,
  });

  return {
    table: reactTable,
    state: { filterState, paginationState, sortingState },
    config: { filterConfig, paginationConfig, sortingConfig },
  } as const;
}
