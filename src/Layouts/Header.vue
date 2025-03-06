<script setup>
import {ref, watch} from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import SignIn from "../elements/SignIn.vue";
import { RouterLink } from "vue-router";
import {useAuthStore} from "@/stores/auth";
import CartItem from "@/components/CartItem.vue";
import UserInfo from "@/components/userInfo.vue";

const open = ref(false);
const setHeader = ref(false);
const store = useAuthStore();
const checkUser = ref(store.user.userName ?? false);

watch(store, async (newQuestion) => {
  checkUser.value = false;
  if (newQuestion.user.userName) {
    checkUser.value = true
  }
})

window.onscroll = () => {
  window.scrollY > 80 ? (setHeader.value = true) : (setHeader.value = false);
};

const extrainInfoUser = ref(false);

const showInfoUser = () => {
  extrainInfoUser.value = !extrainInfoUser.value;
  let infoUser = document.getElementById("infoUser");
  infoUser?.setAttribute(
      "style",
      `display:${extrainInfoUser.value === true ? "block" : "none"}`
  );
  setTimeout(() => {
    infoUser?.classList.toggle("show-info-user");
  }, 10);
};

const signOut = () => {
  store.logout();
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
                <CartItem />
                <UserInfo />
              </ul>
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
  <SignIn  />
</template>
