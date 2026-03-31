// export default function ProductCard({product}) {
//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-4">
//      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">

//           {products.map((product) => (
//             <Link
//               key={product.id}
//               to={`/product/${product.id}`}
//               className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition"
//             >
//               {/* Badge */}
{/* <div className="absolute mt-3 ml-3">
    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
        {product.badge}
    </span>
</div> */}

//               {/* Image */}
//               <div className="w-full h-52 bg-white flex items-center justify-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-contain p-4"
//                   onError={(e) => {
//                     e.target.src =
//                       "https://via.placeholder.com/300?text=Image+Not+Found";
//                   }}
//                 />
//               </div>

//               {/* Info */}
//               <div className="px-4 pb-2">
//                 <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-[10px]">
//                   {product.name}
//                 </h2>

//                 {/* Rating */}
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className="flex text-yellow-500 text-sm">
//                     {"★".repeat(Math.floor(product.rating))}
//                     <span className="text-gray-300">
//                       {"★".repeat(5 - Math.floor(product.rating))}
//                     </span>
//                   </div>
//                   <span className="text-xs text-blue-600 hover:underline cursor-pointer">
//                     ({product.reviews})
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <p className="text-xl font-bold text-gray-900 mt-2">
//                   ${product.price}
//                 </p>

//                 <p className="text-xs text-gray-500 mt-1">
//                   FREE Delivery by Tomorrow
//                 </p>

//                 {/* Button */}
//                 <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
//                   Add to Cart
//                 </button>
//               </div>
//            </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";

// export default function ProductCard({ product }) {
//     return (
//         <div style={{ border: "1px solid #CCC", padding: "12px", borderRadius: "8px" }}>

//             <div className="absolute mt-3 ml-3">
//                 <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
//                     {product.badge}
//                 </span>
//             </div>

//             <div className="w-full h-52 bg-white flex items-center justify-center">
//                 <img src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-contain p-4"
//                     onError={(e) => {
//                         e.target.src =
//                             "https://via.placeholder.com/300?text=Image+Not+Found";
//                     }}
//                 />
//             </div>
//             <h3 style={{ marginBottom: "6px" }}>{product.title}</h3>
//             <p style={{ marginBottom: "10px" }}>₹ {product.price}</p>
//             <div className="flex items-center gap-2 mt-1">
//                 <div className="flex text-yellow-500 text-sm">
//                     {"★".repeat(Math.floor(product.rating))}
//                     <span className="text-gray-300">
//                         {"★".repeat(5 - Math.floor(product.rating))}
//                     </span>
//                 </div>
//                 <span className="text-xs text-blue-600 hover:underline cursor-pointer">
//                     ({product.reviews})
//                 </span>
//             </div>
//             <p className="text-xs text-gray-500 mt-1"> FREE Delivery by Tomorrow </p>
//             <div style={{ display: "flex", gap: "10px" }}>

//                 <Link to={`/product/${product.id}`}>
//                     VIEW
//                 </Link>

//                 <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     );
// }
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border border-gray-300 bg-gray-50 px-4 py-8">
        <div className="absolute mt-3 ml-3">
          <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
            {product.badge}
          </span>
        </div>

        <img
          src={`${BASEURL}${product.image}`}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300" />
        <div className="p-4 space-y-2">
          <p className="text-gray-500">
            Category:{" "}
            <span className="font-semibold  text-xl text-gray-700">
              {product.Category}
            </span>
          </p>
          <h2 className="text-xl font-bold text-indigo-600">${product.price}</h2>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex text-yellow-500 text-sm">
              {"★".repeat(Math.floor(product.rating))}
              <span className="text-gray-300">
                {"★".repeat(Math.max(0, 5 - Math.floor(product.rating)))}
              </span>
            </div>
            <span className="text-xs text-blue-600 hover:underline cursor-pointer">
              ({product.reviews})
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1"> FREE Delivery by Tomorrow </p>
          <div style={{ display: "flex", gap: "10px" }}>

            {/* <Link to={`/product/${product.id}`}>
                      VIEW
                 </Link> */}

            <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;

// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
//    return (
//     <Link to={`/product/${product.id}`}>
//      <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4 cursor-pointer" >
//       <img
//         src={`${BASEURL}${product.image}`}
//         alt={product.name}
//         className="w-full h-56 object-cover rounded-lg mb-4" />
//       <h2 className="text-xl font-semibold">{product.name}</h2>
//       <p className="text-gray-600">{product.description}</p>
//       <p className="text-gray-600 font-bold">{product.price}</p>
//       </div>
//     </Link>

//
//   );
// };
// export default ProductCard;
