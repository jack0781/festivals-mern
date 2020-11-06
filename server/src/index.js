import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import festivalsRoutes from './routes/festivalsRoutes.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use("/upload",  express.static(__dirname + '/uploads'))
app.use('/festivals', festivalsRoutes);

const CONNECTION_URL = 'mongodb://localhost:27017/festivals';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);