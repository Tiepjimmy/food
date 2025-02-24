<template>
  <div class="page-content bg-white">
    <div class="coming-wrapper overflow-hidden">
      <div class="container">
        <img
          class="bg-img dz-move"
          src="../assets/images/background/pic17.png"
          alt="/"
        />
        <div class="row">
          <div class="col-lg-8 m-auto">
            <div class="inner-content text-center">
              <div class="logo-header">
                <RouterLink to="/" class="logo anim-logo"
                  ><img src="../assets/images/logo.png" alt="/"
                /></RouterLink>
              </div>
              <h3 class="coming-head">WE ARE COMING SOON!</h3>
              <p class="coming-para">Stay tuned for something amazing</p>
              <!-- <Vue3Lottie
                animationLink="https://assets10.lottiefiles.com/packages/lf20_soCRuE.json"
                :animationData="file"
                :height="500"
                :width="500"
              /> -->
              <Vue3Lottie class="coming-media" :animationData="AstronautJSON" />
            </div>
            <div class="middle-content">
              <h5 class="font-weight-400 m-b20">
                Subscribe to our mailing list to get latest updates
              </h5>
              <Footer2Subscrption title="Send Request" />
              <div class="dz-social-icon text-center">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      class="text-dark"
                      href="https://www.facebook.com/"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="text-dark"
                      href="https://twitter.com/"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="text-dark"
                      href="https://www.youtube.com/"
                    >
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="text-dark"
                      href="https://www.instagram.com/"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="text-dark"
                      href="https://www.linkedin.com/"
                    >
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="coming-footer text-center">
              <p>
                © Copyrights
                <span
                  class="heart"
                  @click="(e) => e.target.classList.toggle('heart-blast')"
                ></span>
                by
                <a href="https://dexignzone.com/" target="_blank">DexignZone</a>
                | 2023 All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer2Subscrption from "../Layouts/Footer2Subscrption.vue";
import AstronautJSON from "../assets/json/coming-soon.json";

import { Vue3Lottie } from "vue3-lottie";
export default {
  components: { Vue3Lottie, Footer2Subscrption },
  data() {
    return { AstronautJSON };
  },
};
</script>
