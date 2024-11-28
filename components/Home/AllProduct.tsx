'use client'

import { Product } from '@/types/types'
import ProductCard from './ProductCard'

interface productProps {
    products: Product[]
}

const AllProduct: React.FC<productProps> = ({ products }) => {
    return (
        <div className="pt-16 pb-12">
            <h1 className="text-center font-bold text-2xl">All Products</h1>

            <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AllProduct
