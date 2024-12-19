
export type TApiResponse<T = null> = {
    status: number;
    data: T;
    message: string;
}