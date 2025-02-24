<script setup>
import { ref } from "vue";
import shopPic1 from "../assets/images/shop/pic1.jpg";
import shopPic2 from "../assets/images/shop/pic2.jpg";
import shopPic3 from "../assets/images/shop/pic3.jpg";
import shopPic4 from "../assets/images/shop/pic4.jpg";

const searchResuilts = ref([
  { img: shopPic1, title: "Double Patty Burger", price: "$15.00", time: "30" },
  { img: shopPic2, title: "Chicken Patty Burger", price: "$10.00", time: "20" },
  { img: shopPic3, title: "Veg Cripsy Burger", price: "$25.00", time: "40" },
  { img: shopPic4, title: "Aloo Tikki Burger", price: "$05.00", time: "15" },
  { img: shopPic1, title: "Pure Veg Burger", price: "$35.00", time: "55" },
  { img: shopPic2, title: "Chicken Burger", price: "$45.00", time: "25" },
]);
</script>

<template>
  <div
    class="dz-shop-card style-1"
    v-for="(item, ind) in searchResuilts"
    :key="ind"
  >
    <div class="dz-media">
      <img :src="item.img" alt="/" />
    </div>
    <div class="dz-content">
      <div class="dz-head">
        <h6 class="dz-name mb-0">
          <svg
            class="m-r10"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
            <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
          </svg>
          <a
            href="javascript:void(0);"
            data-bs-toggle="modal"
            data-bs-target="#menuDetailModal"
            >{{ item.title }}</a
          >
        </h6>
        <div class="rate"><i class="fa-solid fa-star"></i> 4.5</div>
      </div>
      <div class="dz-body">
        <ul class="dz-meta">
          <li>
            By
            <span class="text-primary font-weight-500"> Burger Farm</span>
          </li>
          <li><i class="flaticon-scooter"></i>{{ item.time }} min</li>
        </ul>
        <p class="mb-0">
          <span class="text-primary font-weight-500">{{ item.price }}</span>
          For a one
        </p>
      </div>
    </div>
  </div>
</template>
