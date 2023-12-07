import order from "../models/orderModel.js";
import cart from "../models/cartModel.js";

export const createOrder = async(req, res) =>{
    const {full_name, number, address} = req.body;
    try {
      const cartMenu = await cart.findAll()
      const orderedMenu = cartMenu.map(menu => ({
        name: menu.name,
        price: menu.price,
        quantity: menu.quantity,
      }))
      await order.create({
        full_name: full_name,
        number: number,
        address: address,
        ordered_menu: orderedMenu
    })
    await cart.destroy({where: {}})
    res.status(201).json("Order Created!");
  } catch (error) {
    res.status(500).json(error);}
  }

export const getOrder = async(req, res) =>{
  try {
    const orderList = await order.findAll();
    res.status(201).json(orderList);
  }catch(err){
    req.status(400).json(err);
  }
}