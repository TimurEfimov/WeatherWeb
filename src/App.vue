<script setup>
import Header from './components/Header.vue'
import Info from './components/Info.vue'

import { useStore } from 'vuex'
import { onBeforeMount, computed } from 'vue'

const store = useStore()

onBeforeMount(() => {
  store.dispatch('fetchUserCountry')

  store.dispatch('fetchWeather')
})

return {
  store,
  weather: computed(() => store.getters.weather),
}
</script>

<template>
  <div class="px-28 py-9">
    <Header :city="weather.name" :day="weather.timezone" />
    <Info
      :maxtemp="weather.main.temp_max"
      :mintemp="weather.main.temp_min"
      :humidity="weather.main.humidity"
      :cloudcover="weather.clouds.all"
      :wind="weather.wind.speed"
    />
  </div>
</template>
