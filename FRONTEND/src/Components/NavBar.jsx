import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function NavBar() {
    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <>
            <nav className="bg-white shadow-md px-6 py-3 flex justify-between   items-center fixed w-full top-0 z-50">
                <Link to='/' className="text-2xl font-bold text-gray-600" >
                    <i class="fa-solid fa-list">SHOPIFY</i>

                </Link>
                <div class="nav-address border">
                    <p class="ad-fst">Deliver to</p>
                    <div class="add-icon">
                        <i class="fa-solid fa-location-crosshairs"></i>
                        <p class="ad-sec">INDIA</p>
                    </div>
                </div>
                <div class="nav-search">
                    <select class="search-select">
                        <option>ALL</option>
                        <option>PERSONAL CARE</option>
                        <option>ELECTRONICS</option>
                    </select>


                    <input placeholder="SEARCH KHARIDO" class="search-input" type="text" list="CATEGORY" />
                    <datalist id="CATEGORY">
                        <option value="VIVO" />
                        <option value="OPPO" />
                        <option value="SAMSUNG" />
                    </datalist>
                    <div class="search-icon">
                        <i class="fa-brands fa-searchengin"></i>
                    </div>
                </div>
                <Link to='/CART' className="relative hover:text-gray-600 text-gray-800 font-medium" >
                    <i class="fa-solid fa-cart-plus"></i>CART
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
                    )}
                </Link>
            </nav>
            <nav>
                <div className=" flex text-align-center cursor-pointer font-semibold">
                    <p>Customer Service</p>
                </div>
                <div class="deals border">
                    <p>Today's Deals</p>
                </div>
                <div class="gift cards border">
                    <p>Gift Cards</p>
                </div>
                <div class="Sell border">
                    <p>SELL</p>
                </div>
                <div class="panel-deals border">
                    Shop deals in Electronics
                </div>
                <div class="gift cards border">
                    <p>Fresh</p>
                </div>
                <div class="gift cards border">
                    <p>Bestsellers</p>
                </div>
                <div class="Sell border">
                    Amazon Pay
                </div>
            </nav>
        </>
    )
}

export default NavBar;