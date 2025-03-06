<script setup>
import {onBeforeMount, ref} from "vue";
import gallerySmallPic1 from "../assets/images/pic3-3cd8c92c.png";
import gallerySmallPic2 from "../assets/images/pic3-3cd8c92c.png";
import gallerySmallPic3 from "../assets/images/pic3-3cd8c92c.png";
import gallerySmallPic4 from "../assets/images/pic3-3cd8c92c.png";
import {RouterLink} from "vue-router";
import ApiService from "@/core/services/ApiService";
import cartStore from "@/stores/stateCarlItem";

//   { img: gallerySmallPic3, price: "$45.0", name: "Green Salad" },

const menuBlog = ref([]);

const getProduct = async () => {
  try {
    const response = await ApiService.get('menuDate/listAll');
    if (response.status === 200) {
      menuBlog.value = response?.data?.data?.map((item) => {
        return {
          ...item,
          img: gallerySmallPic1,
          id: item?.menuResponse?.id,
          name: item?.menuResponse?.menuName,
          price: item?.menuResponse?.price,
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
const addActive = ref(1);

</script>

<template>
  <div class="row">
    <div
        class="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp"
        v-for="(item, ind) in menuBlog"
        :key="ind"
    >
      <div
          @mouseenter="addActive = ind"
          :class="`dz-img-box style-2 box-hover ${
          addActive === ind ? 'active' : ''
        }`"
      >
        <div class="dz-media">
          <img :src="item.img" alt="/"/>
        </div>
        <div class="dz-content">
          <h4 class="dz-title">
            <RouterLink to="/product-detail">{{ item.name }}</RouterLink>
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          <h5 class="dz-price text-primary">{{ item.price }}</h5>
          <div @click="addToCart(item)" class="btn btn-primary btn-hover-2"
          >Add To Cart
          </div
          >
        </div>
      </div>
    </div>
  </div>
</template>
