import { dataApi } from '@/config/api';
import { SiteData } from '@/types';
import { cache } from 'react';
import data from './data.json';

export const getSiteData = () => data as SiteData;
