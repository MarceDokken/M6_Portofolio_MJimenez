<template>
  <div class="text-center d-flex flex-column justify-content-center align-items-center">
    <h1 class="display-5 text-danger mb-3">
      Esto no es un error, es un mensaje del más allá. <br /> ¡Busca en otro lado!
    </h1>
    <p class="text-white mb-3">La página que buscas no está disponible o no existe.</p>
    <router-link to="/" class="btn btn-danger mb-3">Regresar a inicio</router-link>
    <div class="d-flex justify-content-center">
      <img
        src="@/assets/NotFound/PuroHueso3.jpg"
        alt="Imagen Not Found"
        class="img-fluid rounded shadow-lg"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "NotFoundMessage",
};
</script>

<style scoped>

</style>
