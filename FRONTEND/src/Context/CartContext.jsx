import { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [cartItems, setCartItems] = useState([]);
  const [total,setTotal] = useState(0);

  //FETCH CART from backend

  const fetchCart = async()=>{
    try{
      const response = await fetch(`${BASEURL}/api/cart/`)
      if(!response.ok){
        throw new Error("FAILED to fetch cart");
      }
      const data = await response.json();
      setCartItems(data.item || []);
      setTotal(data.total || 0);
    } catch (error){
      console.error("Error fetching cart:", error);
    }
  }

  useEffect(()=>{
    fetchCart();
  },[])
  // ADD TO CART
  const addToCart = async(product) => {
    try{
      await fetch(`${BASEURL}/api/cart/add`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
          },
          body: JSON.stringify({product_id: productid}),
      });
    }catch(error){
      console.error("Error adding to cart:",error);
    }
  }
  // REMOVE ITEM
 const removeFromCart = async(itemid) => {
    try{
      await fetch(`${BASEURL}/api/cart/remove`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
          },
          body: JSON.stringify({item_id: itemid}),
      });
    }catch(error){
      console.error("Error removing from cart:",error);
    }
  }

  //UPDATE QTY
  const updateQuantity = async(itemid,quantity) => {
    try{
      await fetch(`${BASEURL}/api/cart/update`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
          },
          body: JSON.stringify({product_id: productid}),
      });
    }catch(error){
      console.error("Error adding to cart:",error);
    }
  }
return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity
    }}
  >
    {children}
  </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);