<script setup>
import colaboradores from './components/Colaboradores.vue';
import farmacia from './components/Farmacia.vue';
</script>

<template>
  <colaboradores />
  <farmacia />
</template>

<style >



.crud, .farmacia {
  max-width: 500px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

input {
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 5px 10px;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
