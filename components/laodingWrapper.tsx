'use client';

import React from 'react';
import { useNavigationStore } from '@/store/loading.store';
import OrbitLoader from '@/app/loading';

const LoadingWrapper = () => {
  const { isPending } = useNavigationStore();
  return isPending && <OrbitLoader />;
};

export default LoadingWrapper;
