import { connectMongo } from '@/lib/mongodb'
import Category from '@/models/Category'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        await connectMongo()
        const categories = await Category.find()
        return NextResponse.json(categories)
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json(
            { message: 'Failed to fetch categories' },
            { status: 500 },
        )
    }
}
