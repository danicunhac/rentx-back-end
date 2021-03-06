import CreateUserDTO from '../dtos/CreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(userData: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
