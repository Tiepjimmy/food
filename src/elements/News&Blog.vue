<script setup>
import { ref } from "vue";
import blogGridPic1 from "../assets/images/blog/grid/pic1.jpg";
import blogGridPic2 from "../assets/images/blog/grid/pic2.jpg";
import blogGridPic3 from "../assets/images/blog/grid/pic3.jpg";
import blogGridPic4 from "../assets/images/blog/grid/pic4.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { RouterLink } from "vue-router";

const blog = ref([
  { img: blogGridPic1, date: "26 Jan 2023", chat: "2.5K" },
  { img: blogGridPic2, date: "15 Mar 2023", chat: "1.5K" },
  { img: blogGridPic3, date: "20 Sep 2023", chat: "2.0K" },
  { img: blogGridPic4, date: "30 Nov 2023", chat: "3.5K" },
]);
</script>

<template>
  <Swiper
    class="swiper blog-swiper swiper-visible swiper-btn-lr"
    :slides-per-view="2"
    :space-between="30"
    :modules="[Navigation]"
    :speed="1200"
    :navigation="{
      prevEl: '.blog-button-prev',
      nextEl: '.blog-button-next',
    }"
    :breakpoints="{
      1024: { slidesPerView: 2 },
      240: { slidesPerView: 1 },
    }"
  >
    <SwiperSlide class="swiper-slide" v-for="(item, ind) in blog" :key="ind">
      <div
        class="dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp"
      >
        <div class="dz-media">
          <RouterLink to="/blog-standard"
            ><img :src="item.img" alt="/"
          /></RouterLink>
        </div>
        <div class="dz-info">
          <div class="dz-meta">
            <ul>
              <li>
                <a href="javascript:void(0);"
                  ><i class="flaticon-calendar-date"></i>{{ item.date }}</a
                >
              </li>
              <li class="dz-comment">
                <a href="javascript:void(0);"
                  ><i class="flaticon-chat-bubble"></i> {{ item.chat }}
                </a>
              </li>
            </ul>
          </div>
          <h5 class="dz-title">
            <RouterLink to="/blog-standard"
              >Taste of Paradise Dishes</RouterLink
            >
          </h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have.
          </p>
          <div class="read-btn">
            <RouterLink to="/blog-standard" class="btn btn-primary btn-hover-2"
              >Read More</RouterLink
            >
          </div>
        </div>
      </div>
    </SwiperSlide>
    <div class="pagination mt-xl-0 m-t40">
      <div class="blog-button-prev btn-prev-long">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="blog-button-next btn-next-long">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </Swiper>
</template>
