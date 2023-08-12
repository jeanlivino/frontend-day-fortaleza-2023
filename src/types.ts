export interface SiteData {
  communities: Community[];
  speakers: Speaker[];
  talks: Talks;
  sponsors: Sponsor[];
}

export interface Sponsor {
  name: string;
  link: string;
  image: string;
}

export interface Talks {
  communities: Talk[];
  frontend: Talk[];
  invite: Talk[];
  principais: Talk[];
}

export interface Talk {
  speaker: Speaker;
  room: string;
  hour: string;
  description: string;
  id: number;
  title: string;
  image: boolean;
}

export interface Speaker {
  role: string;
  bio: string;
  social_link: string;
  id: number;
  title: string;
  image: string;
}

export interface Community {
  link: string;
  id: number;
  title: string;
  image: string;
}
