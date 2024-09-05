import { z } from "zod";

export const servicetypeSchema = z.object({
  name: z.string().min(1, "Appointment Name is required"),
  start_time: z.string({ required_error: "Start Time is required" }),
  end_time: z.string({ required_error: "End Time is required" }),
  concurrent_appointments: z.coerce.number({
    required_error: "Number of Parallel slot is required",
    invalid_type_error: "Please enter a valid Number",
  }),
  duration_per_appointment: z.coerce.number({
    required_error: "TimeSlot is required",
    invalid_type_error: "Please enter a valid number",
  }),
});

import { ApiResponse } from "@/types/response";

export type ServiceAPIpayload = {
  name: string;
  start_time: string;
  end_time: string;
  concurrent_appointments: number;
  duration_per_appointment: number;
};

export type ServiceAPIresponse = ApiResponse<ServiceAPIpayload>;
