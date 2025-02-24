<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import CommonLeftContent from "../elements/CommonLeftContent.vue";
import bgimg from "@/assets/images/banner/bnr1.jpg";
import galleryGrid1 from "@/assets/images/gallery/grid4/pic1.jpg";
import galleryGrid2 from "@/assets/images/gallery/grid4/pic2.jpg";
import galleryGrid3 from "@/assets/images/gallery/grid4/pic3.jpg";
import galleryGrid4 from "@/assets/images/gallery/grid4/pic4.jpg";
import galleryGrid5 from "@/assets/images/gallery/grid4/pic5.jpg";
import galleryGrid6 from "@/assets/images/gallery/grid4/pic6.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";
// import RangeSlider from "vue-range-slider";
// import "vue-range-slider/dist/vue-range-slider.css";

const searchResuilts = ref([
  {
    img: galleryGrid1,
    title: "Burger",
    price: "$4.56",
    reting: "4.5",
  },
  {
    img: galleryGrid2,
    title: "Chicken  Burger",
    price: "$17.00",
    reting: "4.0",
  },
  {
    img: galleryGrid3,
    title: "Pineapple Pizza",
    price: "$24.00",
    reting: "3.5",
  },
  {
    img: galleryGrid4,
    title: "Pineapple Soup",
    price: "$11.00",
    reting: "5.0",
  },
  { img: galleryGrid5, title: "Momos", price: "$4.00", reting: "4.2" },
  { img: galleryGrid6, title: "Pancake", price: "$12.00", reting: "4.0" },
  {
    img: galleryGrid3,
    title: "Pineapple Pizza",
    price: "$24.00",
    reting: "3.5",
  },
  {
    img: galleryGrid1,
    title: "Burger",
    price: "$4.56",
    reting: "4.5",
  },
  {
    img: galleryGrid2,
    title: "Chicken  Burger",
    price: "$17.00",
    reting: "4.0",
  },
]);
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Shop Style 2" title="Shop Style 2" />
    <section class="content-inner-1">
      <div class="container">
        <div class="row search-wraper text-center">
          <div class="col-lg-8 m-auto">
            <form>
              <div class="input-group">
                <input
                  required="required"
                  type="text"
                  class="form-control"
                  placeholder="Type here"
                />
                <div class="input-group-addon">
                  <button
                    name="submit"
                    value="submit"
                    type="submit"
                    class="btn btn-primary btn-hover-2"
                  >
                    <span>Search</span><i class="icon-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <CommonLeftContent />
          <div class="col-lg-9">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title mb-md-3 mb-lg-4 m-b20 d-none d-lg-block">
                Search Results
              </h5>
              <strong class="filter-item-show m-b20"
                >Search: 51,740 items</strong
              >
              <a href="javascript:void(0);" class="btn btn-primary panel-btn"
                >Filter</a
              >
            </div>
            <ul id="masonry" class="row">
              <li
                class="card-container col-xl-4 col-md-6 m-b30"
                v-for="(item, ind) in searchResuilts"
                :key="ind"
              >
                <div class="dz-img-box style-7">
                  <div class="dz-media">
                    <img :src="item.img" alt="/" />
                    <div class="dz-meta">
                      <ul>
                        <li class="seller">Top Seller</li>
                        <li class="rating">
                          <i class="fa-solid fa-star"></i> 4.5
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="dz-content">
                    <h5 class="title">
                      <RouterLink to="/product-detail">{{ item.title }}</RouterLink>
                    </h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                    <span class="price">{{ item.price }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>

