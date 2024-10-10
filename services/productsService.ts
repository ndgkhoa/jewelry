export async function getAllProduct() {
    const response = await fetch(`https://fakestoreapi.com/products`)

    return response.json()
}

export async function getSingleProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)

    return response.json()
}

export async function getProductByCategory(category: string) {
    const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`,
    )

    const products = await response.json()
    const shuffledProducts = products.sort(() => 0.5 - Math.random())

    return shuffledProducts.slice(0, 4)
}
