import { Skeleton } from "@/components/ui/skeleton";
import {
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { arrayGenerator } from "@/utils/generators";

import type { Optional } from "@/types/utils";
import type { PropsWithChildren } from "react";

export type DataTableBodyLoadingProps = PropsWithChildren<{
  loading: Optional<boolean>;
  colSpan: number;
  showFooter: Optional<boolean>;
}>;

export function DataTableBodyLoading(props: DataTableBodyLoadingProps) {
  if (!props.loading) {
    return props.children;
  }

  const SkeletonRows = (
    <TableRow className="p-0">
      {arrayGenerator(props.colSpan).map((_, i) => (
        <TableCell key={i} className="h-10 p-2">
          <Skeleton className="h-full w-full" />
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <>
      <TableBody>
        {SkeletonRows}
        {SkeletonRows}
        {SkeletonRows}
      </TableBody>
      {props.showFooter && <TableFooter>{SkeletonRows}</TableFooter>}
    </>
  );
}
