// const express = require('express');
// const data = require('./data.js');
// const cors = require('cors');
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import data from './data';
import config from './config';
import userRouter from './routers/userRouter';
import orderRouter from "./routers/orderRouter";


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/paypal/clientId", (req,res)=>{
  res.send({ clientId: config.PAYPAL_CLIENT_ID })
});
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x => x._id === req.params.id);
  product ? res.send(product) : res.status(404).send({message: 'Product Not Found'});
})
// app.use((err, req, res, next) => {
//   const status = err.name && err.name === "ValidationError" ? 400 : 500;
//   res.status(status).send({ message: err.message });
//   next();
// });
app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  }).then(()=>{
    console.log("Connected to mongodb")
  })
  .catch((error) => {
    console.log("error", error);
  }); 
