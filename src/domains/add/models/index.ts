export type CreateData = {
  title: string;
  description?: string;
  restrauntId?: string;
  location?: {
    x: number;
    y: number;
  }
};

export type RestrauntData = {
  id: string;
  name: string;
  address: string;
  categories: string[];
  x: number;
  y: number;
};
