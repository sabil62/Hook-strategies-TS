import { addNewServiceAPI } from "@/data/api/applicantType";
import {
  ServiceAPIpayload,
  ServiceAPIresponse,
} from "@/form/schemas/service-type";
import { ApiError } from "@/types/errors";
import { handleError } from "@/utils/parser/errorParser";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useAddNewServiceTypeAPI = (
  options?: UseMutationOptions<
    ServiceAPIresponse,
    AxiosError<ApiError>,
    ServiceAPIpayload
  >
) => {
  return useMutation({
    mutationFn: addNewServiceAPI,
    ...options,
    onSuccess: (data, ...props) => {
      const { message } = data;
      toast.success(message ?? "Successfully Added new Service type");
      options?.onSuccess?.(data, ...props);
    },
    onError: (err: AxiosError<ApiError>, ...props) => {
      handleError(err);
      options?.onError?.(err, ...props);
    },
  });
};
