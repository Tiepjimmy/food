<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import SideFilter from "../elements/SideFilter.vue";
import bgimg from "../assets/images/banner/bnr3.jpg";

import gallerGridpic1 from "@/assets/images/gallery/grid4/pic1.jpg";
import gallerGridpic2 from "@/assets/images/gallery/grid4/pic2.jpg";
import gallerGridpic3 from "@/assets/images/gallery/grid4/pic3.jpg";
import gallerGridpic4 from "@/assets/images/gallery/grid4/pic4.jpg";
import gallerGridpic5 from "@/assets/images/gallery/grid4/pic5.jpg";
import gallerGridpic6 from "@/assets/images/gallery/grid4/pic6.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const buttons = ref([
  { icon: "flaticon-fast-food", name: "ALL" },
  { icon: "flaticon-cocktail", name: "COLD DRINK" },
  { icon: "flaticon-pizza-slice", name: "PIZZA" },
  { icon: "flaticon-salad", name: "SALAD" },
  { icon: "flaticon-cupcake", name: "SWEETS" },
  { icon: "flaticon-chili-pepper", name: "SPICY" },
  { icon: "flaticon-hamburger-1", name: "BURGER" },
]);

let gallery = [
  {
    img: gallerGridpic1,
    title: "Burger",
    categery: "COLD DRINK PIZZA BURGER",
    price: "$4.56",
  },
  {
    img: gallerGridpic2,
    title: "Chicken Burger",
    categery: "PIZZA SWEETS",
    price: "$17.56",
  },
  {
    img: gallerGridpic3,
    title: "Pineapple Pizza ",
    categery: "COLD DRINK SALAD SPICY BURGER",
    price: "$24.50",
  },
  {
    img: gallerGridpic4,
    title: "Pineapple Soup ",
    categery: "COLD DRINK SWEETS",
    price: "$11.02",
  },
  {
    img: gallerGridpic5,
    title: "Momos ",
    categery: "PIZZA SPICY BURGER",
    price: "$4.56",
  },
  {
    img: gallerGridpic6,
    title: "Pancake ",
    categery: "SALAD SWEETS BURGER",
    price: "$12.20",
  },
  {
    img: gallerGridpic4,
    title: "Pineapple Soup ",
    categery: "BURGER",
    price: "$10.50",
  },
  {
    img: gallerGridpic2,
    title: "Spicy Burger ",
    categery: "PIZZA SALAD",
    price: "$4.56",
  },
  {
    img: gallerGridpic1,
    title: "Cheese Burger",
    categery: "COLD DRINK SPICY",
    price: "$17.56",
  },
];

let galleryList = gallery;
const addClass = ref(0);
const filterButton = (el, name) => {
  addClass.value = el;
  let updateItem = gallery.filter((ell) => {
    return ell.categery.includes(name);
  });

  galleryList = updateItem;
  if (name === "ALL") {
    galleryList = gallery;
  }
};
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Our Menu 3" title="Our Menu 3" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 col-lg-9 col-md-12">
            <div class="site-filters style-1 clearfix">
              <ul class="filters" data-bs-toggle="buttons">
                <li
                  data-filter=".All"
                  :class="`btn ${addClass === ind ? 'active' : ''}`"
                  v-for="(item, ind) in buttons"
                  :key="ind"
                >
                  <a
                    href="javascript:void(0);"
                    @click="filterButton(ind, item.name)"
                    ><span><i :class="item.icon"></i></span>{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <SideFilter />
        </div>
        <ul id="masonry" class="row">
          <li
            class="card-container col-lg-4 col-md-6 m-b30"
            v-for="(item, ind) in galleryList"
            :key="ind"
          >
            <div class="dz-img-box style-7">
              <div class="dz-media">
                <img :src="item.img" alt="/" />
                <div class="dz-meta">
                  <ul>
                    <li class="seller">Top Seller</li>
                    <li class="rating"><i class="fa-solid fa-star"></i> 4.5</li>
                  </ul>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title">
                  <RouterLink to="/product-detail">{{ item.title }}</RouterLink>
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <span class="price">{{ item.price }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
