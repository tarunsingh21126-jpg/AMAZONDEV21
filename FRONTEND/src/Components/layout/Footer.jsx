import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Call immediately without setTimeout

  }, []);

  return (
    <main>
          <footer>
        {/*<div class="foot-panel1 border">
                <a href="" style="text-decoration:none; color: aliceblue;">BACK TO TOP</a>
            </div>*/}
        <div class="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a>About Amazon</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Connect with Us</p>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
          </ul>
          <ul>
            <p>Make Money With Us</p>
            <a>Sell on Amazon</a>
            <a>Sell under Amazon Accelerator</a>
            <a>Protect and Build Your Brand</a>
            <a>Amazon Global Selling</a>
            <a>Supply to Amazon</a>
            <a>Become an Affiliate</a>
            <a>Fulfilment by Amazon</a>
            <a>Advertising our Products</a>
            <a>Amazon Pay on Merchants</a>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <a>Your Account</a>
            <a>Returns Centre</a>
            <a>Recalls and Product Safety Alerts</a>
            <a>100% Purchase Protection</a>
            <a>Amazon App Download</a>
            <a>Help</a>
          </ul>
        </div>
        <div class="foot-panel3">
          <div class="logo"></div>
        </div>
        <div class="foot-panel4">
          <div class="pages">
            <a>Conditions to use</a>
            <a>privacy notice</a>
            <a>your ads privacy choices</a>
          </div>
          <div class="copyright">
            © 1996-2024, KHARIDO.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </main>
  )
};

export default Footer;