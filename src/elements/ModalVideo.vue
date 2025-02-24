<script setup>
function openModal() {
  document
    .getElementById("modal_container")
    .setAttribute("style", "display:inline-block;");
}
function closeModal() {
  document
    .getElementById("modal_container")
    .setAttribute("style", "display:none;");
}
</script>

<template>
  <div id="modal_container" @click="closeModal">
    <aside>
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <iframe
          src="https://www.youtube.com/embed/XJb1G9iRoL4"
          frameborder="0"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      </div>
    </aside>
  </div>
  <section class="content-inner pb-0">
    <div class="container">
      <div class="section-head text-center">
        <h2 class="title">We Invite you to Visit Our Restaurant</h2>
        <p class="about-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="about-media dz-media rounded-md">
            <img src="../assets/images/background/pic11.jpg" alt="/" />
            <a
              class="video video-btn popup-youtube"
              href="javascript:void(0)"
              @click="openModal"
            >
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#modal_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.726);
  display: none;
}
#modal_container > aside {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}

.modal-content {
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 600px;
}

.close {
  color: #aaa;
  float: left;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: rgb(255, 255, 255);
  text-decoration: none;
  cursor: pointer;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
