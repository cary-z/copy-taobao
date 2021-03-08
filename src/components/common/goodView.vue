<template>
  <div class="box">
    <!-- <lazy-component> -->
    <van-image fit="cover" :src="imgPath" @load="imgLoad" />
    <!-- </lazy-component> -->

    <span class="van-multi-ellipsis--l2 introduction">{{ introduction }}</span>
    <div class="price-area">
      <div class="flexbox">
        <span class="price">￥{{ price }}</span>
        <span class="pay-message">{{ payMessage }}人付款</span>
        <van-icon name="ellipsis" @click.stop="onmore" />
      </div>
    </div>
    <div class="mask" v-show="maskflag" @click.stop="clickmask">
      <div class="select">
        <div class="select-content">
          <div>
            <!-- <div></div> -->
            <span>商品不感兴趣</span>
          </div>
          <div>
            <!-- <div></div> -->
            <span>屏蔽更多同类</span>
          </div>
          <div>
            <!-- <div></div> -->
            <span>图片引起不适</span>
          </div>
        </div>
      </div>
      <div class="find_same">
        <div class="find_same_box">
          <span>找相似</span>
          <div class="iconfont iconicon-test10"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: null,
    },
    introduction: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: null,
    },
    payMessage: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      maskflag: false,
    };
  },
  methods: {
    imgLoad() {
      // console.log("我发消息了");
      this.$eventbus.$emit("imgLoad");
    },
    onmore() {
      this.$eventbus.$emit("hidemask");
      this.maskflag = true;
    },
    clickmask() {
      console.log("还没做呢");
    },
  },
  mounted() {
    let that = this;
    this.$eventbus.$on("hidemask", () => {
      that.maskflag = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: rgb(196, 196, 206);
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  .introduction {
    margin: 0 0.5rem;
    padding-top: 0.5rem;
    font-size: 0.8rem;
  }
  .price-area {
    margin: 0.5rem 0;
    text-align: center;
    .flexbox {
      display: flex;
      align-items: center;
      padding: 0 0.4rem;
    }
    .price {
      text-align: center;
      color: #eb612a;
      font-weight: 550;
      font-size: 1rem;
    }
    .pay-message {
      flex: 1;
      text-align: left;
      padding-left: 0.5rem;
      color: #999999;
      font-size: 0.6rem;
    }
    .van-icon {
      vertical-align: middle;
      font-size: 1rem;
    }
  }
  .mask {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    .select {
      display: flex;
      align-items: center;
      height: 80%;
      .select-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 5.5rem;
      }
      .select-content > div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        width: 80%;
        font-size: 0.8rem;
        background-color: #fff;
        border-radius: 1.5rem;
      }
    }

    .find_same {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 550;
      background-color: rgba(0, 0, 0, 0.7);
      .find_same_box {
        display: flex;
        align-items: center;
      }
    }
  }
}

/deep/.van-image {
  display: block;
  .van-image__loading,
  .van-image__error {
    position: relative;
    height: 8rem;
    .van-icon-photo-fail::before,
    .van-icon-photo::before {
      font-size: 5rem;
    }
  }
}
</style>