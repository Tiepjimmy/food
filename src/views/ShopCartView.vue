<script lang="ts">
import CommonBanner from "../elements/CommonBanner.vue";
import SearchResuiltRightContent from "../elements/SearchResuiltRightContent.vue";
import {computed, defineComponent, ref, watch, watchEffect} from "vue";
import bgimg from "../assets/images/banner/bnr4.jpg";
import shopPic1 from "../assets/images/shop/pic1.jpg";
import shopPic2 from "../assets/images/shop/pic2.jpg";
import shopPic3 from "../assets/images/shop/pic3.jpg";
import { RouterLink } from "vue-router";
import Header from "../Layouts/Header.vue";
import Footer4 from "../Layouts/Footer4.vue";
import cartStore from "@/stores/stateCarlItem";

export default defineComponent({
  name: "shop-cart-view",
  components: {
    CommonBanner,
    SearchResuiltRightContent,
    RouterLink,
    Header,
    Footer4,
  },
  setup() {

    const cartItem = ref(cartStore.cart); // Sử dụng cartStore để theo dõi giỏ hàng
    // const cartitem = [
    //   { img: shopPic1, name: "Double Patty Burger", price: "", num: 1 },
    //   { img: shopPic2, name: "Double Patty Burger", price: "", num: 1 },
    //   { img: shopPic3, name: "Double Patty Burger", price: "", num: 1 },
    // ];
    const totalPrice = computed(() => cartStore.totalPrice) // Trực tiếp lấy totalPrice từ cartStore
    const totalProduct = computed(() => cartStore.totalProduct) // Trực tiếp lấy totalPrice từ cartStore

    // Sử dụng watchEffect thay vì watch, để theo dõi trực tiếp từ cartStore
    watchEffect(() => {
      cartItem.value = cartStore.cart;  // Cập nhật giỏ hàng khi có thay đổi
      cartItem.value.forEach(item => {
        item.totalPrice = item.price * item.quantity;  // Tính toán totalPrice cho mỗi item
      });
    });
    const cartItemClose = (productId: number) => {
      cartStore.removeFromCart(productId);  // Xóa sản phẩm khỏi giỏ hàng
    };
    const cartCounterBtn = (action, ind) => {
      const item = cartItem.value[ind];

      if (action === "increment") {
        item.quantity += 1;
      } else if (action === "decrement" && item.quantity > 1) {
        item.quantity -= 1;
      } else if (action === "delet") {
        cartItem.value.splice(ind, 1);
      }
    };

    return {
      bgimg,
      cartItem,
      totalPrice,
      totalProduct,
      cartItemClose,
      cartCounterBtn
    }
  },
});
</script>


<template>
  <div class="page-content bg-white">
    <Header />
    <CommonBanner :img="bgimg" heading="Shop Cart" title="Shop Cart" />
    <section class="content-inner-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="title m-b15 m-lg-30">Related Products</h5>
              <a href="javascript:void(0);" class="btn btn-primary panel-btn"
                >Filtr</a
              >
            </div>
            <SearchResuiltRightContent />
          </div>
          <div class="col-lg-4">
            <aside class="side-bar sticky-top">
              <div class="shop-filter style-1">
                <div class="d-flex justify-content-between">
                  <div class="widget-title">
                    <h5 class="title m-b30">
                      Cart <span class="text-primary">{{ totalProduct }}</span>
                    </h5>
                  </div>
                  <a href="javascript:void(0);" class="panel-close-btn"
                    ><i class="fa-solid fa-xmark"></i
                  ></a>
                </div>
                <div
                  class="cart-item style-1"
                  v-for="(item, ind) in cartItem"
                  :key="ind"
                >
                  <div class="dz-media">
                    <img :src="item.img" alt="/" />
                  </div>
                  <div class="dz-content">
                    <div class="dz-head">
                      <h6 class="title mb-0">{{ item.name }}</h6>
                      <a
                        href="javascript:void(0);"
                        @click="cartCounterBtn('delet')"
                        ><i class="fa-solid fa-xmark text-danger"></i
                      ></a>
                    </div>
                    <div class="dz-body">
                      <div class="btn-quantity style-1">
                        <div class="input-group bootstrap-touchspin">
                          <input
                            id="demo_vertical2"
                            type="text"
                            :value="item.quantity"
                            name="demo_vertical2"
                            class="form-control"
                            style="display: block"
                          /><span class="input-group-btn-vertical"
                            ><button
                              class="btn btn-default bootstrap-touchspin-up"
                              type="button"
                              @click="cartCounterBtn('increment', ind)"
                            >
                              <i class="ti-plus"></i></button
                            ><button
                              class="btn btn-default bootstrap-touchspin-down"
                              type="button"
                              @click="cartCounterBtn('decrement', ind)"
                            >
                              <i class="ti-minus"></i></button
                          ></span>
                        </div>
                      </div>
                      <h5 class="price text-primary mb-0">{{item.totalPrice}}</h5>
                    </div>
                  </div>
                </div>
                <div class="order-detail">
                  <h6>Bill Details</h6>
                  <table>
                    <tbody>
                      <tr>
                        <td>Item Total</td>
                        <td class="price text-primary">$55.00</td>
                      </tr>
                      <tr class="charges">
                        <td>Delivery Charges</td>
                        <td class="price text-primary">$5.00</td>
                      </tr>
                      <tr class="tax">
                        <td>Govt Taxes & Other Charges</td>
                        <td class="price text-primary">$3.50</td>
                      </tr>
                      <tr class="total">
                        <td><h6>Total</h6></td>
                        <td class="price text-primary">{{ totalPrice }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <RouterLink
                    to="/shop-checkout"
                    class="btn btn-primary d-block text-center btn-md w-100 btn-hover-1"
                    ><span
                      >Order Now <i class="fa-solid fa-arrow-right"></i></span
                  ></RouterLink>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer4 />
  </div>
</template>
