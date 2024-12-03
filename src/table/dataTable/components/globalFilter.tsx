import { SearchIcon } from "lucide-react";

import {
  DebouncedInput,
  DebouncedInputProps,
} from "@/components/debounced-input";
import { cn } from "@/lib/utils";
import { Table } from "@tanstack/react-table";

import type { Config } from "@/components/dataTable/hooks/useTableFilter";
type GlobalFilterProps<TData> = {
  table: Table<TData>;
  globalFilterState: Config<TData>["state"]["globalFilter"];
  globalFilterConfig: Omit<Config<TData>, "state">;
} & Omit<DebouncedInputProps, "onChange">;

export function GlobalFilterInput<TData>({
  globalFilterState,
  globalFilterConfig,
  className,
  defaultValue,
  icon,
  variant,
  showSpinner,
  ...props
}: GlobalFilterProps<TData>) {
  const { onGlobalFilterChange } = globalFilterConfig;

  return (
    <DebouncedInput
      value={globalFilterState?.globalFilter ?? defaultValue}
      onChange={(val) => onGlobalFilterChange?.(val)}
      className={cn("lg:w-[400px]", className)}
      placeholder="Search..."
      icon={icon ?? <SearchIcon className="h-4 w-4 text-gray-500" />}
      variant={variant ?? "default"}
      showSpinner={showSpinner ?? true}
      {...props}
    />
  );
}
