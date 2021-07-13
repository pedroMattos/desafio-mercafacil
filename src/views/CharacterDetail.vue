<template>
  <section>
    <p>{{ $route.params.id }}</p>
  </section>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'character-detail',

  mounted() {
    console.log(this.$route.params.id)
  },
  // apollo: {
  //   characters: gql `query {
  //     charactersByIds(ids: ${this.$route.params.id}) {
  //       results {
  //         name
  //         image
  //         id
  //       }
  //     }
  //   }`
  // },
}
</script>
