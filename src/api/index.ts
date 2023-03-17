import { apiGet } from './AxiosInterceptors';

const url = '/artworks';
export const getContentFeed = (params: { page: number; limit: number }) => apiGet(url, { params });
