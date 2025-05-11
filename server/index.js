import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Метод GET

const jobs = [
  { id: 0, name: "Уборка коммерческого помещения", price: 5000 },
  { id: 1, name: "Кейтеринг на мероприятии", price: 10000 },
  { id: 2, name: "Присмотр за ребенком", price: 3500 },
  { id: 3, name: "Эмалирование ванной", price: 2000 },
];

app.get('/api/data', (req, res) => {
    res.json(jobs);
});

//http://localhost:5000/api/data

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
