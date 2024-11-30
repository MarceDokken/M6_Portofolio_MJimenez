<template>
    <div class="container mt-4">
      <form @submit.prevent="fxSubmitOpinion">
        
        <div class="mb-3">
          <label for="nameInput" class="form-label">Nombre</label>
          <input 
            type="text" 
            class="form-control" 
            id="nameInput" 
            placeholder="Nombre" 
            v-model="name"
            required
          />
        </div>
  
        
        <div class="mb-3">
          <label for="opinionInput" class="form-label">Opinión</label>
          <textarea 
            class="form-control" 
            id="opinionInput" 
            rows="3" 
            placeholder="Escribe tu opinión aquí..." 
            v-model="opinion"
            required
          ></textarea>
        </div>  
        
        <button type="submit" class="btn btn-primary">Agregar</button>
      </form>
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped> 
  </style>
  