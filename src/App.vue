<template>
  <div id="app">
    <transition :name="animate">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      animate: "",
    };
  },
  watch: {
    $route(to, from) {
      //可以打印一下to 和 from 来看一下他们里面meta设置的index层级
      console.log(to, from);
      //判断进入的路由层级是否比要进入的路由层级大
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.animate = "slide-left";
      } else {
        this.animate = "slide-right";
      }
      if (from.name == null) {
        this.animate = "";
      }
    },
  },
};
</script>

<style>
/* #app {
  
} */

.Router {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.45s ease-out;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
