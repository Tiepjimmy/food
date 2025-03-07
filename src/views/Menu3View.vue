<script lang="ts">
import {defineComponent, onBeforeMount, ref} from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import SideFilter from "../elements/SideFilter.vue";
import bgimg from "../assets/images/banner/bnr3.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";
import SearchResuiltRightContent from "@/elements/SearchResuiltRightContent.vue";
import Header from "@/Layouts/Header.vue";
import cartStore from "@/stores/stateCarlItem";
import ApiService from "@/core/services/ApiService";
import gallerySmallPic1 from "@/assets/images/pic3-3cd8c92c.png";



export default defineComponent({
  name: "menu-3-view",
  components: {
    CommonBanner,
    SideFilter,
    SearchResuiltRightContent,
    RouterLink,
    Header4,
    Header,
    Footer4,
  },
  setup() {

    const buttons = ref([
      { icon: "flaticon-fast-food", name: "ALL" },
      { icon: "flaticon-cocktail", name: "COLD DRINK" },
      { icon: "flaticon-pizza-slice", name: "PIZZA" },
      { icon: "flaticon-salad", name: "SALAD" },
      { icon: "flaticon-cupcake", name: "SWEETS" },
      { icon: "flaticon-chili-pepper", name: "SPICY" },
      { icon: "flaticon-hamburger-1", name: "BURGER" },
    ]);

    let galleryList = ref([]);
    const addClass = ref(0);

    const filterButton = (el, name) => {
      let gallery = galleryList.value;
      addClass.value = el;
      let updateItem = gallery.filter((ell) => {
        return ell.categery.includes(name);
      });

      galleryList = updateItem;
      if (name === "ALL") {
        galleryList = gallery;
      }
    };

    const getProduct = async () => {
      try {
        const response = await ApiService.get('menuDate/listAll');
        if (response.status === 200)  {
          galleryList.value = response?.data?.data?.map((item) => {
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

    onBeforeMount(() => {
      getProduct();
    });

    return {
      buttons,
      galleryList,
      bgimg,
      addClass,
      filterButton,
    }
  },
});

</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Our Menu 3" title="Our Menu 3" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 col-lg-9 col-md-12">
            <div class="site-filters style-1 clearfix">
              <ul class="filters" data-bs-toggle="buttons">
                <li
                  data-filter=".All"
                  :class="`btn ${addClass === ind ? 'active' : ''}`"
                  v-for="(item, ind) in buttons"
                  :key="ind"
                >
                  <a
                    href="javascript:void(0);"
                    @click="filterButton(ind, item.name)"
                    ><span><i :class="item.icon"></i></span>{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <SideFilter />
        </div>
        <ul id="masonry" class="row">
          <li
            class="card-container col-lg-4 col-md-6 m-b30"
            v-for="(item, ind) in galleryList"
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
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <span class="price">{{ item.price }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
