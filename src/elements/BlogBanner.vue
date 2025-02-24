<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  title: String,
});
</script>

<template>
  <div class="dz-breadcrumb-bnr">
    <div class="container">
      <nav aria-label="breadcrumb" class="breadcrumb-row">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
          <li class="breadcrumb-item">Blog</li>
          <li class="breadcrumb-item active">
            {{ title }}
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
