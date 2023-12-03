import Order from "../models/orderModel.js";

export const createOrder = async(req, res) =>{
    const {full_name, number, address} = req.body;
    try {
      await Order.create({
        full_name: full_name,
        number: number,
        address: address
    })
    res.status(201).json("Order Created!");
  } catch (error) {
    res.status(500).json(error);}
  }