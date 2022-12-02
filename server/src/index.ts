import exrpess from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const PORT = 8080;
const app = exrpess();
dotenv.config();

app.use(morgan('tiny'));
app.use(exrpess.urlencoded({ extended: false }));
app.use(exrpess.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  const response = await mongoose.connect(process.env.MOGODB_KEY as string);
  if (response) console.log('DB Connent');
  console.log(`http://localhost:${PORT}`);
});
