<template>
  <PokemonData :pkmnId="pkmnId" />
</template>

<script>
import PokemonData from "../components/PokemonData.vue";

export default {
  name: "Pokemon",
  props: ["pkmnId"],
  components: {
    PokemonData,
  },
};
</script>
