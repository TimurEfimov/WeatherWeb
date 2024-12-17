<script setup>
import Search from './Search.vue'
import { defineProps } from 'vue'

defineProps({
  maxtemp: Number,
  mintemp: Number,
  humidity: Number,
  cloudcover: Number,
  wind: Number,
  desc: String,
})
</script>

<template>
  <div
    class="w-[526px] h-full fixed right-0 top-0 z-20 text-lg py-10 pr-[137px] pl-9 max-xl:w-[420px] max-xl:pr-11 max-lg:w-full max-lg:static max-lg:px-40 max-lg:min-h-screen max-sm:px-20"
    style="backdrop-filter: blur(10px)"
  >
    <Search />
    <h4 class="my-11">Weather Details...</h4>
    <div class="flex flex-col gap-[30px]">
      <h2 class="uppercase font-medium">{{ desc }}</h2>

      <div class="flex justify-between">
        <p>Temp max</p>
        <div class="flex gap-6">
          <span>{{ Math.round(maxtemp) }}°</span>
          <img src="/public/tempmax.svg" alt="" />
        </div>
      </div>

      <div class="flex justify-between">
        <p>Temp min</p>
        <div class="flex gap-6">
          <span>{{ Math.round(mintemp) }}°</span>
          <img src="/public/tempmin.svg" alt="" />
        </div>
      </div>

      <div class="flex justify-between">
        <p>Humidity</p>
        <div class="flex gap-6">
          <span>{{ humidity }}%</span>
          <img src="/public/humidity.svg" alt="" />
        </div>
      </div>

      <div class="flex justify-between">
        <p>Cloudy</p>
        <div class="flex gap-6">
          <span>{{ cloudcover }}%</span>
          <img src="/public/cloudcover.svg" alt="" />
        </div>
      </div>

      <div class="flex justify-between">
        <p>Wind</p>
        <div class="flex gap-6">
          <span class="whitespace-nowrap">{{ wind }}km/h</span>
          <img src="/public/wind.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  opacity: 0.6;
}
</style>
