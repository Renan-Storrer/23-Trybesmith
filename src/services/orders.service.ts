import { IOrder } from '../interfaces';
import OrderModel from '../models/orders.model';
import connection from '../models/connection';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public findAll = async () => {
    const orders: IOrder[] = await this.model.findAll();
    return orders;
  };
}