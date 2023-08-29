export interface SiteData {
  communities: Community[];
  speakers: Speaker[];
  talks: Talks;
  sponsors: Sponsor[];
  partners: Sponsor[];
  faq: FAQItem[];
  activate_agenda?: boolean;
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
  featured?: boolean;
}

export interface Speaker {
  role: string;
  company: string;
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

export interface FAQItem {
  question: string;
  answer: string;
}
