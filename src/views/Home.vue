<template>
  <div class="home">
    <h3 class="flex justify-center text-4xl">Pokedex</h3>
    <div
      v-for="pkmn in pokemon"
      :key="pkmn.url.match(/\d+/g).join('').slice(1)"
      @click="checkPkmn(pkmn.url)"
    >
      {{ pkmn.name }}
    </div>
  </div>
</template>

<script>
// import { reactive } from "@vue/reactivity";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  // setup(){
  //   const state = reactive({
  //     pokemon:[],
  //     urlIdLookup: {}
  //   })
  // },

  data() {
    return {
      pokemon: [],
    };
  },
  methods: {
    checkPkmn(e) {
      console.log(e);
      fetch(e)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    },

    async getPokemon() {
      // fetch("https://pokeapi.co/api/v2/pokemon/")
      // .then((res) => res.json)
      // .then((data) => {
      //   console.log()})
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151/");
      const { results } = await res.json();
      console.log(results);
      this.pokemon = results;
    },
  },
  beforeMount() {
    this.getPokemon();
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  background-color: antiquewhite;
}
</style>
