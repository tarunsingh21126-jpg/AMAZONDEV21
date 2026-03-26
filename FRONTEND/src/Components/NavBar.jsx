import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function NavBar() {
    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <>
            <nav className=" fixed top-0  left-0 w-full h-[60px] bg-[#0f1111] text-white flex items-center justify-evenly">
                <Link to='/' className="text-2xl font-bold text-white" >
                    <i class="fa-solid fa-list">SHOPIFY</i>

                </Link>
                <div class="nav-address bordertext-[#ebe0e0] text-sm ml-5">
                    <p class="ad-fst text-base ml-[1px]">Deliver to</p>
                    <div class="add-icon flex items-center">
                        <i class="fa-solid fa-location-crosshairs"></i>
                        <p class="ad-sec">INDIA</p>
                    </div>
                </div>
                <div class="nav-search ">
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
                <Link to='/CART' className="no-underline relative hover:text-gray-600 text-white font-medium w-10 " >
                    <i class="fa-solid fa-cart-plus"></i>CART
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
                    )}
                </Link>
            </nav>
             <nav className="sticky top-[60px] z-30 bg-[#232f3e] text-white text-sm">
                <div className="max-w-7xl mx-auto flex items-center px-4 h-[60px] gap-9">
                <div className="no-underline hover:bg-white/10 px-2 py-1 rounded">
                    <p>Customer Service</p>
                </div>
                <div classname="no-underline hover:bg-white/10 px-2 py-1 rounded">
                    <p>Today's Deals</p>
                </div>
                <div classname="no-underline hover:bg-white/10 px-2 py-1 rounded">
                    <p>Gift Cards</p>
                </div>
                <div classname="Sell border no-underline hover:bg-white/10 px-2 py-1 rounded">
                    <p>SELL</p>
                </div>
                <div classname="panel-deals border">
                    Shop deals in Electronics
                </div>
                <div classname="gift cards border">
                    <p>Fresh</p>
                </div>
                <div classname="gift cards border">
                    <p>Bestsellers</p>
                </div>
                <div classname="Sell border">
                    Amazon Pay
                </div>
                </div>
            </nav> 
        </>
    )
}

export default NavBar;