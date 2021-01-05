<template>
  <div>
    <router-link :to="{ name: 'mollybladskog' }"
      >See Molly bladskog</router-link
    >
    <!-- <h4>{{ $route.params.id }}</h4>
    <router-link :to="{ name: 'Profile', params: { id: 456 } }"
      >Antoher designer</router-link
    >
    <router-link :to="{ name: 'Info', params: { id: 3 } }"
      >Designer info</router-link
    >
    <router-view /> -->
  </div>
</template>

<script>
// import DesignerProfile from "../components/DesignerProfile";

export default {
  name: "Profile",
  components: {}
  // mounted() {
  //   console.log(this.$route.params.id);
  // },
  // watch: {
  //   $route(to, from) {
  //     console.log("to", to);
  //     console.log("from", from);
  //   }
  // }
};
</script>

<style></style>
