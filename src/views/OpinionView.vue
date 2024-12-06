<template>

<div class="container">
  <div v-bind="$attrs" class="d-flex justify-content-center flex-column mt-3">
    <h1 class="text-center">Escribe tu opinión para el juego: {{ game.name }}</h1>
  </div>
</div>

<div class="container d-flex justify-content-center mt-3">
  <div class="card mb-3" style="max-height: 250px; border: none; border-radius: 10px;">
    <div class="row g-0">     
      <div class="col-md-12 d-flex justify-content-center">
        <img 
          :src="game.background_image"
          class="img-fluid"
          alt="Imagen del juego"
          style="max-height: 250px; width: auto; object-fit: contain; border-radius: 10px; border: 3px solid black;">
      </div>
    </div>
  </div>
</div>
 
  <Form 
    @add-opinion="addOpinion" 
    @update-opinion="updateOpinion" 
    :editData="editData" 
  />

  <div v-bind="$attrs" class="d-flex justify-content-center mt-3 text-center">
    <h2>A continuación podrás ver tu opinión</h2>
  </div>

  <div v-if="opinions.length === 0" class="container alert alert-danger text-center" style="opacity: 0.9;">
    No existen opiniones para mostrar.
  </div>
  
  <OpinionList 
    :opinions="opinions" 
    @delete-opinion="deleteOpinion" 
    @edit-opinion="prepareEditOpinion" 
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Form from '@/components/Form.vue';
import OpinionList from '@/components/OpinionList.vue';

const store = useStore();
const route = useRoute();

const gameId = route.params.id;
const game = computed(() => store.getters.getGameById(parseInt(gameId)) || store.state.selectedGame);

const opinions = ref([]);
const editData = ref(null);

const addOpinion = (newOpinion) => {
  opinions.value.push(newOpinion);
};

const updateOpinion = ({ index, name, opinion }) => {
  opinions.value[index] = { name, opinion };
  editData.value = null; 
};

const deleteOpinion = (index) => {
  opinions.value.splice(index, 1);
};

const prepareEditOpinion = ({ index, name, opinion }) => {
  editData.value = { index, name, opinion };
};
</script>

