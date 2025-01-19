'use client';

import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { Chemical, getChemicals, postChemicals } from './chemicals';

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

export const usePostChemicals = () => {
  return useMutation({
    mutationFn: (data: Chemical) => postChemicals(data),
    onSuccess: () => {
      console.log('successful');
    },
    onError: (error) => {
      const errorMessage = error.message || 'Something went wrong';
      return errorMessage;
    },
  });
};
