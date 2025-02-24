<script setup>
import { watchEffect } from "vue";
import Reservration from "../components/Reservration.vue";
import ImageBoxSlider from "../elements/ImageBoxSlider.vue";
import MainSlider from "../elements/MainSlider.vue";
import SpacialMenu from "../elements/SpacialMenu.vue";
import Todaysmenu from "../elements/Todaysmenu.vue";
import bgimg from "../assets/images/background/pic1.png";
import CustomerEndComment from "../components/CustomerEndComment.vue";
import MasterChefSlider from "../components/MasterChefSlider.vue";
import NewsBlog from "../elements/News&Blog.vue";
import FooterView from "../Layouts/FooterView.vue";
import Header from "../Layouts/Header.vue";

watchEffect(function () {
  document.body.setAttribute("data-color", "color_1");
  localStorage.setItem("addbgActive", 0);
});






</script>
<template>
  <div class="page-content bg-white">
    <Header />
    <MainSlider />
    <section class="content-inner bg-white section-wrapper-2 overflow-hidden">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">Special Menu</h2>
        </div>
        <SpacialMenu />
      </div>
      <img
        class="bg1 dz-move-down"
        src="../assets/images/background/pic2.png"
        alt="/"
      />
      <img
        class="bg2 dz-parallax"
        src="../assets/images/background/pic3.png"
        alt="/"
      />
    </section>
    <section class="content-inner-1 section-wrapper-3 overflow-hidden">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">Today's Menu</h2>
        </div>
        <Todaysmenu />
      </div>
      <img
        class="bg1 dz-parallax"
        data-parallax-speed="0.05"
        src="../assets/images/background/pic3.png"
        alt="/"
      />
      <img
        class="bg2 dz-parallax"
        data-parallax-speed="0.05"
        src="../assets/images/background/pic4.png"
        alt="/"
      />
    </section>
    <section class="content-inner-1 bg-white overflow-hidden pt-sm-0">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">From Our Menu</h2>
        </div>
        <ImageBoxSlider />
      </div>
    </section>
    <section
      class="content-inner-1 section-wrapper-1 bg-parallax"
      :style="`background-image: url(${bgimg})`"
    >
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title text-white wow flipInX">Reservation</h2>
        </div>
        <Reservration />
      </div>
    </section>
    <section class="content-inner-1 section-wrapper-2 right overflow-hidden">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">Customer's Comment</h2>
        </div>
        <CustomerEndComment />
      </div>
      <img
        class="bg1 dz-move-down"
        src="../assets/images/background/pic2.png"
        alt="/"
      />
    </section>
    <section class="content-inner-1 overflow-hidden bg-light">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">Master Chefs</h2>
        </div>
      </div>
      <MasterChefSlider />
    </section>
    <section class="content-inner-1 overflow-hidden">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX" data-wow-delay="0.2s">News & blog</h2>
        </div>
        <NewsBlog />
      </div>
    </section>
    <div class="map-iframe style-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244934.17139458598!2d75.27787773507539!3d25.125368923263647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678086292169!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style="border: 0; width: 600; height: 450"
      ></iframe>
    </div>
  </div>
  <FooterView />
</template>
