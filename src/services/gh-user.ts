import axios from 'axios';
import { cache } from 'react';

type User = {
  html_url: string;
  avatar_url: string;
  name: string;
};

export const getGithubUserData = cache((id: string) =>
  axios.get(`https://api.github.com/users/${id}`).then((res) => {
    return res.data as User;
  })
);
