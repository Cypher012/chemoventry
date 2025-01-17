'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { AtSign } from 'lucide-react';
import { LoginSchemaType, loginSchema } from '@/schemas/loginSchema';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/api/auth/useAuth';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/toggle-mode';

const Login = () => {
  const login = useLogin();
  const { register, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  // const { toast } = useToast();
  // console.log(toast);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    console.log(data);
    login.mutate(data);
  };

  return (
    <>
      <div className=" flex justify-end items-center w-full h-16">
        <ModeToggle className="mr-5 dark:bg-gray-900 shadow-lg border border-primary" />
      </div>
      <section className="relative flex  flex-wrap items-center justify-center ">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-5xl  dark:text-gray-100 text-[#424842] font-bold sm:text-6xl mb-6">
              Chemoventry
            </h1>
            <h1 className="text-xl dark:text-gray-100 text-[#424842] font-sans font-medium sm:text-2xl mb-2">
              Welcome back! Log in to continue
            </h1>

            <p className="dark:text-gray-100 text-gray-500">
              Log in to seamlessly manage your chemical inventory. Access stock
              levels, updates, and reports with ease.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            className="mx-auto mb-0 mt-5 max-w-md space-y-4"
          >
            <div>
              <Label
                htmlFor="Email"
                className="block text-sm mb-2 font-medium text-gray-700 dark:text-gray-100"
              >
                Email
              </Label>

              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className={cn('border-primary/75 border-2')}
                  {...register('email')}
                />

                <button className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AtSign className="size-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div>
              <Label
                htmlFor="Password"
                className="block text-sm mb-2 font-medium text-gray-700 dark:text-gray-100"
              >
                Password
              </Label>

              <div className="relative">
                <Input
                  type={passwordVisibility ? 'text' : 'password'}
                  id="Password"
                  placeholder="Enter your password"
                  className={cn('border-primary/75 border-2')}
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  {passwordVisibility ? (
                    <Eye className="w-4 h-4 text-gray-400  cursor-pointer" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-gray-400  cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Button type="submit">Sign in</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
