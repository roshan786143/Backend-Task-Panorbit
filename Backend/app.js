const express = require("express");
const app = express();

const router = require('./routes/route');

const colors = require('colors');

const cors = require('cors');
require('dotenv').config();

const User = require('./models/user');

const port = process.env.PORT || 4040;

app.use(cors({
    options: '*'
}));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/api',router);

app.listen(port,()=>console.log(`hey your server has started on port ${port}`.bgGreen));
