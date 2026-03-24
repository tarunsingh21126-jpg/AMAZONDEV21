import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../ProdData";
import ColorButtons from "../ColorButtons";
import DealsAccordion from "./Deals.jsx";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


const ProductPage = () => {

  const{addToCart}= useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // id string hoti hai, isliye Number() kiya
  const product = products.find((p) => p.id === Number(id));

  // Agar product nahi mila
  if (!product) {
    return (
      <div classNameNameName="p-10">
        <h1 classNameNameName="text-3xl font-bold text-red-500">Product Not Found</h1>
        <Link to="/" classNameName="text-blue-600 underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }
       const handleAddToCart =()=>{
        addToCart(product);navigate("/cart");
       }



  return (
    <main>


      <div className="p-10">
        <Link to="/" className="text-blue-600 underline">
          ⬅ Back
        </Link>

        <div className="mt-8 flex flex-col md:flex-row gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-[400px] h-[300px] object-cover rounded-lg shadow"
          />

          <div>

            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-600 mt-2">${product.price}</p>


            <p className="mt-5 text-gray-700 text-lg">{product.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-500 text-sm">
                {"★".repeat(Math.floor(product.rating))}
                <span className="text-gray-300">
                  {"★".repeat(5 - Math.floor(product.rating))}
                </span>
              </div>
              <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                ({product.reviews})
              </span>
            </div>
            <div className=" mt-3 ml-3">
              <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                {product.badge}
              </span>
            </div>
            <div className="container mt-5">
              <ColorButtons />
            </div>
            <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
            onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* cart component is rendered via /cart route, not inline */}
      <div className="sd">
        <DealsAccordion pid={product.id} />
      </div>
     


    </main>
  );
};

export default ProductPage;

