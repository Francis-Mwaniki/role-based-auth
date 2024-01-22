const router = require('./routes/user');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = 3000;
const DB_URL = process.env.DB_URL;

/* mongoose */
mongoose.connect(DB_URL, {
}).then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.log(err);
});

/* express json */
app.use(express.json());
/* express json */

/* routes */
app.use('/api', router);
/* routes */

/* cors */
app.use(cors());
/* cors */



/* server */
app.listen(3000, () => {
    console.log('Server on port 3000');
});