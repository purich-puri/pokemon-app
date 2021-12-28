<template>
  <div>{{ this.name }}</div>
  <div class="flex justify-center">
    <img class="w-96" :src="this.pkmnImg" :alt="this.name + ' front image'" />
  </div>
  <div class="flex justify-center gap-5">
    <ElementType :eleType="this.type_1" v-if="this.type_1" />
    <ElementType :eleType="this.type_2" v-if="this.type_2" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import ElementType from "../components/ElementType.vue";
export default {
  name: "PokemonData",
  props: {
    pkmnId: String,
  },
  components: {
    ElementType,
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
      type_1: "",
      type_2: "",
    };
  },
  methods: {
    getPokemon() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pkmnId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          this.name = data.name;
          this.type_1 = data.types[0].type.name;
          if (data.types.length === 2) {
            this.type_2 = data.types[1].type.name;
          }
          // console.log("1: " + this.type_1 + ", 2: " + this.type_2);
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
