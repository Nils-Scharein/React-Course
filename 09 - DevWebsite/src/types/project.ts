export type project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  categories: string[];
  featured: boolean;
  [key: string]: unknown;
};
