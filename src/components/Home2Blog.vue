<script setup>
import { RouterLink } from "vue-router";
import largePic1 from "../assets/images/blog/large/pic1.jpg";
</script>

<template>
  <div class="col-xl-7 col-lg-12">
    <div class="section-head">
      <h2 class="title wow flipInX">Recent News & Updates</h2>
    </div>
    <div class="dz-card style-2 blog-half wow fadeInUp m-b30">
      <div class="dz-media">
        <RouterLink to="/blog-standard"
          ><img src="../assets/images/blog/grid2/pic1.jpg" alt="/"
        /></RouterLink>
        <div class="dz-date">12 Feb 2023</div>
      </div>
      <div class="dz-info">
        <h4 class="dz-title">
          <RouterLink to="/blog-standard"
            >Chill Out with These Refreshing</RouterLink
          >
        </h4>
        <div class="dz-meta">
          <ul>
            <li class="dz-user">
              <a href="javascript:void(0);"
                ><i class="fa-solid fa-user"></i> By <span>RK Gupta</span></a
              >
            </li>
            <li class="dz-comment">
              <a href="javascript:void(0);"
                ><i class="fa-solid fa-message"></i> 10 Comments</a
              >
            </li>
          </ul>
        </div>
        <div class="btn-wrapper p-t10">
          <RouterLink to="/blog-standard" class="btn btn-primary btn-hover-2"
            >Read More</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="dz-card style-2 blog-half wow fadeInUp m-b30">
      <div class="dz-media">
        <RouterLink to="/blog-standard"
          ><img src="../assets/images/blog/grid2/pic2.jpg" alt="/"
        /></RouterLink>
        <div class="dz-date">24 Feb 2023</div>
      </div>
      <div class="dz-info">
        <h4 class="dz-title">
          <RouterLink to="/blog-standard"
            >Taste Excitement: A Sneak Peek into the</RouterLink
          >
        </h4>
        <div class="dz-meta">
          <ul>
            <li class="dz-user">
              <a href="javascript:void(0);"
                ><i class="fa-solid fa-user"></i> By <span>KK Sharma</span></a
              >
            </li>
            <li class="dz-comment">
              <a href="javascript:void(0);"
                ><i class="fa-solid fa-message"></i> 24 Comments</a
              >
            </li>
          </ul>
        </div>
        <div class="btn-wrapper p-t10">
          <RouterLink to="/blog-standard" class="btn btn-primary btn-hover-2"
            >Read More</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-5 col-lg-12 m-b30 wow fadeInUp">
    <div
      class="dz-card style-3 dz-card-large"
      :style="`background-image: url(${largePic1})`"
    >
      <video autoplay loop muted>
        <source src="../assets/video/video.mp4" type="video/mp4" />
      </video>
      <div class="dz-info">
        <h3 class="dz-title">
          <RouterLink to="/blog-standard" class="text-white"
            >Exploring the World of Pizza</RouterLink
          >
        </h3>
        <div class="dz-meta">
          <ul>
            <li class="dz-date">14 Feb 2023</li>
            <li class="dz-user">
              <a href="javascript:void(0);"
                ><i class="fa-solid fa-user"></i> By <span>KK Sharma</span></a
              >
            </li>
            <li class="dz-comment">
              <a href="javascript:void(0);"
                ><i class="fa-solid fa-message"></i> 15 Comments</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
