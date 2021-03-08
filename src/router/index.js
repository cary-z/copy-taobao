import Vue from "vue";
import Router from "vue-router";
// import home from "@/pages/home";
// import weitao from "@/pages/weitao";
// import message from "@/pages/message";
// import shoppingcar from "@/pages/shoppingcar";
// import mine from "@/pages/mine";
const mainpage = () => import('@/pages/mainpage');
const home = () => import('@/pages/home/home');
const weitao = () => import('@/pages/weitao/weitao');
const message = () => import('@/pages/message/message');
const mess = () => import('@/pages/weitao/children/mess');
const shoppingcar = () => import('@/pages/shoppingcar/shoppingcar');
const mine = () => import('@/pages/mine/mine');
const shoppingPage = () => import('@/pages/home/children/shoppingPage');


Vue.use(Router);

//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace
//push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
//replace
Router.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

export default new Router({
  routes: [{
    path: "/",
    component: mainpage,
    children: [{
        path: "",
        "name": "index",
        redirect: "/home"
      },
      {
        "path": "/home",
        "name": "home",
        component: home,
        meta: {
          index: 1,
          scroll: 0
        }
      }, {
        path: "/weitao",
        name: "weitao",
        component: weitao,
        meta: {
          index: 1,
          scroll: 0
        }
      }, {
        path: "/message",
        name: "message",
        component: message,
        meta: {
          index: 1,
          scroll: 0
        }
      }, {
        path: "/shoppingcar",
        name: "shoppingcar",
        component: shoppingcar,
        meta: {
          index: 1,
          scroll: 0
        }
      }, {
        path: "/mine",
        name: "mine",
        component: mine,
        meta: {
          index: 1,
          scroll: 0
        }
      }
    ]
  }, {
    path: "/mess",
    name: "mess",
    component: mess,
    meta: {
      index: 2
    }
  }, {
    path: "/shoppingPage",
    name: "shoppingPage",
    component: shoppingPage,
    meta: {
      index: 2
    }
  }]
});
