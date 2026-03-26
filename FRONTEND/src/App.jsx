// import AppRoutes from "./routes/AppRoutes";
import ProductList from "./Pages/ProductList";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ProductDetail from "./Pages/ProductDetail";
import NavBar from "./Components/NavBar";
import CartPage from "./Pages/CartPage";
import { CartProvider } from "./Context/CartContext";
import Footer from "./Components/layout/Footer";
   export default function App() {
     return (
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<ProductList />}  />
               <Route path="/product/:id" element={<ProductDetail />}  />
               <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
     )
   }

// import { useEffect, useState } from "react";
// function App() {
//   const [products, SetProducts] = useState([]);
//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/products/')
//       .then(response => response.json())
//       .then(data => SetProducts(data))
//       .catch(error => console.error( error));
//   })
//   return (
//     <div className="min-h-screen bg-gray-100 test-gray-800">
//       <h1 className="text-3xl font-bold underline"> PRODUCT LIST</h1>
//       <div className="container mx-auto p-4">
//           {products.map((product) =>(
//             <div key={product.id} className="bg-white p-4 rounded shadow mb-4">
//               <h2 className="text-xl font-semibold">{product.name}</h2>
//               <p className="text-gray-600">{product.description}</p>
//               <p className="text-gray-600 font-bold">{product.price}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };
// export default App;


// import React, { useState } from 'react'

// const App = () => {
//  const [username, setUsername] = useState('')
// const submitHandler =(e)=>{
//   e.preventDefault()

//   console.log(username)
//   setUsername('')
// }
// return(
//    <form onSubmit={(e)=>{
//      submitHandler(e)
//    }}>  
  
//     <input  
//     value={username}
//    onChange={(e)=>{
//     setUsername(e.target.value)
//    }}
//      type='text'
//       placeholder='enter a name'
//        className='px-2 py-3 bg-yellow-100 text-black font-semibold rounded-md'></input>
//     <button className='bg-red-500 text-black rounded-md'>SUBMIT</button>
//    </form>
// )
// }

// export default App


