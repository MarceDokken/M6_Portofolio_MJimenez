<template>
  <div class="card" style="width: 18rem;">
    <img :src="game.background_image" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">{{ game.name }}</h5>      
    </div>
    <ul class="list-group list-group-flush text-center">
      <li class="list-group-item">Rating: {{ game.rating }}</li>
      <li class="list-group-item">Released: {{ game.released }}</li>
      <li class="list-group-item">Updated: {{ game.updated }}</li>
    </ul>
    <div class="card-body d-flex justify-content-center gap-3">  
      <button class="btn btn-primary" @click="goToOpinion(game.id)">Opinar</button>
      <button 
        class="btn" 
        v-bind:class="{ 'text-danger': liked, 'text-muted': !liked }" 
        @click="likeBtn($event)"
      >
        <i class="fas fa-heart"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  game: Object, 
});

const liked = ref(false);

const likeBtn = (event) => {
 
  event.stopPropagation();
  liked.value = !liked.value;
};

</script>
