const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
app.use('/task', TaskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`API Online, Porta: ${process.env.PORT}`);
});
