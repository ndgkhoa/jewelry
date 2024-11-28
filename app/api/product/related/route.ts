import connectDB from '@/lib/database'
import Product from '@/model/Product'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const { id } = body
        if (!id) {
            return NextResponse.json(
                { success: false, error: 'Product ID is required' },
                { status: 400 },
            )
        }

        await connectDB()

        const product = await Product.findById(id)
        if (!product) {
            return NextResponse.json(
                { success: false, error: 'Product not found' },
                { status: 404 },
            )
        }

        const relatedProducts = await Product.find({
            category: product.category,
            _id: { $ne: id },
        })

        return NextResponse.json({ success: true, data: relatedProducts })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 },
        )
    }
}
