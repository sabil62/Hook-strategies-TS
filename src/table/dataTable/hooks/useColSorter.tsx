import { useState } from "react";

import { getSortedRowModel } from "@tanstack/react-table";

import type {
  ConfigHelper,
  TableHooksReturn,
} from "@/components/dataTable/hooks/types";
import type { SortingState, SortingTableState } from "@tanstack/react-table";

type Config<TData> = ConfigHelper<
  TData,
  SortingTableState,
  "onSortingChange" | "getSortedRowModel"
>;

type UseTableColumnSorterReturn<TData> = TableHooksReturn<TData, Config<TData>>;

const initialColSortingState: SortingState = [];

export function useColSorting<TData>(
  options?: Pick<Config<TData>, "state">
): UseTableColumnSorterReturn<TData> {
  const [sorting, setSorting] = useState<SortingState>(
    options?.state.sorting ?? initialColSortingState
  );
  function resetSorting() {
    setSorting(initialColSortingState);
  }
  const config = {
    state: { sorting },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  } satisfies Config<TData>;
  return [config, { reset: resetSorting }];
}
