import axios from 'axios';
import { cookies } from '@/lib/utils';

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = cookies.get('access_token');
    if (access_token) {
      config.headers['Authorization'] = `JWT ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.data.access && response.data.refresh) {
      cookies.set({ tokenType: 'access_token', token: response.data.access });
      cookies.set({ tokenType: 'refresh_token', token: response.data.refresh });
    }
    return response;
  },
  async (error) => {
    try {
      if (axios.isAxiosError(error)) {
        const skipRefreshEndpoints = ['/token/', '/refresh/', 'token/verify/'];
        if (
          skipRefreshEndpoints.some((endpoint) =>
            error.config?.url?.includes(endpoint)
          )
        ) {
          return Promise.reject(error);
        }
        if (error.response?.status === 401) {
          const access_token = cookies.get('access_token');
          if (!access_token) throw new Error('No access token found');
          const refresh_token = cookies.get('refresh_token');
          if (!refresh_token) throw new Error('No refresh token found');

          const verifyTokenResponse = await axiosInstance.post('/verify/', {
            token: access_token,
          });

          if (verifyTokenResponse.status === 401) {
            throw new Error('Token is invalid or expired');
          }

          const response = await axiosInstance.post('/refresh/', {
            refresh: refresh_token,
          });

          cookies.set({
            tokenType: 'access_token',
            token: response.data.access,
          });
          cookies.set({
            tokenType: 'refresh_token',
            token: response.data.refresh,
          });
          // Retry the original request with the new access token
          if (error.config && error.config.headers) {
            error.config.headers.Authorization = `JWT ${response.data.access}`;
          }
        }
      }

      return axios(error.config);
    } catch (refreshError) {
      console.warn('Refresh token failed', refreshError);
      cookies.remove('access_token');
      cookies.remove('refresh_token');
      return Promise.reject(refreshError);
    }
  }
);
