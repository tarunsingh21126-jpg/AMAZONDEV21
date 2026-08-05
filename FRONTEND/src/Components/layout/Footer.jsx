import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Call immediately without setTimeout

  }, []);

  return (
    <main>
      <footer className="bg-[#131921] text-white mt-1">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Get to Know Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="https://tarunsinghdev-21.vercel.app/"className="hover:text-yellow-400 transition-colors duration-300 no-underline">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Press Releases</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Investor Relations</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Our Blog</a></li>
            </ul>
          </div>

          {/* Shop With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Shop With Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Today's Deals</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Best Sellers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">New Arrivals</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Gift Cards</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Coupons</a></li>
            </ul>
          </div>

          {/* Sell With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Sell With Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Become a Seller</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Advertise Products</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Vendor Services</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Fulfilment Services</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Customer Service</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Your Account</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Track Orders</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Shipping Information</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">Help Center</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-8 py-2 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

            <p>
              © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">ShopEase</span>. All Rights Reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">
                Terms of Service
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 no-underline">
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </footer>
    </main>
  )
};

export default Footer;