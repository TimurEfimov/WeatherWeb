<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const country = ref("")
const getData = () => {
  store.commit("setCountry", country.value)
  store.dispatch("fetchWeather")
  country.value = "";
}
</script>

<template>
  <form class="max-w-md mx-auto">
    <label for="location"></label>
    <div class="relative">
      <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        class="block w-full p-4 bg-transparent border-b outline-none"
        placeholder="Search Location..."
        v-model="country"
        @keyup.enter="getData"
        required
      />
    </div>
  </form>
</template>
