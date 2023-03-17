import { apiGet } from './AxiosInterceptors';

const url = '/pokemon';

export const getContentFeed = (params: { offset: number; limit: number }) =>
	apiGet(url, { params });

export const getPokemonData = (id: string) => apiGet(`${url}/${id}`);
