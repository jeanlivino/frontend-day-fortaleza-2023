import { dataApi } from '@/config/api';
import { SiteData } from '@/types';
import { cache } from 'react';

export const getSiteData = cache(() =>
  dataApi.get('site/v1/data').then((res) => {
    return res.data as SiteData;
  })
);
