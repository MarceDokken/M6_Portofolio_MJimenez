<template>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">   
                
        <router-link to="/" class="navbar-brand text-white d-flex align-items-center">
        <i class="fas fa-gamepad me-2"></i>
          Games Opinion
        </router-link>
        
     




        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 text-center justify-content-lg-end">
            <li class="nav-item">              
                <router-link to="/" class="navbar-brand text-white d-flex align-items-center">
                <i class="fas fa-home me-2"></i>
                Home
                </router-link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
</style>