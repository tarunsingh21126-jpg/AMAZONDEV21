import { useEffect, useState } from "react";
import ProductCard from "../Components/Products/ProductCard";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

    useEffect(() => {
        fetch(`${BASEURL}/api/products/`)
            .then((response) => {
                if (!response.ok) {
                    throw new error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    }, []);
    if (loading) {
        return <div className="bg-white rounded-2xl p-4 shadow-md animate-pulse">
            <div className="h-56 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-300 w-3/4 mb-2 rounded"></div>
            <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
        </div>;
    }
    if (error) {
        return <div>ERROR:{error}</div>;
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-center py-6  bg-white shadow-md">OUR PRODUCTS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">NO PRODUCTS available.</p>
                )}
            </div>
        </div>
    )
}

export default ProductList;