<script setup>
// import { Options, Vue } from "vue-class-component";
import { ref } from "vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr2.jpg";
import galleryGridPic1 from "../assets/images/gallery/grid5/pic1.jpg";
import galleryGridPic2 from "../assets/images/gallery/grid5/pic2.jpg";
import galleryGridPic3 from "../assets/images/gallery/grid5/pic3.jpg";
import galleryGridPic4 from "../assets/images/gallery/grid5/pic4.jpg";
import galleryGridPic5 from "../assets/images/gallery/grid5/pic5.jpg";
import galleryGridPic6 from "../assets/images/gallery/grid5/pic6.jpg";
import galleryGridPic7 from "../assets/images/gallery/grid5/pic7.jpg";
import galleryGridPic8 from "../assets/images/gallery/grid5/pic8.jpg";
import galleryGridPic9 from "../assets/images/gallery/grid5/pic9.jpg";
import galleryGridPic10 from "../assets/images/gallery/grid5/pic10.jpg";
import galleryGridPic11 from "../assets/images/gallery/grid5/pic11.jpg";
import galleryGridPic12 from "../assets/images/gallery/grid5/pic12.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";
import Thumbnail from "lightgallery/plugins/thumbnail";

const buttons = ref([
  { icon: "flaticon-fast-food", title: "All" },
  { icon: "flaticon-cocktail", title: "COLD DRINK" },
  { icon: "flaticon-pizza-slice", title: "PIZZA" },
  { icon: "flaticon-salad", title: "SALAD" },
  { icon: "flaticon-cupcake", title: "SWEETS" },
  { icon: "flaticon-chili-pepper", title: "SPICY" },
  { icon: "flaticon-hamburger-1", title: "BURGER" },
]);

let cards = [
  { img: galleryGridPic1, name: "Sweet Cake", categery: "COLD DRINK" },
  { img: galleryGridPic2, name: "Health And Wealth", categery: "PIZZA" },
  { img: galleryGridPic3, name: "Boil Rice", categery: "SALAD" },
  { img: galleryGridPic4, name: "Burger &  Frence Fries", categery: "SWEETS" },
  { img: galleryGridPic5, name: "Nonveg Biryani", categery: "SPICY" },
  { img: galleryGridPic6, name: "Honey Bread", categery: "BURGER" },
  { img: galleryGridPic7, name: "Sweet Potato", categery: "COLD DRINK" },
  { img: galleryGridPic8, name: "Veg Sauce", categery: "PIZZA" },
  { img: galleryGridPic9, name: "Chilla", categery: "SALAD" },
  { img: galleryGridPic10, name: "Crapse food", categery: "SWEETS" },
  { img: galleryGridPic11, name: "Pizza", categery: "SPICY" },
  { img: galleryGridPic12, name: "Donets", categery: "BURGER" },
];

let cardList = cards;
const addClass = ref(0);
function filterButton(el, name) {
  addClass.value = el;
  let updateItem = cards.filter((ell) => {
    return ell.categery === name;
  });
  cardList = updateItem;
  if (name === "All") {
    cardList = cards;
  }
}
const likeBtn = (e) => {
  e.target.classList.toggle("heart-blast");
};
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Our Menu 2" title="Our Menu 2" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="site-filters style-2 clearfix mb-lg-5 mb-md-4">
              <ul class="filters">
                <li
                  :class="`btn ${addClass === ind ? 'active' : ''} `"
                  v-for="(item, ind) in buttons"
                  :key="ind"
                >
                  <a
                    href="javascript:void(0);"
                    @click="filterButton(ind, item.title)"
                    ><span><i :class="item.icon"></i></span>{{ item.title }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clearfix" id="lightgallery">
          <lightgallery
            :settings="{
              speed: 500,
              selector: '.lg-item',
              thumbnail: true,
            }"
            :plugins="[lgThumbnail, lgZoom, Thumbnail]"
            class="row dlab-gallery-listing gallery"
          >
            <li
              class="card-container col-lg-4 col-md-6 col-sm-6"
              v-for="(item, ind) in cardList"
              :key="ind"
              :data-exthumbimage="item.img"
            >
              <div class="dz-img-box style-8">
                <a class="dz-media lg-item" :href="item.img">
                  <img
                    :src="item.img"
                    alt=""
                    width="800"
                    height="650"
                    class="lgImage"
                  />
                </a>
                <div class="dz-content">
                  <div class="dz-head">
                    <h6 class="title">
                      <RouterLink to="/product-detail">{{
                        item.name
                      }}</RouterLink>
                    </h6>
                    <span class="heart" @click="likeBtn"></span>
                  </div>
                  <p class="category">Fast Food</p>
                </div>
              </div>
            </li>
          </lightgallery>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
