<template>
  <PokemonList />
</template>

<script>
// import { reactive } from "@vue/reactivity";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "Home",
  components: {
    PokemonList,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
