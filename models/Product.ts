import { Product } from '@/types/types'
import { model, models, Schema } from 'mongoose'

const ProductSchema = new Schema<Product>(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        rating: {
            rate: {
                type: Number,
                required: true,
                min: 0,
                max: 5,
            },
            count: {
                type: Number,
                required: true,
            },
        },
    },
    {
        timestamps: true,
    },
)

export default models.Product || model<Product>('Product', ProductSchema)
