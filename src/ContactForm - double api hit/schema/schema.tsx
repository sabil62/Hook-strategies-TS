import { z } from "zod";

export const contactFormSchema = z.object({
  street_number: z.string().optional(),
  street_name: z.string().optional(),
  street_type: z.string().optional(),
  street_direction: z.string().optional(),
  unit_number: z.string().optional(),
  city: z.string().optional(),
  state_province: z.string().optional(),
  postal_code: z.string().optional(),
  country: z.string().optional(),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  plus_code: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
