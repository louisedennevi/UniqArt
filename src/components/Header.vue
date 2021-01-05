<template>
  <div class="parent">
    <StickyNav :options="stickyOptions" @changed="onchange" @expand="expand" />
    <div class="sticky-nav-fixed" style="top: -1px; z-index: 1001;"></div>
  </div>
</template>

<script>
import { StickyNav } from "vue-sticky-nav";

export default {
  components: {
    StickyNav
  }
};
</script>

<style scoped>
.navbar {
  height: 70px;
}
</style>
