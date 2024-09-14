<template>
  <header class="app-header">
    <h1 class="app-title">Users</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>

.app-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 64px;
  gap: 10px;

  height: 56px;

  background-color: #CCE6E2;
  box-shadow: 0px 1px 0px #93B4B0;
}

.app-title {
  width: 63px;
  height: 28px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  color: #555555;

  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
