<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-center">
      <img class="w-96" :src="this.pkmnImg" :alt="this.name + ' front image'" />
      <div class="text-2xl font-bold p-1">{{ this.name }}</div>
    </div>
    <div class="flex flex-col justify-around items-center">
      <div class="flex justify-center items-center gap-5">
        Type:
        <ElementType :eleType="this.type_1" v-if="this.type_1" />
        <ElementType :eleType="this.type_2" v-if="this.type_2" />
      </div>
      <div>height: {{ this.height }} m</div>
      <div>weight: {{ this.weight }} kg</div>
      <div>ability 1: {{ this.ability_1.name }}</div>
      <div v-if="this.ability_2.is_hidden">
        ability 2: {{ this.ability_2.name }}
      </div>
    </div>
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
      height: "",
      weight: "",
      ability_1: {
        name: "",
        is_hidden: Boolean,
      },
      ability_2: {
        name: "",
        is_hidden: false,
      },
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
          this.height = data.height;
          this.weight = data.weight;
          this.ability_1.name = data.abilities[0].ability.name;
          this.ability_1.is_hidden = data.abilities[0].is_hidden;

          if (data.abilities.length === 2) {
            this.ability_2.name = data.abilities[1].ability.name;
            this.ability_2.is_hidden = data.abilities[1].is_hidden;
          }
          // console.log(this.ability_1);
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
