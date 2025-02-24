<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="main-bnr-two">
    <div class="main-slider-2">
      <div class="banner-inner">
        <div class="primary-box"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-7 col-md-7">
              <div class="banner-content">
                <h1 class="title wow fadeInUp">
                  The Number <span class="text-primary">#1</span> Choice Your
                  Hunger Solution
                </h1>
                <p class="wow fadeInUp">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>

                <div class="banner-btn d-flex align-items-center wow fadeInUp">
                  <RouterLink
                    to="/contact-us"
                    class="btn btn-primary btn-md shadow-primary m-r30 btn-hover-3"
                    ><span class="btn-text" data-text="Book a Table"
                      >Book a Table</span
                    ></RouterLink
                  >
                  <RouterLink
                    to="/about-us"
                    class="btn btn-outline-primary btn-md shadow-primary btn-hover-3"
                    ><span class="btn-text" data-text="View More"
                      >View More</span
                    ></RouterLink
                  >
                </div>
              </div>
              <div class="main-thumb2-area">
                <RouterLink to="/our-menu-1" class="food-card wow fadeInUp">
                  <div class="icon">
                    <i class="flaticon-juice"></i>
                  </div>
                </RouterLink>
                <RouterLink to="/our-menu-1" class="food-card wow fadeInUp">
                  <div class="icon">
                    <i class="flaticon-hamburger"></i>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/our-menu-1"
                  class="food-card wow fadeInUp"
                >
                  <div class="icon">
                    <i class="flaticon-pizza"></i>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/our-menu-1"
                  class="food-card wow fadeInUp"
                >
                  <div class="icon">
                    <i class="flaticon-cake-slice"></i>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/our-menu-1"
                  class="food-card wow fadeInUp"
                >
                  <div class="icon">
                    <i class="flaticon-room-service"></i>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="col-xl-6 col-lg-5 col-md-5">
              <div class="banner-media">
                <img
                  src="../assets/images/main-slider/slider3/bg.png"
                  class="item-bg"
                  alt="/"
                />
                <div class="item-media wow fadeInRight dz-move-down">
                  <img
                    src="../assets/images/main-slider/slider3/offer.png"
                    class="offer dz-move"
                    alt="/"
                  />
                  <img
                    src="../assets/images/main-slider/slider3/crown.png"
                    class="crown"
                    alt="/"
                  />
                  <img
                    src="../assets/images/main-slider/slider3/burger.png"
                    class="img2"
                    alt="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="primary-box style-1"></div>
      </div>
    </div>
  </div>
</template>
