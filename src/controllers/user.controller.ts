import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import UserService from '../services/user.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body as IUser;
    const created = await this.service.create(user);
    return res.status(201).json(created);
  };

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const loginUser = await this.service.login(username, password);
    if (loginUser.type) return res.status(loginUser.type).json({ message: loginUser.message });

    return res.status(200).json({ token: loginUser.token });
  };
}
