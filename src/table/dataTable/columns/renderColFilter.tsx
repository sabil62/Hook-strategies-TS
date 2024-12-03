import { SearchIcon } from "lucide-react";

import chainRenderHeader from "@/components/dataTable/columns/renderHeader";
import { Filter } from "@/components/dataTable/components/columnFilter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import type { Header } from "@tanstack/react-table";

export function renderColFilter<TData>(header: Header<TData, unknown>) {
  const isFiltered = header.column.getIsFiltered();
  if (!header.column.getCanFilter()) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger title="filter column">
        <SearchIcon
          className={cn("size-4", {
            "fill-gray-400 text-primary": isFiltered,
          })}
          strokeWidth={isFiltered ? 3 : 1}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit min-w-[2rem] outline outline-lime-400">
        <Filter column={header.column} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const renderColFilterHeader = chainRenderHeader(renderColFilter);
