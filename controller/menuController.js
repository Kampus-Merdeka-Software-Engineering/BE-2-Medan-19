import menu from "../models/menuModel.js";

export const getMenu = async(req, res) =>{
    try {
        const menuList = await menu.findAll();
        res.status(200).json(menuList);
    } catch (err){
        res.status(500).json(err.message);
    }
}

export const addMenu = async(req, res) =>{
    const {name, price} = req.body;
    try {
        await menu.create({
            name: name,
            price: price
        })
        res.status(201).json("Menu Added!");
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteMenu = async(req,res) =>{
    const { menuId } = req.params;
    try{
        await menu.destroy({
             where: {
                menu_id : menuId
             }
        })
        res.status(201).json("Menu deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}