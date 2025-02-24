<script setup>
import CommonBanner from "../elements/CommonBanner.vue";
import BlogLeftContent from "../elements/BlogLeftContent.vue";
import BlogRightContent from "../elements/BlogRightContent.vue";
import bgimg from "../assets/images/banner/bnr3.jpg";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner
      :img="bgimg"
      heading="Blog Grid Left Sidebar"
      title="Blog Grid Left Sidebar"
    />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 m-b30">
            <BlogRightContent />
          </div>
          <div class="col-xl-4 col-lg-4">
            <aside class="side-bar sticky-top">
              <BlogLeftContent />
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
