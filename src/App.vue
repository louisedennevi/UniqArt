<template>
  <div id="app">
    <v-app>
      <v-content>
        <top-header></top-header>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
export default {
  components: { "top-header": TopHeader }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@100;500;700;900&display=swap");

#app {
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
