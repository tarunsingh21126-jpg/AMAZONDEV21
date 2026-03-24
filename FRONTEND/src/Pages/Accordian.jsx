import React from "react";
import { Link } from "react-router-dom";

function Accordion() {
    return(
        <main>
           <header>
        <div class="hero-section">
          <div class="accordion">
            <div class="accordion-item" onclick="toggleAccordion(this)">
              <img src='./HERO2.jpg' alt="Image 1" />
              <div class="accordion-content">
                <h3 class="accordion-title">D(swipe to have complete & more)</h3>
                <p class="accordion-description">Click to have best deals.</p>
              </div>
            </div>
            <div class="accordion-item" onclick="toggleAccordion(this)">
              <img src='./HERO3.jpg' alt="Image 2" />
              <div class="accordion-content">
                <h3 class="accordion-title">E(swipe to have complete & more)</h3>
                <p class="accordion-description">Click to have best deals.</p>
              </div>
            </div>
            <div class="accordion-item" onclick="toggleAccordion(this)">
              <img src='./HERO4.jpg' alt="Image 3" />
              <div class="accordion-content">
                <h3 class="accordion-title">A(swipe to have complete & more)</h3>
                <p class="accordion-description">Click to have best deals.</p>
              </div>
            </div>
            <div class="accordion-item" onclick="toggleAccordion(this)">
              <img src='./hero6.webp' alt="Image 4" />
              <div class="accordion-content">
                <h3 class="accordion-title">L(swipe to have complete & more)</h3>
                <p class="accordion-description">Click to have best deals.</p>
              </div>
            </div>
            <div class="accordion-item" onclick="toggleAccordion(this)">
              <img src='./hero_image.jpg' alt="Image 5" />
              <div class="accordion-content">
                <h3 class="accordion-title">S(swipe to have complete & more)</h3>
                <p class="accordion-description">Click to have best deals.</p>
              </div>
            </div>
          </div>
          <div class="hero-msg">
            <p>You are on amazon.com.You can also shop on amazon india for millions of products with fast delivery.
              <a>Click here to go to amazon.in</a></p>
          </div>
        </div>
      </header>
        </main>
    );
}

export default Accordion;