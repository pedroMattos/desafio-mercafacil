<template>
  <div class="card-area">
    <div class="wrap-card"
      v-for="(char, index) in characters.results" :key="index">
      <router-link :to="{ name: 'character', params: { id: char.id } }">
        <card-character :data="char"></card-character>
      </router-link>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import CardCharacterVue from '../components/cards/CardCharacter.vue';

export default {
  name: 'index',
  components: {
    'card-character': CardCharacterVue,
  },
  apollo: {
    characters: gql `query {
      characters {
        results {
          name
          image
          id
        }
      }
    }`
  },
}
</script>