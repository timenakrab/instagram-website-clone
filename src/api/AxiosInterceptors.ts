import axios from 'axios';
import Config, { CONFIG_VALUE } from 'config';

export const responseInterceptors = [
	(response: any) => {
		return response;
	},
	(error: any) => {
		return Promise.reject(error);
	},
];

const axiosIntance = axios.create({
	baseURL: Config.getValue(CONFIG_VALUE.REACT_APP_BACKEND_URL) || '/api',
	headers: {
		ContentType: 'application/json',
	},
});

axiosIntance.interceptors.response.use(...responseInterceptors);

export const apiGet = (url: string, config?: any) =>
	axiosIntance.get(url, config).then((res) => res.data);
export const apiPost = (url: string, body: any, config?: any) =>
	axiosIntance.post(url, body, config).then((res) => res.data);
export const apiPut = (url: string, body: any) =>
	axiosIntance.put(url, body).then((res) => res.data);
export const apiPatch = (url: string, body: any) =>
	axiosIntance.patch(url, body).then((res) => res.data);
export const apiDelete = (url: string, data?: any) =>
	axiosIntance.delete(url, { data }).then((res) => res.data);
