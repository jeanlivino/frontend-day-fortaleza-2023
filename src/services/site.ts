import { dataApi } from '@/config/api';
import { SiteData } from '@/types';
import { cache } from 'react';
import siteDataMock from './site-mock.json';

export const getSiteData = () => siteDataMock;

// cache(() =>
//   dataApi.get('site/v1/data').then((res) => {
//     console.log(JSON.stringify(res.data));
//     return res.data as SiteData;
//   })
// );
