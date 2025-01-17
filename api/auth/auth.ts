import { LoginSchemaType } from '@/schemas/loginSchema';
import axios from 'axios';
import { axiosInstance } from '../axiosInstance';
// import { cookies } from '@/lib/utils';

export const loginUser = async (data: LoginSchemaType) => {
  try {
    const response = await axiosInstance.post('/token/', data);
    return response;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        const backendMessage = error.response.data?.detail;
        throw new Error(backendMessage && 'Oops! Wrong username or password.');
      }

      if (error.response?.status === 500) {
        throw new Error('Server error, please try again later');
      }

      // Handle other errors
      throw new Error(error.response?.data?.detail || 'An error occurred');
    }
    // For non-Axios errors
    throw new Error('An unexpected error occurred');
  }
};
