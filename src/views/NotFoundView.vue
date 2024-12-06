<template>
  <div class="not-found-view">
    <NotFoundMessage />
  </div>
</template>

<script>
import NotFoundMessage from '@/components/NotFoundMessage.vue';

export default {
  name: "NotFoundView",
  components: {
    NotFoundMessage,
  },
};
</script>




<style scoped>
.not-found-view {
  background-color: black;
  min-height: calc(100vh - (56px + 112px));  
  }
</style>