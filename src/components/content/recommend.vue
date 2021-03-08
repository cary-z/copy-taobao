<template>
  <div>
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled="refresh_disabled"
      success-text="刷新成功"
      @refresh="onRefresh"
      head-height="50"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling>
        <span style="font-size: 0.6rem">下拉即可刷新..</span>
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <span style="font-size: 0.6rem">释放即可刷新..</span>
      </template>
      <div class="recommend">
        <better-scroll
          @scroll="onscroll"
          listen-scroll
          imgLoadState
          :data="leftgoods.concat(rightgoods)"
        >
          <div>
            <div class="iconarea">
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
            <div class="banner">
              <div class="swipe">
                <van-swipe :autoplay="3000">
                  <van-swipe-item
                    v-for="(banner, index) in bannerPicArray"
                    :key="index"
                  >
                    <img v-lazy="banner.imageurl" width="100%" />
                  </van-swipe-item>
                </van-swipe>
              </div>
              <div class="adv_two">
                <div class="adv">
                  <img src="@/assets/images/icon/adv01.jpg" />
                </div>
                <div class="adv cost_effective">
                  <div class="timer">
                    <span class="text">聚划算</span>
                    <van-count-down :time="time" class="timing">
                      <template #default="timeData">
                        <span class="block">{{
                          timeData.hours >= 10
                            ? timeData.hours
                            : "0" + timeData.hours
                        }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{
                          timeData.minutes >= 10
                            ? timeData.minutes
                            : "0" + timeData.minutes
                        }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{
                          timeData.seconds >= 10
                            ? timeData.seconds
                            : "0" + timeData.seconds
                        }}</span>
                      </template>
                    </van-count-down>
                  </div>
                  <img src="@/assets/images/icon/adv02.jpg" />
                </div>
              </div>
              <div class="adv">
                <img src="@/assets/images/icon/adv03.jpg" />
              </div>
              <div class="adv">
                <img src="@/assets/images/icon/adv04.jpg" />
              </div>
            </div>
            <div class="shop">
              <div class="left">
                <router-link
                  tag="div"
                  :to="{ path: '/shoppingPage', query: { id: item.id } }"
                  class="goods"
                  v-for="(item, index) in leftgoods"
                  :key="index"
                >
                  <good-view
                    :img-path="item.imgPath"
                    :introduction="item.introduction"
                    :price="item.price"
                    :pay-message="item.payMessage"
                  ></good-view>
                </router-link>
              </div>
              <div class="right">
                <router-link
                  tag="div"
                  :to="{ path: '/shoppingPage', query: { id: item.id } }"
                  class="goods"
                  v-for="(item, index) in rightgoods"
                  :key="index"
                >
                  <good-view
                    :img-path="item.imgPath"
                    :introduction="item.introduction"
                    :price="item.price"
                    :pay-message="item.payMessage"
                  ></good-view>
                </router-link>
              </div>
            </div>
          </div>
        </better-scroll>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textswipe: ["网红泡泡吊椅", "吊椅吊篮", "石墨烯移动电源"],
      isLoading: false,
      refresh_disabled: true,
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
        { iconname: "share-o", text: "分享" },
        { iconname: "vip-card-o", text: "vip" },
        { iconname: "gift-card-o", text: "礼品" },
        { iconname: "shop-o", text: "商店" },
        { iconname: "share-o", text: "分享" },
        { iconname: "vip-card-o", text: "vip" },
        { iconname: "gift-card-o", text: "礼品" },
      ],
      bannerPicArray: [
        {
          imageurl: require("../../assets/images/banner/banner01.jpg"),
        },
        {
          imageurl: require("../../assets/images/banner/banner02.jpg"),
        },
        {
          imageurl: require("../../assets/images/banner/banner03.jpg"),
        },
        {
          imageurl: require("../../assets/images/banner/banner04.jpg"),
        },
      ],
      time: 6 * 60 * 60 * 1000,
      leftgoods: [],
      rightgoods: [],
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        let tem = this.leftgoods;
        this.leftgoods = this.rightgoods.reverse();
        this.rightgoods = tem.reverse();
        this.isLoading = false;
      }, 1000);
    },
    onscroll(y) {
      this.$eventbus.$emit("hidemask");
      this.$route.meta.scroll = y;
      if (y > -10) {
        this.refresh_disabled = false;
        // console.log(y);
      } else {
        this.refresh_disabled = true;
      }
    },
  },
  created() {
    let half = Math.floor(this.$store.state.home_goods.length / 2);
    this.leftgoods = this.$store.state.home_goods.slice(0, half);
    this.rightgoods = this.$store.state.home_goods.slice(half);
  },
};
</script>

<style lang="scss" scoped>
//下拉刷新设置
// @pull-refresh-head-height: 100px;
/deep/.van-pull-refresh {
  margin-top: 6vh;
  .van-pull-refresh__head {
    .van-pull-refresh__text {
      font-size: 0.6rem;
    }
    .van-loading {
      font-size: 0.6rem;
      .pulling,
      .loosing {
        font-size: 0.6rem;
      }
      .van-loading__spinner {
        width: 0.8rem !important;
        height: 0.8rem !important;
      }
      .van-loading__text {
        font-size: 0.6rem;
      }
    }
  }
}

//推荐滚动条设置
.recommend /deep/.wrapper .bscroll-vertical-scrollbar {
  top: 0 !important;
  bottom: 0 !important;
}
.recommend {
  height: 80vh;
}

//图标导航栏
.iconarea {
  width: 100vw;
}
.smallicon {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 200vw;
  height: 6rem;
  margin-top: 0.5rem;
  .item {
    display: flex;
    flex-shrink: 0;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
    font-size: 0.8rem;
    span {
      color: #797979;
    }
    .van-icon::before {
      font-size: 1.5rem;
    }
  }
}

//滚动条设置
.iconarea /deep/.wrapper .bscroll-horizontal-scrollbar {
  top: 6.5rem !important;
  transform: scale(0.1, 1);
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 10rem;
  .bscroll-indicator {
    background: #eb612a !important;
    border-radius: 0.5rem;
  }
}

//广告
.banner {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  height: 93vw;
  img {
    width: 100%;
    height: 100%;
  }
  .swipe {
    width: 47%;
    height: 60vw;
    border-radius: 0.5rem;
    overflow: hidden;
    .van-swipe /deep/.van-swipe__indicators {
      bottom: 0.8rem;
      .van-swipe__indicator--active {
        background-color: #eb612a;
      }
      .van-swipe__indicator:not(:last-child) {
        margin-right: 0.3rem;
      }
      .van-swipe__indicator {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
  .adv_two {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 47%;
    height: 60vw;
    .adv {
      width: 100%;
    }
    .cost_effective {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      .timer {
        display: flex;
        align-items: center;
        margin: 0 0.5rem;
        .van-count-down {
          line-height: 0.9rem;
        }
        .text {
          margin-right: 0.3rem;
          font-size: 0.8rem;
          font-weight: 550;
        }
        .timing {
          display: flex;
          align-items: center;
          .colon {
            display: inline-block;
            font-size: 0.2rem;
            color: #eb612a;
          }
          .block {
            display: inline-block;
            width: 0.9rem;
            height: 0.9rem;
            color: #fff;
            font-size: 0.6rem;
            text-align: center;
            border-radius: 0.2rem;
            background-color: #eb612a;
          }
        }
      }
      img {
        flex: 1;
      }
    }
  }
  .adv {
    width: 47%;
    height: 29vw;
    // background-color: green;
    border-radius: 0.5rem;
  }
}
//商品
.shop {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .left,
  .right {
    display: flex;
    flex-direction: column;
    width: 47%;
    border-radius: 0.5rem;

    .goods {
      width: 100%;
      // height: 50vw;
      // background-color: red;
      border-radius: 0.5rem;
      margin: 1vw 0;
    }
  }
  .left .adv {
    width: 100%;
    height: 29vw;
  }
}
</style>