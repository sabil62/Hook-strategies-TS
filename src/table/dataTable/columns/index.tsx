import { ColumnDef } from "@tanstack/react-table";

function snColumn<T>() {
  return {
    id: "sn",
    header: "SN",
    cell: (props) => String(props.row.index + 1),
    size: 50,
  } as const satisfies ColumnDef<T>;
}

export const colDefHelper = {
  snColumn,
};
