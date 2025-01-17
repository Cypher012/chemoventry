import { useMutation } from '@tanstack/react-query';
import { loginUser } from './auth';
import { LoginSchemaType } from '@/schemas/loginSchema';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginSchemaType) => loginUser(data),
    onSuccess: () => {
      console.log('Data successful');
      router.replace('/chemoventry');
    },
    onError: (error) => {
      const errorMessage = error.message || 'Something went wrong';
      console.log(errorMessage);
      toast({
        variant: 'destructive',
        title: errorMessage,
      });
    },
  });
};
