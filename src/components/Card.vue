<template>
  <div class="card" style="width: 18rem;">
    <img :src="imageUrl" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">{{ name }}</h5>
    </div>
    <ul class="list-group list-group-flush text-center">
      <li class="list-group-item">Rating: {{rating}}</li>
      <li class="list-group-item">Released: {{released}}</li>
      <li class="list-group-item">Update: {{updated}}</li>
    </ul>
    <div class="card-body d-flex justify-content-center gap-3">      
      <button class="btn btn-primary">Opinar</button>            
      <button 
        class="btn" 
        v-bind:class="{ 'text-danger': liked, 'text-muted': !liked }" 
        @click="likeBtn">
        <i class="fas fa-heart"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


defineProps({
  name: String,
  rating: Number,
  released: String,
  updated: String,
  imageUrl: String,
})

const liked = ref(false);

const likeBtn = () => {
  liked.value = !liked.value;
};
</script>

<style scoped>

</style>
