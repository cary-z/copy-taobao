<template>
  <div @click="mainclick">
    <div class="top" :style="top_opacity">
      <span class="tip">购物车({{ allcount }})</span>
      <div class="tipright">
        <span>管理</span>
      </div>
    </div>
    <div class="shoppingcar">
      <better-scroll
        @scroll="onscroll"
        @routeswitch="onscroll"
        listen-scroll
        :data="goods_list"
      >
        <div>
          <div class="box">
            <div class="title">
              <span class="titlename">购物车</span>
              <div class="notify" v-show="notifyflag">
                <div class="iconfont iconnotificationfill"></div>
                <span>开卡领91元红包</span>
                <div class="iconfont iconclose" @click="onclose"></div>
              </div>
              <div class="right">
                <span>管理</span>
              </div>
            </div>
            <div class="goods_count">共{{ allcount }}件宝贝</div>
            <div
              class="goods_list margin_bottom"
              v-for="(item, index) in goods_list"
              :key="index"
              v-show="item.goods.length > 0"
            >
              <div class="shop_name">
                <div
                  :class="{
                    iconfont: true,
                    iconroundcheckfill: checkselect(index),
                    iconround: !checkselect(index),
                  }"
                  @click="allselectclick(index)"
                ></div>
                <div></div>
                <span>{{ item.shop_name }}</span>
                <div class="iconfont iconicon-test10"></div>
              </div>
              <div
                class="goods_content"
                v-for="(goodsitem, goodsindex) in item.goods"
                :key="goodsindex"
              >
                <van-swipe-cell>
                  <div
                    :class="{
                      iconfont: true,
                      iconroundcheckfill: goodsitem.selectflag,
                      iconround: !goodsitem.selectflag,
                    }"
                    @click="selectclick(index, goodsindex)"
                  ></div>
                  <div class="card">
                    <van-image
                      fit="cover"
                      :src="goodsitem.sort[goodsitem.sortindex].img"
                    />
                    <div class="shop_message">
                      <span class="shop_introduce">{{
                        goodsitem.introduction
                      }}</span>
                      <div
                        class="shop_type"
                        @click="showsort(index, goodsindex)"
                      >
                        <span>{{
                          goodsitem.sort[goodsitem.sortindex].name
                        }}</span>
                        <div class="iconfont iconicon-test9"></div>
                      </div>
                      <div class="shop_priceandnum">
                        <div class="price">
                          <span>￥</span>
                          <span class="price_val">{{ goodsitem.price }}</span>
                        </div>
                        <div
                          class="num"
                          @click.stop="numclick(index, goodsindex)"
                        >
                          <van-icon name="cross" v-show="!goodsitem.numflag" />
                          <div
                            :class="{
                              iconfont: true,
                              iconless: true,
                              grey: goodsitem.num === 1 || goodsitem.num === '',
                            }"
                            v-show="goodsitem.numflag"
                            @click.stop="less(index, goodsindex)"
                          ></div>
                          <span
                            :class="{ border: goodsitem.numflag }"
                            @click.stop="middleclick(index, goodsindex)"
                            >{{ goodsitem.num }}</span
                          >
                          <div
                            class="iconfont iconadd"
                            v-show="goodsitem.numflag"
                            @click.stop="add(index, goodsindex)"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <template #right>
                    <van-button
                      class="same"
                      square
                      type="warning"
                      text="找相似"
                    />
                    <van-button
                      class="collection"
                      square
                      type="warning"
                      text="移入收藏夹"
                    />
                    <van-button
                      class="delete"
                      square
                      type="danger"
                      text="删除"
                      @click="goodsDelete(index, goodsindex)"
                    />
                  </template>
                </van-swipe-cell>
              </div>
              <div class="shop_action" v-if="item.action">
                <div class="action_tips">
                  <span class="action">本店活动</span>
                  <span class="tips">{{ item.action.actioncontent }}</span>
                </div>
                <div class="collect_bill">
                  <span>去凑单</span>
                  <div class="iconfont iconicon-test10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </better-scroll>
    </div>
    <van-number-keyboard
      :show="keyboard_show"
      theme="custom"
      close-button-text="完成"
      @blur="keyboard_show = false"
      @input="onInput"
      @delete="onDelete"
    />
    <shop-popup
      v-if="!checkobj"
      :visible="sort_show"
      :mode="3"
      :good="good_popoup"
      @hide_popup="hidesort"
    ></shop-popup>
    <div class="settlement">
      <div class="left">
        <div
          :class="{
            iconfont: true,
            iconroundcheckfill: allcheckselect,
            iconround: !allcheckselect,
          }"
          @click="allgoodsselectclick()"
        ></div>
        <span class="allselect">全选</span>
      </div>
      <div class="right">
        <span class="total">合计：</span>
        <span class="total_price">￥{{ settlement_price }}</span>
        <span class="settlement_text">结算({{ settlement_price }})</span>
      </div>
    </div>
  </div>
</template>

<script>
import shopPopup from "@/components/content/shopPopup";
export default {
  components: {
    shopPopup,
  },
  data() {
    return {
      top_opacity: {
        opacity: 0,
      },
      keyboard_show: false,
      sort_show: false,
      notifyflag: true,
      goodsindexarr: [0, 0],
      goods_list: [],
      good_popoup: {},
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
      this.mainclick();
    },
    showsort(index, goodsindex) {
      let curgood = this.goods_list[index].goods[goodsindex];
      // console.log("购物车", curgood.sort[curgood.sortindex].name);

      // let store = this.$store.state.goods_list[index].goods[goodsindex];
      // console.log("store", store.sortindex, store.sort[store.sortindex].name);
      [
        this.good_popoup.id,
        this.good_popoup.sort,
        this.good_popoup.sortindex,
        this.good_popoup.price,
        this.good_popoup.introduction,
        this.good_popoup.assess_count,
      ] = [
        curgood.id,
        curgood.sort,
        curgood.sortindex,
        curgood.price,
        curgood.introduction,
        curgood.assess_count,
      ];

      this.$set(this.good_popoup, "indexarr", [index, goodsindex]);

      this.sort_show = true;
    },
    hidesort() {
      this.sort_show = false;
    },
    onclose() {
      this.notifyflag = false;
    },
    mainclick() {
      for (let i = 0; i < this.goods_list.length; i++) {
        for (let j = 0; j < this.goods_list[i].goods.length; j++) {
          this.goods_list[i].goods[j].numflag = false;
          if (this.goods_list[i].goods[j].num == "") {
            this.goods_list[i].goods[j].num = 1;
          } else {
            this.goods_list[i].goods[j].num = parseInt(
              this.goods_list[i].goods[j].num
            );
          }
        }
      }
    },
    numclick(index, goodsindex) {
      this.goods_list[index].goods[goodsindex].numflag = true;
      this.goodsindexarr[0] = index;
      this.goodsindexarr[1] = goodsindex;
    },
    less(index, goodsindex) {
      if (
        this.goods_list[index].goods[goodsindex].num != 1 &&
        this.goods_list[index].goods[goodsindex].num != ""
      ) {
        this.goods_list[index].goods[goodsindex].num--;
      }
    },
    add(index, goodsindex) {
      // console.log(this.goods_list[index].goods[goodsindex]);
      this.goods_list[index].goods[goodsindex].num++;
    },
    middleclick(index, goodsindex) {
      if (this.goods_list[index].goods[goodsindex].numflag) {
        this.keyboard_show = true;
      } else {
        this.numclick(index, goodsindex);
      }
    },
    onInput(val) {
      let index = this.goodsindexarr[0];
      let goodsindex = this.goodsindexarr[1];
      if (typeof this.goods_list[index].goods[goodsindex].num === "number") {
        this.goods_list[index].goods[goodsindex].num = "" + val;
      } else {
        this.goods_list[index].goods[goodsindex].num += "" + val;
      }
    },
    onDelete() {
      let index = this.goodsindexarr[0];
      let goodsindex = this.goodsindexarr[1];
      if (typeof this.goods_list[index].goods[goodsindex].num === "number") {
        this.goods_list[index].goods[goodsindex].num = "";
      } else {
        let length = this.goods_list[index].goods[goodsindex].num.length;
        this.goods_list[index].goods[goodsindex].num = this.goods_list[
          index
        ].goods[goodsindex].num.substring(0, length - 1);
      }
    },
    selectclick(index, goodsindex) {
      this.goods_list[index].goods[goodsindex].selectflag = !this.goods_list[
        index
      ].goods[goodsindex].selectflag;
    },
    allselectclick(index) {
      let flag = this.goods_list[index].goods.every((item) => item.selectflag);
      this.goods_list[index].goods.forEach((item, index) => {
        item.selectflag = !flag;
      });
    },
    allgoodsselectclick() {
      let flag = this.goods_list.every((item) => {
        return item.goods.every((goodsitem) => goodsitem.selectflag);
      });
      this.goods_list.forEach((item) => {
        item.goods.forEach((goodsitem) => {
          goodsitem.selectflag = !flag;
        });
      });
    },
    goodsDelete(index, goodsindex) {
      this.goods_list[index].goods.splice(goodsindex, 1);
    },
  },
  created() {
    this.goods_list = this.$store.state.goods_list;
    let that = this;

    //设置弹出框信息
    let index = this.goodsindexarr[0];
    let goodsindex = this.goodsindexarr[1];
    let curgood = this.goods_list[index].goods[goodsindex];
    if (!curgood) {
      return;
    }
    [
      this.good_popoup.id,
      this.good_popoup.price,
      this.good_popoup.introduction,
      this.good_popoup.assess_count,
    ] = [curgood.id, curgood.price, curgood.introduction, curgood.assess_count];
    this.$set(
      this.good_popoup,
      "sort",
      this.goods_list[index].goods[goodsindex].sort
    );
    this.$set(this.good_popoup, "sortindex", 0);

    this.goods_list.forEach((shopitem) => {
      shopitem.goods.forEach((goodsitem) => {
        that.$set(goodsitem, "numflag", false);
        that.$set(goodsitem, "selectflag", false);
      });
    });
  },
  computed: {
    checkselect() {
      return (index) =>
        this.goods_list[index].goods.every((item) => item.selectflag);
    },
    allcheckselect() {
      let flag = this.goods_list.every((item) => item.goods.length == 0);
      if (flag) {
        return false;
      }
      return this.goods_list.every((item) => {
        return item.goods.every((goodsitem) => goodsitem.selectflag);
      });
    },
    allcount() {
      let count = 0;
      for (let i = 0; i < this.goods_list.length; i++) {
        count += this.goods_list[i].goods.length;
      }
      return count;
    },
    settlement_price() {
      let sum = 0;
      this.goods_list.forEach((shopitem) => {
        shopitem.goods.forEach((goodsitem) => {
          if (goodsitem.selectflag) {
            sum += goodsitem.price * goodsitem.num;
          }
        });
      });
      return sum;
    },
    checkobj() {
      // console.log(Object.keys(this.good_popoup).length === 0);
      return Object.keys(this.good_popoup).length === 0;
    },
  },
};
</script>

<style  lang="scss" scoped>
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
  pointer-events: none;
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
    font-size: 0.8rem;
  }
}
//内容
.shoppingcar {
  height: 100%;
  .box {
    padding: 0 0.5rem 5vh 0.5rem;
    .title {
      display: flex;
      align-items: center;
      line-height: 6vh;
      .titlename {
        font-size: 1.2rem;
        font-weight: 550;
      }
      .notify {
        display: flex;
        align-items: center;
        margin-left: 0.5rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.8rem;
        color: #ec5d29;
        background-color: #fdf3f6;
        border-radius: 0.2rem;
      }
      .right {
        display: flex;
        justify-content: end;
        position: absolute;
        top: 0;
        right: 0.5rem;
        font-size: 0.8rem;
      }
    }
    .goods_count {
      margin-bottom: 0.5rem;
      font-size: 0.6rem;
      color: #999999;
    }
    .margin_bottom {
      margin-bottom: 0.5rem;
    }
    //购物车项目
    .goods_list {
      background-color: #fff;
      border-radius: 0.5rem;
      padding-bottom: 0.5rem;
      .iconround,
      .iconroundcheckfill {
        display: flex;
        align-items: center;
        margin: 0 0.8rem;
      }
      .iconround {
        color: #c9c9c9;
      }
      .iconroundcheckfill {
        color: #ec682b;
      }
      //店名
      .shop_name {
        display: flex;
        height: 2rem;
        line-height: 2rem;
        span {
          font-size: 0.8rem;
          font-weight: 550;
        }
        .iconicon-test10 {
          font-size: 0.8rem;
        }
      }
      //商品内容
      .goods_content {
        .card {
          display: flex;
          width: 100%;
          margin-bottom: 0.5rem;
          /deep/ .van-image {
            width: 5rem;
            height: 5rem;
            border-radius: 0.5rem;
            background-color: #999999;
            overflow: hidden;
          }
          .shop_message {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            height: 100%;
            padding: 0 0.5rem;
            font-size: 0.8rem;
            .shop_type {
              display: flex;
              align-items: center;
              color: #999999;
              background-color: #f9f9f9;
              border-radius: 0.2rem;
              padding: 0.2rem;
              .iconicon-test9 {
                font-size: 0.6rem;
              }
            }
            .shop_priceandnum {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .price {
                font-weight: 550;
                color: #ec5d29;
                .price_val {
                  font-size: 1rem;
                }
              }
              .num {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 1rem;
                line-height: 1rem;
                padding: 0 0.1rem;
                border: 0.1rem solid #999999;
                border-radius: 0.2rem;
                .iconfont {
                  margin: 0 0.2rem;
                  font-size: 0.5rem;
                  font-weight: 600;
                }
                i {
                  font-size: 0.4rem;
                }
                span {
                  display: inline-block;
                  height: 100%;
                  overflow: hidden;
                }
                .border {
                  width: 1.5rem;
                  text-align: center;
                  border-left: 0.1rem solid #999999;
                  border-right: 0.1rem solid #999999;
                }
                .grey {
                  color: grey;
                }
              }
            }
          }
        }
        /deep/ .van-swipe-cell__wrapper {
          display: flex;
          .van-swipe-cell__right {
            display: flex;
            .van-button--normal {
              font-size: 0.6rem;
            }
            button {
              display: block;
              width: 2.5rem;
              height: 100%;
              padding: 0 0.2rem;
              border: none;
            }
            .same {
              background-color: #f09937;
            }
            .collection {
              background-color: #ed752e;
            }
          }
        }
      }
      //商品活动
      .shop_action {
        display: flex;
        justify-content: space-between;
        height: 1.5rem;
        margin-left: 2.6rem;
        .action_tips {
          .action {
            font-size: 0.6rem;
            color: #e96530;
            border: 0.05rem solid #e96530;
          }
          .tips {
            font-size: 0.8rem;
          }
        }
        .collect_bill {
          display: flex;
          line-height: 1.5rem;
          font-size: 0.8rem;
          color: #ec5d29;
          .iconicon-test10 {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}

//滚动条设置
.shoppingcar /deep/.wrapper .bscroll-vertical-scrollbar {
  top: 0 !important;
  bottom: 0 !important;
  margin-top: 6vh !important;
  margin-bottom: 13vh !important;
}

//数字键盘设置
/deep/.van-number-keyboard {
  padding-bottom: 1.5rem;
  .van-number-keyboard__body {
    padding: 0.3rem 0 0 0.3rem;
    .van-key__wrapper {
      padding: 0 0.3rem 0.3rem 0;
      box-sizing: border-box;
      .van-key {
        height: 2.6rem;
        font-size: 1.5rem;
        line-height: 1.5;
        border-radius: 0.5rem;
        .van-key__collapse-icon,
        .van-key__delete-icon {
          width: 2rem;
          height: 1.5rem;
        }
      }
      .van-key--blue,
      .van-key--delete {
        font-size: 1rem;
      }
      .van-key--large {
        right: 0.375rem;
        bottom: 0.375rem;
        height: 95%;
      }
    }
  }
}

//结算栏
.settlement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 8vh;
  left: 0;
  width: 100vw;
  height: 5vh;
  padding: 0 0.5rem;
  font-size: 0.6rem;
  background-color: #fff;
  border-top: 0.05rem solid #dddddd;
  border-bottom: 0.05rem solid #dddddd;
  box-sizing: border-box;
  .left {
    display: flex;
    align-items: center;
    .iconround {
      color: #c9c9c9;
    }
    .iconroundcheckfill {
      color: #ec682b;
    }
    .allselect {
      margin-left: 0.3rem;
      color: #6b6b6b;
    }
  }
  .right {
    height: 100%;
    display: flex;
    align-items: center;
    .total {
      color: #4a4a4a;
    }
    .total_price {
      font-weight: 550;
      color: #ec612a;
      margin-right: 0.2rem;
    }
    .settlement_text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80%;
      padding: 0 0.8rem;
      color: #fff;
      font-size: 0.7rem;
      background-color: #ec612a;
      border-radius: 1rem;
    }
  }
}
</style>