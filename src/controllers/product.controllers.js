import { productos } from "../db/db.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { nombre, categoria, precio, imagen } = req.body;

  try {
    const newProduct = await Product.create({
      nombre: nombre,
      categoria: categoria,
      precio: precio,
      imagen: imagen,
    });

    res.status(201).json({ message: "El producto se ha creado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAllProducts = async (req, res) => {
  // Request == Petición
  // Response == Respuesta

  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const productFound = await Product.findById(id);

    if (!productFound) {
      return res.status(404).json({ message: "No hemos podido encontrar el producto solicitado" });
    }

    res.status(200).json(productFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
