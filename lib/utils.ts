import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cookies from 'js-cookie';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CookiesType =
  | {
      token: string;
      tokenType: 'access_token';
      expires: 1; // Expires in 1 day
    }
  | {
      token: string;
      tokenType: 'refresh_token';
      expires: 7; // Expires in 7 days
    };

export const cookies = {
  set: ({ tokenType, token }: Omit<CookiesType, 'expires'>) => {
    const expires = tokenType === 'access_token' ? 1 : 7;
    return Cookies.set(tokenType, token, {
      expires,
      secure: true,
      sameSite: 'Strict',
    });
  },
  get: (tokenType: CookiesType['tokenType']) => Cookies.get(tokenType),
  remove: (tokenType: CookiesType['tokenType']) => Cookies.remove(tokenType),
};
