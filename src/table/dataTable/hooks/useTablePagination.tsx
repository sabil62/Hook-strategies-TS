import { useState } from "react";

import { getPaginationRowModel } from "@tanstack/react-table";

import type {
  ConfigHelper,
  TableHooksReturn,
} from "@/components/dataTable/hooks/types";

import type {
  PaginationState,
  PaginationTableState,
} from "@tanstack/react-table";

type Config<TData> = ConfigHelper<
  TData,
  PaginationTableState,
  "onPaginationChange" | "manualPagination" | "getPaginationRowModel"
>;

type UseTablePaginationReturn<TData> = TableHooksReturn<TData, Config<TData>>;

const initialPaginationState: PaginationState = {
  pageIndex: 0,
  pageSize: 20,
};

export function useTablePagination<TData>(
  options?: Pick<Config<TData>, "state" | "manualPagination">
): UseTablePaginationReturn<TData> {
  const [pagination, setPagination] = useState<PaginationState>(
    options?.state?.pagination || initialPaginationState
  );
  function resetPagination() {
    setPagination(initialPaginationState);
  }
  const config: Config<TData> = {
    state: { pagination },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: options?.manualPagination,
  };
  return [config, { reset: resetPagination }];
}

export type PaginationDivProps = HtmlHTMLAttributes<HTMLDivElement> & {
  showTotal?: boolean;
};
