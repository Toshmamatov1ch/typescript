export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  profession: string;
  isActive: boolean;
  salary: number;
}

export type Users = User[];
