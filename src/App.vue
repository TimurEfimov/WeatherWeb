<script setup>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

import Header from './components/Header.vue'
import Info from './components/Info.vue'

const store = useStore()

onBeforeMount(() => {
  store.dispatch('fetchUserCountry')

  store.dispatch('fetchWeather')

})

  const weather = computed(() => store.getters.weather)
</script>

<template>
  <div class="max-lg:flex max-lg:flex-col">
    <Header :city="weather.name" :day="weather.timezone" :temp="weather.main.temp" />
    <Info
      :maxtemp="weather.main.temp_max"
      :mintemp="weather.main.temp_min"
      :humidity="weather.main.humidity"
      :cloudcover="weather.clouds.all"
      :wind="weather.wind.speed"
      :desc="weather.weather[0].description"
    />
  </div>
</template>
