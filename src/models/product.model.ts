import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, IProductOrder } from '../interfaces';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const values = [name, amount];

    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(query, values);
        
    const newProduct: IProduct = { id, ...product };
    return newProduct;
  };
 
  public findAll = async (): Promise<IProductOrder[]> => {
    const query = 'SELECT * FROM Trybesmith.products';

    const [data] = await this.connection.execute(query);

    return data as IProductOrder[];
  };
}