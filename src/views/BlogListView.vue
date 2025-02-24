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
  { img: gridPic1 },
  { img: gridPic2 },
  { img: gridPic3 },
  { img: gridPic4 },
  { img: gridPic5 },
  { img: gridPic6 },
]);

function addNewItem(e) {
  e.preventDefault();
  for (let i = 0; i < 2; i++) {
    let randomImgnum = Math.floor(Math.random() * showItem.value.length);
    showItem.value.push({ img: showItem.value[randomImgnum].img });
  }
}
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Blog List" title="Blog List" />
    <section class="content-inner">
      <div class="container clearfix">
        <div id="masonry" class="row">
          <div
            class="col-xl-6 col-lg-8"
            v-for="(item, ind) in showItem"
            :key="ind"
          >
            <div
              class="dz-card style-1 blog-half overlay-shine dz-img-effect zoom m-b30"
            >
              <div class="dz-media">
                <RouterLink to="/blog-standard"><img :src="item.img" alt="/" /></RouterLink>
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
                  <RouterLink to="/blog-standard">Paradise Taste of Dishes</RouterLink >
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
          <a
            @click="addNewItem"
            class="btn btn-primary dz-load-more btn-hover-2"
            href=""
            >Load More</a
          >
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
