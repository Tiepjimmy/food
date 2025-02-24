<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "@/assets/images/banner/bnr5.jpg";
import smallPic1 from "@/assets/images/gallery/small/pic1.jpg";
import smallPic2 from "@/assets/images/gallery/small/pic2.jpg";
import smallPic3 from "@/assets/images/gallery/small/pic3.jpg";
import smallPic4 from "@/assets/images/gallery/small/pic4.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const shopList = ref([
  { img: smallPic1, title: "Cheese Pizza", price: "$35.00" },
  { img: smallPic2, title: "Fried Rice", price: "$28.00" },
  { img: smallPic3, title: "Green Salad", price: "$15.00" },
  { img: smallPic4, title: "Butterfly Pasta", price: "$55.00" },
]);
</script>

<template>
  <div class="page-content bg-white">
    
    <Header4 />
    <CommonBanner :img="bgimg" heading="Shop Wishlist" title="Shop Wishlist" />
    <div class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 m-b30">
            <div class="table-responsive">
              <table class="table check-tbl table-responsive-md">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Add to cart</th>
                    <th class="text-end">Close</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, ind) in shopList" :key="ind">
                    <td class="product-item-img">
                      <img :src="item.img" alt="/" />
                    </td>
                    <td class="product-item-name">{{ item.title }}</td>
                    <td class="product-item-price">{{ item.price }}</td>
                    <td class="product-item-totle">
                      <RouterLink to="/shop-cart" class="btn btn-gray btn-hover-2"
                        >Add To Cart</RouterLink
                      >
                    </td>
                    <td class="product-item-close">
                      <a href="javascript:void(0);" class="bg-danger">
                        <i class="fa fa-close"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer4 />
  </div>
</template>
