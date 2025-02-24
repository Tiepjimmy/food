<script setup>
import { ref } from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import bgimg from "@/assets/images/banner/bnr3.jpg";
import smallPic1 from "@/assets/images/gallery/small/pic1.jpg";
import smallPic2 from "@/assets/images/gallery/small/pic2.jpg";
import smallPic3 from "@/assets/images/gallery/small/pic3.jpg";
import smallPic4 from "@/assets/images/gallery/small/pic4.jpg";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";

const products = ref([
  { img: smallPic1, name: "Prduct Item 4", price: "$36.00" },
  { img: smallPic2, name: "Prduct Item 3", price: "$25.00" },
  { img: smallPic3, name: "Prduct Item 2", price: "$22.00" },
  { img: smallPic4, name: "Prduct Item 1", price: "$28.00" },
]);

const totalOrder = ref([
  { title: "Order Subtotal", price: "$125.96" },
  { title: "Shipping", price: "Free Shipping" },
  { title: "Coupon", price: "$28.00" },
  { title: "Total", price: "$506.00" },
]);

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
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner :img="bgimg" heading="Shop Checkout" title="Shop Checkout" />
    <section class="content-inner">
      <div class="container">
        <form class="shop-form">
          <div class="row">
            <div class="col-lg-6">
              <div class="widget">
                <h4 class="widget-title">Billing & Shipping Address</h4>
                <div
                  class="dropdown bootstrap-select form-select default-select dropup m-b20"
                  style="border: 1px solid #dddddd"
                  tabindex="-1"
                  data-bs-toggle="dropdown"
                  role="combobox"
                  aria-owns="bs-select-1"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  title="Number Of People"
                >
                  <button
                    type="button"
                    class="btn dropdown-toggle btn-light show"
                  >
                    <div class="filter-option">
                      <div class="filter-option-inner">
                        <div
                          class="filter-option-inner-inner"
                          style="color: #666666"
                        >
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

                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzFirstName"
                      required
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzLastName"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="form-group m-b20">
                  <input
                    name="dzOther[CompanyType]"
                    required
                    type="text"
                    class="form-control"
                    placeholder="Company Name"
                  />
                </div>
                <div class="form-group m-b20">
                  <input
                    name="dzOther[Address]"
                    required
                    type="text"
                    class="form-control"
                    placeholder="Address"
                  />
                </div>
                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzOther[Other]"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Apartment, suite, unit etc."
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzOther[Town/City]"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Town / City"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzOther[State/County]"
                      required
                      type="text"
                      class="form-control"
                      placeholder="State / County"
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="Postcode/Zip"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Postcode / Zip"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzEmail"
                      required
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzPhoneNumber"
                      required
                      type="text"
                      class="form-control dz-number"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <button
                  class="btn btn-gray btnhover mb-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#create-an-account"
                  aria-expanded="false"
                  aria-controls="create-an-account"
                >
                  Create an account <i class="fa fa-angle-down m-l10"></i>
                </button>
                <div class="collapse" id="create-an-account">
                  <p>
                    Create an account by entering the information below. If you
                    are a returning customer please login at the top of the
                    page.
                  </p>
                  <div class="form-group">
                    <input
                      name="Password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <button
                class="btn btn-gray btnhover mb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#different-address"
                aria-expanded="false"
                aria-controls="different-address"
              >
                Ship to a different address
                <i class="fa fa-angle-down m-l10"></i>
              </button>
              <div id="different-address" class="collapse">
                <p>
                  If you have shopped with us before, please enter your details
                  in the boxes below. If you are a new customer please proceed
                  to the Billing & Shipping section.
                </p>
                <div class="form-group m-b20">
                  <select class="form-select default-select">
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzFirstName"
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzLastName"
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="form-group m-b20">
                  <input
                    name="dzFirstName"
                    type="text"
                    class="form-control"
                    placeholder="Company Name"
                  />
                </div>
                <div class="form-group m-b20">
                  <input
                    name="dzOther[Address]"
                    type="text"
                    class="form-control"
                    placeholder="Address"
                  />
                </div>
                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzOther[Other]"
                      type="text"
                      class="form-control"
                      placeholder="Apartment, suite, unit etc."
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzOther[Town/City]"
                      type="text"
                      class="form-control"
                      placeholder="Town / City"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzOther[State/County]"
                      type="text"
                      class="form-control"
                      placeholder="State / County"
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzOther[Postcode/Zip]"
                      type="text"
                      class="form-control"
                      placeholder="Postcode / Zip"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzEmail"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-6 m-b20">
                    <input
                      name="dzPhoneNumber"
                      type="text"
                      class="form-control dz-number"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <p>
                  Create an account by entering the information below. If you
                  are a returning customer please login at the top of the page.
                </p>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <div class="dz-divider bg-gray-dark icon-center my-5">
          <i class="fa fa-circle bg-white text-primary"></i>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="widget">
              <h4 class="widget-title">Your Order</h4>
              <table class="table-bordered check-tbl">
                <thead class="text-center">
                  <tr>
                    <th>IMAGE</th>
                    <th>PRODUCT NAME</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, ind) in products" :key="ind">
                    <td class="product-item-img">
                      <img :src="item.img" alt="/" />
                    </td>
                    <td class="product-item-name">{{ item.name }}</td>
                    <td class="product-price">{{ item.price }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-6">
            <form class="shop-form widget">
              <h4 class="widget-title">Order Total</h4>
              <table class="table-bordered check-tbl mb-4">
                <tbody>
                  <tr v-for="(item, index) in totalOrder" :key="index">
                    <td>{{ item.title }}</td>
                    <td class="product-price">{{ item.price }}</td>
                  </tr>
                </tbody>
              </table>
              <h4 class="widget-title">Payment Method</h4>
              <div class="form-group m-b20">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name on Card"
                />
              </div>
              <div class="form-group m-b20">
                <select class="form-select default-select">
                  <option value="Credit Card Type">Credit Card Type</option>
                  <option value="Another option">Another option</option>
                  <option value="A option">A option</option>
                  <option value="Potato">Potato</option>
                </select>
              </div>
              <div class="form-group m-b20">
                <input
                  name="dzOther[CreditCardNumber]"
                  type="text"
                  class="form-control"
                  placeholder="Credit Card Number"
                />
              </div>
              <div class="form-group m-b20">
                <input
                  name="dzOther[CardVerificationNumber]"
                  type="text"
                  class="form-control"
                  placeholder="Card Verification Number"
                />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-gray btn-hover-2"
                  type="submit"
                  value="submit"
                  name="submit"
                >
                  Place Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
