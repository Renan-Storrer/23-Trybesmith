import { Request, Response } from 'express';

import { IProduct } from '../interfaces';
import ProductService from '../services/product.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();        
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body as IProduct;
    const created = await this.service.create(product);

    return res.status(201).json(created);
  };

  public findAll = async (_req: Request, res: Response) => {
    const products = await this.service.findAll();

    return res.status(200).json(products);
  };
}