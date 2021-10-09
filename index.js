import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

// this starts express
const app = express();
const PORT = 5000;

// initialize middleware
app.use(bodyParser.json());
app.use('/users', usersRoutes)



app.get('/', (req, res) => {
  res.send("Hello from home page");
});

app.listen(PORT, () => console.log(`server running on port: https://localhost:${PORT}`));