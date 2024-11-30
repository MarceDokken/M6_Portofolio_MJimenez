<template>
  <div>
    <!-- 1. Formulario o interacción para disparar el fetch -->
    <button @click="fetchData">Cargar Datos</button>

    <!-- 2. Indicador de carga -->
    <div v-if="isLoading">Cargando...</div>

    <!-- 3. Mensaje de error -->
    <div v-if="error" class="error">{{ error }}</div>

    <!-- 4. Mostrar los datos obtenidos (Resultado de la API) -->
    <div v-if="data">
      <pre>{{ data }}</pre> <!-- Aquí puedes formatear los datos como desees -->
    </div>
  </div>
</template>

<script setup>
/* 1. Declarar las variables reactivas */
import { ref } from 'vue';

const isLoading = ref(false); // Estado de carga
const error = ref(null); // Estado de error
const data = ref(null); // Datos obtenidos de la API

/* 2. Definir las constantes para la URL y la API Key */
const apiKey = 'YOUR_API_KEY'; // Tu API Key, si es necesario
const URL = 'https://api.example.com/data'; // URL de la API, reemplazar con la correcta

/* 3. Función para obtener los datos de la API */
async function fetchData() {
  isLoading.value = true; // Iniciar carga
  error.value = null; // Limpiar errores previos
  data.value = null; // Limpiar datos previos

  try {
    const response = await fetch(`URL?key=apiKey`); // Solicitud con URL y API Key

    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    // 4. Guardar los datos obtenidos de la API
    data.value = await response.json();
  } catch (err) {
    error.value = err.message; // Manejar errores
  } finally {
    isLoading.value = false; // Desactivar el indicador de carga
  }
}
</script>

<style scoped>
/* 5. Estilos básicos */
.error {
  color: red;
  font-weight: bold;
}
</style>