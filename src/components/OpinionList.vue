<template>
    <div class="container mt-4">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Opinión
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>Opinión: FX_OPINION_USER</p>
              <div class="d-flex justify-content-between">
                <button class="btn btn-warning">Eliminar</button>
                <button class="btn btn-danger">Editar</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OpinionList"
  }
  </script>
  
  <style scoped>
  
  </style>
  