<script lang="ts">
import {computed, defineComponent, ref, watchEffect} from "vue";
import { RouterLink } from "vue-router";
import cartStore from "@/stores/stateCarlItem";

export default defineComponent({
  name: "cart-item",
  components: {
    RouterLink,
  },
  setup() {
    const extraNav = ref(false);

    // Theo dõi sự thay đổi của giỏ hàng trong cartStore
    const cartItem = ref(cartStore.cart); // Sử dụng cartStore để theo dõi giỏ hàng
    const totalPrice = computed(() => cartStore.totalPrice) // Trực tiếp lấy totalPrice từ cartStore
    const totalProduct = computed(() => cartStore.totalProduct) // Trực tiếp lấy totalPrice từ cartStore

    // Sử dụng watchEffect thay vì watch, để theo dõi trực tiếp từ cartStore
    watchEffect(() => {
      cartItem.value = cartStore.cart;  // Cập nhật giỏ hàng khi có thay đổi
    });

    const rightNavbar = () => {
      extraNav.value = !extraNav.value;
      let cartList = document.getElementById("cartList");
      cartList?.setAttribute(
          "style",
          `display:${extraNav.value === true ? "block" : "none"}`
      );
      setTimeout(() => {
        cartList?.classList.toggle("show-cart-list");
      }, 10);
    };

    const cartItemClose = (productId: number) => {
      cartStore.removeFromCart(productId);  // Xóa sản phẩm khỏi giỏ hàng
    };

    // Trả về giỏ hàng, totalPrice và các hàm xử lý
    return {
      cartItem,
      totalPrice,
      totalProduct,
      cartItemClose,
      rightNavbar,
    };
  },
});
</script>


<style scoped>
#userAvatar {
  cursor: pointer;
}
.cart-list {
  height: 0px;
  overflow: hidden;
  opacity: 0;
}
.show-cart-list {
  height: auto;
  opacity: 1;
  transition: all 0.4s linear;
}
.remove-cart-list {
  transform: translateX(-100%);
  transition: all 0.4s linear;
}
</style>

<template >
  <li>
    <button
        type="button"
        class="btn btn-white btn-square btn-shadow cart-btn"
        @click="rightNavbar"
    >
      <i class="flaticon-shopping-bag-1"></i>
      <span class="badge">{{totalProduct}}</span>
    </button>
    <ul class="dropdown-menu cart-list" id="cartList">
      <li v-for="item in cartItem" :key="item.id" class="cart-item">
        <div class="media">
          <div class="media-left">
            <RouterLink to="/product-detail">
              <img
                  alt="/"
                  class="media-object"
                  src="../assets/images/shop/pic2.jpg"
              />
            </RouterLink>
          </div>
          <div class="media-body">
            <h6 class="dz-title">
              <RouterLink
                  to="/product-detail"
                  class="media-heading"
              >{{item.name}}</RouterLink
              >
            </h6>
            <span class="dz-price">{{item.price}}</span>
            <span class="dz-quanlity" style="margin-left: 35px">{{item.quantity}}</span>
            <span class="item-close" @click="cartItemClose(item.id)"
            >&times;</span
            >
          </div>
        </div>
      </li>
      <li
          class="cart-item text-center d-flex justify-content-between"
      >
        <h6 class="text-primary mb-0">Total:</h6>
        <h6 class="text-primary mb-0">{{totalPrice}}</h6>
      </li>
      <li class="text-center d-flex">
        <RouterLink
            to="/shop-cart"
            class="btn btn-primary me-2 w-100 d-block btn-hover-1"
        ><span>View Cart</span></RouterLink
        >
        <RouterLink
            to="/our-menu-1"
            class="btn btn-outline-primary w-100 d-block btn-hover-1"
        ><span>Menu</span></RouterLink
        >
      </li>
    </ul>
  </li>
</template>
