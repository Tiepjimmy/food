<script setup>
import bgimg from "../assets/images/banner/bnr4.jpg";
import CommonBanner from "../elements/CommonBanner.vue";
import galleryGridPic1 from "../assets/images/gallery/grid5/pic1.jpg";
import galleryGridPic2 from "../assets/images/gallery/grid5/pic5.jpg";
import galleryGridPic3 from "../assets/images/gallery/grid5/pic7.jpg";
import galleryGridPic4 from "../assets/images/gallery/grid5/pic4.jpg";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const galleryGrid = ref([
  { img: galleryGridPic1, name: "Sweet Cake" },
  { img: galleryGridPic2, name: "Chiken" },
  { img: galleryGridPic3, name: "Salad" },
  { img: galleryGridPic4, name: "Burger   " },
]);

const progress = ref([
  { skill: "Skills", width: "60%" },
  { skill: "Signature Dishes", width: "85%" },
  { skill: "Customer Satisfied", width: "95%" },
  { skill: "Communication Skills", width: "75%" },
]);

const links = ref([
  { link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
  { link: "https://twitter.com/", icon: "fab fa-twitter" },
  { link: "https://www.youtube.com/", icon: "fa-brands fa-youtube" },
  { link: "https://www.instagram.com/", icon: "fab fa-instagram" },
  { link: "https://www.linkedin.com/feed/", icon: "fa-brands fa-linkedin" },
]);
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Team Detail" title="Team Detail" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="team-detail">
              <div class="dz-media rounded-md">
                <img src="../assets/images/team/detail/pic1.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="head">
                  <h2 class="title">John Doe</h2>
                  <span class="sub-title text-primary">Restaurant Chef</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <ul class="team-info">
                  <li><strong>Responsibility:</strong>Senior Chef</li>
                  <li><strong>Experience:</strong>10 Year</li>
                  <li><strong>Email:</strong>Example@gmail.com</li>
                  <li><strong>Phone:</strong>+22 33 56 7675 8939</li>
                </ul>
                <div class="dz-social-icon">
                  <ul>
                    <li v-for="(item, ind) in links" :key="ind">
                      <a
                        target="_blank"
                        class="btn-md text-dark"
                        :href="item.link"
                      >
                        <i :class="item.icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="team-bio">
              <h4 class="m-b10">Biography</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
            <div class="row">
              <div class="col-xl-5 col-lg-6 m-b10">
                <h4 class="m-b15">Signature Dish</h4>
                <ul class="dish-gallery gallery-grid-2">
                  <li v-for="(item, ind) in galleryGrid" :key="ind">
                    <RouterLink to="/product-detail">
                      <div class="gallery-box-1">
                        <img :src="item.img" alt="/" />
                        <span class="category">{{ item.name }}</span>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="col-xl-7 col-lg-6 m-b30">
                <div class="team-skills">
                  <h4 class="m-b10">Professional Skills</h4>
                  <p class="m-b15">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div
                    class="progress-bx style-1"
                    v-for="(item, ind) in progress"
                    :key="ind"
                  >
                    <h6 class="progress-label">
                      {{ item.skill }}
                      <span class="pull-end">{{ item.width }}</span>
                    </h6>
                    <div class="progress primary rounded-md m-b20">
                      <div
                        class="progress-bar rounded-md"
                        :style="`width: ${item.width}`"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
