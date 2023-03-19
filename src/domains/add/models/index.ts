export type CreateData = {
  title: string;
  description?: string;
  location?: {
    x: number;
    y: number;
  }
};

export type RestrauntData = {
  name: string;
  address: string;
  categories: string[];
  x: number;
  y: number;
};
