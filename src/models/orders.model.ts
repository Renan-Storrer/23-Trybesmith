import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public findAll = async (): Promise<IOrder[]> => {

    const query = `SELECT  orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) as productsIds 
    FROM Trybesmith.orders JOIN Trybesmith.products 
    ON products.order_id = orders.id GROUP BY orders.id;`

    const [data] = await this.connection.execute(query);

    return data as IOrder[];
  }
}