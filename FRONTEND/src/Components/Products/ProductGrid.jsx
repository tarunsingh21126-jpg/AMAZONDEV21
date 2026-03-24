import ProductCard from "./ProductCard";

const dummyProducts = [
    {
        id: 1,
        title: "iPhone 15",
        price: 79999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
        rating: 4.5,
        reviews: 1245,
        badge: "Best Seller",
    },
    {
        id: 2,
        title: "Gaming Laptop",
        price: 65999,
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
        rating: 4.3,
        reviews: 980,
        badge: "Limited Deal",
    },
    {
        id: 3,
        title: "Smart Watch",
        price: 4999,
        image: "box2_image.jpg",
        rating: 4.6,
        reviews: 2100,
        badge: "Amazon Choice",
    },
    {
        id: 4,
        title: "Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
        badge: "Premium",
        rating: 4.2,
        reviews: 760,
    },
    {
        id: 5,
        name: "Smartwatch",
        price: 399,
        image:
            "box1_image.jpg",
        rating: 4.2,
        reviews: 760,
        badge: "Premium",
    },
    {
        id: 6,
        name: "Smartwatch",
        price: 399,
        image:
            "box2_image.jpg",
        rating: 4.2,
        reviews: 760,
        badge: "Premium",
    },
    {
        id: 7,
        name: "Smartwatch",
        price: 399,
        image:
            "box3_image.jpg",
        rating: 4.2,
        reviews: 760,
        badge: "Premium",
    },
    {
        id: 8,
        name: "Smartwatch",
        price: 399,
        image:
            "box4_image.jpg",
        rating: 4.2,
        reviews: 760,
        badge: "Premium",
    },
    {
        id: 9,
        name: "Smartwatch",
        price: 399,
        image:
            "box4_image.jpg",
        rating: 4.2,
        reviews: 760,
        badge: "Premium",
    },
    {
        id: 10,
        name: "Smartwatch",
        price: 399,
        image:
            "box5_image.jpg",
        rating: 4.2,
        reviews: 760,
        badge: "Premium",
    },
];

export default function ProductGrid() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

            <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                {dummyProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}