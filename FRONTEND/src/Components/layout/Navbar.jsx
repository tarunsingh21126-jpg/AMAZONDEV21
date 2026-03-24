import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    // Call immediately without setTimeout

  }, []);

return (
    <main>
        <header>
        <div className='navbar'>
          <div class="nav-logo border">
            <div class="logo">KHARIDO</div>
          </div>
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
          {/*<div class="nav-signing border">
          <a href='./JAVA.JSX'>HELLO, SIGN IN</a>
          <P class="nav-second">ACCOUNT & LISTS</P>
        </div>
        <div class="nav-signing border">
          <a href='./login-sign/AMAZON/login.html'>HELLO, SIGN IN</a>
          <P class="nav-second">ACCOUNT & LISTS</P>
        </div>
        <div class="nav-return border">
          <p><span>RETURNS</span></p>
          <P class="nav-second"> & ORDERS</P>
        </div>*/}
          <div class="nav-cart border">
            <i class="fa-solid fa-cart-plus"></i>
            CART
          </div>
        </div>
        <div class="panel">
          <div class="panel-all border">
            <i class="fa-solid fa-list"></i>
            ALL
          </div>

          <div class="deals border">
            <p>Today's Deals</p>
          </div>
          <div class="customer service border">
            <p>Customer Service</p>
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
        </div>
      </header>
    </main>
)

}

export default Navbar;