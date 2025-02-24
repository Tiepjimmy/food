<script setup>
import {computed, onBeforeMount, ref, watch} from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Grid,
  FreeMode,
  Thumbs,
  Navigation,
  EffectFade,
  Pagination,
} from "swiper/modules";
import testimonialSmallpic1 from "../assets/images/testimonial/small/pic1.jpg";
import testimonialSmallpic2 from "../assets/images/testimonial/small/pic2.jpg";
import testimonialSmallpic3 from "../assets/images/testimonial/small/pic3.jpg";
import testimonialSmallpic4 from "../assets/images/testimonial/small/pic4.jpg";
import testimonialSmallpic5 from "../assets/images/testimonial/small/pic5.jpg";
import testimonialSmallpic6 from "../assets/images/testimonial/small/pic6.jpg";

import ApiService from "@/core/services/ApiService";

const testimonialArr = ref([
  { img: testimonialSmallpic1, name: "John Doe", skill: "Food Expert" },
  { img: testimonialSmallpic2, name: "Jolly Roy", skill: "Food Tester" },
  { img: testimonialSmallpic3, name: "Thomas Hed", skill: "Food Expert" },
  { img: testimonialSmallpic4, name: "Kally Mint", skill: "Food Expert" },
  { img: testimonialSmallpic5, name: "Ronny joy", skill: "Assistant" },
  { img: testimonialSmallpic6, name: "Dolly kom", skill: "Food Expert" },
]);
const modules = [FreeMode, Navigation, Thumbs, EffectFade, Pagination, Grid];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const getData = async () => {
  try {
    const response = await ApiService.get('/v1');
    this.data = response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
}
onBeforeMount(() => {
  getData();
  console.log('First onBeforeMount');
});

onBeforeMount(() => {
  console.log('Second onBeforeMount');
});


</script>
<template>
  <div class="row gx-0 wow fadeInUp">
    <div class="col-lg-7 col-md-12">
      <div class="swiper testimonial-one-thumb">
        <Swiper
          class="swiper-wrapper"
          @swiper="setThumbsSwiper"
          :slides-per-view="3"
          :modules="modules"
          :grid="{ rows: 2 }"
        >
          <SwiperSlide
            class="swiper-slide"
            v-for="(item, ind) in testimonialArr"
            :key="ind"
          >
            <img :src="item.img" alt="/" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="col-lg-5 col-md-12">
      <div class="swiper testimonial-one-swiper h-100">
        <Swiper
          class="swiper-wrapper"
          :modules="modules"
          :thumbs="{ swiper: thumbsSwiper }"
          :free-mode="true"
          :watchSlidesProgress="true"
          :speed="1200"
        >
          <SwiperSlide
            class="swiper-slide"
            v-for="(item, ind) in testimonialArr"
            :key="ind"
          >
            <div class="testimonial-1">
              <div class="testimonial-text">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
              <div class="testimonial-info">
                <h5 class="testimonial-name">{{ item.name }}</h5>
                <span class="testimonial-position">{{ item.skill }}</span>
              </div>
              <i class="flaticon-right-quote quote"></i>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
