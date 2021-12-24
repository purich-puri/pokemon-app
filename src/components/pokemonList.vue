<template>
  <div class="home">
    <h3 class="flex justify-center text-4xl">Pokedex</h3>
    <div class="list-of-pkmn">
      <div
        class="pkmn-data pointer"
        v-for="pkmn in pokemon"
        :key="pkmn.url.match(/\d+/g).join('').slice(1)"
      >
        <router-link
          :to="{
            name: 'PokemonInfo',
            params: { pkmnId: pkmn.url.match(/\d+/g).join('').slice(1) },
          }"
        >
          {{ pkmn.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "PokemonList",
  components: {},
  methods: {},
  setup() {
    const state = reactive({
      pokemon: [],
    });

    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        state.pokemon = data.results;
      });
    return state;
  },
};
</script>

<style scoped>
.list-of-pkmn {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  gap: 3px;
}

.pkmn-data {
  width: 100px;
  height: 100px;
  padding: 5px;
  margin: 5px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
}

.pkmn-data:hover {
  background-color: tomato;
  color: #fff;
}

.pointer {
  cursor: pointer;
}
</style>
