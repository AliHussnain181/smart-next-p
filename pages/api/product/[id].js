import { errorHandler } from "@/middlewares/error";
import { Product } from "@/models/product";
import { connectDB } from "@/utils/features";

const handler = async (req, res, next) => {
  if (req.method !== "GET") {
    return errorHandler(res, 400, "Only GET Method is allowed");
  }

  try {
    await connectDB();
    const product = await Product.findById(req.query.id); // Assuming the 'id' parameter is passed as a query parameter (e.g., /api/product?id=644f57a23a867350b39f26ce)
    if (product) {
      res.json(product);
    } else {
      res.json({ result: "No Product Found" });
    }
  } catch (error) {
    next(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;


