<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <CapacityComponent /> -->
    <ToDoList />
  </div>
</template>

<script>
// import CapacityComponent from './components/CapacityComponent.vue'
import ToDoList from './components/ToDoList'
export default {
  name: 'App',
  components: {
    // CapacityComponent,
    ToDoList
  }
}
</script>
