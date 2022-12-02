import { Schema, model } from 'mongoose';

/* 스키마 테스트 */

interface IUser {
  name: string;
  age: number;
  address: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});

const User = model<IUser>('users', userSchema);

export { User, IUser };
