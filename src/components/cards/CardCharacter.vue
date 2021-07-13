<template>
  <div class="card">
    <p class="char-name">{{ data.name }}</p>
    <div class="overlay"></div>
    <img class="image-card" :src="data.image" :alt="data.name">
  </div>
</template>

<script>
export default {
  name: 'card-char',
  props: ['data'],
};
</script>
