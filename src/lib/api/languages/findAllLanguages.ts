"use server";

import {fetchApi} from "@/lib/api/fetchApi";
import {TApiResponse} from "@/lib/api/ApiResponse";
import {TLanguage} from "@/lib/api/languages/createLanguage";

export const findAllLanguages = async (): Promise<
    TApiResponse<TLanguage[]>
> => {
    try {
        return await fetchApi(`/languages/find-all`, {});
    } catch (e) {
        throw e;
    }
};
