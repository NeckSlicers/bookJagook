import exrpess from 'express';
import morgan from 'morgan';

const PORT = 8080;
const app = exrpess();

app.use(morgan('tiny'));
app.use(exrpess.urlencoded({ extended: false }));
app.use(exrpess.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
