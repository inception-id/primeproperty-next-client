export type BpsResponse = {
  status: string;
  "data-availability": string;
  data: [BpsPagination, BpsDomain[]];
};

export type BpsPagination = {
  page: number;
  pages: number;
  total: number;
};

export type BpsDomain = {
  id: string;
  nama: string;
};
