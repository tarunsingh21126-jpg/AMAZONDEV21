import { createContext, useContext, useState, useEffect } from "react";
import { authFetch,getAccessToken } from "../Utils/auth";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  //FETCH CART from backend

  const fetchCart = async () => {
    try {
      const response = await authFetch(`${BASEURL}/api/cart/`)
      const data = await response.json();
      setCartItems(data.cart.items || []);
      setTotal(data.cart.total_price || 0);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, [])
  // ADD TO CART
  const addToCart = async (product) => {
    try {
      await authFetch(`${BASEURL}/api/cart/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: product.id }),
      });
      fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
  // REMOVE ITEM
  const removeFromCart = async (itemid) => {
    try {
      await authFetch(`${BASEURL}/api/cart/remove/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id: itemid }),
      }); fetchCart();
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  }

  //UPDATE QTY
  const updateQuantity = async (itemid, quantity) => {
    if (quantity < 1) {
      await removeFromCart(itemid);
      return;
    }
    try {
      await authFetch(`${BASEURL}/api/cart/update/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: itemid,
          quantity:quantity,
        })
      }); fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
  const clearCart = ()=>{
    setCartItems([]);
    setTotal(0);
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);