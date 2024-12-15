<template>
  <div>
    <img src="/public/logo.svg" alt="logo" />
    <div class="flex items-center gap-2 absolute bottom-9 left-28">
      <span class="text-[143px]">16°</span>
      <div class="flex flex-col">
        <h3 class="text-6xl">{{ city }}</h3>
        <p class="text-lg">{{ day }}</p>
      </div>
      <img src="/public/cloudy.svg" alt="cloudy" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  city: String,
  day: String,
})
</script>
