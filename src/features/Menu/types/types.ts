export interface Dish {
    id: number;
    name: string;
    price: number;
    image: string;
    groupId: number;
  }
  
  export interface CreateDishDto {
    name: string;
    price: number;
    image: string;
    groupId: number;
  }