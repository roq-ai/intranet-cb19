import axios from 'axios';
import queryString from 'query-string';
import { VlogInterface, VlogGetQueryInterface } from 'interfaces/vlog';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVlogs = async (query?: VlogGetQueryInterface): Promise<PaginatedInterface<VlogInterface>> => {
  const response = await axios.get('/api/vlogs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVlog = async (vlog: VlogInterface) => {
  const response = await axios.post('/api/vlogs', vlog);
  return response.data;
};

export const updateVlogById = async (id: string, vlog: VlogInterface) => {
  const response = await axios.put(`/api/vlogs/${id}`, vlog);
  return response.data;
};

export const getVlogById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/vlogs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVlogById = async (id: string) => {
  const response = await axios.delete(`/api/vlogs/${id}`);
  return response.data;
};
