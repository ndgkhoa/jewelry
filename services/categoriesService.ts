export async function getAllCategory() {
    const response = await fetch(`https://fakestoreapi.com/products/categories`)

    return response.json()
}
