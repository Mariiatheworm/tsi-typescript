import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


let jobs = [
  { id: 0, name: "Уборка коммерческого помещения", price: 5000 },
  { id: 1, name: "Кейтеринг на мероприятии", price: 10000 },
  { id: 2, name: "Присмотр за ребенком", price: 3500 },
  { id: 3, name: "Эмалирование ванной", price: 2000 },
];


app.get('/api/data', (req, res) => {
  res.json(jobs);
});


app.post('/api/data', (req, res) => {
  const { name, price } = req.body;
  

  if (!name || !price) {
    return res.status(400).json({ error: 'Необходимо указать название и цену' });
  }

  const newJob = {
    id: jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 0,
    name,
    price: Number(price)
  };

  jobs.push(newJob);
  res.status(201).json(newJob);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});