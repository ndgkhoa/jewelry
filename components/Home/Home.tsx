'use client'

import { useEffect, useState } from 'react'
import AllProduct from './AllProduct'
import Category from './Category'
import Hero from './Hero'
import { getAllCategory } from '@/services/categoriesService'
import { Loader } from 'lucide-react'
import { Product } from '@/types/types'
import { getAllProduct } from '@/services/productsService'

const Home = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [products, setProducts] = useState<Product[]>([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const [categoriesResponse, productsResponse] =
                    await Promise.all([getAllCategory(), getAllProduct()])

                setCategories(categoriesResponse.data)
                setProducts(productsResponse.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <Hero />
            {loading ? (
                <div className="flex justify-center items-center my-16">
                    <Loader size={32} className="animate-spin" />
                </div>
            ) : (
                <>
                    <Category categories={categories} />
                    <AllProduct products={products} />
                </>
            )}
        </div>
    )
}

export default Home
