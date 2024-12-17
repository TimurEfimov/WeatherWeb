<template>
  <div class="max-lg:px-10 max-lg:py-8">
    <img src="/public/logo.svg" alt="logo" class="mt-9 ml-28 max-lg:m-0 max-lg:w-[60px] max-lg:h-[30px]"/>
    <div class="flex items-center gap-2 absolute bottom-9 left-28 max-lg:static max-lg:mt-44">
      <span class="text-[143px] max-lg:text-[120px]">{{ Math.round(temp) }}°</span>
      <div class="flex flex-col">
        <h3 class="text-6xl max-lg:text-5xl">{{ city }}</h3>
        <p class="text-lg max-lg:text-[16px]">{{ day }}</p>
      </div>
      <img src="/public/cloudy.svg" alt="cloudy" class="max-lg:w-[55px] max-lg:h-[55px]" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  city: String,
  day: Number,
  temp: Number,
})

</script>
