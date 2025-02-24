<script setup>
import { ref } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import { RouterLink } from "vue-router";
const open = ref(false);
const setHeader = ref(false);
const addActive = ref(false);
window.onscroll = () => {
  window.scrollY > 80 ? (setHeader.value = true) : (setHeader.value = false);
};
</script>

<template>
  <header
    class="site-header mo-left header header-transparent transparent-white style-2"
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
              <form method="post">
                <div class="input-group">
                  <input
                    required="required"
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                  <div class="input-group-addon">
                    <button
                      name="submit"
                      value="submit"
                      type="submit"
                      class="btn btn-primary btn-hover-2"
                    >
                      <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    </button>
                  </div>
                </div>
              </form>
              <div class="menu-btn" @click="addActive = true">
                <a href="javascript:void(0);">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.04102 17.3984H29.041"
                      stroke="#222222"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.04102 8.39844H29.541"
                      stroke="#222222"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.04102 25.3984H29.041"
                      stroke="#222222"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <!-- EXTRA NAV -->

          <!-- Header Nav -->
          <div
            class="header-nav navbar-collapse collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
    <!-- Main Header End -->
  </header>
  <div :class="`contact-sidebar ${addActive === true ? 'active' : ''}`">
    <div class="contact-box1">
      <div class="logo-contact logo-header">
        <RouterLink to="/" class="anim-logo"
          ><img src="../assets/images/logo.png" alt="/"
        /></RouterLink>
      </div>
      <div class="m-b50 contact-text">
        <div class="dz-title">
          <h4 class="m-b0">About us</h4>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <RouterLink to="/about-us" class="btn btn-primary btn-hover-2"
          ><span>READ MORE</span></RouterLink
        >
      </div>
      <div class="dz-title">
        <h4 class="m-b20">Contact Info</h4>
      </div>
      <div class="icon-bx-wraper left">
        <div class="icon-md m-r20">
          <span class="icon-cell"><i class="las la-phone-volume"></i></span>
        </div>
        <div class="icon-content">
          <h6 class="tilte">Call Now</h6>
          <p class="m-b0">
            +91 123 456 7890,<br />
            +91 987 654 3210
          </p>
        </div>
      </div>
      <div class="icon-bx-wraper left">
        <div class="icon-md m-r20">
          <span class="icon-cell"><i class="las la-envelope-open"></i></span>
        </div>
        <div class="icon-content">
          <h6 class="tilte">Location</h6>
          <p class="m-b0">15/B Miranda House, New York, US</p>
        </div>
      </div>
      <div class="icon-bx-wraper left">
        <div class="icon-md m-r20">
          <span class="icon-cell"><i class="las la-map-marker"></i></span>
        </div>
        <div class="icon-content">
          <h6 class="tilte">Email Now</h6>
          <p class="m-b0">info@gmail.com, services@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  <div class="menu-close" @click="addActive = false"></div>
</template>
