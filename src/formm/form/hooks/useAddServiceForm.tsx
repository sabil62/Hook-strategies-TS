import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ServiceAPIpayload, servicetypeSchema } from "../schemas/service-type";

export const useAddServiceForm = () => {
  return useForm<ServiceAPIpayload>({
    mode: "onTouched",
    resolver: zodResolver(servicetypeSchema),
  });
};
