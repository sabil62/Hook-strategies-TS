import { Button } from "@/components/ui/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/inputs";
import {
  useCreateAddress,
  useOpportunityDetailsById,
  useUpdateOpportunityAddress,
} from "./hooks/contacthook";
import { queries } from "@/queries";
import { isDefined } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  ContactFormSchema,
  contactFormSchema,
} from "./schema/schema";

export function ContactInfoForm()=>{
    //take out id from URL so useParmas()
    const {["opportunity-id"]:opportunityId}= useParams();
    const oid = parseInt(opportunityId);

    //Instead of passing props we have used this as a tanstack usequery 
    const {data}= useOpportunityDetailsById(oid);

    //to refresh nwe data after API hit
    const queryClient = useQueryClient();

    //=======================API functions (two API func consequetive)===========================
    //2nd API (API to be inside another usemutation function (line 57 - updateContact))
    const {mutate:updateContact} = useUpdateOpportunityAddress({
        onSuccess: (data) => {
            //----------------this is to just show object manipulation/destructuring
            const {id, ...address} = data.address || {};
            console.log(address)
            //------------------
            queryClient.invalidateQueries({
                queryKey: queries["opportunity"].details(oid).queryKey,
              });
        }
    });

    const {mutate:createAddress, isPending} = useCreateAddress({
        onSuccess: (address)=>{
            if (isDefined(address?.id)) {
                updateContact({
                    oid:oid,
                    addressUpdatePayload: {
                        address_id: address?.id
                    }
                })
            }
        }
    });

    //=================================================================================

    const form = useForm<ContactFormSchema>({
        defaultValues: {
          street_number: data?.address?.street_number ?? "",
          street_name: data?.address?.street_name ?? "",
          street_type: data?.address?.street_type ?? "",
        },
        mode: "onTouched",
        resolver: zodResolver(contactFormSchema),});

        const onSubmit = (payload: ContactFormSchema) => {
            createContact({
              payload,
            });
          };

        //-------------------------return------------------
          return (
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="street_number"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Street Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Street Number" {...field} />
                        </FormControl>
                        // to give error message
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                // Repeat  <FormField/>
              
                <Button type="submit" loading={isPending}>
                Save
                </Button>
                </form>
              </Form>

            </div>
          );


}