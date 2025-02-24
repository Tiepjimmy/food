<script setup>
import { ref } from "vue";

const inputValues = ref([
  { title: "Number Of People" },
  { title: "Member 1" },
  { title: "Member 2" },
  { title: "Member 3" },
  { title: "Member 4" },
  { title: "Member 5" },
]);
const addActive = ref(0);
const selectOptionBtn = (ind) => {
  addActive.value = ind;
};
</script>

<template>
  <form action="#">
    <div class="row">
      <div class="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
        <div class="input-group input-line">
          <div class="input-group-prepand">
            <i class="flaticon-user"></i>
          </div>
          <input
            name="dzName"
            required
            type="text"
            class="form-control"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div
        class="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp"
        data-wow-delay="0.2s"
      >
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
      <div class="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
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
      <div class="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
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
            <button type="button" class="btn dropdown-toggle btn-light show">
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
                    :class="addActive === ind ? 'selected active' : ''"
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
      <div
        class="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp"
        data-wow-delay="0.4s"
      >
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
      <div class="col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp">
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
      <div class="col-lg-12 col-md-12 text-center">
        <button
          type="submit"
          name="submit"
          value="submit"
          class="btn btn-lg btn-white btn-hover-1"
        >
          <span>Book a Table</span>
        </button>
      </div>
    </div>
  </form>
</template>
