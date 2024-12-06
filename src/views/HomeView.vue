<template>
  <div class="home">
    <div class="container d-flex flex-column justify-content-center text-center mt-3">
      <h1>Lista de Juegos Disponibles</h1>
      
      <div v-if="isLoading">Cargando...</div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
    <div v-if="games && games.length" class="d-flex flex-wrap justify-content-center gap-5 mt-3 mb-3">
      <Card 
        v-for="game in games" 
        :key="game.id"
        :game="game"
        @click="goToOpinion(game.id)" 
      />   
    </div> 
  </div>
</template>

// HomeView.vue
<script setup>
import { onMounted, computed } from 'vue';  
import { useStore } from 'vuex';
import Card from '@/components/Card.vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();


const games = computed(() => store.getters.games);
const isLoading = computed(() => store.getters.isLoading);
const error = computed(() => store.getters.error);


const goToOpinion = (gameId) => {
  const game = store.getters.games.find(g => g.id === gameId); 
  store.dispatch('setSelectedGame', game);  
  router.push({ name: 'OpinionView', params: { id: game.id } }); 
};

onMounted(() => {
  store.dispatch('fetchGames'); 
});
</script>

