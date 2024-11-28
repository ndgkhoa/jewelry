export interface Category {
    _id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
}

export interface Product {
    _id: string
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
    createdAt: Date
    updatedAt: Date
}

export interface CartItem {
    _id: string
    title: string
    price: number
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
    quantity: number
}

export interface CartState {
    items: CartItem[]
}
