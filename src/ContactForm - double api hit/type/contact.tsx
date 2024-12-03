// same as schema.tsx wala type, (but schema specifically is used for form and type is used in general)
//used mostly in contact-api.tsx

export type Address = {
  id: number;
  street_number: string;
  street_name: string;
  street_type: string;
  street_direction: string;
  unit_number: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  latitude: string;
  longitude: string;
  plus_code: string;
};

export type AddressPayload = {
  street_number?: string;
  street_name?: string;
  street_type?: string;
  street_direction?: string;
  unit_number?: string;
  city?: string;
  state_province?: string;
  postal_code?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  plus_code?: string;
};

export type AddressOpportunityUpdateResponse = {
  address?: Address;
  company_address?: Address;
};

export type AddressUpdatePayload = {
  address_id?: number;
  company_address_id?: number;
};
