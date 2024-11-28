import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/database'
import Product from '@/model/Product'

export async function GET(req: NextRequest) {
    try {
        await connectDB()
        const products = await Product.find()
        return NextResponse.json({ success: true, data: products })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 },
        )
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const body = await req.json()

        const { title, price, description, category, image, rating } = body

        if (!title || !price || !description || !category || !image) {
            return NextResponse.json(
                { success: false, message: 'All fields are required.' },
                { status: 400 },
            )
        }

        const newProduct = new Product({
            title,
            price,
            description,
            category,
            image,
            rating: rating || { rate: 0, count: 0 },
        })

        const savedProduct = await newProduct.save()

        return NextResponse.json({ success: true, data: savedProduct })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 },
        )
    }
}
