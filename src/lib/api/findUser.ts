"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TUser} from "@/lib/api/createUser";


export const findUser = async (
  email: string,
): Promise<TApiResponse<TUser>> => {
  try {
    return await fetchApi(false, `/users/find-user?email=${email}`);
  } catch (e) {
    throw e;
  }
};
