import { Schema, model } from 'mongoose';

interface IUser {
  nickName: string;
  email: number;
  avatar: string | null;
}

const userSchema = new Schema<IUser>({
  nickName: { type: String, required: true },
  email: { type: Number, required: true },
  avatar: { type: String, default: null },
});

const User = model<IUser>('users', userSchema);

export { User, IUser };
