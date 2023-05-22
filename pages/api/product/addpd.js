import { Product } from "@/models/product";
import { asyncError, errorHandler } from "@/middlewares/error";
import { checkAdmin, connectDB } from "@/utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method !== 'POST')
    return errorHandler(res, 400, "Only POST Method is allowed");

    const isAdmin = await checkAdmin(req);

    if (!isAdmin) {
      throw new Error('Unauthorized');
    }

  const { name, description, price, image, company, category, quantity } = req.body;

  if (!name || !description || !price || !image || !company || !category || !quantity)
    return errorHandler(res, 400, "Please enter all fields");

  await connectDB();



  const product = await Product.create({
    name, description, price, company, image, quantity, category
  });

  res.status(200).json(product, "addProduct Successfully", 201);
})

export default handler