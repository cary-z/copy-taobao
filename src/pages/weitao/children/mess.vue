<template>
  <div>
    <van-nav-bar
      ref="bar"
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      placeholder
      fixed
    />
    <div class="content">
      <better-scroll>
        <div>
          我的淘宝
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          你的淘宝
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          他的淘宝
        </div>
      </better-scroll>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";

export default {
  mounted() {},
  methods: {
    onClickLeft() {
      // Toast("返回");
      this.$router.go(-1);
    },
    onClickRight() {
      // Toast("按钮");
    },
  },
};
</script>

<style lang="scss" scoped>
//顶部返回栏设置
/deep/ .van-nav-bar {
  line-height: 1rem;
  .van-nav-bar__content {
    height: 7vh;
    .van-icon,
    .van-nav-bar__title,
    .van-nav-bar__text {
      font-size: 1rem;
    }
  }
}

//滚动条设置
/deep/.wrapper .bscroll-vertical-scrollbar {
  margin-top: 7vh !important;
}
.content {
  height: 92vh;
}
</style>