import { renderColFilter } from "@/components/dataTable/columns/renderColFilter";
import { renderSortingButton } from "@/components/dataTable/columns/renderColSort";
import chainRenderHeader from "@/components/dataTable/columns/renderHeader";
import { GlobalFilterInput } from "@/components/dataTable/components/globalFilter";
import { DataTable } from "@/components/dataTable/dataTable";
import { useDataTable } from "@/components/dataTable/hooks/useDataTable";
import { ColumnDef } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";
import {
  service_columns,
  service_mock_data,
  ServiceTableType,
} from "./serviceTableComponents/serviceTableColumns";

function ServiceTable<T = ServiceTableType>() {
  const { table, state, config } = useDataTable<T>({
    data: service_mock_data as T[],
    columns: service_columns as ColumnDef<T>[],
  });

  const renderHeaderCell = chainRenderHeader<T>(
    renderSortingButton,
    renderColFilter
  );

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5"></div>
        <div className="col-span-7 flex flex-row-reverse pb-4">
          <GlobalFilterInput
            globalFilterState={state.filterState}
            globalFilterConfig={config.filterConfig}
            showSpinner={true}
            icon={<SearchIcon className="h-4 w-4 text-gray-500" />}
          />
        </div>
      </div>
      <DataTable
        table={table}
        maxHeight="calc(100svh-290px)"
        showPagination={true}
        renderHeader={renderHeaderCell}
      />
    </>
  );
}

export default ServiceTable;
