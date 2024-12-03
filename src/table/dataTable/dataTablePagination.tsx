import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import type { Optional } from "@/types/utils";
import type { Table } from "@tanstack/react-table";

export type DataTablePagination<TData> = {
  table: Table<TData>;
  showPagination: Optional<boolean>;
  showTotal: Optional<boolean>;
  paginationProps: Optional<React.ComponentPropsWithoutRef<"div">>;
};

export function DataTablePagination<TData>({
  table,
  showPagination,
  showTotal = true,
  paginationProps: props,
}: DataTablePagination<TData>) {
  if (!showPagination) {
    return null;
  }

  const pages = table.getPageCount();
  const activeIndex = table.getState().pagination.pageIndex;
  const showEllipsis = pages > 1 && activeIndex < pages - 1;

  return (
    <Pagination
      {...props}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-x-5 gap-y-3",
        "px-1 py-2 font-sans md:flex-row md:justify-between",
        props?.className
      )}
    >
      <Label className="text-md">
        <span className={showTotal ? "visible" : "hidden"}>
          <strong>Total: {table.getPrePaginationRowModel().rows.length}</strong>
          &nbsp;|&nbsp;
        </span>
        Page: {pages === 0 ? 0 : activeIndex + 1} of {pages}
      </Label>

      <PaginationContent>
        <PaginationItem>
          <PaginationFirst
            onClick={() => table.setPageIndex(0)}
            disabled={activeIndex === 0}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationButton isActive>{activeIndex + 1}</PaginationButton>
        </PaginationItem>

        <PaginationItem className={showEllipsis ? "block" : "hidden"}>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLast
            onClick={() => table.setPageIndex(pages - 1)}
            disabled={activeIndex === pages - 1}
          />
        </PaginationItem>
      </PaginationContent>

      <div className="flex flex-row items-center gap-2">
        <Label className="text-sm">Page Size</Label>

        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="w-[80px] font-semibold text-black">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent className="flex flex-row items-center gap-2">
            {["10", "20", "50", "100"].map((pageSize, i) => (
              <SelectItem value={pageSize} key={i}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </Pagination>
  );
}
