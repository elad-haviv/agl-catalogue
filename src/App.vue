<script setup>
import CSV from './csv';

fetch("/agl.csv").then(response => {
  response.text().then((data) => {
    console.log(CSV.parse(data));
  });
});
</script>

<template>
  <div>
    <h1>AGL Catalogue</h1>
  </div>
</template>

<style scoped></style>
