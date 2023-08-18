import { dataApi } from '@/config/api';
import { SiteData } from '@/types';
import { cache } from 'react';

export const revalidate = 30;

export const getSiteData = cache(() =>
  dataApi.get('site/v1/data').then((res) => {
    console.log(res.data);
    return res.data as SiteData;
  })
);
