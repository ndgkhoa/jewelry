export async function getAllCategory() {
    const response = await fetch('/api/category')

    return response.json()
}
