import { Pin } from "lucide-react";
import { CSSProperties } from "react";

import chainRenderHeader from "@/components/dataTable/columns/renderHeader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import type { ColumnPinningPosition, Header } from "@tanstack/react-table";

const ColumnPinningOptions = [
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
  { value: false, label: "Unpin" },
] as const satisfies {
  value: ColumnPinningPosition;
  label: string;
}[];

export function getThStyles<TData>(
  header: Header<TData, unknown>
): CSSProperties {
  const column = header.column;
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn("right");

  return {
    borderBlockEndColor: "inherit",
    backgroundColor: "inherit",
    boxShadow: isLastLeftPinnedColumn
      ? "-4px 0 4px -4px gray inset"
      : isFirstRightPinnedColumn
        ? "4px 0 4px -4px gray inset"
        : undefined,
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    minWidth: column.getSize(),
    zIndex: isPinned ? 10 : 0,
  } satisfies CSSProperties;
}

export function renderColPinButton<TData>(header: Header<TData, unknown>) {
  const column = header.column;
  const isPinned = column.getIsPinned();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="Pin Columns">
          <Pin
            className={cn("h-3 w-3 rotate-45", {
              "fill-black": isPinned,
            })}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Pin Columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={column.getIsPinned().toString()}
          onValueChange={(value) => {
            if (value !== "false") {
              header.column.pin(value as ColumnPinningPosition);
              return;
            }
            header.column.pin(false);
          }}
        >
          {ColumnPinningOptions.map((opt, i) => (
            <DropdownMenuRadioItem key={i} value={opt.value.toString()}>
              {opt.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function getThStyleAndPinButtonRenderers() {
  return {
    getThStyles,
    renderColPinButton,
  };
}

export const renderColPinningHeader = chainRenderHeader(renderColPinButton);
