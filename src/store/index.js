import { createStore } from 'vuex'

const store = createStore({
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
    fetchWeather({ commit, state }) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${state.localCountry}&appid=76ddaab28d7ed9c86e748832761638c9`
          .then((response) => response.json)
          .then((data) => {
            commit('setWeather', data)
            if (data.error) {
              alert('Не получилось найти такой город')
            }
          })
          .catch((err) => {
            console.error(err)
          }),
      )
    },
    fetchUserCountry(context) {
        context.commit('setCountry', 'London')
    }
  },
  getters: {
    weather(state) {
      return state.weather
    },
  },
})

export default store

// 47b0cfc3f247f2ef841ae85e0ee8e611
