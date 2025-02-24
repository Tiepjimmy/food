<script setup></script>

<template>
  <div class="page-content bg-white">
    <!-- Construction -->
    <section class="content-inner under-construction" id="app-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-5">
            <div class="inner-construction">
              <h3 class="dz-head">
                We are digging<br />
                deep down
              </h3>
              <p class="const-p">
                We are currently facing some issues with our system and our team
                is working hard to resolve it. You can subscribe to our mailing
                list if you want to get notified
              </p>
              <div class="space-right m-b25">
                <form class="dzSubscribe" action="#" method="post">
                  <div class="dzSubscribeMsg text-white"></div>
                  <div class="input-group">
                    <input
                      name="dzEmail"
                      required="required"
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Email:"
                    />
                    <button
                      name="submit"
                      value="submit"
                      type="submit"
                      class="btn btn-primary w-100 btn-hover-3"
                    >
                      <span class="btn-text" data-text="Subscribe"
                        >Subscribe</span
                      >
                    </button>
                  </div>
                </form>
              </div>
              <p class="font-14">You can also follow us on</p>
              <div class="dz-social-icon">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-md text-dark"
                      href="https://www.facebook.com/"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-md text-dark"
                      href="https://twitter.com/"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-md text-dark"
                      href="https://www.youtube.com/"
                    >
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-md text-dark"
                      href="https://www.instagram.com/"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="btn-social btn-md text-dark"
                      href="https://www.linkedin.com/"
                    >
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="construction-media">
              <img
                class="move-1"
                src="../assets/images/background/pic18.png"
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Construction -->
  </div>
</template>
