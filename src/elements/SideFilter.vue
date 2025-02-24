<script setup>
import { ref } from "vue";

const sider = ref(false);
</script>

<template>
  <div
    class="col-xl-2 col-lg-3 col-md-12 text-lg-end mb-lg-0 m-b30 d-flex d-lg-block align-items-center justify-content-between"
  >
    <strong class="filter-item-show d-lg-none">51,740 items</strong>
    <a
      @click="sider = true"
      href="javascript:void(0)"
      class="btn btn-primary filter-btn btn-hover-2"
    >
      Filter <span><i class="icon-filter m-l5"></i></span>
    </a>
  </div>
  <div
    :class="`offcanvas offcanvas-end filter-category-sidebar ${
      sider === true ? 'show' : ''
    }`"
    id="offcanvasFilter"
  >
    <button @click="sider = false" type="button" class="btn-close style-1">
      <i class="la la-close"></i>
    </button>
    <div class="offcanvas-body">
      <div class="widget">
        <div class="widget-title">
          <h4 class="title">Refine By Categories</h4>
        </div>
        <div class="category-check-list">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-01"
            />
            <label class="form-check-label" for="productCheckBox-01">
              Pizza
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-02"
            />
            <label class="form-check-label" for="productCheckBox-02">
              Hamburger
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-03"
            />
            <label class="form-check-label" for="productCheckBox-03">
              Cold Drink
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-04"
            />
            <label class="form-check-label" for="productCheckBox-04">
              Sandwich
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-05"
            />
            <label class="form-check-label" for="productCheckBox-05">
              Muffin
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-06"
            />
            <label class="form-check-label" for="productCheckBox-06">
              Burrito
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-07"
            />
            <label class="form-check-label" for="productCheckBox-07">
              Taco
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-08"
            />
            <label class="form-check-label" for="productCheckBox-08">
              Hot Dog
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-09"
            />
            <label class="form-check-label" for="productCheckBox-09">
              Noodles
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-10"
            />
            <label class="form-check-label" for="productCheckBox-10">
              Macrony
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-11"
            />
            <label class="form-check-label" for="productCheckBox-11">
              Cheese Pasta
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-12"
            />
            <label class="form-check-label" for="productCheckBox-12">
              Fish Fry
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-13"
            />
            <label class="form-check-label" for="productCheckBox-13">
              Cold Coffee
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-14"
            />
            <label class="form-check-label" for="productCheckBox-14">
              Manchurian
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-15"
            />
            <label class="form-check-label" for="productCheckBox-15">
              Dosa
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-16"
            />
            <label class="form-check-label" for="productCheckBox-16">
              Momos
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-17"
            />
            <label class="form-check-label" for="productCheckBox-17">
              Soup
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-18"
            />
            <label class="form-check-label" for="productCheckBox-18">
              Chicken Burger
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-19"
            />
            <label class="form-check-label" for="productCheckBox-19">
              Beverages
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="productCheckBox-20"
            />
            <label class="form-check-label" for="productCheckBox-20">
              Lemon Lime Soda
            </label>
          </div>
        </div>
      </div>
      <div class="widget">
        <div class="widget-title">
          <h4 class="title">Near Me</h4>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="productCheckBox-21"
          />
          <label class="form-check-label" for="productCheckBox-21">
            Ortus Restaurant
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="productCheckBox-22"
          />
          <label class="form-check-label" for="productCheckBox-22">
            Amar Punjabi Restaurant
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="productCheckBox-23"
          />
          <label class="form-check-label" for="productCheckBox-23">
            Other
          </label>
        </div>
      </div>
      <div class="widget rating-filter">
        <div class="widget-title">
          <h4 class="title">Rating</h4>
        </div>
        <ul>
          <li><span>5 Star</span></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
        </ul>
        <ul>
          <li><span>4 Star</span></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
        </ul>
        <ul>
          <li><span>3 Star</span></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
        </ul>
        <ul>
          <li><span>2 Star</span></li>
          <li><i class="icon-star-on"></i></li>
          <li><i class="icon-star-on"></i></li>
        </ul>
        <ul>
          <li><span>1 Star</span></li>
          <li><i class="icon-star-on"></i></li>
        </ul>
      </div>
      <div class="widget">
        <div class="widget-title">
          <h4 class="title">Price Range</h4>
        </div>
        <div class="range-slider style-1">
          <div id="slider-tooltips"></div>
        </div>
      </div>
    </div>
  </div>
  <div
    @click="sider = false"
    :class="`${sider === true ? 'offcanvas-backdrop show' : ''}`"
  ></div>
</template>
