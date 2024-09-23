import {
  Address,
  AddressUpdatePayload,
  AddressOpportunityUpdateResponse,
  AddressPayload,
} from "../type/contact";

export async function createAddress(payload: AddressPayload) {
  const { data } = await crmApi.post<Address>(
    `/common/address/create/`,
    payload
  );
  return data;
}

export async function updateOpportunityAddress(
  id: number,
  payload: AddressUpdatePayload
) {
  const { data } = await crmApi.patch<AddressOpportunityUpdateResponse>(
    `/opportunities/${id}/update-addresses/`,
    payload
  );
  return data;
}
