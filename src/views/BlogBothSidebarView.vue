<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import BlogLeftContent from "../elements/BlogLeftContent.vue";
import bgimg from "../assets/images/banner/bnr1.jpg";
import blogPic1 from "@/assets/images/blog/recent-blog/pic1.jpg";
import blogPic2 from "@/assets/images/blog/recent-blog/pic2.jpg";
import blogPic3 from "@/assets/images/blog/recent-blog/pic3.jpg";
import gridPic1 from "@/assets/images/blog/grid3/pic7.jpg";
import gridPic2 from "@/assets/images/blog/grid3/pic1.jpg";
import gridPic3 from "@/assets/images/blog/grid3/pic4.jpg";
import gridPic4 from "@/assets/images/blog/grid3/pic8.jpg";
import gridPic5 from "@/assets/images/blog/grid3/pic9.jpg";
import gridPic6 from "@/assets/images/blog/grid3/pic10.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const post = [
  { img: blogPic1, date: "20 May, 2023", title: "Explore the Food Taste" },
  { img: blogPic2, date: "10 Dec, 2023", title: "Delicious Food Secret" },
  { img: blogPic3, date: "05 Jan, 2023", title: " Inspiration for Food" },
];

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
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner
      :img="bgimg"
      heading="Blog Both Sidebar"
      title="Blog Both Sidebar"
    />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-3 col-lg-5 col-md-6 m-b30 order-lg-1 order-sm-2 order-2"
          >
            <aside class="side-bar sticky-top left">
              <div class="widget recent-posts-entry">
                <div class="widget-title">
                  <h4 class="title">Latest Post</h4>
                </div>
                <div class="widget-post-bx">
                  <div
                    class="widget-post clearfix"
                    v-for="(item, ind) in post"
                    :key="ind"
                  >
                    <div class="dz-media">
                      <img :src="item.img" alt="/" />
                    </div>
                    <div class="dz-info">
                      <h6 class="title">
                        <RouterLink to="/blog-standard">{{
                          item.title
                        }}</RouterLink>
                      </h6>
                      <div class="dz-meta">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">
                              <i class="flaticon-calendar-date"></i>
                              {{ item.date }}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget widget_categories mb-3">
                <div class="widget-title">
                  <h4 class="title">Categories</h4>
                </div>
                <ul>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Pepperoni Pizza</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Apricot Chicken</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Pizza Veronese</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Summer Pizza</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Italian Tuna</RouterLink>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div class="col-xl-6 col-lg-7 col-md-12 m-b30 order-lg-2 order-sm-1">
            <div class="row">
              <div
                class="col-xl-12 col-lg-12"
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
                      <RouterLink to="/blog-standard">{{
                        item.title
                      }}</RouterLink>
                    </h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have.
                    </p>
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
          <div
            class="col-xl-3 col-lg-5 col-md-6 m-b30 order-lg-3 order-sm-2 d-lg-none d-xl-block"
          >
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
