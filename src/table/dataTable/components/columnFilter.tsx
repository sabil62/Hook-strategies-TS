import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import type { Column } from "@tanstack/react-table";

type FilterFormState = { search: string };

export function Filter<TData>({ column }: { column: Column<TData, unknown> }) {
  const search = column.getFilterValue() as string;
  const form = useForm<FilterFormState>({
    defaultValues: {
      search,
    },
  });

  function onSubmit(data: FilterFormState) {
    column.setFilterValue(data.search);
  }

  function onReset() {
    form.reset();
    column.setFilterValue(undefined);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 px-2 py-3"
      >
        <FormField
          control={form.control}
          name="search"
          render={() => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search" {...form.register("search")} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={onReset}
            size="sm"
          >
            Reset
          </Button>
          <Button type="submit" size="sm" className="flex-1">
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
}
