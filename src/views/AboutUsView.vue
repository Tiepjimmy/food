<script setup>
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr1.jpg";
import ModalVideo from "../elements/ModalVideo.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const cards = ref([
  { icon: "flaticon-vegetable", title: "Fresh Products" },
  { icon: "flaticon-chef-hat", title: "Skilled Chefs" },
  { icon: "flaticon-cocktail", title: "Best Bar" },
  { icon: "flaticon-cuisine", title: "Vegan Cuisine" },
]);
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="About Us" title="About Us" />
    <ModalVideo />
    <section class="content-inner">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title">What We Do</h2>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-sm-6 m-b30"
            v-for="(item, ind) in cards"
            :key="ind"
          >
            <div class="icon-bx-wraper style-3">
              <div class="icon-bx">
                <div class="icon-cell">
                  <i :class="item.icon"></i>
                </div>
              </div>
              <div class="icon-content">
                <h5 class="title">
                  <RouterLink to="/service-detail">{{ item.title }}</RouterLink>
                </h5>
                <p>Lorem Ipsum is simply dummy text of the printing and</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer4 />
  </div>
</template>
