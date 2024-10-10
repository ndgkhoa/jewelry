import { connectMongo } from '@/lib/mongodb'
import Product from '@/models/Product'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        await connectMongo()
        const products = await Product.find()
        return NextResponse.json(products)
    } catch (error) {
        console.error('Error fetching products:', error)
        return NextResponse.json(
            { message: 'Failed to fetch products' },
            { status: 500 },
        )
    }
}
