export interface PaginationParams {
  limit: number;
  page: number;
  total: number;
  order: 'ASC' | 'DESC';

  [key: string]: any;
}

export interface ListResponse<T> {
  data: T[];
  pagination?: PaginationParams;
}
