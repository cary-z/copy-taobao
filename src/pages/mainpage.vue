<template>
  <div>
    <router-view class="router" />
    <footer-tabbar />
  </div>
</template>

<script>
import footerTabbar from "@/components/footer/footer";
export default {
  components: {
    footerTabbar,
  },
};
</script>

<style lang="scss"  scoped>
.router {
  height: 92vh;
  overflow-x: hidden;
}
</style>