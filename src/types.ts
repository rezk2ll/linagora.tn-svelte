export type Product = {
  name: string;
  description: string;
  image: string;
};

export type News = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export type Service = {
  name: string;
  description: string;
  image: string;
};

export type Client = {
  name: string;
  image: string;
};

export type FooterEntry = {
  title: string;
  items: Array<{
    title: string;
    url: string;
  }>;
};

export type NavIems = Array<{
  title: string;
  href: string;
}>;
