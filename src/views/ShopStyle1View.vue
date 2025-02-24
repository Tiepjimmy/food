<script setup>
import CommonBanner from "../elements/CommonBanner.vue";
import CommonLeftContent from "../elements/CommonLeftContent.vue";
import bgimg from "@/assets/images/banner/bnr1.jpg";
import SearchResuiltRightContent from "../elements/SearchResuiltRightContent.vue";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

// import RangeSlider from "vue-range-slider";
// import "vue-range-slider/dist/vue-range-slider.css";
</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Shop Style 1" title="Shop Style 1" />
    <section class="content-inner-1">
      <div class="container">
        <div class="row search-wraper text-center">
          <div class="col-lg-8 m-auto">
            <form>
              <div class="input-group">
                <input
                  required="required"
                  type="text"
                  class="form-control"
                  placeholder="Type here"
                />
                <div class="input-group-addon">
                  <button
                    name="submit"
                    value="submit"
                    type="submit"
                    class="btn btn-primary btn-hover-2"
                  >
                    <span>Search</span><i class="icon-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <CommonLeftContent />
          <div class="col-lg-9">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title mb-md-3 mb-lg-4 m-b20 d-none d-lg-block">
                Search Results
              </h5>
              <strong class="filter-item-show m-b20"
                >Search: 51,740 items</strong
              >
              <a href="javascript:void(0);" class="btn btn-primary panel-btn"
                >Filter</a
              >
            </div>
            <SearchResuiltRightContent />
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
