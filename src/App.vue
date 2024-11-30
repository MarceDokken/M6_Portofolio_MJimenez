<template>
  <div id="app" class="app-container d-flex flex-column min-vh-100">
    <NavBar />
    <main class="flex-grow-1">
      <!-- Aquí se renderiza el contenido de las vistas -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  min-height: 100vh; /* Cubre toda la altura de la pantalla */
  display: flex;
  flex-direction: column;
}


</style>