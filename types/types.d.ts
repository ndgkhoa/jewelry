export interface Category {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
}

export interface Product {
    id: string
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
    id: string
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
