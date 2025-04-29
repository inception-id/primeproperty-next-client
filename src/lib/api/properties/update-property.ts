import { fetchApi } from "../fetch-api";
import { CreateUpdatePropertyPayload } from "./create-property";
import { Property } from "./type";

export const updateProperty = async (
  propertyId: number,
  payload: CreateUpdatePropertyPayload,
) => {
  return await fetchApi<Property>(`/properties/${propertyId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
