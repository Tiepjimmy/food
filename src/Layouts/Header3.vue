<script setup>
import { ref } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import SignIn from "../elements/SignIn.vue";
import { RouterLink } from "vue-router";

const setHeader = ref(false);
const open = ref(false);

window.onscroll = () => {
  window.scrollY > 80 ? (setHeader.value = true) : (setHeader.value = false);
};

const extraNav = ref(false);

const rightNavbar = () => {
  extraNav.value = !extraNav.value;
  let cartList = document.getElementById("cartList");
  cartList.setAttribute(
    "style",
    `display:${extraNav.value === true ? "block" : "none"}`
  );
  setTimeout(() => {
    cartList.classList.toggle("show-cart-list");
  }, 500);
};

const cartItemClose = (e) => {
  // e.target.
  e.target.parentNode.parentNode.parentNode.classList.add("remove-cart-list");
  setTimeout(() => {
    e.target.parentNode.parentNode.parentNode.setAttribute(
      "style",
      "display:none"
    );
  }, 300);
};


</script>

<template>
  <header
    class="site-header mo-left header header-transparent transparent-white style-1"
  >
    <!-- Main Header -->
    <div
      :class="`sticky-header main-bar-wraper navbar-expand-lg ${
        setHeader === true ? 'is-fixed' : ''
      }`"
    >
      <div class="main-bar clearfix">
        <div class="container clearfix">
          <!-- Website Logo -->
          <div class="logo-header mostion">
            <RouterLink to="/" class="anim-logo"
              ><img src="../assets/images/logo.png" alt="/"
            /></RouterLink>
          </div>
          <!-- Nav Toggle Button -->
          <button
            :class="`navbar-toggler collapsed navicon justify-content-end ${
              open === true ? 'open' : ''
            }`"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="open = !open"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- EXTRA NAV -->
          <div class="extra-nav">
            <div class="extra-cell">
              <ul>
                <li>
                  <a
                    class="btn btn-white btn-square btn-shadow"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasLogin"
                    role="button"
                    aria-controls="offcanvasLogin"
                  >
                    <i class="flaticon-user"></i>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    class="btn btn-white btn-square btn-shadow cart-btn"
                    @click="rightNavbar"
                  >
                    <i class="flaticon-shopping-bag-1"></i>
                    <span class="badge">6</span>
                  </button>
                  <ul class="dropdown-menu cart-list" id="cartList">
                    <li class="cart-item">
                      <div class="media">
                        <div class="media-left">
                          <RouterLink to="/product-detail">
                            <img
                              alt="/"
                              class="media-object"
                              src="../assets/images/shop/pic2.jpg"
                            />
                          </RouterLink>
                        </div>
                        <div class="media-body">
                          <h6 class="dz-title">
                            <RouterLink
                              to="/product-detail"
                              class="media-heading"
                              >Double Burger</RouterLink
                            >
                          </h6>
                          <span class="dz-price">$28.00</span>
                          <span class="item-close" @click="cartItemClose">&times;</span>
                        </div>
                      </div>
                    </li>
                    <li class="cart-item">
                      <div class="media">
                        <div class="media-left">
                          <RouterLink to="/product-detail">
                            <img
                              alt="/"
                              class="media-object"
                              src="../assets/images/shop/pic3.jpg"
                            />
                          </RouterLink>
                        </div>
                        <div class="media-body">
                          <h6 class="dz-title">
                            <RouterLink
                              to="/product-detail"
                              class="media-heading"
                              >Cheese Burger</RouterLink
                            >
                          </h6>
                          <span class="dz-price">$20.00</span>
                          <span class="item-close" @click="cartItemClose">&times;</span>
                        </div>
                      </div>
                    </li>
                    <li class="cart-item">
                      <div class="media">
                        <div class="media-left">
                          <RouterLink to="/product-detail">
                            <img
                              alt="/"
                              class="media-object"
                              src="../assets/images/shop/pic4.jpg"
                            />
                          </RouterLink>
                        </div>
                        <div class="media-body">
                          <h6 class="dz-title">
                            <RouterLink
                              to="/product-detail"
                              class="media-heading"
                              >Burger</RouterLink
                            >
                          </h6>
                          <span class="dz-price">$15.00</span>
                          <span class="item-close" @click="cartItemClose">&times;</span>
                        </div>
                      </div>
                    </li>
                    <li
                      class="cart-item text-center d-flex justify-content-between"
                    >
                      <h6 class="text-primary mb-0">Total:</h6>
                      <h6 class="text-primary mb-0">$63</h6>
                    </li>
                    <li class="text-center d-flex">
                      <RouterLink
                        to="/shop-cart"
                        class="btn btn-primary me-2 w-100 d-block btn-hover-1"
                        ><span>View Cart</span></RouterLink
                      >
                      <RouterLink
                        to="/our-menu-1"
                        class="btn btn-outline-primary w-100 d-block btn-hover-1"
                        ><span>Menu</span></RouterLink
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- EXTRA NAV -->

          <!-- Header Nav -->
          <div
            class="header-nav navbar-collapse collapse justify-content-start"
            id="navbarNavDropdown"
          >
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
    <!-- Main Header End -->
  </header>
  <SignIn />
</template>
