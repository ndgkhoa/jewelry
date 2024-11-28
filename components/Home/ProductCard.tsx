'use client'

import { Product } from '@/types/types'
import { Heart, ShoppingBag, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { addItem } from '@/redux/slices/cartSlice'
import { useToast } from '@/hooks/use-toast'

type Props = {
    product: Product
}
const ProductCard = ({ product }: Props) => {
    const num = Math.round(product.rating.rate)
    const ratingArr = new Array(num).fill(0)
    const { toast } = useToast()

    const dispatch = useDispatch()

    const addToCartHandle = (product: Product) => {
        toast({ description: 'Item added to cart', variant: 'success' })
        dispatch(addItem(product))
    }

    return (
        <div className="p-4">
            <div className="w-full h-[300px] relative overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                />
            </div>
            <p className="mt-5 text-xs capitalize text-gray-600">
                {product.category}
            </p>
            <Link href={`/product/product-details/${product._id}`}>
                <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
                    {product.title}
                </h1>
            </Link>
            <div className="flex items-center">
                {ratingArr.map((star) => (
                    <StarIcon
                        key={Math.random() * 1000}
                        size={16}
                        fill="yellow"
                        className="text-yellow-500"
                    />
                ))}
            </div>
            <div className="flex mt-1 items-center space-x-2">
                <p className="text-black text-base line-through font-semibold opacity-50">
                    {`$${(product.price + 10).toFixed(2)}`}
                </p>
                <p className="text-black text-lg font-bold opacity-80">
                    ${product.price}
                </p>
            </div>
            <div className="mt-4 items-center space-x-2">
                <Button onClick={() => addToCartHandle(product)} size={'icon'}>
                    <ShoppingBag size={18} />
                </Button>
                <Button size={'icon'} className="bg-red-500">
                    <Heart size={18} />
                </Button>
            </div>
        </div>
    )
}
export default ProductCard
