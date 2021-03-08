<template>
  <div @click="mainclick">
    <div class="register">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconhongbao"></use>
      </svg>
      <span>签到</span>
    </div>
    <div class="member">
      <div class="iconfont iconvip_code_light code"></div>
      <span>会员码</span>
    </div>
    <form action="search">
      <van-search left-icon="scan" placeholder="" />
      <div class="textswipe">
        <van-swipe :autoplay="3000" :touchable="false" vertical>
          <van-swipe-item v-for="(item, index) in textswipe" :key="index">
            {{ item }}
          </van-swipe-item>
          <template #indicator></template>
        </van-swipe>
      </div>
    </form>
    <van-tabs
      v-model="active"
      :animated="animatedflag"
      swipeable
      line-width="1.6rem"
      line-height="0.1rem"
      title-inactive-color="#000101"
      title-active-color="#eb612a"
      @change="onchange"
    >
      <van-tab>
        <template #title>订阅</template>
        <recommend />
      </van-tab>
      <van-tab>
        <template #title> 推荐</template>
        <recommend
      /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import { Toast } from "vant";
import recommend from "@/components/content/recommend";
export default {
  components: {
    recommend,
  },
  data() {
    return {
      textswipe: ["网红泡泡吊椅", "吊椅吊篮", "石墨烯移动电源"],
      active: 1,
      animatedflag: false,
      isLoading: false,
    };
  },
  mounted() {
    let that = this;
    this.animatedflag = true;
    if (this.$route.meta.active || this.$route.meta.active == 0) {
      this.active = this.$route.meta.active;
    }
  },
  methods: {
    onSubscribeRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    mainclick() {
      this.$eventbus.$emit("hidemask");
    },
    onchange() {
      this.$route.meta.active = this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
//顶部标签页
.register,
.member {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3vh;
  transform: translateY(-50%);
  z-index: 2;
  font-size: 0.5rem;
  font-weight: 550;
  span {
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.3rem;
    transform: translateX(-0.2rem);
    color: #eb612a;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: #fceee2;
  }
}
.register {
  left: 0.5rem;
  .icon {
    width: 1.2rem;
    height: 1.2rem;
    fill: currentColor;
    overflow: hidden;
    border-radius: 50%;
    background-color: #ef913d;
    z-index: 3;
  }
}
.member {
  right: 0.5rem;
  .code {
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    background-color: #eb612a;
    z-index: 3;
  }
}
/deep/.van-tabs--line .van-tabs__wrap {
  width: 100%;
  height: 6vh;
  background-color: #fff;
  .van-tabs__nav {
    width: 6rem;
    padding: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    .van-tab {
      font-size: 0.8rem;
      .van-tab__text--ellipsis {
        overflow: visible;
      }
    }
    .van-tab--active {
      font-size: 0.9rem;
      font-weight: 600;
    }
    .van-tabs__line {
      bottom: 0.2rem;
      background-color: #eb612a;
    }
  }
}

//搜索框
/deep/.van-search {
  height: 6vh;
  width: 100%;
  padding: 0.5rem 0.6rem;
  position: absolute;
  top: 6vh;
  z-index: 10;
  .van-search__content {
    border-radius: 1rem;
    height: 1.6rem;
    line-height: 1.6rem;
    padding: 0;
    border: 0.15rem solid #eb612a;
    background-color: #fff;
    .van-cell {
      line-height: 1.6rem;
      padding: 0 0 0.4rem 0;
      .van-field__body {
        height: 1.6rem;
        font-size: 0.9rem;
        overflow: hidden;
        .van-icon {
          height: 1.6rem;
          line-height: 1.6rem;
        }
      }
      .van-icon-scan::before {
        line-height: 1.6rem;
        font-size: 1.2rem;
        margin: 0 0.4rem 0 0.6rem;
        color: #eb612a;
      }
    }
  }
}

//文字轮播
/deep/.textswipe {
  display: flex;
  align-items: center;
  position: absolute;
  height: 6vh;
  z-index: 10;
  top: 6vh;
  left: 3rem;
  .van-swipe {
    height: 1.6rem;
    .van-swipe__indicators {
      visibility: hidden;
    }
    .van-swipe-item {
      display: flex;
      align-items: center;
      line-height: 1.6rem;
      font-size: 0.9rem;
      color: #999999;
      // .itemcontent {
      //   height: 1.6rem;
      //   line-height: 1.6rem;
      // }
    }
  }
}
</style>