export interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  color: string;
  warranty: string;
  isAvailable: boolean;
}

export type Products = Product[];
