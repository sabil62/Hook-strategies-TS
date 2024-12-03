import type { TableOptions, TableState } from "@tanstack/react-table";

export type TableControls = {
  reset: () => void;
};

export type TableHooksOptions<TData> = Omit<
  TableOptions<TData>,
  "data" | "columns" | "getCoreRowModel"
>;

export type ConfigHelper<
  TData,
  StateValues extends TableState[keyof TableState],
  PickProps extends keyof Omit<TableHooksOptions<TData>, "state">,
> = {
  state: StateValues;
} & Pick<TableHooksOptions<TData>, PickProps>;

export type TableHooksReturn<
  TData,
  Config extends TableHooksOptions<TData> = TableHooksOptions<TData>,
  Controls = TableControls,
> = [Config, Controls];
