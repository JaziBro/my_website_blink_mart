export const getProducts: any = async () => {
    const res = await fetch('http://localhost:3000/api/GetProducts');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
    
}