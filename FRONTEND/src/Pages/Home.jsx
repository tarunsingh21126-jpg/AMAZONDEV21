// import { useEffect } from "react";
// // import { initUI } from '../java.js';

// // import Accordion from "./Accordian.jsx";
// import ProductList from "../PRODUCT-PAGE/ProductList.jsx";
// import Navbar from "../Components/layout/Navbar.jsx";

// const HOME = () => {
//   useEffect(() => {
//     // Call immediately without setTimeout
//     initUI();
//   }, []);


//   return (
//     <main>
//       {/*HEADER*/}
//       <div className="head">
//         <Navbar />
//       </div>
//        {/*HERO-SECTION*/}
//       <div className="hero">
//         <Accordion />
//       </div>
//        {/*FOOTER*/}
//       <div className="seven">
//         <ProductList/>
//       </div>
//       <div className="foot">
//         <Footer />
//       </div>
//     </main>
//   );
// };
// export default HOME;

import ProductGrid from "../Components/Products/ProductGrid";
import  Accordion from "./Accordian.jsx";

export default function Home() {
  return (
    <main>
    <div style={{ padding: "20px" }}>
      <Accordion />
    </div>
    <div className="dive">
       <ProductGrid />
    </div>
    </main>
  );
}