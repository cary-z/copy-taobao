<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 3,
    },
    /**
     * 滚动条是否自动隐藏
     */
    fade: {
      type: Boolean,
      default: true,
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false,
    },
    /**
     * 图片加载完成事件
     */
    imgLoadState: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false,
    },
    /**
     * 活动值，对应不同的滚动条
     */
    active: {
      type: Number,
      default: null,
    },
    /**
     * 数据
     */
    data: {
      type: Object | Array | Boolean,
      default: null,
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false,
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20,
    },
  },
  mounted() {
    //保证在DOM渲染完毕后初始化better-scroll
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll的初始化
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollbar: {
          fade: this.fade,
          interactive: false, // 1.8.0 新增
        },
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        scrollY: !this.scrollX,
      });
      console.log("初始化了滚动条");
      this.scroll.scrollTo(0, this.$route.meta.scroll);
      this.$emit("routeswitch", this.$route.meta.scroll);
      // console.log(this.scroll);
      // console.log(this.imgLoadState);
      // 是否派发图片加载完毕刷新事件
      if (this.imgLoadState) {
        this.$eventbus.$on("imgLoad", () => {
          // console.log("我接收到了");
          // console.log("图片加载完了，我刷新滚动条了");
          //做一个时延，可以防止图片刚加载完，高度计算比实际大
          setTimeout(() => {
            this.refresh();
          }, this.refreshDelay);
        });
      }

      // 是否派发滚动事件
      if (this.listenScroll) {
        let vm = this;
        this.scroll.on("scroll", (pos) => {
          vm.$emit("scroll", pos.y);
        });
      }

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on("touchend", (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit("pulldown");
          }
        });
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable();
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable();
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data: {
      handler() {
        setTimeout(() => {
          // console.log("数据有变化，我刷新滚动条了");
          this.refresh();
        }, this.refreshDelay);
      },
      deep: true,
      // immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/deep/.wrapper .bscroll-horizontal-scrollbar {
  height: 0.2rem !important;
  left: 0 !important;
  right: 0 !important;
  .bscroll-indicator {
    border: 0 !important;
  }
}
/deep/.wrapper .bscroll-vertical-scrollbar {
  width: 0.2rem !important;
  top: 0 !important;
  bottom: 0 !important;
  .bscroll-indicator {
    border: 0 !important;
  }
}
</style>