<script setup>
import { ref, watchEffect } from "vue";
import MainSlider3 from "../elements/MainSlider3.vue";
import SpacialMenu from "../elements/SpacialMenu.vue";
import Home3AreMenus from "../components/Home3AreMenus.vue";
import { RouterLink } from "vue-router";
import Footer3View from "../Layouts/Footer3View.vue";
import Header3 from "../Layouts/Header3.vue";
// images
import advPic2 from "../assets/images/adv/pic2.png";
import baimg15 from "../assets/images/background/pic15.png";
import baimg16 from "../assets/images/background/pic16.png";
import baimg10 from "../assets/images/background/pic10.png";
import bgimg13 from "../assets/images/background/pic13.png";

const services = ref([
  { icon: "flaticon-fast-delivery", text: "24/7 Free Delivery" },
  { icon: "flaticon-clock-1", text: "Our Restaurant is Open Around the Clock" },
  { icon: "flaticon-chef", text: "Best Chef" },
  { icon: "flaticon-cuisine", text: "We Have The Freshest Product" },
]);

const inputValues = ref([
  { title: "Number Of People" },
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
  { title: "7" },
  { title: "8" },
  { title: "9" },
  { title: "10" },
]);
const addActive = ref(0);
const selectOptionBtn = (ind) => {
  addActive.value = ind;
};

watchEffect(function () {
  document.body.setAttribute("data-color", "color_3");
  localStorage.setItem("addbgActive", 2);
});
</script>

<template>
  <div class="page-content bg-white">
    <Header3 />
    <MainSlider3 />
    <section class="content-inner overflow-hidden pb-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 m-b30 wow fadeInUp">
            <div
              class="adv-box style-1"
              :style="` background-image: url(${advPic2});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;`"
            >
              <div class="adv-content">
                <span class="special">FRIDAY SPECIAL</span>
                <h4 class="title">TASTY BURGER</h4>
              </div>
              <div class="adv-media">
                <img
                  class="main-media"
                  src="../assets/images/adv/pic1.png"
                  alt="/"
                />
                <div class="item-media offer-label">
                  <img src="../assets/images/adv/label.png" alt="/" />
                  <span class="">50% OFF</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp">
                <div class="adv-box style-2">
                  <div class="adv-media">
                    <img src="../assets/images/adv/pic3.png" alt="/" />
                  </div>
                  <div class="adv-content">
                    <span class="special text-white">TODAY SPECIAL</span>
                    <h4 class="title text-white">Nodels</h4>
                    <span class="price">60% OFF</span>
                    <RouterLink
                      to="/shop-cart"
                      class="btn btn-white btn-hover-3"
                      ><span class="btn-text" data-text="Add To Cart"
                        >Add To Cart</span
                      ></RouterLink
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp">
                <div
                  class="adv-box style-3"
                  :style="`  background-image: url(${baimg15});
                    background-size: cover;
                    background-position: center;`"
                >
                  <div class="adv-content">
                    <span class="special text-white">MUSHROOM</span>
                    <h4 class="title">BURGER</h4>
                    <RouterLink
                      to="/shop-cart"
                      class="btn btn-white btn-hover-3"
                      ><span class="btn-text" data-text="Add To Cart"
                        >Add To Cart</span
                      ></RouterLink
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-12 wow fadeInUp">
                <div
                  class="adv-box style-4"
                  :style="` background-image: url(${baimg16});
                    background-repeat: no-repeat;
                    background-size: cover;`"
                >
                  <div class="adv-media">
                    <img src="../assets/images/adv/pic4.png" alt="/" />
                  </div>
                  <div class="adv-content">
                    <span class="special text-white"
                      >FOR LIMITED TIME ONLY</span
                    >
                    <h4 class="price">35% Offer</h4>
                  </div>
                  <RouterLink to="/shop-cart" class="btn btn-white btn-hover-3"
                    ><span class="btn-text" data-text="Add To Cart"
                      >Add To Cart</span
                    ></RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner bg-white section-wrapper-2 overflow-hidden">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">Special Menu</h2>
        </div>
        <SpacialMenu />
      </div>
    </section>
    <section
      class="section-wrapper-4 content-inner overflow-hidden bg-parallax"
      :style="`  background-image: url(${baimg10});
        background-attachment: fixed;`"
    >
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">Why Choose Us ?</h2>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-6"
            v-for="(item, ind) in services"
            :key="ind"
          >
            <div class="icon-bx-wraper style-4">
              <div class="icon-bx">
                <div class="icon-cell">
                  <i :class="item.icon"></i>
                </div>
              </div>
              <div class="icon-content">
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner section-wrapper-6 p-b40">
      <div class="container inner-section-wrapper">
        <div class="section-head text-center">
          <h2 class="title wow flipInX">From Our Menu</h2>
        </div>
        <Home3AreMenus />
      </div>
      <div
        class="container contact-area bg-parallax"
        :style="` background-image: url(${bgimg13});
          background-attachment: fixed;`"
      >
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-12 m-b30">
            <div class="contact-head">
              <h4 class="title text-white wow fadeInUp">Book a Table</h4>
              <p class="text-white opacity-75 wow fadeInUp">
                Lorem Ipsum is that it has a more-or-less normal distribution<br />
                of letters, to using making it look like readable English.
              </p>
            </div>
            <form action="#">
              <div class="row">
                <div class="col-lg-6 col-md-6 m-b30 m-xl-b50 wow fadeInUp">
                  <div class="input-group input-line">
                    <div class="input-group-prepand">
                      <i class="flaticon-user"></i>
                    </div>
                    <input
                      name="dzFirstName"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp">
                  <div class="input-group input-line">
                    <div class="input-group-prepand">
                      <i class="flaticon-phone-call"></i>
                    </div>
                    <input
                      name="dzPhoneNumber"
                      required
                      type="text"
                      class="form-control dz-number"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp">
                  <div class="input-group input-line">
                    <div class="input-group-prepand">
                      <i class="flaticon-two-people"></i>
                    </div>
                    <div
                      class="dropdown bootstrap-select form-select default-select dropup"
                      tabindex="-1"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      title="Number Of People"
                    >
                      <button
                        class="btn dropdown-toggle btn-light show"
                        type="button"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">
                              {{ inputValues[addActive].title }}
                            </div>
                          </div>
                        </div>
                      </button>
                      <div
                        class="dropdown-menu"
                        style="
                          position: absolute;
                          inset: auto auto 0px 0px;
                          margin: 0px;
                          transform: translate(0px, -50px);
                          padding: 0%;
                        "
                        data-popper-placement="top-start"
                      >
                        <div
                          class="inner show"
                          role="listbox"
                          id="bs-select-1"
                          tabindex="-1"
                          style="
                            max-height: 327px;
                            overflow: hidden auto;
                            min-height: 113px;
                          "
                          aria-activedescendant="bs-select-1-0"
                        >
                          <ul
                            class="dropdown-menu inner show"
                            role="presentation"
                            style="margin-top: 0px; margin-bottom: 0px"
                          >
                            <li
                              v-for="(item, ind) in inputValues"
                              :key="ind"
                              :class="
                                addActive === ind ? 'selected active' : ''
                              "
                              @click="selectOptionBtn(ind)"
                            >
                              <a
                                role="option"
                                class="dropdown-item"
                                id="bs-select-1-1"
                                tabindex="0"
                                aria-setsize="6"
                                aria-posinset="2"
                                ><span class="text">{{ item.title }}</span></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp">
                  <div class="input-group input-line">
                    <div class="input-group-prepand">
                      <i class="flaticon-email-1"></i>
                    </div>
                    <input
                      name="dzEmail"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp">
                  <div class="input-group input-line">
                    <div class="input-group-prepand">
                      <i class="flaticon-clock"></i>
                    </div>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="timePickerOnly"
                      placeholder="Time"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp">
                  <div class="input-group input-line">
                    <div class="input-group-prepand">
                      <i class="flaticon-calendar-date"></i>
                    </div>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="datePickerOnly"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <button
                    type="button"
                    class="btn btn-md btn-primary btn-hover-3 mt-3"
                  >
                    <span class="btn-text" data-text="Book a Table"
                      >Book a Table</span
                    >
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="widget widget_working bg-primary wow fadeInUp">
              <div class="head">
                <h5 class="title text-white">Contact Info</h5>
                <p class="text-white opacity-75">
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry.
                </p>
              </div>
              <ul>
                <li>
                  <i class="flaticon-placeholder"></i>
                  <p>
                    1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad
                  </p>
                </li>
                <li>
                  <i class="flaticon-telephone"></i>
                  <p>
                    +91 987-654-3210<br />
                    +91 123-456-7890
                  </p>
                </li>
                <li>
                  <i class="flaticon-email-1"></i>
                  <p>
                    info@example.com<br />
                    info@example.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer3View />
  </div>
</template>
