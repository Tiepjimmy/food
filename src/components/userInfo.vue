<script lang='ts'>
import {defineComponent, ref, watch, watchEffect} from "vue";
import { RouterLink } from "vue-router";
import {useAuthStore} from "@/stores/auth";
import {getAssetPath} from "@/core/helpers/assets";


export default defineComponent({
  name: "cart-item",
  components: {
    RouterLink,
  },
  setup() {
    const store = useAuthStore();
    const checkUser = ref(store?.user?.username ? true : false);

    watchEffect(() => {
      checkUser.value = store.isAuthenticated; // Cập nhật checkUser khi isAuthenticated thay đổi
    });



    const extrainInfoUser = ref(false);

    const showInfoUser = () => {
      extrainInfoUser.value = !extrainInfoUser.value;
      let infoUser = document.getElementById("infoUser");
      infoUser?.setAttribute(
          "style",
          `display:${extrainInfoUser.value === true ? "block" : "none"}`
      );
      setTimeout(() => {
        infoUser?.classList.toggle("show-info-user");
      }, 10);
    };

    const signOut = () => {
      store.logout();
    };

    return {
      extrainInfoUser,
      checkUser,
      showInfoUser,
      signOut,
      getAssetPath,
    };
  },
});

</script>

<style scoped>
.show-info-user {
  height: auto;
  opacity: 1;
  transition: all 0.2s linear;
  left: 72px;
  padding: 10px;
  top: 64px;
}
.user-profile ul li {
  margin-bottom: 5px;
}
.user-profile {
  cursor: pointer;
}

.sign-out {
  outline: none;
  color: var(--primary);
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
}
.offcanvas.show {
  display: block !important;
  visibility: visible !important;
}
</style>

<template >
  <li v-if="!checkUser">
    <a
        class="btn btn-white btn-square btn-shadow"
        data-bs-toggle="offcanvas"
        href="#offcanvasLogin"
        role="button"
        aria-controls="offcanvasLogin"
    >
      <i class="flaticon-user"></i>
    </a>
  </li>
  <li v-else>
    <div class="user-profile"  @click="showInfoUser">
      <img src="#" alt="User" class="user-avatar" id="userAvatar">
      <div class="dropdown-menu" id="infoUser">
        <ul>
          <li><a href="#">Thông tin cá nhân</a></li>
          <li><a href=""> <router-link to="/shop-cart" class="text-primary"
          >Giỏ hàng</router-link
          ></a></li>
          <li><a class="sign-out" @click="signOut">Đăng xuất</a></li>
        </ul>
      </div>
    </div>
  </li>
</template>
