import cart from "../models/cartModel.js";
import menu from "../models/menuModel.js";


// menambahkan menu ke cart
export const addToCart = async(req, res) =>{
  const {menu_id} = req.params;

  try {
    const selectedMenu = await menu.findByPk(menu_id);
    if (!selectedMenu) {
      return res.status(404).json("Menu not found")
    }
    const existingCartMenu = await cart.findOne({ where: { menu_id } });
    // jika menu sudah ada di cart, menambah quantity
    if (existingCartMenu) {
      existingCartMenu.quantity ++;
      await existingCartMenu.save();
    } else {
      await cart.create({
          menu_id,
          name: selectedMenu.name,
          price: selectedMenu.price,
      });
    }
    return res.status(200).json("Menu added to cart");
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }}
 
// menghapus menu dari cart  
export const removeCart = async(req, res) => {
  const { menu_id } = req.params;

  try {
    const selectedMenu = await menu.findByPk(menu_id);
    if (!selectedMenu) {
      return res.status(404).json("Menu not found")
    }
    const existingCartMenu = await cart.findOne({ where: { menu_id } });

    if (existingCartMenu.quantity > 1) {
      // jika menu sudah ada, kurangi quantity
      existingCartMenu.quantity --;
      await existingCartMenu.save();
    } else {
      await existingCartMenu.destroy();
    }
    return res.status(200).json("Menu Removed from cart");
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }}

export const getCart = async(req,res) =>{
  try{
    const cartList = await cart.findAll();
    res.status(200).json(cartList);
  }catch (err){
    req.status(400).json(err);
  }
}