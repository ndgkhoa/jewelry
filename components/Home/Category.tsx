import type { Category } from '@/types/types'

interface categoryProps {
    categories: Category[]
}

const Category: React.FC<categoryProps> = ({ categories }) => {
    return (
        <div className="pt-16 pb-12">
            <h1 className="text-center font-bold text-2xl capitalize">
                Shop by category
            </h1>
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
            )
        </div>
    )
}

export default Category
