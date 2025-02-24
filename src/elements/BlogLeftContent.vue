<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="widget">
    <div class="widget-title">
      <h4 class="title">Search</h4>
    </div>
    <div class="search-bx">
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
              <button type="button" class="btn btn-primary">
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
  </div>
  <div class="widget widget_categories">
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

  <div class="widget recent-posts-entry">
    <div class="widget-title">
      <h4 class="title">Latest Post</h4>
    </div>
    <div class="widget-post-bx">
      <div class="widget-post clearfix">
        <div class="dz-media">
          <img src="../assets/images/blog/recent-blog/pic1.jpg" alt="/" />
        </div>
        <div class="dz-info">
          <h6 class="title">
            <RouterLink to="/blog-standard">Explore the Food Taste</RouterLink>
          </h6>
          <div class="dz-meta">
            <ul>
              <li>
                <a href="javascript:void(0);">
                  <i class="flaticon-calendar-date"></i>
                  10 Dec, 2023</a
                >
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="flaticon-chat-bubble"></i>
                  2.5K</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="widget-post clearfix">
        <div class="dz-media">
          <img src="../assets/images/blog/recent-blog/pic2.jpg" alt="/" />
        </div>
        <div class="dz-info">
          <h6 class="title">
            <RouterLink to="/blog-standard"
              >Secrets of Delicious Food</RouterLink
            >
          </h6>
          <div class="dz-meta">
            <ul>
              <li>
                <a href="javascript:void(0);">
                  <i class="flaticon-calendar-date"></i>
                  16 May, 2023</a
                >
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="flaticon-chat-bubble"></i>
                  1.5K</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="widget-post clearfix">
        <div class="dz-media">
          <img src="../assets/images/blog/recent-blog/pic3.jpg" alt="/" />
        </div>
        <div class="dz-info">
          <h6 class="title">
            <RouterLink to="/blog-standard"> Inspiration for Food</RouterLink>
          </h6>
          <div class="dz-meta">
            <ul>
              <li>
                <a href="javascript:void(0);">
                  <i class="flaticon-calendar-date"></i>
                  20 Jan, 2023</a
                >
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="flaticon-chat-bubble"></i>
                  3.5K</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="widget widget_tag_cloud mb-3">
    <div class="widget-title">
      <h4 class="title">Popular Tags</h4>
    </div>
    <div class="tagcloud">
      <RouterLink to="/product-detail">Pizza</RouterLink>
      <RouterLink to="/product-detail">Chicken</RouterLink>
      <RouterLink to="/product-detail">Pizza Veronese</RouterLink>
      <RouterLink to="/product-detail">Burger</RouterLink>
      <RouterLink to="/product-detail">Sandwich</RouterLink>
    </div>
  </div>
</template>
