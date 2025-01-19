'use client';

import { useQuery } from '@tanstack/react-query';
// import { useMutation } from '@tanstack/react-query';
import { getChemicals } from './chemicals';

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

// export const usePostChemicals = () => {

//   return useMutation({
//     mutationFn: (data:Ch) => loginUser(data),
//     onSuccess: () => {
//       router.replace('/chemoventry');
//     },
//     onError: (error) => {
//       const errorMessage = error.message || 'Something went wrong';
//       return errorMessage
//     },
//   });
// };
