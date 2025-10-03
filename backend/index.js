require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyparse = require("body-parser");
const cors = require("cors");
const tempholdings=require("./dum");
const tempPositions = require("./dum1");

const HoldingModel = require("./model/HoldingModel");
const PositionsModel = require("./model/PositionsModel");
const ordersModel = require("./model/ordersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyparse.json());

app.get("/", (req, res) => {
  res.send("Server is healthy 🚀");
});

// app.get('/addHoldings',async(req, res)=>{
    
// tempholdings.forEach((item)=>{
//   console.log(item);
   
//     let newHolding = new HoldingModel({
        
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
     
//     });
    
//     newHolding.save();    
// });

//  res.send("Done!");

// });



// app.get('/addPositions',async(req, res)=>{
    
// tempPositions.forEach((item)=>{
//   console.log(item);
   
//     let newPosition = new PositionsModel({
        
//    product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
     
//     });
    
//     newPosition.save();    
// });

//  res.send("Done!");

// });


app.get("/allHoldings", async(req,res)=>{
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async(req,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async(req,res)=>{
  let allOrders = await ordersModel.find({});
  res.json(allOrders);
});


app.post("/newOrder", async(req,res)=>{
  let newOrder = new ordersModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
  
});


app.get("/orders", async (req, res) => {
  try {
    const orders = await ordersModel.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT,()=>{
   
     console.log(`app started${PORT}`);
     mongoose.connect(uri);
     console.log("DB started");
    
});