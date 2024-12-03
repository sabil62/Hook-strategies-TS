import { useState } from "react";

import type {
  ConfigHelper,
  TableHooksReturn,
} from "@/components/dataTable/hooks/types";
import type { RequiredZustandState } from "@/lib/types/zustand";
import type {
  OnChangeFn,
  VisibilityState,
  VisibilityTableState,
} from "@tanstack/react-table";

type Config<TData> = ConfigHelper<
  TData,
  VisibilityTableState,
  "onColumnVisibilityChange"
>;

type UseTableColumnVisibilityReturn<TData> = TableHooksReturn<
  TData,
  Config<TData>
>;

export function useColVisibility<TData>(
  options?: Pick<Config<TData>, "state">
): UseTableColumnVisibilityReturn<TData> {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    options?.state?.columnVisibility ?? {}
  );
  function resetVisibility() {
    setColumnVisibility({});
  }
  const config = {
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
  } satisfies Config<TData>;
  return [config, { reset: resetVisibility }];
}

export function useColVisibilityViaZustand<
  TData,
  TState extends VisibilityState = VisibilityState,
>(store: RequiredZustandState<TState>): UseTableColumnVisibilityReturn<TData> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setValue, setValues, reset, ...values } = store;
  function resetVisibility() {
    reset();
  }
  const config = {
    state: { columnVisibility: values },
    onColumnVisibilityChange: setValues as OnChangeFn<VisibilityState>,
  } satisfies Config<TData>;
  return [config, { reset: resetVisibility }];
}
