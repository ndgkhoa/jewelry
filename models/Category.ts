import { Category } from '@/types/types'
import { Schema, model, models } from 'mongoose'

const CategorySchema = new Schema<Category>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    { timestamps: true },
)

export default models.Category || model<Category>('Category', CategorySchema)
