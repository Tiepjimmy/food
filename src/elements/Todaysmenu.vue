<script setup>
import { ref } from "vue";
import galleryGridPic2 from "../assets/images/pic4-f47abc27.jpg";
import galleryGridPic5 from "../assets/images/pic4-f47abc27.jpg";
import galleryGridPic4 from "../assets/images/pic4-f47abc27.jpg";
import galleryGridPic6 from "../assets/images/pic4-f47abc27.jpg";
import galleryPic1 from "../assets/images/pic4-f47abc27.jpg";
import galleryPic2 from "../assets/images/pic4-f47abc27.jpg";
import galleryPic3 from "../assets/images/pic4-f47abc27.jpg";
import galleryPic4 from "../assets/images/pic4-f47abc27.jpg";
import { RouterLink } from "vue-router";

const menuList = ref([
  { img: galleryGridPic2, name: "Pasta", price: "$35.00" },
  { img: galleryGridPic5, name: "Shake", price: "$55.00" },
  { img: galleryGridPic4, name: "Dal", price: "$25.00" },
  { img: galleryGridPic6, name: "Pizza", price: "$90.00" },
]);

const iconbox = ref([
  { img: galleryPic1, title: "Restaurant", icon: "flaticon-restaurant" },
  { img: galleryPic2, title: "Bar", icon: "flaticon-martini" },
  { img: galleryPic3, title: "Cafe", icon: "flaticon-coffee-cup" },
  { img: galleryPic4, title: "Dessert", icon: "flaticon-cake" },
]);

const addActive = ref(1);
const iconboxActive = ref(1);
</script>

<template>
  <div class="row inner-section-wrapper">
    <div
      class="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp"
      v-for="(item, ind) in menuList"
      :key="ind"
    >
      <div
        @mouseenter="addActive = ind"
        :class="`dz-img-box style-3 box-hover ${
          addActive === ind ? ' active' : ''
        }`"
      >
        <div class="dz-media">
          <img :src="item.img" alt="/" />
        </div>
        <span class="dz-tag">TOP SELLER</span>
        <div class="dz-content">
          <h5 class="dz-title">
            <RouterLink to="/our-menu-1">{{ item.name }}</RouterLink>
          </h5>
          <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
        </div>
        <div class="dz-hover-content">
          <div class="dz-info">
            <h5 class="dz-title mb-0">
              <RouterLink to="/our-menu-1">{{ item.name }}</RouterLink>
            </h5>
            <span class="dz-price">{{ item.price }}</span>
          </div>
          <RouterLink
            to="/shop-cart"
            class="btn btn-cart btn-white text-primary btn-square"
            ><i class="flaticon-shopping-cart"></i
          ></RouterLink>
        </div>
      </div>
    </div>
    <div class="col-12 text-center m-t10">
      <RouterLink to="/our-menu-2" class="btn btn-md btn-primary btn-hover-1"
        ><span>See All Dishes</span></RouterLink
      >
    </div>
  </div>
  <div class="section-head text-center">
    <h2 class="title wow flipInX">Quality Services</h2>
  </div>
  <!-- Icon Wrapper 1 -->
  <div class="icon-wrapper1">
    <div class="row wow fadeInUp">
      <div
        class="col-lg-3 col-md-6 col-sm-6"
        v-for="(item, index) in iconbox"
        :key="index"
      >
        <div
          @mouseenter="iconboxActive = index"
          :class="`icon-bx-wraper style-1 box-hover center ${
            iconboxActive === index ? 'active' : ''
          }`"
          :style="`background-image: url(${item.img})`"
        >
          <div class="inner-content">
            <div class="icon-bx m-b25">
              <span class="icon-cell icon-md">
                <i :class="item.icon"></i>
              </span>
            </div>
            <div class="icon-content">
              <h5 class="dz-title">{{ item.title }}</h5>
              <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
