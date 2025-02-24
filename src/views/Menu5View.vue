<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "@/assets/images/banner/bnr4.jpg";
import menuSmallPic1 from "@/assets/images/gallery/small/pic1.jpg";
import menuSmallPic2 from "@/assets/images/gallery/small/pic2.jpg";
import menuSmallPic3 from "@/assets/images/gallery/small/pic3.jpg";
import menuSmallPic4 from "@/assets/images/gallery/small/pic4.jpg";
import menuSmallPic5 from "@/assets/images/gallery/small/pic5.jpg";
import menuSmallPic6 from "@/assets/images/gallery/small/pic6.jpg";
import menuSmallPic7 from "@/assets/images/gallery/small/pic7.jpg";
import menuSmallPic8 from "@/assets/images/gallery/small/pic8.jpg";
import menuSmallPic9 from "@/assets/images/gallery/small/pic9.jpg";
import menuSmallPic10 from "@/assets/images/gallery/small/pic10.jpg";
import menuSmallPic11 from "@/assets/images/gallery/small/pic11.jpg";
import menuSmallPic12 from "@/assets/images/gallery/small/pic12.jpg";
import SideFilter from "../elements/SideFilter.vue";
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

const cards = [
  {
    img: menuSmallPic1,
    categery: "COLD DRINK SALAD  BURGER",
    title: "Burger",
    price: "$10.00",
  },
  {
    img: menuSmallPic2,
    categery: "COLD DRINK SALAD",
    title: "Hot Rice",
    price: "$15.00",
  },
  {
    img: menuSmallPic3,
    categery: "COLD DRINK SWEETS",
    title: "Momos",
    price: "$25.00",
  },
  {
    img: menuSmallPic4,
    categery: "COLD DRINK SWEETS",
    title: "Pasta",
    price: "$45.00",
  },
  {
    img: menuSmallPic5,
    categery: "COLD DRINK SWEETS",
    title: "Panner",
    price: "$25.00",
  },
  {
    img: menuSmallPic6,
    categery: "PIZZA SPICY BURGER",
    title: "Soya Rice",
    price: "$90.00",
  },
  {
    img: menuSmallPic7,
    categery: "PIZZA SPICY BURGER",
    title: "Salad",
    price: "$25.00",
  },
  {
    img: menuSmallPic8,
    categery: "PIZZA SPICY BURGER",
    title: "Panner",
    price: "$45.00",
  },
  {
    img: menuSmallPic9,
    categery: "PIZZA SPICY BURGER",
    title: "Soya Rice",
    price: "$10.00",
  },
  {
    img: menuSmallPic10,
    categery: "PIZZA SPICY BURGER",
    title: "Potato Stick",
    price: "$85.00",
  },
  {
    img: menuSmallPic11,
    categery: "PIZZA  BURGER",
    title: "Salad",
    price: "$75.00",
  },
  {
    img: menuSmallPic12,
    categery: "PIZZA  BURGER",
    title: "Veg Soup",
    price: "$25.00",
  },
];

const hoverActive = ref();

let cardList = cards;
const addClass = ref(0);
const filterButton = (el, name) => {
  addClass.value = el;
  let updateItem = cards.filter((ell) => {
    return ell.categery.includes(name);
  });
  cardList = updateItem;
  if (name === "ALL") {
    cardList = cards;
  }
};
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Our Menu 5" title="Our Menu 5" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 col-lg-9 col-md-12">
            <div class="site-filters style-1 clearfix">
              <ul class="filters">
                <li
                  :class="`btn ${addClass === ind ? 'active' : ''}`"
                  v-for="(item, ind) in buttons"
                  :key="ind"
                  @click="filterButton(ind, item.name)"
                >
                  <a href="javascript:void(0);"
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
            class="card-container col-lg-3 col-md-6 col-sm-6 m-b30 All drink pizza burger"
            v-for="(item, index) in cardList"
            :key="index"
          >
            <div
              @mouseenter="hoverActive = index"
              :class="`dz-img-box style-2 box-hover ${
                hoverActive === index ? 'active' : ''
              }`"
            >
              <div class="dz-media">
                <img :src="item.img" alt="/" />
              </div>
              <div class="dz-content">
                <h4 class="dz-title">
                  <RouterLink to="/product-detail">{{ item.title }}</RouterLink>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <h5 class="dz-price text-primary">{{ item.price }}</h5>
                <RouterLink to="/shop-cart" class="btn btn-primary btn-hover-2">
                  Add To Cart</RouterLink
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
