<template>
  <transition name="van-fade">
    <div class="mask" v-show="visible" @click="onhide">
      <transition name="van-slide-up">
        <div class="shop_popup" v-show="visible" @click.stop="">
          <div class="box">
            <div class="top">
              <div class="imgarea">
                <div class="img">
                  <van-image fit="cover" :src="good.sort[good.sortindex].img" />
                </div>
                <div class="price">
                  <div>
                    <span>￥</span>
                    <span class="price_val">{{ good.price }}</span>
                  </div>
                  <div class="deduction">淘金币抵3%</div>
                </div>
                <div class="iconfont iconroundclose" @click="onhide"></div>
              </div>
              <div class="assessarea">
                <div>
                  <div class="iconfont iconcomment"></div>
                  <span class="assess">6人评价“品质好”</span>
                </div>
                <div>
                  <span class="toall">全部（{{ good.assess_count }}）</span>
                  <div class="iconfont iconicon-test10"></div>
                </div>
              </div>
            </div>
            <div class="content">
              <better-scroll :data="visible">
                <div class="middle">
                  <div class="line"></div>
                  <div class="sort">
                    <span class="sorttext"
                      >颜色分类（{{ good.sort.length }}）</span
                    >
                    <div class="sortitems">
                      <div
                        :class="{
                          sortitem: true,
                          sortitem_select: good.sortindex == index,
                          sortitem_noright: (index + 1) % 3 !== 0,
                        }"
                        v-for="(item, index) in good.sort"
                        :key="'sort' + index"
                        @click="select_sortitem(index)"
                      >
                        <div class="img">
                          <van-image fit="cover" :src="item.img" />
                        </div>
                        <div class="sort_name">{{ item.name }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="line"></div>
                  <div class="purchase_count">
                    <div class="purchase_count_text">
                      <span>购买数量</span>
                      <span class="stock">库存9999件</span>
                    </div>
                    <van-stepper v-model="value" />
                  </div>
                </div>
              </better-scroll>
            </div>
            <div class="bottom">
              <div v-show="mode == 0" class="add_shoppingcar" @click="addgoods">
                加入购物车
              </div>
              <div v-show="mode == 0" class="purchase">立即购买</div>
              <div v-show="mode == 1" class="sure" @click="addgoods">确定</div>
              <div v-show="mode == 2" class="sure">立即购买</div>
              <div v-show="mode == 3" class="sure" @click="suresort">确定</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { Toast } from "vant";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: Number,
      default: 0,
    },
    good: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    onhide() {
      this.$emit("hide_popup");
    },
    select_sortitem(index) {
      this.good.sortindex = index;
      //   console.log(this.good.sortindex);
    },
    addgoods() {
      if (typeof this.good === "undefined") {
        return;
      }
      let temp = JSON.stringify(this.good);
      let good = JSON.parse(temp);
      this.$set(good, "num", this.value);
      this.$store.state.goods_list[0].goods.push(good);

      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "加载中",
      });

      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second) {
          //   toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
          this.onhide();
          Toast.success("添加成功");
          const timeout = setTimeout(() => {
            Toast.clear();
            clearInterval(timeout);
          }, 500);
        }
      }, 1000);
    },
    suresort() {
      //   console.log("弹出框", this.good.sort[this.good.sortindex].name);

      let index = this.good.indexarr[0];
      let goodsindex = this.good.indexarr[1];
      let store = this.$store.state.goods_list[index].goods[goodsindex];

      store.sortindex = this.good.sortindex;
      store.num = this.value;
      //   console.log("store", store.sortindex, store.sort[store.sortindex].name);
      this.onhide();
    },
  },
  created() {
    // console.log(this.mode, this.good);
    // let index = this.good.indexarr[0];
    // let goodsindex = this.good.indexarr[1];
    // let store = this.$store.state.goods_list[index].goods[goodsindex];
    // this.value = store.num;
  },
  updated() {
    console.log(111);
    if (!this.visible) {
      this.value = this.getnum;
    }
  },
  computed: {
    getnum() {
      //   console.log(111);
      let index = this.good.indexarr[0];
      let goodsindex = this.good.indexarr[1];
      let store = this.$store.state.goods_list[index].goods[goodsindex];

      return store.num;
    },
  },
  //   watch: {
  //     getnum: {
  //       handler: function () {

  //         // console.log(111);
  //       },
  //       deep: true,
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
  .shop_popup {
    width: 100%;
    height: 90vh;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
    .box {
      margin: 0.5rem;
      .top {
        width: 100%;
        height: 15vh;
        .imgarea {
          display: flex;
          .img {
            width: 3rem;
            height: 3rem;
            background-color: grey;
            border-radius: 0.3rem;
            overflow: hidden;
            .van-image {
              width: 100%;
              height: 100%;
            }
          }
          .price {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            flex: 1;
            color: #ec5d29;
            font-size: 0.6rem;
            margin-left: 0.5rem;
            .price_val {
              font-size: 1.2rem;
              font-weight: 550;
            }
          }
        }
        .assessarea {
          display: flex;
          justify-content: space-between;
          background-color: #f5f5f5;
          margin-top: 0.5rem;
          border-radius: 0.3rem;
          padding: 0.2rem;
        }
        .assessarea > div {
          display: flex;
          align-items: center;
          font-size: 0.6rem;

          .assess {
            color: #676767;
            margin-left: 0.3rem;
          }
          .toall {
            color: #999999;
          }
        }
      }
      .content {
        width: 100%;
        height: 65vh;
        // background-color: gray;
        .middle {
          min-height: 65.2vh;
          .line {
            width: 100%;
            height: 0.05rem;
            margin-top: 0.5rem;
            background-color: #f5f5f5;
          }
          .sort {
            display: flex;
            flex-direction: column;
            .sorttext {
              font-size: 0.8rem;
              margin: 0.5rem 0;
            }
            .sortitems {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              .sortitem_noright {
                margin-right: 2%;
              }
              .sortitem {
                display: flex;
                flex-direction: column;
                flex: 0 0 32%;
                height: 8rem;
                // margin: 0.1rem;
                margin-bottom: 0.5rem;
                border-radius: 0.3rem;
                box-sizing: border-box;
                border: 0.1rem solid transparent;
                .img {
                  flex: 1;
                  .van-image {
                    width: 100%;
                    height: 100%;
                  }
                }
                .sort_name {
                  width: 100%;
                  height: 1.5rem;
                  line-height: 1.5rem;
                  text-align: center;
                  margin-top: 0.2rem;
                  font-size: 0.6rem;
                }
              }
              .sortitem_select {
                border-color: #ec5d2a;
                color: #ec5d2a;
              }
              .sortitem > div {
                background-color: #f5f5f5;
                border-radius: 0.3rem;
                overflow: hidden;
              }
            }
          }
          .purchase_count {
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
            .purchase_count_text {
              display: flex;
              align-items: center;
              font-size: 0.8rem;
              margin: 0.5rem 0;
              .stock {
                font-size: 0.6rem;
                color: #999999;
                margin-left: 0.5rem;
              }
            }
          }
        }
      }
      .bottom {
        display: flex;
        width: 100%;
        height: 10vh;
        color: #fff;
        font-size: 0.8rem;
        font-weight: 550;
        .add_shoppingcar {
          background: linear-gradient(to right, #ffd01e, #ff8917);
          border-radius: 1rem 0 0 1rem;
        }
        .purchase {
          background: linear-gradient(to right, #ff6034, #ee0a24);
          border-radius: 0 1rem 1rem 0;
        }
        .sure {
          background-color: #ec5d2a;
          border-radius: 1rem;
        }
      }
      .bottom > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        margin-bottom: 1.5rem;
      }
    }
  }
}

//步进器设置
/deep/ .van-stepper {
  display: flex;
  align-items: center;
  .van-stepper__minus {
    border-radius: 0.2rem 0 0 0.2rem;
  }
  .van-stepper__plus {
    border-radius: 0 0.2rem 0.2rem 0;
  }
  .van-stepper__minus,
  .van-stepper__plus {
    width: 1.5rem;
    height: 1.5rem;
  }
  .van-stepper__input {
    width: 1.7rem;
    height: 1.5rem;
    margin: 0 0.1rem;
    font-size: 0.7rem;
    border-width: 0.05rem 0;
  }
}

//隐藏滚动条
.content /deep/ .wrapper .bscroll-vertical-scrollbar .bscroll-indicator {
  opacity: 0;
}
</style>