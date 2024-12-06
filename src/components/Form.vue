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

      <button type="submit" class="btn btn-primary">
        {{ isEditing ? "Actualizar" : "Agregar" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';


const emit = defineEmits(['add-opinion', 'update-opinion']);

const name = ref('');
const opinion = ref('');
const isEditing = ref(false);
const editingIndex = ref(null);


const props = defineProps(['editData']);
watch(
  () => props.editData,
  (newData) => {
    if (newData) {
      name.value = newData.name;
      opinion.value = newData.opinion;
      editingIndex.value = newData.index;
      isEditing.value = true;
    }
  }
);

const fxSubmitOpinion = () => {
  if (name.value && opinion.value) {
    if (isEditing.value) {
      emit('update-opinion', { index: editingIndex.value, name: name.value, opinion: opinion.value });
      isEditing.value = false;
    } else {
      emit('add-opinion', { name: name.value, opinion: opinion.value });
    }
    name.value = '';
    opinion.value = '';
  }
};
</script>
