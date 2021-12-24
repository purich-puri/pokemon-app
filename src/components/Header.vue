<template>
  <div id="nav">
    <router-link to="/">
      <img
        src="@/assets/pokeball-img.png"
        alt="pokemon logo"
        class="w-10 h-10"
      />
    </router-link>
    <div class="flex gap-2">
      <router-link to="/">HOME</router-link> |
      <router-link to="/about">ABOUT</router-link>
    </div>
  </div>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
</style>
