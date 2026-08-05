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
        
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-secondary text-white shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-2 py-3 sm:px-6 lg:px-8">
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
                    <Link to="/" className="flex items-center gap-1 no-underline">
                        <FiUser /> Login
                    </Link>
                    <Link to="/" className="flex items-center gap-1 no-underline">
                        <FiHeart /> Wishlist
                    </Link>
                    <Link to="/cart" className="flex items-center gap-1 no-underline">
                        <FiShoppingCart /> Cart
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;