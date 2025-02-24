<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const checkboxes = [
  { title: "Pizza" },
  { title: "Hamburger" },
  { title: "Cold Drink" },
  { title: "Sandwich" },
  { title: "Muffin" },
  { title: "Burrito" },
  { title: "Taco" },
  { title: "Hot Dog" },
];

const input = ref(10);
</script>

<template>
  <div class="col-lg-3">
    <aside class="side-bar left sticky-top">
      <div class="shop-filter">
        <div class="widget widget_tag_cloud">
          <div class="d-flex justify-content-between">
            <div class="widget-title">
              <h4 class="title">Current Search</h4>
            </div>
            <a href="javascript:void(0);" class="panel-close-btn"
              ><i class="fa-solid fa-xmark"></i
            ></a>
          </div>
          <div class="tagcloud">
            <RouterLink to="/product-detail">Burger</RouterLink>
            <RouterLink to="/product-detail">Restaurant</RouterLink>
            <RouterLink to="/product-detail">Pizza</RouterLink>
          </div>
        </div>
        <div class="widget dz-widget_services">
          <div class="widget-title">
            <h4 class="title">Refine By Categories</h4>
          </div>
          <div class="form-check" v-for="(item, ind) in checkboxes" :key="ind">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-01"
            />
            <label class="form-check-label" for="productCheckBox-01">
              {{ item.title }}
            </label>
          </div>
        </div>
        <div class="widget">
          <div class="widget-title">
            <h4 class="title">Price Range</h4>
          </div>
          <div class="range-slider style-1">
            <div
              id="slider-tooltips"
              class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr d-flex align-items-center"
              style="position: relative"
            >
              <div
                class="toolTip"
                :style="`left: ${input}%; 
                transform: translate(-${input}%);
              `"
              >
                {{ input }}
              </div>
              <input
                type="range"
                :min="0"
                :max="100"
                :value="input"
                name=""
                @input="(e) => (input = e.target.value)"
                class="range_slider"
                :style="` background: linear-gradient(
                    to right,
                    var(--primary) ${input}%,
                    rgb(219, 218, 218) 0%
                  );`"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.range_slider {
  appearance: none;
  width: 100%;
  height: 100%;
  background: rgb(219, 218, 218);
  border-radius: 10px;
}
.range_slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: rgb(255, 255, 255);
  border-radius: 100%;
  border: 3px solid var(--primary);
}
.toolTip {
  background: var(--primary);
  color: white;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  padding: 2px 5px;
  bottom: 30px;
  position: absolute;
}
.toolTip::after {
  content: "";
  position: absolute;
  background-color: inherit;
  width: 10px;
  height: 10px;
  bottom: -11px;
  margin-left: -4px;
  left: 50%;
  transform: rotate(45deg) translate(-50%, -50%);
}
</style>
