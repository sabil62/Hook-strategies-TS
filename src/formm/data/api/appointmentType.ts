import {
  ServiceAPIpayload,
  ServiceAPIresponse,
} from "@/pages/services/schemas/service-type";
import { api } from "@/utils/axios/instance";

export async function addNewServiceAPI(payload: ServiceAPIpayload) {
  const response = await api.post<ServiceAPIresponse>(
    "api/appointments/appointment-types/create/",
    payload
  );
  console.log(response);
  return response.data;
}
