import { errorHandler } from "@/middlewares/error";
import { Product } from "@/models/product";
import { checkAdmin, connectDB } from "@/utils/features";

const handler = async (req, res, next) => {
  if (req.method !== "DELETE") {
    return errorHandler(res, 400, "Only DELETE method is allowed");
  }

  const isAdmin = await checkAdmin(req);

  if (!isAdmin) {
    throw new Error('Unauthorized');
  }


  connectDB();

  try {
    const product = await Product.findById(req.query.id);
    if (!product) return next(new errorHandler("product not found", 400))


    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    // Call next() with the error to pass it to the error handling middleware
    next(error);
  }
};

export default handler;
