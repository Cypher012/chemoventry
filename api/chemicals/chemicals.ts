import { axiosInstance } from '../axiosInstance';

const BASE_PATH = '/chemicals/';

export interface Chemical {
  id: string;
  name: string;
  quantity: number;
  description: string;
  vendor: string;
  hazard_information: string;
  molecular_formula: string;
  reactivity_group: string;
  chemical_type: string;
  chemical_state: string;
  expires: string;
  created_at?: string;
  updated_at?: string;
  Shelf: number;
  created_by: number;
}

export type ApiResponse<T> = {
  chemicals: T[];
  count?: number;
};

export const getApiData = async <T>(
  endpoint: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.get<T[]>(endpoint);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const chemicals = response.data;
    const count = chemicals.length;

    return { chemicals, count };
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

export const postApiData = async <T>(endpoint: string, data: T): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateApiData = async <T, ID = string | number>(
  endpoint: string,
  id: ID,
  data: T
): Promise<T> => {
  try {
    const response = await axiosInstance.put(`${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiData = async (endpoint: string, id: string | number) => {
  try {
    return await axiosInstance.put(`${endpoint}/${id}`);
  } catch (error) {
    throw error;
  }
};

export const getChemicals = async (): Promise<ApiResponse<Chemical>> => {
  return await getApiData<Chemical>(BASE_PATH);
};

export const postChemicals = async (data: Chemical): Promise<Chemical> => {
  return await postApiData<Chemical>(BASE_PATH, data);
};

export const updateChemicals = async (
  id: number,
  data: Chemical
): Promise<Chemical> => {
  return await updateApiData<Chemical>(BASE_PATH, id, data);
};

export const deleteChemicals = async (id: number) => {
  return await deleteApiData(BASE_PATH, id);
};
