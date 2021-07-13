<template>
  <div class="home container">
    <div class="card-area">
      <div class="wrap-card"
        v-for="(char, index) in characters.results" :key="index">
        <div class="card">
          <p class="char-name">{{ char.name }}</p>
          <img class="image-card" :src="char.image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';


export default {
  name: 'Home',
  apollo: {
    characters: gql `query {
      characters {
        results {
          name
          image
        }
      }
    }`
  },
};
</script>
