export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface IProductOrder extends IProduct {
  orderId: number | null,
}  

export interface IPayload {
  id: number,
  username: string,
}
export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number,
}
  
export interface IToken {
  token: string,
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface ILogin {
  username: string,
  password: string,
}