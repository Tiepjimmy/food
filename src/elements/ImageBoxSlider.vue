<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import {defineComponent, onBeforeMount, ref} from "vue";
import { Navigation } from "swiper/modules";
import { RouterLink } from "vue-router";
import ApiService from "@/core/services/ApiService";
import gallerySmallPic1 from "@/assets/images/pic3-3cd8c92c.png";
import cartStore from "@/stores/stateCarlItem";





export default defineComponent({
  name: "todays-menu",
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  setup() {

    const Navigations = ref(Navigation);

    const carousel = ref();

    const getProduct = async () => {
      try {
        const response = await ApiService.get('menuDate/listAll');
        if (response.status === 200)  {
          carousel.value = response?.data?.data?.map((item) => {
            return {
              ...item,
              img: gallerySmallPic1,
              name: item?.menuResponse?.menuName,
              price: item?.menuResponse?.price,
              shortDescription: item?.menuResponse?.shortDescription,
            };
          });
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
    }

    const addToCart = (product) => {
      cartStore.addToCart(product)
    }

    onBeforeMount(() => {
      getProduct();
    });

    return {
      carousel,
      Navigations,
      addToCart
    };
  },
});




</script>

<template>
  <div class="swiper-btn-lr">
    <div class="swiper portfolio-swiper">
      <Swiper
        class="swiper-wrapper"
        :slides-per-view="4"
        :space-between="30"
        :modules="[Navigations]"
        :speed="1200"
        :navigation="{
          prevEl: '.btn-prev-long',
          nextEl: '.btn-next-long',
        }"
        :breakpoints="{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 4 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="(item, ind) in carousel"
          :key="ind"
        >
          <div class="dz-img-box style-1 wow fadeInUp">
            <div class="dz-media">
              <img :src="item.img" alt="/" />
            </div>
            <span class="dz-tag">TOP SELLER</span>
            <div class="dz-content">
              <div class="dz-info">
                <h5 class="dz-title mb-0">
                  <RouterLink to="/our-menu-1">{{ item.name }}</RouterLink>
                </h5>
                <span class="dz-price">{{ item.price }}</span>
              </div>
              <div @click="addToCart(item)"
                class="btn btn-cart btn-white text-primary btn-square"
                ><i class="flaticon-shopping-cart"></i
              ></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="pagination mt-xl-0 m-t40">
      <div class="img-button-prev btn-prev-long">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="img-button-next btn-next-long">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
