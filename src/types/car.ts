export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  isAvailable: boolean;
}

export type Cars = Car[];
