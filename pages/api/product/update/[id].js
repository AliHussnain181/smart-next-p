import { errorHandler } from "@/middlewares/error";
import { Product } from "@/models/product";
import { checkAdmin, connectDB } from "@/utils/features";

const handler = async (req, res, next) => {
  if (req.method !== "PUT") {
    return errorHandler(res, 400, "Only PUT method is allowed");
  }

  const isAdmin = await checkAdmin(req);

    if (!isAdmin) {
      throw new Error('Unauthorized');
    }

  connectDB();

  const { name, description, price, company, image, quantity, category } = req.body;

  try {
    const product = await Product.findById(req.query.id);

    if (!product) {
      return errorHandler(res, 404, "Product not found");
    }

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (company) product.company = company;
    if (image) product.image = image;
    if (quantity) product.quantity = quantity;
    if (category) product.category = category;

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error");
  }
};

export default handler;
