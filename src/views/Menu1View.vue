<script setup>
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "../assets/images/banner/bnr1.jpg";
import { RouterLink } from "vue-router";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const ourMenu = [
  {
    parent: "Starters",
    child: [
      { title: "Creamy Mushroom Soup", price: "$10" },
      { title: "Stuffed Mushrooms", price: "$14" },
      { title: "Grilled Caesar Salad", price: "$18" },
      { title: "Signature Autumn Salad", price: "$25" },
      { title: "Glazed Tomato Bruschite", price: "$35" },
    ],
  },
  {
    parent: "Seafood",
    child: [
      { title: "Baked Oysters Rockefeller", price: "$13" },
      { title: "Grilled Shrimp Skewers", price: "$15" },
      { title: "Seafood Linguine", price: "$14" },
      { title: "Shrimp Scampi", price: "$20" },
    ],
  },
];

const ourMenu2 = [
  {
    parent: "Drinks",
    child: [
      { title: "Cranberry Juice", price: "$23" },
      { title: "Hot Chocolate", price: "$99" },
      { title: "Lemon-Lime Soda", price: "$24" },
      { title: "Alcoholic beverages ", price: "$10" },
    ],
  },
  {
    parent: "Specials",
    child: [
      { title: "Beef Tenderloin & Red Wine", price: "$60" },
      { title: "Mushroom Risotto", price: "$55" },
      { title: "Lobster Thermidor", price: "$21" },
      { title: "Beef Bourguignon", price: "$15" },
    ],
  },
  {
    parent: "Meat",
    child: [
      { title: "Beef Bourguignon", price: "$30" },
      { title: "Barbecue Ribs", price: "$28" },
      { title: "Roasted Turkey", price: "$40" },
      { title: "Beef Stroganoff", price: "$92" },
    ],
  },
];
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Our Menu 1" title="Our Menu 1" />
    <section class="content-inner section-wrapper-7 overflow-hidden bg-white">
      <div class="container">
        <div class="row inner-section-wrapper">
          <div
            class="col-xl-4 col-lg-6 col-md-6"
            v-for="(item, ind) in ourMenu"
            :key="ind"
          >
            <div class="menu-head">
              <h4 class="title text-primary">{{ item.parent }}</h4>
            </div>
            <div
              class="dz-shop-card style-2 m-b30 p-0 shadow-none"
              v-for="(data, index) in item.child"
              :key="index"
            >
              <div class="dz-content">
                <div class="dz-head">
                  <span class="header-text"
                    ><RouterLink to="/shop-style-2">{{ data.title }}</RouterLink></span
                  >
                  <span class="img-line"></span>
                  <span class="header-price">{{ data.price }}</span>
                </div>
                <p class="dz-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-xl-4 col-lg-6 col-md-6"
            v-for="(item, ind) in ourMenu2"
            :key="ind"
          >
            <div class="menu-head">
              <h4 class="title text-primary">{{ item.parent }}</h4>
            </div>
            <div
              class="dz-shop-card style-2 m-b30 p-0 shadow-none"
              v-for="(data, index) in item.child"
              :key="index"
            >
              <div class="dz-content">
                <div class="dz-head">
                  <span class="header-text"
                    ><RouterLink to="/shop-style-2">{{ data.title }}</RouterLink ></span
                  >
                  <span class="img-line"></span>
                  <span class="header-price">{{ data.price }}</span>
                </div>
                <p class="dz-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="bg1 dz-move-down"
        src="../assets/images/background/pic12.png"
        alt="/"
      />
      <img
        class="bg2 dz-move-down"
        src="../assets/images/background/pic14.png"
        alt="/"
      />
    </section>
    <Footer4 />
  </div>
</template>
