<template>
  <div>
    <router-link :to="{ name: 'Mollybladskog' }"
      >See Molly bladskog</router-link
    >
    <router-view />
    <router-link :to="{ name: 'Louisedennevi' }"
      >See Louise Dennevi</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  mounted() {
    console.log(this.$route.params.id);
  },
  watch: {
    $route(to, from) {
      console.log("to", to);
      console.log("from", from);
    }
  }
};
</script>

<style></style>
