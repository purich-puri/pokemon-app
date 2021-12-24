<template>
  <PokemonData :pkmnId="pkmnId" />
</template>

<script>
import PokemonData from "../components/PokemonData.vue";

export default {
  name: "PokemonInfo",
  props: ["pkmnId"],
  components: {
    PokemonData,
  },
};
</script>
