<script setup>
import { RouterLink } from "vue-router";

defineProps({
  img: String,
  title: String,
  date: String,
  chat: String,
});
</script>

<template>
  <div class="card-container">
    <div class="dz-card style-1 overlay-shine dz-img-effect zoom m-b30">
      <div class="dz-media">
        <RouterLink to="/blog-standard"><img :src="img" alt="/" /></RouterLink>
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
                ><i class="flaticon-chat-bubble"></i> 2.5K
              </a>
            </li>
          </ul>
        </div>
        <h5 class="dz-title">
          <RouterLink to="/blog-standard">Paradise Taste of Dishes</RouterLink>
        </h5>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have.
        </p>
        <RouterLink to="/blog-standard" class="btn btn-primary btn-hover-2"
          >Read More</RouterLink
        >
      </div>
    </div>
  </div>
</template>
