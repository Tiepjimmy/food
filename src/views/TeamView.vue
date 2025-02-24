<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr3.jpg";
import teamPic1 from "../assets/images/team/pic1.jpg";
import teamPic2 from "../assets/images/team/pic2.jpg";
import teamPic3 from "../assets/images/team/pic3.jpg";
import teamPic4 from "../assets/images/team/pic4.jpg";
import teamPic5 from "../assets/images/team/pic5.jpg";
import teamPic6 from "../assets/images/team/pic6.jpg";
import teamPic7 from "../assets/images/team/pic7.jpg";
import teamPic8 from "../assets/images/team/pic8.jpg";
import teamPic9 from "../assets/images/team/pic9.jpg";
import teamPic10 from "../assets/images/team/pic10.jpg";
import teamPic11 from "../assets/images/team/pic11.jpg";
import teamPic12 from "../assets/images/team/pic12.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const teamSection = ref([
  { img: teamPic1 },
  { img: teamPic2 },
  { img: teamPic3 },
  { img: teamPic4 },
  { img: teamPic5 },
  { img: teamPic6 },
  { img: teamPic7 },
  { img: teamPic8 },
  { img: teamPic9 },
  { img: teamPic11 },
  { img: teamPic12 },
  { img: teamPic10 },
]);
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Team" title="Team" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-sm-6 m-b30"
            v-for="(item, ind) in teamSection"
            :key="ind"
          >
            <div class="dz-team style-1">
              <div class="dz-media">
                <img :src="item.img" alt="/" />
              </div>
              <div class="dz-content">
                <div class="clearfix">
                  <h6 class="dz-name">
                    <RouterLink to="/team-detail">Sarah Albert</RouterLink>
                  </h6>
                  <span class="dz-position">Senior Chef</span>
                </div>
                <ul class="team-social">
                  <li>
                    <a class="share-btn" href="javascript:void(0);"
                      ><i class="flaticon-share"></i
                    ></a>
                    <ul class="sub-team-social">
                      <li>
                        <a
                          class="fb-btn"
                          href="https://www.facebook.com/"
                          target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="tw-btn"
                          href="https://twitter.com/"
                          target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="in-btn"
                          href="https://www.instagram.com/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="lin-btn"
                          href="https://www.linkedin.com/"
                          target="_blank"
                          ><i class="fa-brands fa-linkedin-in"></i
                        ></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
