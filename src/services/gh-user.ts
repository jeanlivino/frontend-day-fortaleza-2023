import axios from 'axios';
import { cache } from 'react';

export type GitubUser = {
  html_url: string;
  avatar_url: string;
  name: string;
};

export const getGithubUserData = cache((id: string) => {
  if (process.env.IS_DEV === 'true') {
    return Promise.resolve({
      html_url: '/',
      avatar_url: 'https://avatars.githubusercontent.com/u/21012724?v=4',
      name: 'Jean Livino',
    });
  }

  return axios.get(`https://api.github.com/users/${id}`).then((res) => {
    return res.data as GitubUser;
  });
});
