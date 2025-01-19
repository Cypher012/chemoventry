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
  expires: string; // You could use `Date` if you prefer, but `string` will work for ISO 8601 date strings.
  created_at: string; // You could use `Date` if you prefer, but `string` will work for ISO 8601 date strings.
  updated_at: string; // You could use `Date` if you prefer, but `string` will work for ISO 8601 date strings.
  Shelf: number;
  created_by: number;
}

export type ChemicalsResponse = {
  chemicals: Chemical[];
  count: number;
};

export const getChemicals = async (): Promise<ChemicalsResponse> => {
  try {
    const response = await axiosInstance.get<Chemical[]>('/chemicals/');

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const chemicals = response.data; // Access the `data` property
    const count = chemicals.length;

    return { chemicals, count };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
