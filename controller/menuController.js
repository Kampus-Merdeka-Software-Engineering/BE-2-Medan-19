import menu from "../model/menuModel.js";

export const getMenu = async(req, res) =>{
    try {
        const respons = await menu.findAll();
        res.status(200).json(respons);
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