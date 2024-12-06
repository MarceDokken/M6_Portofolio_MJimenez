<template>
  <div class="container mt-4 mb-5">
    <div class="accordion" id="accordionExample">
      <div 
        class="accordion-item" 
        v-for="(opinion, index) in opinions" 
        :key="index"
      >
        <h2 class="accordion-header">
          <button 
            class="accordion-button" 
            type="button" 
            data-bs-toggle="collapse" 
            :data-bs-target="'#collapse' + index" 
            aria-expanded="true" 
            :aria-controls="'collapse' + index"
          >
            Opinión creada por: {{ opinion.name }}
          </button>
        </h2>
        <div 
          :id="'collapse' + index" 
          class="accordion-collapse collapse show" 
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>Opinión: {{ opinion.opinion }}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-warning" @click="emitEditOpinion(index)">Editar</button>
              <button class="btn btn-danger" @click="$emit('delete-opinion', index)">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpinionList",
  props: {
    opinions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    emitEditOpinion(index) {
      this.$emit('edit-opinion', { index, ...this.opinions[index] });
    },
  },
};
</script>
