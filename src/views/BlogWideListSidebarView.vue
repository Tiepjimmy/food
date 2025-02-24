<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr5.jpg";
import BlogLeftContent from "../elements/BlogLeftContent.vue";
import gridPic1 from "../assets/images/blog/grid/pic1.jpg";
import gridPic2 from "../assets/images/blog/grid/pic2.jpg";
import gridPic3 from "../assets/images/blog/grid/pic3.jpg";
import gridPic4 from "../assets/images/blog/grid/pic4.jpg";
import gridPic5 from "../assets/images/blog/grid/pic5.jpg";
import gridPic6 from "../assets/images/blog/grid/pic6.jpg";
import gridPic7 from "../assets/images/blog/grid/pic7.jpg";
import gridPic8 from "../assets/images/blog/grid/pic8.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const grid = ref([
  {
    img: gridPic1,
    title: "Paradise Taste of Dishes",
    chat: "2.5k",
    data: "26 Jan 2023",
  },
  {
    img: gridPic2,
    title: "Taste of Paradise Dishes",
    chat: "2.5k",
    data: "7 Mar 2023",
  },
  {
    img: gridPic3,
    title: "The Fork & Knife",
    chat: "2.2k",
    data: "26 Jan 2023",
  },
  {
    img: gridPic4,
    title: "Flavors Of The World",
    chat: "1.5k",
    data: "9 Feb 2023",
  },
  {
    img: gridPic5,
    title: "Paradise Taste of Dishes",
    chat: "1.2k",
    data: " 15 Jan 2023",
  },
  {
    img: gridPic6,
    title: "Tabletop Treats Cheese",
    chat: "2.7k",
    data: " 20 Dec 2023",
  },
  {
    img: gridPic7,
    title: "Elevate Taste With Eggs",
    chat: "2.9k",
    data: " 09 Apr 2023",
  },
  {
    img: gridPic8,
    title: "Paneer Tikka Vegetables",
    chat: "2.0k",
    data: "10 Jun 2023",
  },
]);
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner
      :img="bgimg"
      heading="Blog Wide List Sidebar"
      title="Blog Wide List Sidebar"
    />
    <section class="content-inner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-9 col-lg-8 m-b30">
            <div class="row loadmore-content">
              <div
                class="col-xl-6 col-lg-12"
                v-for="(item, ind) in grid"
                :key="ind"
              >
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
                            ><i class="flaticon-calendar-date"></i>
                            {{ item.data }}</a
                          >
                        </li>
                        <li class="dz-comment">
                          <a href="javascript:void(0);"
                            ><i class="flaticon-chat-bubble"></i
                            >{{ item.chat }}</a
                          >
                        </li>
                      </ul>
                    </div>
                    <h5 class="dz-title">
                      <RouterLink to="/blog-standard">{{ item.title }}</RouterLink >
                    </h5>
                    <p>There are many variations of passages of Lorem Ipsum.</p>
                    <div class="read-btn">
                      <RouterLink
                        to="/blog-standard"
                        class="btn btn-primary btn-hover-2"
                        >Read More</RouterLink
                      >
                    </div>
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
                  <a class="page-link" href="javascript:void(0);"
                    ><span>2</span></a
                  >
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);"
                    ><span>3</span></a
                  >
                </li>
                <li class="page-item">
                  <a class="page-link next" href="javascript:void(0);"
                    ><i class="fas fa-chevron-right"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4">
            <aside class="side-bar sticky-top">
              <BlogLeftContent />
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
