<template>
  <div class="bg-element" :style="styleProp">
    {{ eleType }}
  </div>
</template>

<script>
export default {
  name: "ElementType",
  props: {
    eleType: String,
  },
  setup(props) {
    return {
      getColor: props.eleType,
    };
  },
  computed: {
    styleProp() {
      var colored = "";
      switch (this.getColor) {
        case "fire": {
          colored = "#D4311C";
          break;
        }
        case "water": {
          colored = "#3554C4";
          break;
        }
        case "electric": {
          colored = "#D1C62A";
          break;
        }
        case "grass": {
          colored = "#51C253";
          break;
        }
        case "ice": {
          colored = "#6F84CE";
          break;
        }
        case "fighting": {
          colored = "#521410";
          break;
        }
        case "poison": {
          colored = "#873A9E";
          break;
        }
        case "ground": {
          colored = "#A36D33";
          break;
        }
        case "flying": {
          colored = "#645FC2";
          break;
        }
        case "psychic": {
          colored = "#B3228A";
          break;
        }
        case "bug": {
          colored = "#B2C221";
          break;
        }
        case "rock": {
          colored = "#D19E66";
          break;
        }
        case "ghost": {
          colored = "#8165AB";
          break;
        }
        case "dragon": {
          colored = "#7049AB";
          break;
        }
        case "dark": {
          colored = "#302923";
          break;
        }
        case "steel": {
          colored = "#737A79";
          break;
        }
        case "fairy": {
          colored = "#E6ACE3";
          break;
        }
        default:
      }
      return "background-color:" + colored;
    },
  },
};
</script>

<style scoped>
.bg-element {
  display: block;
  width: fit-content;
  padding: 10px;
  border-radius: 10%;
  background-color: grey;
  color: white;
}
</style>
