import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useCart} from "../Context/CartContext";

function CheckoutPage() {
  const BASEURL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const {clearCart} = useCart();

  const {form,setForm}=useState({
      name:"",
      address:"",
      phone:"",
      payment_method:"COD",
  });
}