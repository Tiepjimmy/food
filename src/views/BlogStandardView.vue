<script setup>
import { RouterLink } from "vue-router";
import BlogBanner from "../elements/BlogBanner.vue";
import Comments from "../elements/Comments.vue";
import Header5 from "../Layouts/Header5.vue";
import Footer4 from "../Layouts/Footer4.vue";
</script>

<template>
  <div class="page-content bg-white">
    <Header5 />
    <BlogBanner title="Blog Standard" />
    <section class="content-inner">
      <div class="min-container">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="blog-single dz-card sidebar">
              <div class="dz-media rounded-md">
                <img src="../assets/images/blog/detail/pic1.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <h1 class="title">Restaurant Has The Answer</h1>
                <div class="dz-meta">
                  <ul>
                    <li class="dz-user">
                      <a href="javascript:void(0);"
                        ><i class="flaticon-user"></i> By
                        <span>KK Sharma</span></a
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
                <div class="dz-post-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <ul>
                    <li>A wonderful serenity has taken possession.</li>
                    <li>
                      Of my entire soul, like these sweet mornings of spring
                      which.
                    </li>
                    <li>I enjoy with my whole heart.</li>
                    <li>
                      This spot, which was created For the bliss of souls like
                      mine.
                    </li>
                  </ul>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
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
            <Comments />
          </div>
        </div>
      </div>
      <Footer4 />
    </section>
  </div>
</template>
