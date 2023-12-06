import Cart from "../models/cartModel.js";

export const addToCart = async(req, res) =>{
    const {name, price} = req.body;
    try {
      await Cart.create({
        name: name,
        price: price
    })
    res.status(201).json("Menu added to cart");
  } catch (error) {
    res.status(500).json(error);}
  }

  export const viewCart = async(req, res) =>{
    try {
      await Cart.findAll()
    res.status(201).json();
  } catch (error) {
    res.status(500).json(error);}
  }