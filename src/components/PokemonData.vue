<template>
  <div>Name: {{ this.name }}</div>
  <div class="flex justify-center">
    <img class="w-48" :src="this.frontImg" :alt="this.name + ' front image'" />
    <img class="w-48" :src="this.backImg" :alt="this.name + ' back image'" />
  </div>
</template>

<script>
export default {
  name: "PokemonData",
  props: {
    pkmnId: String,
  },

  data() {
    return {
      name: "",
      frontImg: "",
      backImg: "",
    };
  },
  methods: {
    getPokemon() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pkmnId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          this.name = data.name;
          this.frontImg = data.sprites.front_default;
          this.backImg = data.sprites.back_default;
        });
    },
  },
  beforeMount() {
    this.getPokemon();
  },
};
</script>

<style scoped></style>
