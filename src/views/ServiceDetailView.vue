<script setup>
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr2.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner
      :img="bgimg"
      heading="Services Detail"
      title="Services Detail"
    />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 order-lg-1 order-2">
            <aside class="side-bar left sticky-top">
              <div class="widget search-bx">
                <div class="widget-title">
                  <h5 class="title m-b30">Search</h5>
                </div>
                <form role="search" method="post">
                  <div class="input-group">
                    <div class="input-side">
                      <input
                        name="text"
                        class="form-control"
                        placeholder="Search"
                        type="text"
                      />
                      <div class="input-group-btn">
                        <button type="submit" class="btn btn-primary">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.58366 17.5001C13.9559 17.5001 17.5003 13.9557 17.5003 9.58342C17.5003 5.21116 13.9559 1.66675 9.58366 1.66675C5.21141 1.66675 1.66699 5.21116 1.66699 9.58342C1.66699 13.9557 5.21141 17.5001 9.58366 17.5001Z"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18.3337 18.3334L16.667 16.6667"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="widget recent-posts-entry">
                <div class="widget-title">
                  <h5 class="title m-b30">Recent Post</h5>
                </div>
                <div class="widget-post-bx style-1">
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <img
                        src="../assets/images/blog/recent-blog/pic4.jpg"
                        alt="/"
                      />
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">STANDARD</a>
                          </li>
                          <li class="date">
                            <a href="javascript:void(0);">Dec 10, 2023</a>
                          </li>
                        </ul>
                      </div>
                      <h6 class="title">
                        <RouterLink to="/blog-standard"
                          >Come Dine with Us!</RouterLink
                        >
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="widget-post-bx style-1">
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <img
                        src="../assets/images/blog/recent-blog/pic5.jpg"
                        alt="/"
                      />
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">STANDARD</a>
                          </li>
                          <li class="date">
                            <a href="javascript:void(0);">May 12, 2023</a>
                          </li>
                        </ul>
                      </div>
                      <h6 class="title">
                        <RouterLink to="/blog-standard"
                          >Take a Bite Out of Life</RouterLink
                        >
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget widget_categories">
                <div class="widget-title">
                  <h4 class="title">Categories</h4>
                </div>
                <ul>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">All Services</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Water</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard"
                      >Residental Cleaning</RouterLink
                    >
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Summer Pizza</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="/blog-standard">Free Support</RouterLink>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div class="col-lg-8 order-lg-2 order-1 m-b30">
            <div class="blog-single dz-card sidebar mb-0">
              <div class="dz-media rounded-md">
                <img src="../assets/images/blog/detail/pic2.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <h2 class="title">Delivery Services in Today's World</h2>
                <div class="dz-meta">
                  <ul>
                    <li class="dz-user">
                      <a href="javascript:void(0);"
                        ><i class="fa-solid fa-user"></i> By
                        <span>KK Sharma</span></a
                      >
                    </li>
                    <li class="dz-comment">
                      <a href="javascript:void(0);"
                        ><i class="fa-solid fa-message"></i> 24 Comments</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dz-post-text style-1">
                  <p class="m-b10">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <blockquote class="wp-block-quote style-1">
                  <i class="flaticon-right-quote quotes"></i>
                  <p>
                    Fragment collings mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat,
                  </p>
                  <cite>Ronald M. Spino</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
