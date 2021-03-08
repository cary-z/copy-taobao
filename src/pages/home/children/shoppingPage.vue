<template>
  <div>
    <div class="topbar">
      <div class="iconfont iconicon-test8" @click="onback"></div>
      <van-search placeholder="搜索宝贝" />
      <div class="icon">
        <div class="iconfont iconshare"></div>
        <router-link
          tag="div"
          to="/shoppingcar"
          class="iconfont iconcart"
        ></router-link>
        <div class="iconfont iconmore"></div>
      </div>
    </div>
    <div class="shoppingPage">
      <better-scroll @scroll="onscroll" listen-scroll>
        <div>
          <van-swipe @change="onChange">
            <van-swipe-item v-for="index in 6" :key="index">
              <van-image fit="cover" :src="good.imgPath" />
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator">{{ current + 1 }}/6</div>
            </template>
          </van-swipe>
          <div class="block main_message">
            <div class="price">
              <span>￥</span>
              <span class="price_val">{{ good.price }}</span>
              <div class="price_old">
                价格<span class="line">{{ good.oldprice }}</span
                >起
              </div>
            </div>
            <div class="discount">
              <div class="reduction">
                <span>淘金币可抵0.87元起</span>
                <span
                  >店铺券满{{ good.reduction[0] }}减{{
                    good.reduction[1]
                  }}</span
                >
              </div>
              <div class="coupon">
                <span>领券</span>
                <div class="iconfont iconicon-test10"></div>
              </div>
            </div>
            <div class="M_sales">
              <span class="Tmall">天猫</span>
              <span class="M_sales_count">月销{{ good.M_sales }}</span>
            </div>
            <div class="introduce van-multi-ellipsis--l2">
              {{ good.introduction }}
            </div>
            <div class="function">
              <div>
                <div class="iconfont iconlike"></div>
                <span>推荐</span>
              </div>
              <div>
                <div class="iconfont icongroup_light"></div>
                <span>帮我选</span>
              </div>
              <div>
                <div class="iconfont iconshare"></div>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="block detailed_message">
            <div class="choice_type" @click="onshow(0)">
              <div class="title">选择</div>
              <div class="middle">
                <div>颜色分类</div>
                <div class="all_type">
                  共{{ good.sort.length }}种颜色分类可选
                </div>
              </div>
              <div class="iconfont iconicon-test10"></div>
            </div>
            <div class="deliver">
              <div class="title">发货</div>
              <div class="middle">
                <div>
                  <span>{{ good.shipping_address }}</span>
                  <span>|</span>
                  <span>免运费</span>
                </div>
                <div class="distribution">
                  配送至：{{ good.distribution_scope }}
                </div>
              </div>
              <div class="iconfont iconicon-test10"></div>
            </div>
            <div>
              <div class="title">保障</div>
              <div class="middle">假一赔四 · 退货运费险 · 七天无理由退换</div>
              <div class="iconfont iconicon-test10"></div>
            </div>
            <div class="rights">
              <div class="title">权益</div>
              <div class="middle">
                <span>凭芝麻分先用后付，收货满意再付 </span>
                <span class="opening">开通</span>
              </div>
              <div class="iconfont iconicon-test10"></div>
            </div>
            <div class="action">
              <div class="title">活动</div>
              <div class="middle">
                <div class="card">
                  <div></div>
                  <span>淘宝省钱卡</span>
                </div>
                <span>开卡领五元通用红包</span>
              </div>
              <div class="iconfont iconicon-test10"></div>
            </div>
            <div>
              <div class="title">参数</div>
              <div class="middle">品牌 型号...</div>
              <div class="iconfont iconicon-test10"></div>
            </div>
          </div>
          <div class="block assess">
            <div class="title">
              <span class="title_text"
                >宝贝评价（{{ good.assess.length }}）</span
              >
              <div class="look_all">
                <span>查看全部</span>
                <div class="iconfont iconicon-test10"></div>
              </div>
            </div>
            <div
              class="assess_item"
              v-for="(item, index) in good.assess"
              :key="'assess' + index"
            >
              <div class="user">
                <van-image fit="cover" :src="item.user.head_portrait" />
                <div class="user_message">
                  <span class="user_name">{{ item.user.name }}</span>
                  <span class="time">{{ item.user.time }}前</span>
                </div>
              </div>
              <div class="assess_content van-multi-ellipsis--l2">
                {{ item.content }}
              </div>
            </div>
            <div class="line"></div>
            <div class="title">
              <span class="title_text">问大家</span>
              <div class="look_all">
                <span>查看全部</span>
                <div class="iconfont iconicon-test10"></div>
              </div>
            </div>
            <div
              class="ask_item"
              v-for="(askitem, askindex) in good.ask"
              :key="'ask' + askindex"
            >
              <div>
                <span class="ask_icon">问</span>
                <span>{{ askitem.content }}</span>
              </div>
              <span class="answer_count">{{ askitem.answer_count }}个回答</span>
            </div>
          </div>
        </div>
      </better-scroll>
    </div>
    <van-goods-action class="bottombar">
      <van-goods-action-icon
        icon-class="iconfont iconshop"
        text="店铺"
        color="#ee0a24"
      />
      <van-goods-action-icon icon-class="iconfont iconwang" text="客服" />
      <van-goods-action-icon icon-class="iconfont iconfavor" text="收藏" />
      <van-goods-action-button
        type="warning"
        @click="onshow(1)"
        text="加入购物车"
      />
      <van-goods-action-button
        type="danger"
        @click="onshow(2)"
        text="立即购买"
      />
    </van-goods-action>
    <shop-popup
      :visible="show"
      :mode="mode"
      :good="good_popoup"
      @hide_popup="onhide"
    ></shop-popup>
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
      show: false,
      mode: 0,
      current: 0,
      good: {},
      goodId: null,
      good_popoup: {},
    };
  },
  methods: {
    onscroll(y) {},
    onback() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    getGoodsData() {
      const url = ``;
      this.$axios.get(url).then(
        (res) => {
          this.goods = res.data.message;
          console.log("数据接受成功");
        },
        (err) => {
          console.log(err, "数据接受失败");
        }
      );
    },
    onshow(mode) {
      this.show = true;
      this.mode = mode;
    },
    onhide() {
      this.show = false;
    },
  },
  created() {
    this.goodId = this.$route.query.id;
    this.good = this.$store.state.home_goods[this.goodId - 1];

    //设置弹出框信息
    [
      this.good_popoup.id,
      this.good_popoup.price,
      this.good_popoup.sort,
      this.good_popoup.introduction,
      this.good_popoup.assess_count,
    ] = [
      this.good.id,
      this.good.price,
      this.good.sort,
      this.good.introduction,
      this.good.assess.length,
    ];
    // this.$set(this.good_popoup, "sort", this.good.sort);
    this.$set(this.good_popoup, "sortindex", 0);
    // console.log(this.goodId);
    // this.getGoodsData();
  },
};
</script>

<style lang="scss" scoped>
//顶部栏
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  .iconicon-test8:before {
    font-size: 1.2rem;
    margin-left: 0.5rem;
    line-height: 5vh;
  }
  .van-search {
    flex: 1;
    background-color: transparent;
    padding: 0;
    margin: 0 1rem;
    .van-search__content {
      height: 1.3rem;
      padding-left: 0.6rem;
      border-radius: 1.5rem;
      background-color: #fff;
      .van-cell {
        padding: 0;
        font-size: 0.8rem;
        line-height: 1.3rem;
      }
    }
  }
  .icon {
    display: flex;
    justify-content: space-between;
    width: 4.5rem;
    margin-right: 0.5rem;
  }
}

/deep/.van-search {
  .van-icon-search::before {
    font-size: 0.9rem;
  }
}

//商品内容
.shoppingPage {
  height: 87vh;
  .van-swipe-item {
    width: 100vw;
    height: 100vw;
    //   max-height: 17rem;
    /deep/ .van-image {
      width: 100%;
      height: 100%;
      .van-image__loading,
      .van-image__error {
        .van-icon-photo-fail::before,
        .van-icon-photo::before {
          font-size: 5rem;
        }
      }
    }
  }
  //图片分页
  .custom-indicator {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    padding: 0.2rem 0.5rem;
    color: #fff;
    border-radius: 1rem;
    font-size: 0.6rem;
    background: rgba(0, 0, 0, 0.3);
  }
  .block {
    margin: 0.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
  }
  .block > div {
    margin-bottom: 0.3rem;
  }
  //主要信息
  .main_message {
    padding: 0.5rem 0.5rem 0.1rem 0.5rem;
    //价格
    .price {
      display: flex;
      align-items: flex-end;
      color: #ec5d29;
      font-size: 0.8rem;
      .price_val {
        font-size: 1.2rem;
        height: 1.2rem;
        margin-right: 0.3rem;
      }
      .price_old {
        color: #999999;
        font-size: 0.6rem;
        .line {
          text-decoration: line-through;
        }
      }
    }
    //优惠
    .discount {
      display: flex;
      justify-content: space-between;
      color: #ec5d29;
      font-size: 0.6rem;
      .reduction {
        display: flex;
        span {
          padding: 0.1rem 0.2rem;
          margin-right: 0.5rem;
          background-color: #fbeee6;
          border-radius: 0.2rem;
        }
      }
      .coupon {
        display: flex;
        align-items: center;
        .iconicon-test10 {
          font-size: 0.9rem;
        }
      }
    }
    //月销
    .M_sales {
      display: flex;
      justify-content: space-between;
      font-size: 0.6rem;
      .Tmall {
        color: #fff;
        background-color: #ea3339;
        font-size: 0.4rem;
        padding: 0.1rem 0.3rem;
        border-radius: 0.5rem;
      }
      .M_sales_count {
        margin-right: 0.2rem;
        color: #999999;
      }
    }
    //介绍
    .introduce {
      font-size: 0.8rem;
      font-weight: 550;
    }
    //功能
    .function {
      display: flex;
      justify-content: space-around;
      height: 1.6rem;
      .iconfont {
        font-size: 0.8rem;
        margin-right: 0.3rem;
      }
      .icongroup_light {
        font-size: 1rem;
      }
    }
    .function > div {
      display: flex;
      align-items: center;
      color: #999999;
      font-size: 0.6rem;
    }
  }

  //详细信息
  .detailed_message {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    font-size: 0.8rem;
    .iconicon-test10 {
      color: #999999;
    }
    .title {
      color: #999999;
    }
    .middle {
      flex: 1;
      padding-left: 1rem;
    }
    //选择分类
    .choice_type {
      .all_type {
        display: inline-block;
        padding: 0.4rem 0.6rem;
        margin: 0.3rem 0;
        font-size: 0.6rem;
        color: #999999;
        background-color: #f2f2f2;
        border-radius: 0.4rem;
      }
    }
    //配送
    .deliver {
      .distribution {
        font-size: 0.6rem;
        color: #999999;
      }
    }
    //权益
    .rights {
      .opening {
        color: #ec5d29;
      }
    }
    //活动
    .action {
      .middle {
        display: flex;
        align-items: center;
      }
      .card {
        display: inline-block;
        padding: 0 0.2rem;
        font-size: 0.4rem;
        color: #fff;
        background-color: #e7323f;
        border-radius: 0.5rem;
      }
    }
  }
  .detailed_message > div {
    display: flex;
  }

  //评价
  .assess {
    padding: 0.6rem 0.5rem;
    .look_all {
      display: flex;
      align-items: center;
      font-size: 0.6rem;
      color: #ec5d29;
    }
    .title {
      display: flex;
      justify-content: space-between;
      .title_text {
        font-size: 0.8rem;
        font-weight: 550;
      }
    }
    .line {
      margin: 0.8rem 0;
      height: 0.05rem;
      background-color: #f4f4f4;
    }
    .assess_item {
      .user {
        display: flex;
        align-items: center;
        .van-image {
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          border-radius: 50%;
          overflow: hidden;
        }
        .user_message {
          display: flex;
          flex-direction: column;
          .user_name {
            font-size: 0.8rem;
          }
          .time {
            font-size: 0.6rem;
            color: #999999;
          }
        }
      }
      .assess_content {
        margin: 0.5rem 0;
        font-size: 0.8rem;
      }
    }
    .ask_item {
      display: flex;
      justify-content: space-between;
      font-size: 0.6rem;
      .ask_icon {
        padding: 0.1rem;
        color: #fff;
        background-color: #ed7239;
        border-radius: 0.1rem;
      }
      .answer_count {
        color: #999999;
        margin-right: 0.4rem;
      }
    }
  }
}

//滚动条设置
.shoppingPage /deep/.wrapper .bscroll-vertical-scrollbar {
  top: 0 !important;
  bottom: 0 !important;
  margin-top: 5vh !important;
  margin-bottom: 8vh !important;
}

//底部栏
.bottombar {
  height: 8vh;
  position: relative;
  .van-goods-action-icon {
    min-width: 2.6rem;
    font-size: 0.6rem;
  }
  .van-goods-action-button {
    height: 2.1rem;
    font-size: 0.8rem;
  }
  .van-goods-action-button--first {
    margin-left: 0.3rem;
  }
  .van-goods-action-button--last {
    margin-right: 0.3rem;
  }
}
</style>