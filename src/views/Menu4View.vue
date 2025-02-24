<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "@/assets/images/banner/bnr4.jpg";
import menuSmallPic1 from "@/assets/images/menu-small/pic1.png";
import menuSmallPic2 from "@/assets/images/menu-small/pic2.png";
import menuSmallPic3 from "@/assets/images/menu-small/pic3.png";
import menuSmallPic4 from "@/assets/images/menu-small/pic4.png";
import menuSmallPic5 from "@/assets/images/menu-small/pic5.png";
import menuSmallPic6 from "@/assets/images/menu-small/pic6.png";
import menuSmallPic7 from "@/assets/images/menu-small/pic7.png";
import menuSmallPic8 from "@/assets/images/menu-small/pic8.png";
import menuSmallPic9 from "@/assets/images/menu-small/pic9.png";
import menuSmallPic10 from "@/assets/images/menu-small/pic10.png";
import menuSmallPic11 from "@/assets/images/menu-small/pic11.png";
import menuSmallPic12 from "@/assets/images/menu-small/pic12.png";
import menuSmallPic13 from "@/assets/images/menu-small/pic13.png";
import menuSmallPic14 from "@/assets/images/menu-small/pic14.png";
import menuSmallPic15 from "@/assets/images/menu-small/pic15.png";
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
  {
    img: menuSmallPic13,
    categery: "PIZZA  BURGER",
    title: "Noodles",
    price: "$10.00",
  },
  {
    img: menuSmallPic14,
    categery: " SALAD  SWEETS",
    title: "Fish Fry",
    price: "$35.00",
  },
  {
    img: menuSmallPic15,
    categery: " SALAD  SWEETS",
    title: "Aloo Tikki",
    price: "$25.00",
  },
  {
    img: menuSmallPic8,
    categery: " SALAD  SWEETS",
    title: "Soya Rice",
    price: "$15.00",
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
    <CommonBanner :img="bgimg" heading="Our Menu 4" title="Our Menu 4" />
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
            v-for="(item, index) in cardList"
            class="card-container col-xl-3 col-lg-4 col-md-6 m-b30 All drink pizza burger"
            :key="index"
          >
            <div
              @mouseenter="hoverActive = index"
              :class="`dz-img-box style-4 box-hover ${
                hoverActive === index ? 'active' : ''
              }`"
            >
              <div class="menu-detail">
                <div class="dz-media">
                  <img :src="item.img" alt="/" />
                </div>
                <div class="dz-content">
                  <h5 class="title">
                    <RouterLink to="/product-detail">{{
                      item.title
                    }}</RouterLink>
                  </h5>
                  <p>Delicious and Spicy</p>
                </div>
              </div>
              <div class="menu-footer">
                <span>Regular Price</span>
                <h5 class="price">{{ item.price }}</h5>
              </div>
              <RouterLink class="detail-btn" to="/product-detail"
                ><i class="fa-solid fa-plus"></i
              ></RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
