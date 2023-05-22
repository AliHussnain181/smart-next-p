const { errorHandler } = require("@/middlewares/error");
const { Product } = require("@/models/product");
const { connectDB } = require("@/utils/features");

// const handler = async (req, res, next) => {
//     try {

//         if (req.method !== "GET")
//             return errorHandler(res, 400, "Only GET Method is allowed");

//         await connectDB();

//         const product = await Product.find();

//         res.status(200).json(product)

//     } catch (error) {
//         next(error)
//     }
// }

// export default handler


const handler = async (req, res, next) => {
    try {

        if (req.method !== "GET")
            return errorHandler(res, 400, "Only GET Method is allowed");

        await connectDB();

        const keyword = req.query.keyword || "";
        const category = req.query.category || "";

        const product = await Product.find({
            name: {
                $regex: keyword,
                $options: "i",
            },
            category: {
                $regex: category,
                $options: "i",
            },
        })
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}

export default handler