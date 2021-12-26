<template>
  <div>{{ this.name }}</div>
  <div class="flex justify-center">
    <img class="w-96" :src="this.pkmnImg" :alt="this.name + ' front image'" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "PokemonData",
  props: {
    pkmnId: String,
  },
  setup(props) {
    const pkmnImg = ref(
      require(`../assets/PkmnhomeVersion/${props.pkmnId}.png`)
    );
    return { pkmnImg };
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
          //   console.log(data);
          this.name = data.name;
          // this.frontImg = data.sprites.other.home.front_default;
          // //api has a hyphen attribute, change to an array style to call it.
          // this.backImg = data.sprites.other["official-artwork"].front_default;
        });
    },
  },
  beforeMount() {
    this.getPokemon();
  },
};
</script>

<style scoped></style>
