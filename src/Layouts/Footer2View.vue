<script setup>
import { RouterLink } from "vue-router";
import Footer2Subscrption from "./Footer2Subscrption.vue";
</script>

<template>
  <footer class="site-footer style-2" id="footer">
    <div class="footer-bg-wrapper" id="app-banner">
      <div class="footer-top">
        <div class="container">
          <div class="footer-subscribe-wrapper">
            <div class="wrapper-inner">
              <div class="row justify-content-between">
                <div
                  class="col-xl-4 col-lg-4 m-lg-0 m-b20 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div class="footer-logo">
                    <RouterLink to="/" class="anim-logo-white">
                      <img src="../assets/images/logo2.png" alt="/" />
                    </RouterLink>
                  </div>
                  <p class="text-white mb-0 font-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div
                  class="col-xl-6 col-lg-6 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <h4 class="text-white title m-b15">
                    Subscribe To Our Newsletter
                  </h4>
                  <Footer2Subscrption  title="Subscribe"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
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
                    <RouterLink to="/about-us"
                      ><span>About Us</span></RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/services"
                      ><span>Services</span></RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/team"><span>Team</span></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/blog-standard"
                      ><span>Blog</span></RouterLink
                    >
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
                    <RouterLink to="/shop-style-1"
                      ><span>Shop</span></RouterLink
                    >
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
    </div>
    <!-- Footer Bottom Part -->
    <div class="container">
      <div class="footer-bottom">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <span class="copyright-text"
              >Crafted With
              <span
                class="heart"
                @click="
                  (e) => {
                    e.target.classList.toggle('heart-blast');
                  }
                "
              ></span>
              by
              <a href="https://dexignzone.com/" target="_blank"
                >DexignZone</a
              ></span
            >
          </div>
          <div class="col-xl-6 col-lg-6">
            <ul class="footer-link">
              <li><RouterLink to="/blog-standard">Blog Detail</RouterLink></li>
              <li><RouterLink to="/about-us">About</RouterLink></li>
              <li><RouterLink to="/testimonial">Testimonials</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
