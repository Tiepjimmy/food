<script setup>
import { ref } from "vue";
import gridPic1 from "../assets/images/blog/grid3/pic7.jpg";
import gridPic2 from "../assets/images/blog/grid3/pic1.jpg";
import gridPic3 from "../assets/images/blog/grid3/pic4.jpg";
import gridPic4 from "../assets/images/blog/grid3/pic8.jpg";
import gridPic5 from "../assets/images/blog/grid3/pic9.jpg";
import gridPic6 from "../assets/images/blog/grid3/pic10.jpg";
import { RouterLink } from "vue-router";

let grid = ref([
  {
    img: gridPic1,
    data: "05 Dec 2023",
    chat: "5.5K",
    title: "Palate Pleaser Dishes",
  },
  {
    img: gridPic2,
    data: "03 Aug 2023",
    chat: "2.5K",
    title: "Savory Sensations",
  },

  { img: gridPic3, data: "09 Jan 2023", chat: "3.5K", title: "09 Jan 2023" },
  {
    img: gridPic4,
    data: "20 Nov 2023",
    chat: "4.0K",
    title: "Tabletop Treats Cheese",
  },
  {
    img: gridPic5,
    data: "16 Mar 2023",
    chat: "1.5K",
    title: "The Hungry Hunter",
  },
  {
    img: gridPic6,
    data: "26 Jan 2023",
    chat: "2.5K",
    title: "Paradise Taste of Dishes",
  },
]);
</script>

<template>
  <div class="row">
    <div class="col-lg-6 col-md-6" v-for="(item, ind) in grid" :key="ind">
      <div class="dz-card style-1 overlay-shine dz-img-effect zoom m-b30">
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
                  ><i class="flaticon-calendar-date"></i>{{ item.data }}</a
                >
              </li>
              <li class="dz-comment">
                <a href="javascript:void(0);"
                  ><i class="flaticon-chat-bubble"></i>{{ item.chat }}
                </a>
              </li>
            </ul>
          </div>
          <h5 class="dz-title">
            <RouterLink to="/blog-standard">{{ item.title }}</RouterLink>
          </h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have.
          </p>
          <RouterLink to="/blog-standard" class="btn btn-primary btn-hover-2"
            >Read More</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <div class="text-center m-t10">
    <ul class="pagination m-b15">
      <li class="page-item">
        <a class="page-link prev" href="javascript:void(0);"
          ><i class="fas fa-chevron-left"></i
        ></a>
      </li>
      <li class="page-item">
        <a class="page-link active" href="javascript:void(0);"
          ><span>1</span></a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0);"><span>2</span></a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0);"><span>3</span></a>
      </li>
      <li class="page-item">
        <a class="page-link next" href="javascript:void(0);"
          ><i class="fas fa-chevron-right"></i
        ></a>
      </li>
    </ul>
  </div>
</template>
