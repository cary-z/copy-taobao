// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/store"
import ScrollView from "@/components/common/scrollView";
import BetterScroll from "@/components/common/betterScroll";
import goodView from "@/components/common/goodView";
import "@/assets/icon/iconfont.css";
import "@/assets/icon/iconfont.js";
import axios from "axios"
import eventbus from "@/service/eventbus";
// import "amfe-flexible";
import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Tabbar,
  TabbarItem,
  NavBar,
  PullRefresh,
  Sticky,
  Grid,
  GridItem,
  Icon,
  Image as VanImage,
  Tab,
  Tabs,
  Divider,
  CountDown,
  SwipeCell,
  Card,
  NumberKeyboard,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Stepper,
} from "vant";

Vue.use(Button).use(Search).use(NavBar)
  .use(Row).use(Col)
  .use(Swipe).use(SwipeItem)
  .use(Lazyload, {
    lazyComponent: true,
    attempt: 1
  })
  .use(Tabbar).use(TabbarItem)
  .use(PullRefresh)
  .use(Sticky)
  .use(Grid).use(GridItem)
  .use(Icon)
  .use(VanImage)
  .use(Tab).use(Tabs)
  .use(Divider)
  .use(CountDown)
  .use(SwipeCell).use(Card)
  .use(NumberKeyboard)
  .use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
  .use(Stepper);

Vue.config.productionTip = false;

Vue.component("scroll-view", ScrollView);
Vue.component("better-scroll", BetterScroll);
Vue.component("good-view", goodView);

// 挂载到vue原型上    
Vue.prototype.$eventbus = eventbus;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
