<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr5.jpg";
import testimoniallargePic1 from "../assets/images/testimonial/large/pic1.jpg";
import testimoniallargePic2 from "../assets/images/testimonial/large/pic2.jpg";
import testimoniallargePic3 from "../assets/images/testimonial/large/pic3.jpg";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const showItem = ref([
  { img: testimoniallargePic1, name: "John Doe", direction: "left" },
  { img: testimoniallargePic2, name: "Carry Mint", direction: "right" },
  { img: testimoniallargePic3, name: "Sarah Albert", direction: "left" },
  { img: testimoniallargePic1, name: "John Doe", direction: "right" },
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
    <CommonBanner
      :img="bgimg"
      heading="Testimonial"
      title="Customer's Comment"
    />
    <section class="content-inner-1 overflow-hidden">
      <div class="container">
        <div
          class="row loadmore-content"
          v-for="(item, ind) in showItem"
          :key="ind"
        >
          <div
            class="col-lg-12 m-lg-b60 m-b30"
            v-if="item.direction === 'right'"
          >
            <div class="testimonial-2">
              <div class="dz-media">
                <img :src="item.img" alt="/" />
              </div>
              <div class="testimonial-detail">
                <div class="testimonial-text">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div class="testimonial-info">
                  <h5 class="testimonial-name">{{ item.name }}</h5>
                  <span class="testimonial-position">Food Expert</span>
                </div>
                <i class="flaticon-right-quote quote"></i>
              </div>
            </div>
          </div>

          <div
            class="col-lg-12 m-lg-b60 m-b30"
            v-if="item.direction === 'left'"
          >
            <div class="testimonial-2 right">
              <div class="testimonial-detail">
                <div class="testimonial-text">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div class="testimonial-info">
                  <h5 class="testimonial-name">{{ item.name }}</h5>
                  <span class="testimonial-position">Food Expert</span>
                </div>
                <i class="flaticon-right-quote quote"></i>
              </div>
              <div class="dz-media">
                <img :src="item.img" alt="/" />
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
