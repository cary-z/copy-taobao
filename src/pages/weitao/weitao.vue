<template>
  <div>
    <div class="content">
      <better-scroll @scroll="onscroll" listen-scroll>
        <div>
          <span>微淘</span>
          <br />
          <router-link to="/mess">点击</router-link>
          <br />
        </div>
      </better-scroll>
    </div>
  </div>
</template>

<script>
import shopPopup from "@/components/content/shopPopup";
export default {
  components: {
    shopPopup,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onscroll(y) {
      this.$route.meta.scroll = y;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
}
</style>