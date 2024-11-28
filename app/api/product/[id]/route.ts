import connectDB from '@/lib/database'
import Product from '@/model/Product'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const urlParts = req.nextUrl.pathname.split('/')
    const id = urlParts[urlParts.length - 1]

    if (!id) {
        return NextResponse.json(
            { success: false, error: 'Product ID is required' },
            { status: 400 },
        )
    }

    try {
        await connectDB()

        const product = await Product.findById(id)

        if (!product) {
            return NextResponse.json(
                { success: false, error: 'Product not found' },
                { status: 404 },
            )
        }

        return NextResponse.json({ success: true, data: product })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 },
        )
    }
}
