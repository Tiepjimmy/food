<script setup>
import { ref } from "vue";
import bgimg from "../assets/images/banner/bnr2.jpg";
import CommonBanner from "../elements/CommonBanner.vue";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const accordionList = ref([
  { title: "Q1: What are your hours of operation?" },
  { title: "Q2: What is your menu like?" },
  { title: "Q3: Do you have vegetarian/vegan/gluten-free options?" },
  { title: "Q4: Do you offer takeout or delivery?" },
  { title: "Q5: Can I make a reservation? How do I do that?" },
  { title: "Q6: Is your restaurant kid-friendly?" },
  { title: "Q7: What is your menu like?" },
]);

let toggle = false;
function toggelButton(ind) {
  toggle === false ? (toggle = true) : (toggle = false);
  document.querySelectorAll(".accordion-button").forEach((ell, index) => {
    ell.classList.toggle("collapsed");
    if (ind !== index) {
      ell.classList.add("collapsed");
    }
    document.querySelectorAll(".accordion-data").forEach((ele, key) => {
      ele.classList.toggle("accordion-value");

      if (ind !== key) {
        ele.classList.remove("accordion-value");
      }
    });
  });
}
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Faq" title="Faq" />
    <section class="content-inner">
      <div class="min-container">
        <div class="row search-wraper style-1 text-center">
          <div class="col-lg-10 m-auto">
            <form>
              <div class="input-group">
                <div class="input-group-prepand">
                  <button
                    name="submit"
                    value="submit"
                    type="submit"
                    class="btn"
                  >
                    <i class="icon-search"></i>
                  </button>
                </div>
                <input
                  required="required"
                  type="text"
                  class="form-control"
                  placeholder="Why Should I Use Swigo ?"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="accordion dz-accordion">
              <div
                class="accordion-item"
                v-for="(item, ind) in accordionList"
                :key="ind"
              >
                <h2 class="accordion-header" @click="toggelButton(ind)">
                  <a
                    href="javascript:void(0);"
                    class="accordion-button collapsed"
                  >
                    Q1: What are your hours of operation?
                    <span class="toggle-close"></span>
                  </a>
                </h2>
                <div class="accordion-collapse accordion-data">
                  <div class="accordion-body">
                    <p class="m-b0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5 m-b20">
            <div class="dz-media faq-media move-2">
              <img src="../assets/images/faq/pic1.png" alt="/" />
            </div>
          </div>
          <div class="col-lg-7 m-b20">
            <div class="faq-info">
              <h2 class="title">Newsletter</h2>
              <p class="m-b30">
                We hope this newsletter finds you well. We are excited to
                announce some new additions to our menu that we think you'll
                love. Our culinary team has been
              </p>
              <form class="dzSubscribe" action="#" method="post">
                <div class="dzSubscribeMsg text-white"></div>
                <div class="input-group">
                  <input
                    name="dzEmail"
                    required="required"
                    type="text"
                    class="form-control"
                    placeholder="Enter Your Email"
                  />
                  <div class="input-group-addon">
                    <button
                      name="submit"
                      value="submit"
                      type="submit"
                      class="btn btn-primary btn-hover-2"
                    >
                      <span>Submit</span>
                      <i class="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>

<style scoped>
.accordion-data {
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
}
.accordion-value {
  height: 100px !important;
  transition: all 0.3s linear;
}
</style>
