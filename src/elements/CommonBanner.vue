<script lang="ts">
import { RouterLink } from 'vue-router';
import {defineComponent, onBeforeMount, ref} from "vue";
import {getAssetPath} from "@/core/helpers/assets";
//
// defineProps({
//   img: String,
//   heading: String,
//   title: String,
// });



export default defineComponent({
  name: "common-banner",
  components: {
    RouterLink
  },
  props:{
    img: String,
    title: String
  },
  setup(props) {
    const images = ref(props.img);
    const name = ref(props.title);
    return {
      images,
      name
    };
  },
});

</script>

<template>
  <div
    class="dz-bnr-inr style-1 text-center bg-parallax bg-parallax"
    :style="`  background-image: url(${img});
      background-size: cover;
      background-position: center;`"
  >
    <div class="container">
      <div class="dz-bnr-inr-entry">
        <h1>{{ name }}</h1>
        <!-- Breadcrumb Row -->
        <nav aria-label="breadcrumb" class="breadcrumb-row">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ name }}
            </li>
          </ul>
        </nav>
        <!-- Breadcrumb Row End -->
      </div>
    </div>
  </div>
</template>
