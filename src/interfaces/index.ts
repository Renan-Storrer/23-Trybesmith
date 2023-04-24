export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface IProductOrder extends IProduct {
  orderId: number | null,
}  
