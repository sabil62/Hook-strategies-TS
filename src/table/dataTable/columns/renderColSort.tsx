import { ArrowDownZA, ArrowUpAZ, ArrowUpDown } from "lucide-react";
import React from "react";

import chainRenderHeader from "@/components/dataTable/columns/renderHeader";

import type { Header } from "@tanstack/react-table";

type GetColSortIconProps = {
  ascIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  descIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  sortingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  options?: {
    iconProps?: { size?: number; strokeWidth?: number };
  };
};

export function getColSortIcon<TData>(props?: GetColSortIconProps) {
  return function getSortIcon(header: Header<TData, unknown>) {
    const size = props?.options?.iconProps?.size ?? 16;
    const strokeWidth = props?.options?.iconProps?.strokeWidth ?? 1;
    const SortStateIcons = {
      asc: props?.ascIcon ?? ArrowUpAZ,
      desc: props?.descIcon ?? ArrowDownZA,
      sorting: props?.sortingIcon ?? ArrowUpDown,
    };

    if (!header.column.getCanSort()) {
      return null;
    }

    const sortedState = header.column.getIsSorted();
    if (!sortedState) {
      return <SortStateIcons.sorting size={size} strokeWidth={strokeWidth} />;
    }

    const Icon = SortStateIcons[sortedState];
    return <Icon size={size} strokeWidth={2} />;
  };
}

export function renderSortingButton<TData>(header: Header<TData, unknown>) {
  const getSortIcon = getColSortIcon<TData>();
  const nextSortOrder = header.column.getNextSortingOrder();
  const canSort = header.column.getCanSort();

  if (!canSort) {
    return null;
  }

  return (
    <button
      className="cursor-pointer select-none"
      onClick={header.column.getToggleSortingHandler()}
      title={nextSortOrder !== false ? `sort ${nextSortOrder}` : "Remove sort"}
    >
      {getSortIcon(header)}
    </button>
  );
}

export const renderColSortHeader = chainRenderHeader(renderSortingButton);
