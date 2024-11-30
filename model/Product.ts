import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        rating: {
            rate: { type: Number, default: 0 },
            count: { type: Number, default: 0 },
        },
    },
    { timestamps: true },
)

const Product =
    mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default Product
