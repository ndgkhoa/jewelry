export async function getAllProduct() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    )

    return response.json()
}

export async function getSingleProduct(id: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
    )

    return response.json()
}

export async function getProductByCategory(category: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/related/${category}`,
    )

    const products = await response.json()
    const shuffledProducts = products.sort(() => 0.5 - Math.random())

    return shuffledProducts.slice(0, 4)
}
