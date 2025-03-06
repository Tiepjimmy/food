<script lang="ts">
import {defineComponent, onBeforeMount, ref} from "vue";
import CommonBanner from "../elements/CommonBanner.vue";
import testimonialSmallPic1 from "@/assets/images/testimonial/small/pic1.jpg";
import testimonialSmallPic2 from "@/assets/images/testimonial/small/pic2.jpg";
import testimonialSmallPic3 from "@/assets/images/testimonial/small/pic3.jpg";
import testimonialSmallPic4 from "@/assets/images/testimonial/small/pic4.jpg";
import testimonialSmallPic7 from "@/assets/images/testimonial/small/pic5.jpg";
import modalMiniPic1 from "@/assets/images/modal/mini/pic1.jpg";
import modalMiniPic2 from "@/assets/images/modal/mini/pic2.jpg";
import modalMiniPic3 from "@/assets/images/modal/mini/pic3.jpg";
import modalMiniPic4 from "@/assets/images/modal/mini/pic4.jpg";
import SpacialMenu from "../elements/SpacialMenu.vue";
import Header4 from "../Layouts/Header4.vue";
import Footer4 from "../Layouts/Footer4.vue";
// import Swal from "sweetalert2";
import {getAssetPath} from "@/core/helpers/assets";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "product-detail",
  components: {
    SpacialMenu,
    Header4,
    Footer4,
    CommonBanner,
  },
  props:{
    isProduct: String
  },
  setup(props) {

    const productDetail = ref({});
    const price = ref(0);
    const productName = ref();

    const avatar = ref([
      { img: testimonialSmallPic1 },
      { img: testimonialSmallPic2 },
      { img: testimonialSmallPic3 },
      { img: testimonialSmallPic4 },
      { img: testimonialSmallPic7 },
    ]);

    const addList = ref([
      { img: modalMiniPic1, title: "French Frise" },
      { img: modalMiniPic2, title: "Extra Cheese" },
      { img: modalMiniPic3, title: "Coca Cola" },
      { img: modalMiniPic4, title: "Choco Lava" },
    ]);

    const navItem = ref([
      { title: "Description" },
      { title: "Additional Information" },
      { title: "Product Review" },
    ]);

    const getProductDetail = async () => {
      try {
        // const response = await ApiService.get('viewDetail/'+ props.isProduct ?? 1);
        const response = await ApiService.get('menu/viewDetail/1');
        if (response.status === 200)  {
          productDetail.value = response?.data;
          price.value = response?.data.price;
          productName.value = response?.data.menuName;
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
    }

    let Quantity = ref(1);
    let addActive = ref(0);
    function productQuantityBtn(action) {
      switch (action) {
        case "up":
          // Quantity.value < 5 ? (Quantity.value += 1) : Quantity.value;
          Quantity.value += 1
          price.value = price.value + productDetail.value.price;
          break;
        case "down":
          Quantity.value > 1 ? (Quantity.value -= 1) : Quantity.value;
          Quantity.value > 1 ? (Quantity.value -= 1) : Quantity.value;
          price.value = Quantity.value > 1 ? (price.value - productDetail.value.price) : productDetail.value.price;
          // Quantity.value > 1 ? (Quantity.value -= 1) : Quantity.value;
          break;
        default:
          break;
      }
    }

    const useReting = (rating) => {
      let start = document.querySelectorAll("#stars>.star");
      for (let i = 0; i < rating + 1; i++) {
        start[i].classList.add("hover");
      }
    };
    const useRetingover = () => {
      document
          .querySelectorAll("#stars>.star")
          .forEach((el) => el.classList.remove("hover"));
    };

    const addRating = (rating) => {
      let start = document.querySelectorAll("#stars>.star");
      start.forEach((el) => el.classList.remove("selected"));
      for (let i = 0; i < rating + 1; i++) {
        start[i].classList.add("selected");
      }
      alert(`Thanks! You rated this ${rating + 1} stars.`);
    };

    onBeforeMount(() => {
      getProductDetail();
    });

    return {
      productDetail,
      price,
      productName,
      avatar,
      Quantity,
      addList,
      addActive,
      navItem,
      testimonialSmallPic1,
      productQuantityBtn,
      useReting,
      getAssetPath,
      useRetingover,
      addRating,
    };
  },
});


</script>

<template>
  <div class="page-content bg-white">
    <Header4 />
    <CommonBanner
      :img="testimonialSmallPic1"
      :title="productName"
    />
    <section class="content-inner-1 overflow-hidden">
      <div class="container">
        <div class="row product-detail">
          <div class="col-lg-4 col-md-5">
            <div class="detail-media m-b30">
              <img src="../assets/images/modal/pic1.jpg" alt="/" />
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="detail-info">
              <span class="badge">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="16"
                    height="16"
                    stroke="#0F8A65"
                  />
                  <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                </svg>
                Pure veg
              </span>
              <div class="dz-head">
                <h2 class="title">{{productDetail.menuName}}</h2>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <span
                    ><strong class="text-dark">{{productDetail.ratingStar}}</strong> - {{productDetail.score}} Reviews</span
                  >
                </div>
              </div>
              <p class="text">
                {{productDetail.shortDescription}}
              </p>
              <ul class="detail-list">
                <li>Price <span class="text-primary m-t5">{{price}}</span></li>
                <li>
                  Quantity
                  <div class="btn-quantity style-1 m-t5">
                    <div class="input-group bootstrap-touchspin">
                      <input
                        id="demo_vertical2"
                        type="text"
                        :value="Quantity"
                        name="demo_vertical2"
                        class="form-control"
                        style="display: block"
                      /><span class="input-group-btn-vertical"
                        ><button
                          @click="productQuantityBtn('up')"
                          class="btn btn-default bootstrap-touchspin-up"
                          type="button"
                        >
                          <i class="ti-plus"></i></button
                        ><button
                          @click="productQuantityBtn('down')"
                          class="btn btn-default bootstrap-touchspin-down"
                          type="button"
                        >
                          <i class="ti-minus"></i></button
                      ></span>
                    </div>
                  </div>
                </li>
              </ul>
              <h6 class="title">Add On</h6>
              <ul class="add-product">
                <li v-for="(item, ind) in addList" :key="ind">
                  <div class="mini-modal">
                    <div class="dz-media">
                      <img :src="item.img" alt="/" />
                    </div>
                    <div class="dz-content">
                      <p class="title">French Frise</p>
                      <div class="form-check search-content">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="d-lg-flex justify-content-between">
                <ul class="modal-btn-group">
                  <li>
                    <RouterLink
                      to="/shop-cart"
                      class="btn btn-primary btn-hover-1"
                      ><span
                        >Add To Cart
                        <i class="flaticon-shopping-bag-1 m-l10"></i
                      ></span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/shop-checkout"
                      class="btn btn-outline-secondary btn-hover-1"
                      ><span
                        >Buy Now <i class="flaticon-shopping-cart m-l10"></i>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
                <ul class="avatar-list avatar-list-stacked">
                  <li class="avatar" v-for="(item, ind) in avatar" :key="ind">
                    <img :src="item.img" alt="" />
                  </li>
                  <li class="avatar"><span>150+</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="content-inner pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="nav nav-tabs tabs-style-1">
              <li class="nav-item" v-for="(item, ind) in navItem" :key="ind">
                <button
                  @click="addActive = ind"
                  :class="`nav-link ${addActive === ind ? 'active' : ''}`"
                  data-bs-toggle="tab"
                  href="javascript:void(0)"
                >
                  <i class="icon-globe"></i>
                  <span class="d-none d-md-inline-block m-l10">{{
                    item.title
                  }}</span>
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div
                id="web-design-1"
                :class="`tab-pane ${addActive === 0 ? 'active' : ''}`"
              >
                <p class="m-b10">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't hidden in the
                  middle of text.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <ul class="list-check primary">
                  <li>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </li>
                </ul>
              </div>
              <div
                id="graphic-design-1"
                :class="`tab-pane ${addActive === 1 ? 'active' : ''}`"
              >
                <table class="table-bordered check-tbl">
                  <tr>
                    <td>Cheese Burger</td>
                    <td>Small, Medium & Large</td>
                  </tr>
                  <tr>
                    <td>Toppings</td>
                    <td>Onion, Tomato, Olives</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>
                      <span class="rating-bx">
                        <i class="fas fa-star text-secondary"></i>
                        <i class="fas fa-star text-secondary"></i>
                        <i class="fas fa-star text-secondary"></i>
                        <i class="fas fa-star text-secondary"></i>
                        <i class="far fa-star text-secondary"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping Charges</td>
                    <td>Free Shipping</td>
                  </tr>
                  <tr>
                    <td>Add More</td>
                    <td>Coke, Cheese, Choco lava</td>
                  </tr>
                  <tr>
                    <td>Delivery Time</td>
                    <td>30 mins</td>
                  </tr>
                </table>
              </div>
              <div
                id="developement-1"
                :class="`tab-pane ${addActive === 2 ? 'active' : ''}`"
              >
                <div class="comments-area" id="comments">
                  <ul class="comment-list">
                    <li class="comment">
                      <div class="comment-body">
                        <div class="comment-author vcard">
                          <img
                            class="avatar photo"
                            src="../assets/images/testimonial/mini/pic1.jpg"
                            alt="/"
                          />
                          <cite class="fn">Monsur Rahman Lito</cite>
                        </div>
                        <div class="star-rating" data-rating="2">
                          <i class="fas fa-star text-secondary"></i>
                          <i class="fas fa-star text-secondary"></i>
                          <i class="far fa-star text-secondary"></i>
                          <i class="far fa-star text-secondary"></i>
                          <i class="far fa-star text-secondary"></i>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <!-- list END -->
                    </li>
                    <li class="comment">
                      <div class="comment-body">
                        <div class="comment-author vcard">
                          <img
                            class="avatar photo"
                            src="../assets/images/testimonial/mini/pic2.jpg"
                            alt="/"
                          />
                          <cite class="fn">Jake Johnson</cite>
                        </div>
                        <div class="star-rating" data-rating="3">
                          <i class="fas fa-star text-secondary"></i>
                          <i class="fas fa-star text-secondary"></i>
                          <i class="fas fa-star text-secondary"></i>
                          <i class="far fa-star text-secondary"></i>
                          <i class="far fa-star text-secondary"></i>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </li>
                    <li class="comment">
                      <div class="comment-body">
                        <div class="comment-author vcard">
                          <img
                            class="avatar photo"
                            src="../assets/images/testimonial/mini/pic3.jpg"
                            alt="/"
                          />
                          <cite class="fn">John Doe</cite>
                        </div>
                        <div class="star-rating" data-rating="4">
                          <i class="fas fa-star text-secondary"></i>
                          <i class="fas fa-star text-secondary"></i>
                          <i class="fas fa-star text-secondary"></i>
                          <i class="fas fa-star text-secondary"></i>
                          <i class="far fa-star text-secondary"></i>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="comment-respond style-1" id="respond">
                  <h3 class="comment-reply-title mb-4" id="reply-title">
                    Add a review
                  </h3>
                  <form class="comment-form" id="commentform" method="post">
                    <p class="comment-form-author">
                      <label for="author"
                        >Name <span class="required">*</span></label
                      >
                      <input
                        type="text"
                        name="dzName"
                        placeholder="Author"
                        id="author"
                      />
                    </p>
                    <p class="comment-form-email">
                      <label for="email"
                        >Email <span class="required">*</span></label
                      >
                      <input
                        type="text"
                        placeholder="Email"
                        name="dzEmail"
                        id="email"
                      />
                    </p>
                    <div class="comment-form-rating d-flex p-lr10">
                      <label class="pull-left m-r10 m-b20">Your Rating</label>
                      <div class="rating-widget">
                        <!-- Rating Stars Box -->
                        <div class="rating-stars">
                          <ul id="stars">
                            <li class="star" title="Poor" data-value="1">
                              <i
                                class="fas fa-star fa-fw"
                                @mouseenter="useReting(0)"
                                @mouseleave="useRetingover"
                                @click="addRating(0)"
                              ></i>
                            </li>
                            <li class="star" title="Fair" data-value="2">
                              <i
                                class="fas fa-star fa-fw"
                                @mouseenter="useReting(1)"
                                @mouseleave="useRetingover"
                                @click="addRating(1)"
                              ></i>
                            </li>
                            <li class="star" title="Good" data-value="3">
                              <i
                                class="fas fa-star fa-fw"
                                @mouseenter="useReting(2)"
                                @mouseleave="useRetingover"
                                @click="addRating(2)"
                              ></i>
                            </li>
                            <li class="star" title="Excellent" data-value="4">
                              <i
                                class="fas fa-star fa-fw"
                                @mouseenter="useReting(3)"
                                @mouseleave="useRetingover"
                                @click="addRating(3)"
                              ></i>
                            </li>
                            <li class="star" title="WOW!!!" data-value="5">
                              <i
                                class="fas fa-star fa-fw"
                                @mouseenter="useReting(4)"
                                @mouseleave="useRetingover"
                                @click="addRating(4)"
                              ></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p class="comment-form-comment">
                      <label for="comment">Comment</label>
                      <textarea
                        rows="10"
                        name="comment"
                        placeholder="Type Review Here"
                        id="comment"
                      ></textarea>
                    </p>
                    <p class="form-submit">
                      <button
                        type="button"
                        class="btn btn-primary btn-hover-2"
                        id="submit"
                      >
                        Submit Now
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="content-inner-1 pt-0">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title">Special Menu</h2>
        </div>
        <SpacialMenu />
      </div>
    </section>
    <Footer4 />
  </div>
</template>
