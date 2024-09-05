// import { useAddNewServiceTypeAPI } from "@/hooks/api/applicantType";
import { useAddNewServiceTypeAPI } from "../../hooks/api/applicantType";
import { useAddServiceForm } from "./useAddServiceForm";

export const useAddService = (props: {
  onAddServiceSuccess?: () => void;
  onAddServiceError?: () => void;
}) => {
  const form = useAddServiceForm();

  const handleAllAPIresponseFunc = useAddNewServiceTypeAPI({
    onSuccess: () => {
      console.log("SUCCESS");
      props?.onAddServiceSuccess?.();
    },
    onError: () => {
      props?.onAddServiceError?.();
    },
  });

  return { form, handleAllAPIresponseFunc };
};
