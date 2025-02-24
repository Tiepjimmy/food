<template>
  <span class="heart" @click="likeBtn"></span>
</template>

<script setup>
const likeBtn = (e) => {
  e.target.classList.toggle("heart-blast");
};
</script>
