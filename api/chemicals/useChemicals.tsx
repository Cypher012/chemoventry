'use client';

import { useQuery } from '@tanstack/react-query';
import { getChemicals } from './chemicals';

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

export const useGetChemicals = () => {
  return useQuery({
    queryKey: ['chemicals'],
    queryFn: getChemicals,
    select: (data) => {
      return {
        chemicals: data.chemicals,
        count: data.count,
      };
    },
  });
};
