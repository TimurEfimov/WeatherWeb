import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    weather: [],
    localCountry: '',
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather
    },
    setCountry(state, country) {
      state.localCountry = country
    },
  },
  actions: {
    async fetchWeather({ commit, state }) {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${state.localCountry}&appid=76ddaab28d7ed9c86e748832761638c9`,
        )
        commit('setWeather', data)
      } catch (err) {
        console.log(err)
        alert('Не получилось найти такой город')
      }
    },
    fetchUserCountry(context) {
      context.commit('setCountry', 'London')
    },
  },
  getters: {
    weather(state) {
      return state.weather
    },
  },
})

// 47b0cfc3f247f2ef841ae85e0ee8e611
