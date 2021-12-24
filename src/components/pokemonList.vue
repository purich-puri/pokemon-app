<template>
  <div class="home">
    <h3 class="flex justify-center text-4xl">Pokedex</h3>
    <div class="list-of-pkmn">
      <div
        class="pkmn-data pointer"
        v-for="pkmn in pokemon"
        :key="pkmn.url.match(/\d+/g).join('').slice(1)"
        @click="checkPkmn(pkmn.url)"
      >
        <router-link
          :to="{
            name: 'Pokemon',
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
export default {
  name: "PokemonList",
  props: {},
  components: {},
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
        .then(() => {
          // console.log(data);
        })
        .catch((error) => console.log(error));
    },

    async getPokemon() {
      // fetch("https://pokeapi.co/api/v2/pokemon/")
      // .then((res) => res.json)
      // .then((data) => {
      //   console.log()})
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
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
