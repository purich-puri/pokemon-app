<template>
  <div class="home">
    <h3 class="flex justify-center text-4xl p-2">Pokedex</h3>
    <div class="list-of-pkmn">
      <div v-for="pkmn in pokemon" :key="pkmn.id">
        <router-link
          :to="{
            name: 'PokemonInfo',
            params: { pkmnId: pkmn.id },
          }"
        >
          <div class="pkmn-data cursor-pointer bounce">
            <img
              class="w-5/6 toBounce"
              :src="require(`../assets/PkmnhomeVersion/${pkmn.id}.png`)"
              alt=""
            />
            {{ pkmn.name }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "PokemonList",
  setup() {
    const state = reactive({
      pokemon: [],
    });

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        for (let pkmn = 0; pkmn < data.results.length; pkmn++) {
          let obj = {};
          obj["name"] = data.results[pkmn].name;
          obj["id"] = data.results[pkmn].url.match(/\d+/g).join("").slice(1);
          state.pokemon.push(obj);
        }
        //old code without using loop. does not seperate objects in array
        // state.pokemon = data.results;
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
  border-radius: 20%;
  padding: 5px;
  margin: 5px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 300ms;
}

.pkmn-data:hover {
  background-color: tomato;
  color: #fff;
}

.bounce:hover .toBounce {
  -webkit-animation: bounce 1s infinite;
}
</style>
