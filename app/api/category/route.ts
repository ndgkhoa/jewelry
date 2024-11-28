import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/database'
import Category from '@/model/Category'

export async function GET(req: NextRequest) {
    try {
        await connectDB()
        const categories = await Category.find()
        return NextResponse.json({ success: true, data: categories })
    } catch (error) {
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 },
        )
    }
}
