import { IToken, IUser, User } from '../interfaces';
import UserModel from '../models/user.model';
import connection from '../models/connection';
import { generateToken } from '../utils/JWT';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: IUser) => {
    const created: IToken = await this.model.create(user);
    return created;
  };

  public findByUsername = async (username: string) => {
    const user: User | null = await this.model.findByUsername(username);
    return user;
  };

  public login = async (username: string, password: string) => {
    const user = await this.findByUsername(username);

    if (!user) return { type: 401, message: 'Username or password invalid' };

    if (user.password !== password) return { type: 401, message: 'Username or password invalid' };
    
    const token = generateToken({ id: user.id, username: user.username });

    return { type: null, token };
  };
}