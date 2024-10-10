import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
}

let isConnected = false

export async function connectMongo() {
    if (isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    try {
        await mongoose.connect(MONGODB_URI)
        isConnected = true
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        throw error
    }
}
