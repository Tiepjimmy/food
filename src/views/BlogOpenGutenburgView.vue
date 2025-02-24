<script setup>
import { ref } from "vue";
import Comments from "../elements/Comments.vue";
import blogPic3 from "../assets/images/blog/detail/pic3.jpg";
import blogPic4 from "../assets/images/blog/detail/pic4.jpg";
import blogPic5 from "../assets/images/blog/detail/pic5.jpg";
import blogPic6 from "../assets/images/blog/detail/pic6.jpg";
import blogPic7 from "../assets/images/blog/detail/pic7.jpg";
import BlogBanner from "../elements/BlogBanner.vue";
import { RouterLink } from "vue-router";
import Footer4 from "../Layouts/Footer4.vue";
import Header5 from "../Layouts/Header5.vue";

const blog = ref([
  { img: blogPic3 },
  { img: blogPic4 },
  { img: blogPic5 },
  { img: blogPic6 },
  { img: blogPic7 },
]);
</script>

<template>
  <div class="page-content bg-white">
    <Header5 />
    <BlogBanner title="Blog Detail Left Sidebar" />

    <div class="content-inner overflow-hidden">
      <div class="min-container">
        <!-- blog start -->
        <div class="blog-single dz-card">
          <div class="post-header">
            <h1 class="dz-title">
              Uncovering Taste of Tradition & Celebrating Timeless Recipes
            </h1>
            <div class="dz-meta">
              <ul>
                <li class="dz-user">
                  <a href="javascript:void(0);"
                    ><i class="flaticon-user"></i> By <span>KK Sharma</span></a
                  >
                </li>
                <li class="dz-date">
                  <a href="javascript:void(0);"
                    ><i class="flaticon-calendar-date"></i> 26 Jan 2023</a
                  >
                </li>
                <li class="dz-comment">
                  <a href="javascript:void(0);"
                    ><i class="flaticon-chat-bubble"></i> 2.5K
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dz-media alignfullwide">
            <img src="../assets/images/background/pic20.png" alt="/" />
          </div>
          <div class="dz-info">
            <div class="dz-post-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <blockquote class="wp-block-quote">
                <p>
                  Create An Information Architecture That’s Easy To Use Way
                  Precise Usability Considerations For Partially
                </p>
                <cite>Ronald M. Spino</cite>
                <i class="flaticon-right-quote quotes"></i>
              </blockquote>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <figure
                class="wp-container-5 wp-block-gallery-3 wp-block-gallery has-nested-images columns-3 is-cropped alignwide"
              >
                <figure
                  class="wp-block-image size-large"
                  v-for="(item, index) in blog"
                  :key="index"
                >
                  <img :src="item.img" alt="/" />
                </figure>
              </figure>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <div class="alignfullwide">
                <img src="../assets/images/background/pic21.png" alt="/" />
              </div>

              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <div class="author-box m-b30">
                <div class="author-profile-info">
                  <div class="author-profile-pic">
                    <img
                      src="../assets/images/blog/detail/author.jpg"
                      alt="/"
                    />
                  </div>
                  <div class="author-profile-content">
                    <h6>I am John Doe</h6>
                    <p>I am a Senior Chief in London</p>
                    <img
                      src="../assets/images/blog/detail/signing.png"
                      alt="/"
                    />
                    <ul class="social-icon m-b0">
                      <li>
                        <a
                          href="https://www.facebook.com/dexignzone"
                          target="_blank"
                        >
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/dexignzone/"
                          target="_blank"
                        >
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/dexignzones"
                          target="_blank"
                        >
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.behance.net/dexignzone"
                          target="_blank"
                        >
                          <i class="fa-brands fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <ul>
                <li>A wonderful serenity has taken possession.</li>
                <li>
                  Of my entire soul, like these sweet mornings of spring which.
                </li>
                <li>I enjoy with my whole heart.</li>
                <li>
                  This spot, which was created For the bliss of souls like mine.
                </li>
              </ul>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="dz-share-post">
              <div class="post-tags">
                <h6 class="font-14 m-b0 m-r10 d-inline">Tags:</h6>
                <RouterLink to="/product-detail">Pizza Veronese</RouterLink>
                <RouterLink to="/product-detail">Chicken</RouterLink>
                <RouterLink to="/product-detail">Pizza</RouterLink>
                <RouterLink to="/product-detail">Burger</RouterLink>
                <RouterLink to="/product-detail">Sandwich</RouterLink>
              </div>
              <div class="dz-social-icon">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-sm text-primary"
                      href="https://www.facebook.com/"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-sm text-primary"
                      href="https://twitter.com/"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-sm text-primary"
                      href="https://www.instagram.com/"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-sm text-primary"
                      href="https://www.linkedin.com/"
                    >
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Comments />
        <!-- blog END -->
      </div>
    </div>
    <Footer4 />
  </div>
</template>
