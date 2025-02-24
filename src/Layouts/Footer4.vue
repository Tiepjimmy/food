<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const heart = ref(false);
</script>

<template>
  <footer class="site-footer style-1 bg-dark" id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="widget widget_getintuch">
              <h5 class="footer-title">Contact</h5>
              <ul>
                <li>
                  <i class="flaticon-placeholder"></i>
                  <p>
                    1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad
                  </p>
                </li>
                <li>
                  <i class="flaticon-telephone"></i>
                  <p>
                    +91 987-654-3210<br />
                    +91 123-456-7890
                  </p>
                </li>
                <li>
                  <i class="flaticon-email-1"></i>
                  <p>
                    info@example.com<br />
                    info@example.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-2 col-md-6 col-sm-6">
            <div class="widget widget_services">
              <h5 class="footer-title">Our Links</h5>
              <ul>
                <li>
                  <RouterLink to="/"><span>Home</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/about-us"><span>About Us</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/services"><span>Services</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/team"><span>Team</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/blog-standard"><span>Blog</span></RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="widget widget_services">
              <h5 class="footer-title">OUR SERVICES</h5>
              <ul>
                <li>
                  <RouterLink to="/blog-open-gutenberg"
                    ><span>Strategy & Research</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/services"
                    ><span>Fast Delivery</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/contact-us"
                    ><span>Seat Reservation</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/shop-style-1"
                    ><span>Pickup In Store</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/our-menu-1"
                    ><span>Our Menu</span></RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="widget widget_services">
              <h5 class="footer-title">Help Center</h5>
              <ul>
                <li>
                  <RouterLink to="/faq"><span>FAQ</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-style-1"><span>Shop</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-style-2"
                    ><span>Category Filter</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/testimonial"
                    ><span>Testimonials</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/contact-us"
                    ><span>Contact Us</span></RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom Part -->
    <div class="container">
      <div class="footer-bottom">
        <div class="row">
          <div class="col-xl-6 col-md-6 text-md-start">
            <p>Copyright 2023 All rights reserved.</p>
          </div>
          <div class="col-xl-6 col-md-6 text-md-end">
            <span class="copyright-text"
              >Crafted With
              <span
                @click="heart = !heart"
                :class="`heart ${heart === true ? 'heart-blast' : ''}`"
              ></span>
              by
              <a href="https://dexignzone.com/" target="_blank"
                >DexignZone</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <img
      class="bg1 dz-move"
      src="../assets/images/background/pic5.png"
      alt="/"
    />
    <img
      class="bg2 dz-move"
      src="../assets/images/background/pic6.png"
      alt="/"
    />
  </footer>
</template>
