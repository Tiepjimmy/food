<script setup>
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr1.jpg";
import gridPic1 from "../assets/images/blog/grid3/pic1.jpg";
import gridPic2 from "../assets/images/blog/grid3/pic2.jpg";
import gridPic3 from "../assets/images/blog/grid3/pic3.jpg";
import gridPic4 from "../assets/images/blog/grid3/pic4.jpg";
import gridPic5 from "../assets/images/blog/grid3/pic5.jpg";
import gridPic6 from "../assets/images/blog/grid3/pic6.jpg";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

let showItem = ref([
  {
    img: gridPic1,
    title: "Paradise Taste of Dishes",
    data: "26 Jan 2023",
    chat: " 2.5K",
  },
  {
    img: gridPic2,
    title: "Taste of Paradise Dishes",
    data: "15 Feb 2023",
    chat: "1.5K",
  },
  {
    img: gridPic3,
    title: "The Fork & Knife",
    data: "10 Mar 2023",
    chat: "4.5k",
  },
  {
    img: gridPic4,
    title: "Flavors Of The World",
    data: "Flavors Of The World",
    chat: "1.0K",
  },
  {
    img: gridPic5,
    title: "Tabletop Treats Cheese",
    data: "Tabletop Treats Cheese",
    chat: "3.5K",
  },
  {
    img: gridPic6,
    title: "Palate Pleaser Dishes",
    data: "Palate Pleaser Dishes",
    chat: "5.0k",
  },
]);

function addNewItem() {
  for (let i = 0; i < 2; i++) {
    let randomImgnum = Math.floor(Math.random() * showItem.value.length);
    showItem.value.push({ img: showItem.value[randomImgnum].img });
  }
}
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Blog Grid 2" title="Blog Grid 2" />
    <section class="content-inner-1">
      <div class="min-container">
        <div class="row loadmore-content">
          <div
            class="col-lg-6 col-md-6"
            v-for="(item, ind) in showItem"
            :key="ind"
          >
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
                        ><i class="flaticon-calendar-date"></i
                        >{{ item.data }}</a
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
                  There are many variations of passages of Lorem Ipsum available
                  have.
                </p>
                <RouterLink
                  to="/blog-standard"
                  class="btn btn-primary btn-hover-2"
                  >Read More</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <div class="text-center m-t10" @click="addNewItem">
          <a
            class="btn btn-primary dz-load-more btn-hover-2"
            href="javascript:void(0);"
            >Load More</a
          >
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
