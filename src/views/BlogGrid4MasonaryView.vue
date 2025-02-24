<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr1.jpg";
import blogLargePic1 from "../assets/images/blog/large/pic1.jpg";
import GridCard from "../elements/GridCard.vue";
import gridPic1 from "../assets/images/blog/grid3/pic1.jpg";
import gridPic2 from "../assets/images/blog/grid3/pic2.jpg";
import gridPic3 from "../assets/images/blog/grid3/pic3.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const masonry = ref([{ img: gridPic3 }, { img: gridPic2 }, { img: gridPic1 }]);
</script>
<!-- https://www.youtube.com/watch?v=XJb1G9iRoL4 -->
<template>
  <div class="page-content bg-white">
    <Header4 />

    <CommonBanner
      :img="bgimg"
      heading="Blog Grid 3 Masonry"
      title="Blog Grid 3 Masonry"
    />
    <section class="content-inner">
      <div class="container-fluid clearfix">
        <div id="masonry">
          <GridCard :img="gridPic1" />
          <div class="card-container">
            <div class="dz-card style-1 m-b30">
              <Swiper
                class="service-swiper swiper"
                :modules="[Pagination, Navigation, Autoplay]"
                :navigation="{
                  prevEl: '.btn-prev',
                  nextEl: '.btn-next',
                }"
                :autoplay="{
                  delay: 1200,
                }"
                :speed="1500"
                :loop="true"
                :pagination="{
                  el: '.swiper-pagination',
                }"
              >
                <SwiperSlide
                  class="swiper-slide"
                  v-for="(item, ind) in masonry"
                  :key="ind"
                >
                  <img :src="item.img" alt="" />
                </SwiperSlide>
                <div class="swiper-pagination style-1"></div>
                <div class="service-button-prev btn-prev rounded-xl">
                  <i class="icon-arrow-left"></i>
                </div>
                <div class="service-button-next btn-next rounded-xl">
                  <i class="icon-arrow-right"></i>
                </div>
              </Swiper>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li>
                      <a href="javascript:void(0);"
                        ><i class="flaticon-calendar-date"></i> 20 Nov 2023</a
                      >
                    </li>
                    <li class="dz-comment">
                      <a href="javascript:void(0);"
                        ><i class="flaticon-chat-bubble"></i> 4.0K</a
                      >
                    </li>
                  </ul>
                </div>
                <h5 class="dz-title">
                  <RouterLink to="/blog-standard"
                    >Tabletop Treats Cheese</RouterLink
                  >
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <RouterLink
                  to="/blog-standard"
                  class="btn btn-primary btn-hover-2"
                  >Read More</RouterLink
                >
              </div>
            </div>
          </div>
          <GridCard :img="gridPic3" />
          <div class="card-container">
            <div class="dz-card style-1 m-b30">
              <Swiper
                :modules="[Autoplay, Pagination]"
                :loop="true"
                :autoplay="{
                  delay: 1500,
                }"
                :speed="1200"
                :pagination="{
                  el: '.swiper-pagination',
                }"
                class="service2-swiper swiper"
              >
                <SwiperSlide
                  class="swiper-slide"
                  v-for="(item, ind) in masonry"
                  :key="ind"
                >
                  <img :src="item.img" alt="" />
                </SwiperSlide>
                <div class="swiper-pagination style-1"></div>
              </Swiper>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li>
                      <a href="javascript:void(0);"
                        ><i class="flaticon-calendar-date"></i> 10 Mar 2023</a
                      >
                    </li>
                    <li class="dz-comment">
                      <a href="javascript:void(0);"
                        ><i class="flaticon-chat-bubble"></i> 1.0K
                      </a>
                    </li>
                  </ul>
                </div>
                <h5 class="dz-title">
                  <RouterLink to="/blog-standard">The Fork & Knife</RouterLink>
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <RouterLink
                  to="/blog-standard"
                  class="btn btn-primary btn-hover-2"
                  >Read More</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dz-card style-1 m-b30">
              <Swiper
                class="service-swiper swiper"
                :modules="[Navigation, Autoplay]"
                :navigation="{
                  prevEl: '.btn-prev',
                  nextEl: '.btn-next',
                }"
                :autoplay="{
                  delay: 1200,
                }"
                :speed="1500"
                :loop="true"
              >
                <SwiperSlide
                  class="swiper-slide"
                  v-for="(item, ind) in masonry"
                  :key="ind"
                >
                  <img :src="item.img" alt="" />
                </SwiperSlide>
                <div class="swiper-pagination style-1"></div>
                <div class="service-button-prev btn-prev rounded-xl">
                  <i class="icon-arrow-left"></i>
                </div>
                <div class="service-button-next btn-next rounded-xl">
                  <i class="icon-arrow-right"></i>
                </div>
              </Swiper>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li>
                      <a href="javascript:void(0);"
                        ><i class="flaticon-calendar-date"></i> 20 Nov 2023</a
                      >
                    </li>
                    <li class="dz-comment">
                      <a href="javascript:void(0);"
                        ><i class="flaticon-chat-bubble"></i> 4.0K</a
                      >
                    </li>
                  </ul>
                </div>
                <h5 class="dz-title">
                  <RouterLink to="/blog-standard"
                    >Tabletop Treats Cheese</RouterLink
                  >
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <RouterLink
                  to="/blog-standard"
                  class="btn btn-primary btn-hover-2"
                  >Read More</RouterLink
                >
              </div>
            </div>
          </div>
          <GridCard :img="gridPic1" />
          <div class="card-container">
            <div
              class="dz-card style-3 m-b30"
              :style="`background-image: url(${blogLargePic1})`"
            >
              <div class="dz-info">
                <h4 class="dz-title">
                  <RouterLink to="/blog-standard" class="text-white"
                    >Exploring the World of Pizza</RouterLink
                  >
                </h4>
                <div class="dz-meta">
                  <ul>
                    <li class="dz-date">14 Feb 2023</li>
                    <li class="dz-user">
                      <a href="javascript:void(0);"
                        ><i class="fa-solid fa-user"></i> By
                        <span>KK Sharma</span></a
                      >
                    </li>
                    <li class="dz-comment">
                      <a href="javascript:void(0);"
                        ><i class="fa-solid fa-message"></i> 15 Comments</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <GridCard :img="gridPic2" />

          <GridCard :img="gridPic1" />
          <div class="card-container">
            <blockquote class="wp-block-quote mt-0 m-b30">
              <p>
                Create An Information That’s Easy To Use Usability
                Considerations For Partially
              </p>
              <cite>Ronald M. Spino</cite>
            </blockquote>
          </div>
          <GridCard :img="gridPic2" />
          <div class="card-container">
            <div
              class="dz-card style-3 m-b30"
              :style="`background-image: url(${blogLargePic1})`"
            >
              <div class="dz-info">
                <h4 class="dz-title">
                  <RouterLink to="/blog-standard" class="text-white"
                    >Exploring the World of Pizza</RouterLink
                  >
                </h4>
                <div class="dz-meta">
                  <ul>
                    <li class="dz-date">14 Feb 2023</li>
                    <li class="dz-user">
                      <a href="javascript:void(0);"
                        ><i class="fa-solid fa-user"></i> By
                        <span>KK Sharma</span></a
                      >
                    </li>
                    <li class="dz-comment">
                      <a href="javascript:void(0);"
                        ><i class="fa-solid fa-message"></i> 15 Comments</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>

<style scoped>
#masonry {
  column-count: 4;
  gap: 30px;
}
@media screen and (max-width: 1170px) {
  #masonry {
    column-count: 3;
  }
}
@media screen and (max-width: 991px) {
  #masonry {
    column-count: 2;
  }
}

@media screen and (max-width: 775px) {
  #masonry {
    column-count: 1;
  }
}
</style>
