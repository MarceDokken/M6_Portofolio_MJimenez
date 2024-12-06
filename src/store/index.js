// store/index.js
import { createStore } from 'vuex';

export default createStore({
  
  state: {
    games: [],
    selectedGame: null,
    isLoading: false,
    error: null,
  },
  
  actions: {
    async fetchGames({ commit }) {
      commit('setLoading', true);
      commit('setError', null);

      const apiKey = 'a5b4927942f64f7d888c1d2ae1507b59';
      const URL = 'https://api.rawg.io/api/games';

      try {
        const response = await fetch(`${URL}?key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        commit('setGames', data.results);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },

    setSelectedGame({ commit }, game) {
      commit('setSelectedGame', game);
    },
  },

  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    setSelectedGame(state, game) {
      state.selectedGame = game;
    },
    setLoading(state, status) {
      state.isLoading = status;
    },
    setError(state, error) {
      state.error = error;
    },
  },
 
  getters: {
    games: (state) => state.games,
    selectedGame: (state) => state.selectedGame,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
    getGameById: (state) => (id) => {
      return state.games.find((game) => game.id === id);
    },
  },
});
