import { Schema, model } from 'mongoose';

interface IReport {
  userId: number;
  id: string;
  report: string;
}

const reportSchema = new Schema<IReport>({
  id: String,
  userId: Number,
  report: String,
});

const Report = model<IReport>('Reports', reportSchema);
export { Report, IReport };
