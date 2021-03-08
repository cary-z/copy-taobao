<template>
  <div>
    <van-tabbar
      v-model="active"
      @change="onChange"
      active-color="#EB612A"
      placeholder
      safe-area-inset-bottom
    >
      <!-- <transition name="icon-animation"> -->
      <van-tabbar-item
        v-for="(item, index) in tabbar"
        :key="index"
        :name="item.path"
        :badge="item.badge"
        :class="{ icon_animation: item.animationflag }"
        @click="play(index)"
      >
        <template #icon="props">
          <div
            :class="
              item.inactive
                ? props.active
                  ? 'iconfont ' + item.active
                  : 'iconfont ' + item.inactive
                : 'iconfont ' + item.active
            "
            class-prefix="icon"
            slot="icon"
          ></div>
        </template>
        <transition>
          <span
            v-show="
              item.hidetext && item.inactive ? !(active == item.path) : true
            "
            >{{ item.name }}</span
          >
        </transition>
      </van-tabbar-item>
      <!-- </transition> -->

      <!-- <van-tabbar-item name="home">
        <template #icon="props">
          <div
            :class="
              props.active
                ? 'iconfont iconshejiaotubiao-44'
                : 'iconfont iconshouye'
            "
            class-prefix="icon"
            slot="icon"
          ></div>
        </template>
        <span v-show="active == 'home' ? false : true">主页</span>
      </van-tabbar-item>
      <van-tabbar-item name="weitao">
        <template>
          <div
            class="iconfont iconweitao"
            class-prefix="icon"
            slot="icon"
          ></div>
        </template>
        <span>微淘</span>
      </van-tabbar-item>
      <van-tabbar-item name="message">
        <template>
          <div
            class="iconfont iconxiaoxi"
            class-prefix="icon"
            slot="icon"
          ></div>
        </template>
        <span>消息</span>
      </van-tabbar-item>
      <van-tabbar-item name="shoppingcar">
        <template>
          <div
            class="iconfont icongouwuche1"
            class-prefix="icon"
            slot="icon"
          ></div>
        </template>
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item name="mine" dot>
        <template>
          <div
            class="iconfont iconwodedangxuan"
            class-prefix="icon"
            slot="icon"
          ></div>
        </template>
        <span>我的淘宝</span>
      </van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
      icon: {},
      tabbar: [
        {
          path: "home",
          name: "主页",
          active: "iconshejiaotubiao-44",
          inactive: "iconhome",
          hidetext: true,
          animationflag: false,
        },
        {
          path: "weitao",
          name: "微淘",
          active: "iconwefill",
          animationflag: false,
        },
        {
          path: "message",
          name: "消息",
          active: "iconmessagefill",
          inactive: "iconmessage",
          badge: 43,
          animationflag: false,
        },
        {
          path: "shoppingcar",
          name: "购物车",
          active: "iconcartfill",
          inactive: "iconcart",
          animationflag: false,
        },
        {
          path: "mine",
          name: "我的淘宝",
          active: "iconmyfill",
          inactive: "iconmy",
          animationflag: false,
        },
      ],
    };
  },
  created() {
    this.active = this.$route.name;
  },
  methods: {
    onChange(name) {
      this.$router.replace("/" + name);
      this.$emit("changeclick", name);
      console.log(name);
    },
    play(index) {
      if (this.tabbar[index].animationflag) {
        return;
      }
      this.tabbar[index].animationflag = true;
      setTimeout(() => {
        this.tabbar[index].animationflag = false;
      }, 150);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .van-tabbar {
  height: 8vh;
  span {
    font-size: 0.8rem;
  }
  .van-info {
    margin-top: 0.25rem;
    right: -0.2rem;
    font-size: 0.6rem;
    border-radius: 1rem;
    border: 0.1rem solid #fff;
  }
}

.iconfont {
  font-size: 1.2rem;
}

.iconshejiaotubiao-44 {
  font-size: 2rem;
}

//缩放动画
.icon_animation {
  animation: icon_animation 0.15s ease-out 0s;
}

@keyframes icon_animation {
  0% {
    transform: scale(0.6, 0.6);
  }
  50% {
    transform: scale(0.9, 0.9);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>