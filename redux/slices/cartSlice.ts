import { CartItem, CartState } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const existingItem = state.items.find(
                (item) => item._id === action.payload._id,
            )
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action: PayloadAction<{ id: string }>) => {
            const existingItem = state.items.find(
                (item) => item._id === action.payload.id,
            )
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1
                } else {
                    state.items = state.items.filter(
                        (item) => item._id != action.payload.id,
                    )
                }
            }
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
