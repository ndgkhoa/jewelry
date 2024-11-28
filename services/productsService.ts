export async function getAllProduct() {
    const response = await fetch(`/api/product`)

    return response.json()
}

export async function getSingleProduct(id: string) {
    const url = `/api/product/${id}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch product')
    }

    return response.json()
}

export async function getProductByCategory(id: string) {
    const response = await fetch('/api/product/related', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    })

    return response.json()
}
