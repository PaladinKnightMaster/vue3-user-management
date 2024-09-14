<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
  components: {
    HomePage,
  },
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
