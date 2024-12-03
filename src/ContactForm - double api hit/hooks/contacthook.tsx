import { createAddress, updateOpportunityAddress } from "../api/contact-api";
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export function useOpportunityDetailsById<Select = Opportunity>(
  id: number,
  options?: RemoveQueryKeyFn<
    UndefinedInitialDataOptions<
      Opportunity,
      AxiosError,
      Select,
      QueryKeys["opportunity"]["details"]["queryKey"]
    >
  >
) {
  return useQuery({
    ...queries["opportunity"].details(id),
    ...options,
  });
}

//CREATE ADDRESS
export function useCreateAddress(
  options?: UseMutationOptions<
    Address,
    AxiosError,
    {
      payload: Partial<AddressPayload>;
    }
  >
) {
  return useMutation({
    mutationFn: ({ payload }) => createAddress(payload),
    ...options,
    onError: (err, ...props) => {
      handleOnError(err, {
        fallbackMsg:
          "Something went wrong. Failed to update Contact Information",
      });
      options?.onError?.(err, ...props);
    },
  });
}

//PATCH ADDRESS
export function useUpdateOpportunityAddress(
  options?: UseMutationOptions<
    AddressOpportunityUpdateResponse,
    AxiosError,
    {
      oid: number;
      addressUpdatePayload: AddressUpdatePayload;
    }
  >
) {
  return useMutation({
    mutationFn: ({ oid, addressUpdatePayload }) =>
      updateOpportunityAddress(oid, addressUpdatePayload),
    ...options,
    onSuccess: (...props) => {
      toast.success("Successfully Updated Data");
      options?.onSuccess?.(...props);
    },
    onError: (err, ...props) => {
      handleOnError(err, {
        fallbackMsg:
          "Something went wrong. Failed to update Contact Information",
      });
      options?.onError?.(err, ...props);
    },
  });
}
