
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";
// // import DealsAccordion from './Deals.jsx';
// import ProductGrid from "../Components/Products/ProductGrid";

// export default function ProductDetail() {
//   const { id } = useParams();

//   // ✅ Layout ke liye dummy product (always available)
//   const product = {
//     id: id,
//     name: "Sample Product Name",
//     price: 999,
//     description:
//       "This is a dummy description. Abhi tu sirf layout set kar raha hai, baad me API se real product load kar lena.",
//     image: "https://via.placeholder.com/700x500",
//     category: "Electronics",
//     rating: 4.5,
//     stock: 12,
//   };

//   const { addToCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(product);
//     navigate("/cart");
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 px-4 py-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Back */}
//         <div className="mb-6">
//           <Link to="/" className="text-blue-600 underline font-medium">
//             ← Back to Products
//           </Link>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {/* Image Section */}
//             <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full rounded-xl object-cover"
//               />
//             </div>

//             {/* Details Section */}
//             <div className="flex flex-col gap-4">
//               <h1 className="text-3xl font-bold text-gray-900">
//                 {product.name}
//               </h1>

//               <p className="text-gray-500">
//                 Category:{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.category}
//                 </span>
//               </p>

//               <p className="text-xl font-bold text-green-600">
//                 ₹{product.price}
//               </p>

//               <p className="text-gray-700 leading-relaxed">
//                 {product.description}
//               </p>

//               {/* Extra info box */}
//               <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-2">
//                 <p className="text-gray-700">
//                   ⭐ Rating:{" "}
//                   <span className="font-semibold">{product.rating}</span>
//                 </p>

//                 <p className="text-gray-700">
//                   Stock:{" "}
//                   <span className="font-semibold">{product.stock}</span>
//                 </p>

//                 <p className="text-gray-700">
//                   Product ID:{" "}
//                   <span className="font-semibold">{product.id}</span>
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mt-2">
//                 <button
//                   onClick={handleAddToCart}
//                  
//
//                 >
//                   Add to Cart
//                 </button>

//                 <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section (optional) */}
//         <div className="mt-10 bg-white rounded-2xl shadow p-6">
//           <h2 className="text-xl font-bold text-gray-900 mb-3">
//             Product Details
//           </h2>

//           <ul className="list-disc ml-5 text-gray-700 space-y-2">
//             <li>Responsive UI (mobile + desktop)</li>
//             <li>Clean card layout with image + details</li>
//             <li>Dummy product used for UI testing</li>
//           </ul>
//         </div>
//         <div className="sevenpi">
//            {/* <DealsAccordion pid="{product.id}" /> */}
//            <ProductGrid />
//         </div>

//       </div>
//     </main>
//   );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";


function ProductDetail() {

  const { id } = useParams();
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {addToCart} =useCart();

  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
  };

  useEffect(() => {
    fetch(`${BASEURL}/api/products/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("FETCH RESPONSE WAS NOT OK");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  },
    [id, BASEURL]);
  if (loading) {
    return <div className="text-center py-20 text-xl">LOADING..</div>
  }
  if (error) {
    return <div className="text-center py-20 text-red-500">ERROR:</div>
  }
  if (!product) {
    return <div className="text-center py-20">NO PRODUCT FOUND</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="mt-4">
        <a href="/" className="text-blue-600 hover:underline">&larr;BACK TO HOME</a>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <div className="absolute mt-3 ml-3">

          <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
            {product.badge}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover rounded-2xl transition duration-300 group-hover:scale-105" />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map(star => (
                <span key={star} className="text-yellow-400 text-lg">
                  {star <= product.rating ? "★" : "☆"}
                </span>
              ))}
              <span className="text-gray-500 text-sm">
                ({product.rating} Reviews)
              </span>
            </div>


            <div className="border-t pt-6">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-xl font-bold text-green-600"> ₹{product.price}</p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="flex gap-4">
                <button onClick={()=>addToCart(product)} className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
                  ADD TO CART
                </button>
                <button  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                  Buy Now
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition  flex items-center justify-center gap-2">
                  ❤️ Wishlist
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
