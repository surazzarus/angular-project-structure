export interface IApiQuery {
  search?: string;
  filter?: any;
  fields?: any;
  sort?: any;
  page?: {
    skip?: number;
    limit?: number;
  };
}
