export interface Application {
  hackathons: number;
  dietaryRestrictions: string;
  website: string;
  resume: string;
  statusPublic: string;
  _id: string;
  user: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  role: string;
  checkedin: boolean;
  rsvp: boolean;
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

export interface Announcement {
  body: string;
  title: string;
  label: string;
}