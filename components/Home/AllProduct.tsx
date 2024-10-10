'use client'

import { getAllProduct } from '@/services/productsService'
import { Product } from '@/types/types'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const AllProduct = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const products: Product[] = await getAllProduct()
            setProducts(products)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="pt-16 pb-12">
            <h1 className="text-center font-bold text-2xl">All Products</h1>
            {loading ? (
                <div className="flex justify-center items-center mt-16">
                    <Loader size={32} className="animate-spin" />
                </div>
            ) : (
                <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AllProduct
