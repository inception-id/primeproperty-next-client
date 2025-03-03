"use server";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { TTarsChatMessage } from "./create-tars-chat-room";
import { TTarsChatRoom } from "./find-all-tars-chat-rooms";

type TResponse = {
  room: TTarsChatRoom;
  messages: TTarsChatMessage[];
};

export const findTarsChatRoom = async (
  id: number,
): Promise<TApiResponse<TResponse | null>> => {
  try {
    return await fetchApi(`/tars-chat-rooms/find/${id}`);
  } catch (error: any) {
    console.error(error);
    return {
      status: 500,
      data: null,
      message: error.message,
    };
  }
};
