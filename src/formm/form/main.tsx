import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ServiceAPIpayload } from "../schemas/service-type";
import { useAddService } from "./hooks/useAddService";

const AddNewService = () => {
  const { form, handleAllAPIresponseFunc } = useAddService({
    onAddServiceSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = (data: ServiceAPIpayload): void => {
    console.log(data);
    handleAllAPIresponseFunc.mutate(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mt-2 grid grid-cols-12 items-center gap-2 pb-3 pt-2">
                <FormLabel className="col-span-4 pt-2">
                  Appointment Name
                </FormLabel>
                <FormControl className="col-span-8">
                  <Input placeholder="appointment Name" {...field} />
                </FormControl>
                <div className="col-span-4"></div>
                <FormMessage className="col-span-8 ml-1" />
              </FormItem>
            )}
          />
          <div className="mb-2 mt-8 font-bold underline">Default Settings</div>
          {/* start time  */}
          <FormField
            control={form.control}
            name="start_time"
            render={({ field }) => (
              <FormItem className="grid grid-cols-12 items-center gap-2 pb-3 pt-2">
                <FormLabel className="col-span-4 pt-2">Start Time</FormLabel>
                <FormControl className="col-span-8">
                  <Input type="time" className="!block" {...field} />
                </FormControl>
                <div className="col-span-4"></div>
                <FormMessage className="col-span-8 ml-1" />
              </FormItem>
            )}
          />
          {/* end time  */}
          <FormField
            control={form.control}
            name="end_time"
            render={({ field }) => (
              <FormItem className="grid grid-cols-12 items-center gap-2 pb-3 pt-2">
                <FormLabel className="col-span-4 pt-2">End Time</FormLabel>
                <FormControl className="col-span-8">
                  <Input className="!block" type="time" {...field} />
                </FormControl>
                <div className="col-span-4"></div>
                <FormMessage className="col-span-8 ml-1" />
              </FormItem>
            )}
          />
          {/* no of parallel slots  */}
          <FormField
            control={form.control}
            name="concurrent_appointments"
            render={({ field }) => (
              <FormItem className="grid grid-cols-12 items-center gap-2 pb-3 pt-2">
                <FormLabel className="col-span-4 pt-2">
                  No of Parallel Slots
                </FormLabel>
                <FormControl className="col-span-8">
                  <Input
                    type="number"
                    placeholder="No of Parallel Slots"
                    {...field}
                  />
                </FormControl>
                <div className="col-span-4"></div>
                <FormMessage className="col-span-8 ml-1" />
              </FormItem>
            )}
          />

          {/* Duration / Timeslot  */}
          <FormField
            control={form.control}
            name="duration_per_appointment"
            render={({ field }) => (
              <FormItem className="grid grid-cols-12 items-center gap-2 py-2 pt-2">
                <FormLabel className="col-span-4">
                  Duration / Timeslot
                </FormLabel>
                <FormControl className="col-span-8">
                  <Input
                    type="number"
                    placeholder="Duration / Timeslot"
                    {...field}
                  />
                </FormControl>
                <div className="col-span-4"></div>
                <FormMessage className="col-span-8 ml-1" />
              </FormItem>
            )}
          />
          {/* Button*/}
          <Button
            type="submit"
            className="mt-10 inline-flex w-full items-center gap-3"
            //   loading={false}
          >
            Save
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddNewService;
