'use client'

import { getAllCategory } from '@/services/categoriesService'
import type { Category } from '@/types/types'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'

const Category = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)

    const fetchCategories = async () => {
        setLoading(true)
        try {
            const categories: Category[] = await getAllCategory()
            setCategories(categories)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className="pt-16 pb-12">
            <h1 className="text-center font-bold text-2xl capitalize">
                Shop by category
            </h1>
            {loading ? (
                <div className="flex justify-center items-center mt-16">
                    <Loader size={32} className="animate-spin" />
                </div>
            ) : (
                <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category._id}
                            className="p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md"
                        >
                            <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">
                                {category.name}
                            </h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Category
