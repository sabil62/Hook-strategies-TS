"use client";

import { useState } from "react";

import type {
  ConfigHelper,
  TableHooksReturn,
} from "@/components/dataTable/hooks/types";
import type {
  ColumnPinningState,
  ColumnPinningTableState,
} from "@tanstack/react-table";

type Config<TData> = ConfigHelper<
  TData,
  ColumnPinningTableState,
  "onColumnPinningChange"
>;

type UseTableColumnPinReturn<TData> = TableHooksReturn<TData, Config<TData>>;

const initialColPinningState = {
  left: [],
  right: [],
} satisfies ColumnPinningState;

export function useTableColumnPin<TData>(
  options?: Pick<Config<TData>, "state">
): UseTableColumnPinReturn<TData> {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>(
    options?.state.columnPinning ?? initialColPinningState
  );
  function resetPinning() {
    setColumnPinning(initialColPinningState);
  }
  const config = {
    state: { columnPinning },
    onColumnPinningChange: setColumnPinning,
  } satisfies Config<TData>;
  return [config, { reset: resetPinning }];
}
