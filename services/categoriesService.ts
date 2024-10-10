export async function getAllCategory() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
    )

    return response.json()
}
