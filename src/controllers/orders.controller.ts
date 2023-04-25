import { Request, Response } from 'express';

import OrderService from '../services/orders.service';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public findAll = async (_req: Request, res: Response) => {
    const orders = await this.service.findAll();
    return res.status(200).json(orders);
  };
}