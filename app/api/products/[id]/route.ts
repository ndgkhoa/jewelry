import { NextResponse } from 'next/server'
import { connectMongo } from '@/lib/mongodb'
import Product from '@/models/Product'

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
) {
    await connectMongo()

    const { id } = params

    try {
        const product = await Product.findById(id)

        if (!product) {
            return NextResponse.json(
                { message: 'Product not found' },
                { status: 404 },
            )
        }

        return NextResponse.json(product)
    } catch (error) {
        console.error('Error fetching product:', error)
        return NextResponse.json(
            { message: 'Error fetching product' },
            { status: 500 },
        )
    }
}
