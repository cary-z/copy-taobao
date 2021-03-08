<template>
  <div>
    <transition name="van-fade">
      <div class="top" :style="top_opacity">
        <span class="tip">消息({{ message_num }})</span>
        <div class="tipright">
          <div class="iconfont iconsearch"></div>
          <div class="iconfont iconpeoplelist"></div>
          <div class="iconfont iconadd1"></div>
        </div>
      </div>
    </transition>
    <div class="message">
      <better-scroll @scroll="onscroll" @routeswitch="onscroll" listen-scroll>
        <div>
          <div class="box">
            <div class="title">
              <span class="titlename">消息 ({{ message_num }})</span>
              <div class="clear">
                <div class="clearicon"></div>
                <span>清除未读</span>
              </div>
              <div class="icons">
                <div class="iconfont iconpeoplelist"></div>
                <div class="iconfont iconadd1"></div>
              </div>
            </div>
            <div class="search">
              <van-search placeholder="搜索" />
            </div>
            <div class="function">
              <div class="smallicon">
                <div class="iconfont iconat"></div>
                <div class="iconfont iconnotice"></div>
                <div class="iconfont iconmail"></div>
                <div class="iconfont iconticket_money_fill"></div>
              </div>
              <div class="message_setting iconfont iconmore"></div>
            </div>
            <div class="message_content">
              <div
                class="message_item"
                v-for="(item, index) in messagearr"
                :key="index"
              >
                <van-image :src="item.src" />
                <div class="right">
                  <div class="righttop">
                    <span>{{ item.name }}</span>
                    <div class="time">{{ item.time }}</div>
                  </div>
                  <div class="rightbottom">
                    <span class="describe van-ellipsis">{{
                      item.describe
                    }}</span>
                    <div class="icon_area">
                      <div
                        class="iconfont iconnotice_forbid_fill"
                        v-show="item.disturbflag"
                      ></div>
                      <div class="dot" v-show="item.dotflag"></div>
                    </div>
                  </div>
                </div>
                <div v-if="index != messagearr.length - 1" class="border"></div>
              </div>
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
      message_num: 43,
      dotflag: true,
      messagearr: [
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: false,
          dotflag: false,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
        {
          name: "和风雨旗舰店",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1498943409,3680512557&fm=15&gp=0.jpg",
          time: "昨天",
          describe:
            "[图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片][图片]",
          disturbflag: true,
          dotflag: true,
        },
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
  .tip {
    display: inline-block;
    width: 10rem;
    height: 100%;
    text-align: center;
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
  }
  .tipright {
    display: flex;
    justify-content: end;
    position: absolute;
    top: 0;
    right: 0.5rem;
    .iconsearch,
    .iconpeoplelist,
    .iconadd1 {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
}

//信息
.message {
  height: 100%;
  background-color: #fff;
  .box {
    padding: 0 0.5rem 0.5rem 0.5rem;
    .title {
      display: flex;
      line-height: 6vh;
      .titlename {
        font-size: 1.2rem;
        font-weight: 550;
      }
      .clear {
        margin-left: 0.5rem;
        font-size: 0.8rem;
        color: #999999;
      }
      .icons {
        display: flex;
        justify-content: end;
        position: absolute;
        top: 0;
        right: 0.5rem;
        .iconpeoplelist,
        .iconadd1 {
          font-size: 1.2rem;
          margin-left: 0.5rem;
          line-height: 6vh;
        }
      }
    }
    .function {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      color: #cccccc;
      font-size: 0.8rem;
      .smallicon {
        display: flex;
        justify-content: space-evenly;
        width: 8rem;
      }
      .message_setting {
        margin-right: 0.5rem;
      }
    }
    .message_content {
      .message_item {
        display: flex;
        align-items: center;
        padding: 0.3rem 0;
        position: relative;
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 3rem;
          margin-left: 0.3rem;
          .righttop,
          .rightbottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            .time,
            .describe {
              font-size: 0.6rem;
              color: #999999;
            }
            .time {
              margin-right: 0.3rem;
            }
            .describe {
              width: 70vw;
            }
            .icon_area {
              width: 2rem;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              .iconnotice_forbid_fill {
                font-size: 0.6rem;
                color: #999999;
              }
              .dot {
                width: 0.4rem;
                height: 0.4rem;
                background-color: #ec5d29;
                border-radius: 50%;
              }
            }
          }
        }
        .border {
          position: absolute;
          left: -0.5rem;
          bottom: 0;
          width: 100vw;
          height: 0.05rem;
          background-color: #f0f0f0;
        }
      }
    }
  }
}

//图片设置
.message_item /deep/.van-image {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
}

//搜索框
/deep/.van-search {
  padding: 0;
  .van-search__content {
    height: 1.6rem;
    padding-left: 0.5rem;
    line-height: 1.6rem;
    font-size: 1rem;
    border-radius: 1rem;
    .van-cell {
      padding: 0;
      .van-field__body {
        height: 1.6rem;
        line-height: 1.6rem;
        font-size: 0.9rem;
        .van-icon {
          font-size: 1.2rem;
        }
      }
      .van-icon-search::before {
        line-height: 1.6rem;
        font-size: 1.2rem;
      }
    }
  }
}

//滚动条设置
.message /deep/.wrapper .bscroll-vertical-scrollbar {
  top: 0 !important;
  bottom: 0 !important;
  margin-top: 6vh !important;
  margin-bottom: 8vh !important;
}
</style>