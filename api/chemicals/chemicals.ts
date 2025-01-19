import { axiosInstance } from '../axiosInstance';

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
  expires: string; // ISO 8601 date strings
  created_at: string;
  updated_at: string;
  Shelf: number;
  created_by: number;
}

export type ApiResponse<T> = {
  chemicals: T[];
  count: number;
};

export const getApiData = async <T>(
  endpoint: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.get<T[]>(endpoint);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const chemicals = response.data; // The array of chemicals returned
    const count = chemicals.length;

    return { chemicals, count };
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

// export const postApiData = async <T>(endpoint: string, data: T): Promise<Omit<ApiResponse<T>, 'count'>> =>{
//   try{
//     const response = await axiosInstance.post<T>(endpoint, data)
//     return response
//   }
//   catch(error){
//     throw error
//   }
// }

// Specific usage for chemicals
export const getChemicals = async (): Promise<ApiResponse<Chemical>> => {
  return await getApiData<Chemical>('/chemicals/');
};

// export const postChemicals = async (data:Chemical): Promise<ApiResponse<Chemical>> => {
//   return await postApiData<Chemical>('/chemicals/', data )
// }
