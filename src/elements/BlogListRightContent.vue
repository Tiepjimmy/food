<script setup>
import { ref } from "vue";
import gridPic1 from "../assets/images/blog/grid/pic1.jpg";
import gridPic2 from "../assets/images/blog/grid/pic2.jpg";
import gridPic3 from "../assets/images/blog/grid/pic3.jpg";
import gridPic4 from "../assets/images/blog/grid/pic4.jpg";
import gridPic5 from "../assets/images/blog/grid/pic5.jpg";
import gridPic6 from "../assets/images/blog/grid/pic6.jpg";
import { RouterLink } from "vue-router";

const grid = ref([
  { img: gridPic1 },
  { img: gridPic2 },
  { img: gridPic3 },
  { img: gridPic4 },
  { img: gridPic5 },
  { img: gridPic6 },
]);

const addItem = (e) => {
  e.preventDefault();
  for (let i = 0; i < 2; i++) {
    let num = Math.floor(Math.random() * grid.value.length);
    grid.value.push({ img: grid.value[num].img });
  }
};
</script>

<template>
  <div class="row loadmore-content">
    <div class="col-xl-12 col-lg-12" v-for="(item, ind) in grid" :key="ind">
      <div
        class="dz-card style-1 blog-half overlay-shine dz-img-effect zoom m-b30"
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
                  ><i class="flaticon-calendar-date"></i> 26 Jan 2023</a
                >
              </li>
              <li class="dz-comment">
                <a href="javascript:void(0);"
                  ><i class="flaticon-chat-bubble"></i> 2.5K</a
                >
              </li>
            </ul>
          </div>
          <h5 class="dz-title">
            <RouterLink to="/blog-standard"
              >Paradise Taste of Dishes</RouterLink
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
    </div>
  </div>
  <div class="text-center m-t10">
    <a @click="addItem" class="btn btn-primary dz-load-more btn-hover-2" href="javascript:void(0)"
      >Load More</a
    >
  </div>
</template>
