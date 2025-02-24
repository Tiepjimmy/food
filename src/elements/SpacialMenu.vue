<script setup>
import { ref } from "vue";
import gallerySmallPic1 from "../assets/images/gallery/small/pic1.jpg";
import gallerySmallPic2 from "../assets/images/gallery/small/pic2.jpg";
import gallerySmallPic3 from "../assets/images/gallery/small/pic3.jpg";
import gallerySmallPic4 from "../assets/images/gallery/small/pic4.jpg";
import { RouterLink } from "vue-router";

const menuBlog = ref([
  { img: gallerySmallPic1, price: "$55.0", name: "Pizza" },
  { img: gallerySmallPic2, price: "$50.0", name: "Rice" },
  { img: gallerySmallPic3, price: "$45.0", name: "Green Salad" },
  { img: gallerySmallPic4, price: "$35.0", name: "Pasta" },
]);

const addActive = ref(1);
</script>

<template>
  <div class="row">
    <div
      class="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp"
      v-for="(item, ind) in menuBlog"
      :key="ind"
    >
      <div
        @mouseenter="addActive = ind"
        :class="`dz-img-box style-2 box-hover ${
          addActive === ind ? 'active' : ''
        }`"
      >
        <div class="dz-media">
          <img :src="item.img" alt="/" />
        </div>
        <div class="dz-content">
          <h4 class="dz-title">
            <RouterLink to="/product-detail">{{ item.name }}</RouterLink>
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          <h5 class="dz-price text-primary">{{ item.price }}</h5>
          <RouterLink to="/shop-cart" class="btn btn-primary btn-hover-2"
            >Add To Cart</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
