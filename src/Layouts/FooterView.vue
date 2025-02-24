<template>
  <footer class="site-footer style-1 bg-dark" id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-5 col-lg-5 col-md-12 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="dz-form-card bg-primary">
              <div class="section-head">
                <h4 class="title m-0">Contact us</h4>
                <p class="m-t10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <form
                ref="form"
                class="dzForm dezPlaceAni"
                method="POST"
                @submit.prevent="sendEmail"
              >
                <div class="dzSubscribeMsg text-white"></div>
                <input
                  type="hidden"
                  class="form-control"
                  name="user_name"
                  value="Contact"
                />
                <input
                  type="hidden"
                  class="form-control hidden"
                  name="user_email"
                  value="0"
                />
                <div class="dzFormMsg"></div>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="input-group input-line">
                      <input
                        name="dzName"
                        required
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="input-group input-line">
                      <input
                        name="dzEmail"
                        required
                        type="text"
                        class="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="input-group input-line">
                      <input
                        name="dzOther[Subject]"
                        required
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="input-group input-line">
                      <textarea
                        name="dzMessage"
                        required
                        class="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <button
                      type="submit"
                      name="submit"
                      value="submit"
                      class="btn btn-md btn-white btn-hover-1"
                      @click="sendEmail"
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-5 wow fadeInUp">
            <div class="widget widget_getintuch">
              <h5 class="footer-title">Contact</h5>
              <ul>
                <li>
                  <i class="flaticon-placeholder"></i>
                  <p>
                    1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad
                  </p>
                </li>
                <li>
                  <i class="flaticon-telephone"></i>
                  <p>
                    +91 987-654-3210<br />
                    +91 123-456-7890
                  </p>
                </li>
                <li>
                  <i class="flaticon-email-1"></i>
                  <p>
                    info@example.com<br />
                    info@example.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div class="widget widget_services">
              <h5 class="footer-title">Our Links</h5>
              <ul>
                <li>
                  <RouterLink to="/"><span>Home</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/about-us"><span>About Us</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/services"><span>Services</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/team"><span>Team</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/blog-standard"><span>Blog</span></RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <div class="widget widget_services">
              <h5 class="footer-title">Help Center</h5>
              <ul>
                <li>
                  <RouterLink to="/faq"><span>FAQ</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-style-1"><span>Shop</span></RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-style-2"
                    ><span>Category Filter</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/testimonial"
                    ><span>Testimonials</span></RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/contact-us"
                    ><span>Contact Us</span></RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom Part -->
    <div class="container">
      <div class="footer-bottom">
        <div class="row">
          <div class="col-xl-6 col-md-6 text-md-start">
            <p>Copyright 2023 All rights reserved.</p>
          </div>
          <div class="col-xl-6 col-md-6 text-md-end">
            <span class="copyright-text"
              >Crafted With
              <span
                class="heart"
                @click="(e) => e.target.classList.toggle('heart-blast')"
              ></span>
              by
              <a href="https://dexignzone.com/" target="_blank"
                >DexignZone</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <img
      class="bg1 dz-move"
      src="../assets/images/background/pic5.png"
      alt="/"
    />
    <img
      class="bg2 dz-move"
      src="../assets/images/background/pic6.png"
      alt="/"
    />
  </footer>
</template>

<script>
import emailjs from "@emailjs/browser";
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },

  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "emailId",
          "template_0byuv32",
          this.$refs.form,
          "qUDIPykc776NYHv4m"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            let succesMgs = document.querySelector(".dzSubscribeMsg");
            succesMgs.innerHTML = `
            <div class="gen alert alert-success">
                You have successfully subscribed.
            </div>
            `;
            setTimeout(() => {
              succesMgs.innerHTML = "";
            }, 3000);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>
