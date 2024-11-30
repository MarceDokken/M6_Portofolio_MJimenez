<template>
  <div>        
    <div class=" container d-flex flex-column justify-content-center text-center mt-3">
      <h1>Lista de Juegos Disponibles</h1>  
      <!-- Manejador de Carga y Error-->
      <div v-if="isLoading">Cargando...</div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
    <div v-if="data && data.results" class="d-flex flex-wrap justify-content-center gap-5 mt-3 mb-3">
    <Card 
        v-for="game in data.results" 
        :key="game.id" 
        :name="game.name" 
        :rating="game.rating" 
        :released="game.released" 
        :updated="game.updated"
        :imageUrl="game.background_image"
          
    />   
    </div> 

  </div> 
</template>

<script setup>
/* 1. Declarar las variables reactivas */
import { onMounted, ref } from 'vue';
import Card from '@/components/Card.vue';

const isLoading = ref(false); 
const error = ref(null); 
const data = ref(null); 

/* 2. Definir las constantes para la URL y la API Key */
const URL = 'https://api.rawg.io/api/games'; 
const apiKey = 'a5b4927942f64f7d888c1d2ae1507b59'; 

/* 3. Función para obtener los datos de la API */
async function fetchData() {
  isLoading.value = true; 
  error.value = null; 
  data.value = null; 

  try {
    const response = await fetch(`${URL}?key=${apiKey}`);   

    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    // 4. Guardar los datos obtenidos de la API
    data.value = await response.json();    
  } catch (err) {
    error.value = err.message; 
  } finally {
    isLoading.value = false; 
  }
}

onMounted(()=> {
  fetchData();
});



</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>