import { Product } from "@/models/product"






const handler = async (req, res, next) => {

    try {
        const product = await Product.find()

        const Mobile = product.filter((i) => i.category === "Mobile")
        const Laptop = product.filter((i) => i.category === "Laptop")
        const Electronic = product.filter((i) => i.category === "Electronic Devices")
        const Other = product.filter((i) => i.category === "Others")

        res.status(200).json({
            Mobile: Mobile.length,
            Laptop: Laptop.length,
            Electronic: Electronic.length,
            Other: Other.length,
        })
    }
    catch (error) {

    }
}


export default handler