import { useState } from "react";

import { isDefined } from "@/utils/validation";
import { getFilteredRowModel } from "@tanstack/react-table";

import type {
  ConfigHelper,
  TableHooksReturn,
} from "@/components/dataTable/hooks/types";
import type {
  ColumnFiltersState,
  ColumnFiltersTableState,
  FilterFn,
  GlobalFilterTableState,
} from "@tanstack/react-table";

export type Config<TData> = ConfigHelper<
  TData,
  Partial<ColumnFiltersTableState & GlobalFilterTableState>,
  | "onColumnFiltersChange"
  | "onGlobalFilterChange"
  | "getFilteredRowModel"
  | "globalFilterFn"
  | "filterFns"
  | "enableGlobalFilter"
>;

type UseTableFilterReturn<TData> = TableHooksReturn<TData, Config<TData>>;
type InitialStates = {
  columnFilter: ColumnFiltersState;
  globalFilter: GlobalFilterTableState["globalFilter"];
};

const initialStates = {
  columnFilter: [],
  globalFilter: "",
} as const satisfies InitialStates;

export function useTableFilter<TData>(
  options?: Pick<Config<TData>, "state">
): UseTableFilterReturn<TData> {
  const filterFn: FilterFn<TData> = (row, id, value) => {
    const gottenValue = row.getValue(id);
    if (!isDefined(gottenValue)) {
      return false;
    }
    console.log({ gottenValue, value });
    return String(gottenValue).includes(value);
  };

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    options?.state?.columnFilters ?? initialStates.columnFilter
  );
  const [globalFilter, setGlobalFilter] = useState(
    options?.state?.globalFilter ?? initialStates.globalFilter
  );

  function resetFilters() {
    setColumnFilters(initialStates.columnFilter);
    setGlobalFilter(initialStates.globalFilter);
  }

  const config = {
    filterFns: { filterFn },
    state: {
      columnFilters,
      globalFilter,
    },
    globalFilterFn: filterFn,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  } satisfies Config<TData>;

  return [config, { reset: resetFilters }];
}
