<script setup>
import { ref } from "vue";
import teampic1 from "../assets/images/team/pic1.jpg";
import teampic2 from "../assets/images/team/pic2.jpg";
import teampic3 from "../assets/images/team/pic3.jpg";
import teampic4 from "../assets/images/team/pic4.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import { RouterLink } from "vue-router";

const carousel = ref([
  { img: teampic1, name: "Sarah Albert", title: "Senior Chef" },
  { img: teampic2, name: "John Doe", title: "Senior Chef" },
  { img: teampic3, name: "emy Carline", title: "Junior Chef" },
  { img: teampic4, name: "Cotlin Care", title: "Senior Chef" },
  { img: teampic1, name: "Sarah Albert", title: "Senior Chef" },
  { img: teampic2, name: "John Doe", title: "Senior Chef" },
  { img: teampic3, name: "emy Carline", title: "Junior Chef" },
  { img: teampic4, name: "Cotlin Care", title: "Senior Chef" },
]);
</script>

<template>
  <div class="container" id="chefSlider">
    <Swiper
      class="swiper team-swiper swiper-visible swiper-btn-lr swiper-item-4"
      :slides-per-view="4"
      :space-between="30"
      :parallax="true"
      :speed="1000"
      :loop="true"
      :spaceBetween="30"
      :modules="[Navigation]"
      :navigation="{
        prevEl: '.btn-prev-long',
        nextEl: '.btn-next-long',
      }"
      :autoplay="{
        delay: 1000,
      }"
      :breakpoints="{
        1200: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        575: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="(item, ind) in carousel"
        :key="ind"
      >
        <div class="dz-team style-1 wow fadeInUp">
          <div class="dz-media">
            <img :src="item.img" alt="/" />
          </div>
          <div class="dz-content">
            <div class="clearfix">
              <h6 class="dz-name">
                <RouterLink to="/team-detail">{{ item.name }}</RouterLink>
              </h6>
              <span class="dz-position">{{ item.title }}</span>
            </div>
            <ul class="team-social">
              <li>
                <a class="share-btn" href="javascript:void(0);"
                  ><i class="flaticon-share"></i
                ></a>
                <ul class="sub-team-social">
                  <li>
                    <a
                      class="fb-btn"
                      href="https://www.facebook.com/"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      class="tw-btn"
                      href="https://twitter.com/"
                      target="_blank"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      class="in-btn"
                      href="https://www.instagram.com/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      class="lin-btn"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <div class="pagination mt-xl-0 m-t40">
        <div class="team-button-prev btn-prev-long">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div class="team-button-next btn-next-long">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </Swiper>
  </div>
</template>
