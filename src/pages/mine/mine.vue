<template>
  <div>
    <transition name="van-fade">
      <div class="top" :style="top_opacity">
        <span class="username">{{ username }}</span>
        <span class="setting">设置</span>
      </div>
    </transition>
    <div class="information">
      <better-scroll @scroll="onscroll" @routeswitch="onscroll" listen-scroll>
        <div>
          <div class="main_information">
            <span class="setting">设置</span>
            <div class="portrait">
              <img src="@/assets/images/icon/touxiang.jpg" alt="" />
            </div>
            <div class="message">
              <span class="name">{{ username }}</span>
              <span class="autograph">点这里可以添加个性签名</span>
              <div class="follow">
                <span>0</span> 关注 | <span>0</span> 粉丝
              </div>
            </div>
            <span class="tomessage iconfont arrow_right iconicon-test10"></span>
          </div>
          <div class="tab">
            <img src="@/assets/images/icon/tab.jpg" alt="" />
          </div>
          <div class="order">
            <div class="collection">
              <div class="star">
                <div class="iconfont iconbiaoxing"></div>
                <span class="text">收藏</span>
                <span class="num">7</span>
              </div>
              <div class="subscribe">
                <div class="iconfont icondingyue"></div>
                <span class="text">订阅商铺</span>
                <span class="num">13</span>
              </div>
              <div class="footprint">
                <div class="iconfont iconfootprint"></div>
                <span class="text">足迹</span>
                <span class="num">83</span>
              </div>
            </div>
            <van-divider />
            <div class="myorder">
              <div class="myordertop">
                <span class="topleft">我的订单</span>
                <div class="topright">
                  <span class="see">查看全部</span>
                  <div class="iconfont iconicon-test10"></div>
                </div>
              </div>
              <div class="icons">
                <div class="item">
                  <div class="iconfont iconpay"></div>
                  <span>待付款</span>
                </div>
                <div class="item">
                  <div class="iconfont iconsend"></div>
                  <span>待发货</span>
                </div>
                <div class="item">
                  <div class="iconfont icondeliver"></div>
                  <span>待收货</span>
                </div>
                <div class="item">
                  <div class="iconfont iconcomment"></div>
                  <span>待评价</span>
                </div>
                <div class="item">
                  <div class="iconfont iconrefund"></div>
                  <span>退款/售后</span>
                </div>
              </div>
            </div>
          </div>
          <div class="function_bar">
            <better-scroll :scroll-x="true" :fade="false">
              <div class="smallicon">
                <div
                  class="item"
                  v-for="(item, index) in iconitems"
                  :key="index"
                >
                  <van-icon :name="item.iconname" />
                  <span>{{ item.text }}</span>
                </div>
              </div>
            </better-scroll>
          </div>
          <div class="red_packet">
            <img src="@/assets/images/icon/hongbao.jpg" alt="" />
          </div>
          <div class="my_subscribe">
            <span class="left">我订阅的频道</span>
            <div class="right">
              <span>去订阅更多</span>
              <div class="iconfont iconicon-test10"></div>
            </div>
          </div>
          <div class="alipay_area">
            <div class="alipay">
              <div class="content">
                <div class="alipayicon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconzhifubao"></use>
                  </svg>
                  <span>支付宝</span>
                </div>
                <span>生活好 支付宝</span>
                <div class="bill">
                  <span class="mybill">我的账单</span>
                  <span class="seemoney">看看钱花在哪</span>
                  <span class="tosee">去查看</span>
                </div>
                <div class="service">
                  <div class="left">
                    <div class="iconfont iconhuabei quota"></div>
                    <span>查额度</span>
                  </div>
                  <div class="line"></div>
                  <div class="right">
                    <div class="iconfont iconicon-home personal_service"></div>
                    <span>查看服务</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="channel">
              <img class="channelimg" src="@/assets/images/icon/channel.jpg" />
            </div>
          </div>
        </div>
      </better-scroll>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top_opacity: {
        opacity: 0,
      },
      username: "恪夕",
      iconitems: [
        { iconname: "chat-o", text: "微信" },
        { iconname: "shop-o", text: "商店" },
        { iconname: "share-o", text: "分享" },
        { iconname: "vip-card-o", text: "vip" },
        { iconname: "gift-card-o", text: "礼品" },
        { iconname: "chat-o", text: "微信" },
        { iconname: "shop-o", text: "商店" },
        { iconname: "share-o", text: "分享" },
        { iconname: "vip-card-o", text: "vip" },
        { iconname: "gift-card-o", text: "礼品" },
        { iconname: "chat-o", text: "微信" },
        { iconname: "shop-o", text: "商店" },
      ],
    };
  },
  methods: {
    onscroll(y) {
      this.$route.meta.scroll = y;
      let opacity = -y / 10;
      if (opacity < 0) {
        opacity = 0;
      } else if (opacity > 1) {
        opacity = 1;
      }
      this.top_opacity.opacity = opacity;
    },
  },
};
</script>

<style lang="scss" scoped>
//顶部栏
.top {
  position: absolute;
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #f0f0f0;
  .username {
    display: inline-block;
    width: 2rem;
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
  }
  .setting {
    position: absolute;
    right: 0.5rem;
    font-size: 0.8rem;
  }
}
//信息
.information {
  height: 100%;
  .main_information {
    display: flex;
    flex-direction: row;
    .setting {
      position: absolute;
      line-height: 6vh;
      right: 0.5rem;
      font-size: 0.8rem;
    }
    .portrait {
      margin: 1.5rem 0 0.5rem 1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .message {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 1.5rem 0 0.5rem 0.5rem;
      height: 4rem;
      .name {
        font-size: 0.9rem;
        font-weight: 550;
      }
      .autograph {
        font-size: 0.5rem;
        color: #999999;
      }
      .follow {
        font-size: 0.5rem;
        color: #999999;
        span {
          font-weight: 550;
          color: #000;
        }
      }
    }
    .tomessage {
      margin: 1.5rem 1rem 0.5rem 0;
      height: 4rem;
      line-height: 4rem;
    }
  }
}
//滚动条设置
.information /deep/.wrapper .bscroll-vertical-scrollbar {
  top: 0 !important;
  bottom: 0 !important;
  margin-top: 6vh !important;
  margin-bottom: 8vh !important;
}

.tab {
  width: 94vw;
  height: 33vw;
  margin: 0 3vw;
  border-radius: 0.5rem;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
}

//订单
.order {
  width: 94vw;
  margin: 0 3vw;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  .collection {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 2rem;
    font-size: 0.8rem;
    font-weight: 550;
    .num {
      font-size: 0.6rem;
      color: #999999;
    }
    .text {
      margin: 0 0.3rem;
    }
    .star,
    .subscribe,
    .footprint {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .van-divider {
    margin: 0.2rem 0;
    /deep/.van-divider::before {
      height: 0.1rem;
      border-width: 0.1rem 0 0;
    }
  }
  .myorder {
    margin: 0 0.6rem;
    .myordertop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 1.4rem;
      line-height: 1.4rem;
      .topleft {
        font-size: 0.8rem;
        font-weight: 550;
      }
      .topright {
        display: flex;
        flex-direction: row;
        font-size: 0.6rem;
        color: #999999;
      }
    }
    .icons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0.5rem 0;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.6rem;
        span {
          color: #797979;
        }
        .iconfont {
          font-size: 1.4rem;
        }
      }
    }
  }
}

//功能栏
.function_bar {
  width: 94vw;
  height: 7rem;
  margin-top: 0.5rem;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  background-color: #fff;
  .smallicon {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 120%;
    height: 6rem;
    margin-top: 0.4rem;
    .item {
      display: flex;
      flex-shrink: 0;
      height: 50%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 16.6%;
      font-size: 0.8rem;
      span {
        color: #797979;
      }
      .van-icon::before {
        font-size: 1.5rem;
      }
    }
  }
}

//功能栏滚动条设置
.function_bar /deep/.wrapper .bscroll-horizontal-scrollbar {
  top: 6.4rem !important;
  transform: scale(0.05, 1);
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 10rem;
  .bscroll-indicator {
    background: #eb612a !important;
    border-radius: 0.5rem;
  }
}

//红包广告
.red_packet {
  width: 94vw;
  height: 23vw;
  margin: 0 3vw;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  img {
    width: 100%;
  }
}

//我的订阅
.my_subscribe {
  width: 94vw;
  margin: 1.5rem 3vw 0.5rem 3vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 1.4rem;
  line-height: 1.4rem;
  .left {
    font-size: 1rem;
    font-weight: 550;
  }
  .right {
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    color: #999999;
  }
}

//支付宝区域
.alipay_area {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 0.5rem;
  .alipay,
  .channel {
    width: 45.5vw;
    height: 70vw;
    border-radius: 0.5rem;
    background-color: #fff;
    .channelimg {
      width: 100%;
      height: 100%;
    }
    .content {
      padding: 0 0.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 0.6rem;
      color: #797979;
      box-sizing: border-box;
      .alipayicon {
        display: flex;
        flex-direction: row;
        align-items: center;
        .icon {
          width: 1.6em;
          height: 1.6em;
          fill: currentColor;
          overflow: hidden;
          margin-right: 0.2rem;
        }
        span {
          color: #000;
          font-size: 0.8rem;
          font-weight: 550;
        }
      }
      .bill {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 35vw;
        border-radius: 0.5rem;
        background-color: #f5f5f5;
        .mybill {
          font-size: 1.5rem;
          color: #408ce2;
        }
        .mybill,
        .seemoney,
        .tosee {
          margin: 0.2rem 0;
        }
        .tosee {
          width: 2.5rem;
          height: 1.2rem;
          line-height: 1.2rem;
          text-align: center;
          color: #ec6a33;
          background-color: #fcefe7;
          border-radius: 0.5rem;
        }
      }
      .service {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        .left,
        .right {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .line {
          height: 100%;
          width: 0.1rem;
          background-color: #f0f0f0;
        }
        .left .quota,
        .right .personal_service {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          font-size: 1.4rem;
          color: #418de3;
          background-color: #f3f8fe;
        }
      }
    }
  }
}
</style>