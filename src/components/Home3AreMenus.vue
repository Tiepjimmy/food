<script setup>
import { ref } from "vue";
import galleryGridPic1 from "../assets/images/gallery/grid4/pic1.jpg";
import galleryGridPic2 from "../assets/images/gallery/grid4/pic2.jpg";
import galleryGridPic3 from "../assets/images/gallery/grid4/pic3.jpg";
import galleryGridPic4 from "../assets/images/gallery/grid4/pic4.jpg";
import galleryGridPic5 from "../assets/images/gallery/grid4/pic5.jpg";
import galleryGridPic6 from "../assets/images/gallery/grid4/pic6.jpg";
import { RouterLink } from "vue-router";

const buttons = ref([
  { icon: "flaticon-fast-food", title: "ALL" },
  { icon: "flaticon-cocktail", title: "COLD DRINK" },
  { icon: "flaticon-pizza-slice", title: "PIZZA" },
  { icon: "flaticon-salad", title: "SALAD" },
  { icon: "flaticon-cupcake", title: "SWEETS" },
  { icon: "flaticon-chili-pepper", title: "SPICY" },
  { icon: "flaticon-hamburger-1", title: "BURGER" },
]);

let cards = [
  { img: galleryGridPic1, categery: "BURGER", name: "Burger", price: "$4.56" },
  {
    img: galleryGridPic2,
    categery: "COLD DRINK",
    name: "Chicken Burger",
    price: "$17.56",
  },
  {
    img: galleryGridPic3,
    categery: "PIZZA",
    name: "Pineapple Pizza",
    price: "$24.50",
  },
  {
    img: galleryGridPic4,
    categery: "SALAD",
    name: "Pineapple Soup",
    price: "$11.02",
  },
  { img: galleryGridPic5, categery: "SWEETS", name: "Momos", price: "$4.56" },
  { img: galleryGridPic6, categery: "SPICY", name: "Pancake", price: "$12.20" },
];

let cardList = cards;
const addClass = ref(0);

function filterButton(el, name) {
  addClass.value = el;
  let updateItem = cards.filter((ell) => {
    return ell.categery === name;
  });

  cardList = updateItem;
  if (name === "ALL") {
    cardList = cards;
  }
}
</script>

<template>
  <div class="row">
    <div class="col-xl-10 col-lg-9 col-md-12 wow fadeInUp">
      <div class="site-filters style-1 clearfix">
        <ul class="filters">
          <li
            :class="`btn ${addClass === ind ? 'active' : ''}`"
            v-for="(item, ind) in buttons"
            :key="ind"
            @click="filterButton(ind, item.title)"
          >
            <a href="javascript:void(0);"
              ><i :class="item.icon"></i>{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="col-xl-2 col-lg-3 col-md-12 text-lg-end d-lg-block d-none">
      <RouterLink to="/our-menu-1" class="btn btn-outline-primary btn-hover-3"
        ><span class="btn-text" data-text="View All">View All</span></RouterLink
      >
    </div>
  </div>
  <div class="clearfix">
    <ul id="masonry" class="row dlab-gallery-listing gallery">
      <li
        class="card-container col-lg-4 col-md-6 m-b30 All drink pizza burger"
        v-for="(item, ind) in cardList"
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
              <RouterLink to="/product-detail">{{ item.name }}</RouterLink>
            </h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable.
            </p>
            <span class="price">{{ item.price }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
