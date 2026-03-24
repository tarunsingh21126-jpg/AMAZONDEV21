export function initUI() {
     function toggleAccordion(element) {
                // Remove active class from all items
                const items = document.querySelectorAll('.accordion-item');
                items.forEach(item => item.classList.remove('active'));

                // Add active class to clicked item
                element.classList.add('active');

                // Open overlay with larger image
                const imgSrc = element.getAttribute('data-img');
                document.getElementById('overlay-img').src = imgSrc;
                document.getElementById('overlay').style.display = 'flex';
            }

            function closeOverlay() {
                document.getElementById('overlay').style.display = 'none';
            }
            // Change Carousel Slide
                    function changeSlide(index) {
                        const carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'));
                        carousel.to(index);
                    }
};