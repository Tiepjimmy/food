<script setup>
import { RouterLink } from "vue-router";
import Footer2Subscrption from "./Footer2Subscrption.vue";
</script>

<template>
  <footer class="site-footer style-3" id="footer">
    <div class="footer-bg-wrapper">
      <div class="container">
        <div class="footer-top">
          <div class="footer-subscribe-wrapper">
            <div class="wrapper-inner">
              <div class="row justify-content-between">
                <div class="col-xl-4 col-lg-4 mb-lg-0 m-b20 wow fadeInUp">
                  <div class="footer-logo">
                    <RouterLink to="/" class="anim-logo">
                      <img src="../assets/images/logo.png" alt="swigo logo" />
                    </RouterLink>
                  </div>
                  <p class="mb-0 font-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div class="col-xl-6 col-lg-6 wow fadeInUp">
                  <h5 class="title m-b15">Subscribe To Our Newsletter</h5>
                  <Footer2Subscrption title="Subscribe" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5 col-md-6 col-6 text-md-start">
              <h5 class="footer-title wow fadeInUp">OUR LINKS</h5>
              <div class="footer-menu wow fadeInUp">
                <ul>
                  <li><RouterLink to="/">Home</RouterLink></li>
                  <li><RouterLink to="/about-us">About Us</RouterLink></li>
                  <li><RouterLink to="/services">Services</RouterLink></li>
                  <li><RouterLink to="/team">Team</RouterLink></li>
                  <li><RouterLink to="/blog-standard">Blog</RouterLink></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7 col-md-6 col-6 text-md-end">
              <h5 class="footer-title wow fadeInUp">Help Center</h5>
              <div class="footer-menu wow fadeInUp">
                <ul>
                  <li><RouterLink to="/faq">FAQ</RouterLink></li>
                  <li><RouterLink to="/shop-style-1">Shop</RouterLink></li>
                  <li>
                    <RouterLink to="/shop-style-2">Category Filter</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/testimonial">Testimonials</RouterLink>
                  </li>
                  <li><RouterLink to="/contact-us">Contact Us</RouterLink></li>
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
