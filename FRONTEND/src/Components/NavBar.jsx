import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { clearToken, getAccessToken } from "../Utils/auth";
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMapPin, FiChevronDown } from 'react-icons/fi';
function NavBar() {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const isLoggedIn = !!getAccessToken();
    const handleLogout = () => {
        clearToken();
        navigate("/Login");
    };
    return (
        // <>
        //     <nav className=" fixed top-0  left-0 w-full h-[70px] bg-[#0f1111] text-white flex items-center justify-evenly max-w-7xl mx-auto  z-50"> 
        //         <Link to='/' className="text-2xl font-bold text-white" >
        //             <i class ="fa-solid fa-list">SHOP</i>

        //         </Link>
        //         <div class="nav-address bordertext-[#ebe0e0] p-3px text-sm ml-5">
        //             <p class="ad-fst text-base ml-[1px]">Deliver to</p>
        //             <div class="add-icon flex items-center">
        //                 <i class="fa-solid fa-location-crosshairs"></i>
        //                 <p class="ad-sec">INDIA</p>
        //             </div>
        //         </div>
        //         <div class="nav-search ">
        //             <select class="search-select">
        //                 <option>ALL</option>
        //                 <option>PERSONAL CARE</option>
        //                 <option>ELECTRONICS</option>
        //             </select>


        //             <input placeholder="SEARCH KHARIDO" class="search-input" type="text" list="CATEGORY" />
        //             <datalist id="CATEGORY">
        //                 <option value="VIVO" />
        //                 <option value="OPPO" />
        //                 <option value="SAMSUNG" />
        //             </datalist>
        //             <div class="search-icon">
        //                 <i class="fa-brands fa-searchengin"></i>
        //             </div>
        //         </div>
        //         <div className="flex items-center gap-6">
        //             {!isLoggedIn ? (
        //                 <>
        //                     <Link to ='/Login' className="no-underline hover:text-gray-600 text-white font-medium" >
        //                         LOGIN
        //                     </Link>
        //                     <Link to ='/Signup' className="no-underline hover:text-gray-600 text-white font-medium" >
        //                         SIGN UP
        //                     </Link>
        //                 </>
        //             ):(
        //                 <button onClick={handleLogout} className="no-underline hover:text-gray-600 text-white font-medium" >
        //                     LOGOUT
        //                 </button>
        //             )}
        //         </div>

        //         <Link to='/CART' className="no-underline relative hover:text-gray-600 text-white font-medium w-10 " >
        //             <i class="fa-solid fa-cart-plus"></i>CART
        //             {cartCount > 0 && (
        //                 <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
        //             )}
        //         </Link>

        //     </nav>
        //      <nav className="sticky top-[60px] z-30 bg-[#232f3e] text-white text-sm">
        //         <div className="max-w-7xl mx-auto flex items-center px-4 h-[60px] gap-9">
        //         <div className="no-underline hover:bg-white/10 px-2 py-1 rounded">
        //             <p>Customer Service</p>
        //         </div>
        //         <div classname="no-underline hover:bg-white/10 px-2 py-1 rounded">
        //             <p>Today's Deals</p>
        //         </div>
        //         <div classname="no-underline hover:bg-white/10 px-2 py-1 rounded">
        //             <p>Gift Cards</p>
        //         </div>
        //         <div classname="Sell border no-underline hover:bg-white/10 px-2 py-1 rounded">
        //             <p>SELL</p>
        //         </div>
        //         <div classname="panel-deals border">
        //             Shop deals in Electronics
        //         </div>
        //         <Link to= '/AUTHUI'classname="panel-deals border no-underline">
        //             AuthUI
        //         </Link>
        //         <Link to= '/Portfolio'classname=" border no-underline relative hover:text-gray-600 text-white font-medium w-10">
        //             PORTFOLIO
        //         </Link>
        //         <div classname="gift cards border">
        //             <p>Fresh</p>
        //         </div>
        //         <div classname="gift cards border">
        //             <p>Bestsellers</p>
        //         </div>
        //         <div classname="Sell border">
        //             Amazon Pay
        //         </div>
        //         </div>
        //     </nav> 
        // </>
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-secondary text-white shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-wide text-primary">
                    <span className="rounded-full bg-primary px-3 py-1 text-secondary">K</span>
                    HARIDO
                </Link>

                <div className="flex flex-1 items-center gap-2 rounded-full border border-gray-600 bg-white px-3 py-2 text-gray-700 shadow-sm">
                    <select className="rounded-full bg-gray-100 px-2 py-1 text-sm outline-none">
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Groceries</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="flex-1 bg-transparent outline-none"
                    />
                    <button className="rounded-full bg-primary p-2 text-secondary">
                        <FiSearch />
                    </button>
                </div>

                <nav className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <FiMapPin />
                        <span>Location</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>EN</span>
                        <FiChevronDown />
                    </div>
                    <Link to="/" className="flex items-center gap-1">
                        <FiUser /> Login
                    </Link>
                    <Link to="/" className="flex items-center gap-1">
                        <FiHeart /> Wishlist
                    </Link>
                    <Link to="/cart" className="flex items-center gap-1">
                        <FiShoppingCart /> Cart
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;