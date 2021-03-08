import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //首页商品
    home_goods: [{
        id: 1,
        imgPath: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
        introduction: "奢华珍贵香水",
        price: 999,
        oldprice: 9999.9,
        payMessage: 5,
        reduction: [2000, 100],
        M_sales: 2,
        sort: [{
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
            name: "红色",
          },
          {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
            name: "蓝色",
          },
          {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
            name: "绿色",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 2,
        imgPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
        introduction: "太阳能机械智能表",
        price: 12,
        oldprice: 25.6,
        payMessage: 55,
        reduction: [100, 8],
        M_sales: 22,
        sort: [{
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
            name: "土豪金",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
            name: "基佬紫",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
            name: "玫瑰红",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 3,
        imgPath: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2884639510,3633674774&fm=26&gp=0.jpg",
        introduction: "防水手电筒",
        price: 5,
        oldprice: 11,
        payMessage: 605,
        reduction: [60, 17],
        M_sales: 255,
        sort: [{
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2884639510,3633674774&fm=26&gp=0.jpg",
            name: "防水",
          },
          {
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2884639510,3633674774&fm=26&gp=0.jpg",
            name: "不防水",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 4,
        imgPath: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310367487,4231052398&fm=26&gp=0.jpg",
        introduction: "蓝色面霜",
        price: 88,
        oldprice: 188.8,
        payMessage: 36,
        reduction: [250, 25],
        M_sales: 18,
        sort: [{
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310367487,4231052398&fm=26&gp=0.jpg",
            name: "润肤",
          },
          {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310367487,4231052398&fm=26&gp=0.jpg",
            name: "保湿",
          },
          {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310367487,4231052398&fm=26&gp=0.jpg",
            name: "润肤",
          },
          {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310367487,4231052398&fm=26&gp=0.jpg",
            name: "保湿",
          },
          {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310367487,4231052398&fm=26&gp=0.jpg",
            name: "润肤",
          },
          {
            img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310367487,4231052398&fm=26&gp=0.jpg",
            name: "保湿",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 5,
        imgPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3897794449,4060163913&fm=26&gp=0.jpg",
        introduction: "银手镯",
        price: 1500,
        oldprice: 2000,
        payMessage: 2,
        reduction: [10000, 800],
        M_sales: 0,
        sort: [{
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3897794449,4060163913&fm=26&gp=0.jpg",
            name: "大号",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3897794449,4060163913&fm=26&gp=0.jpg",
            name: "小号",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 6,
        imgPath: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292048063,130579777&fm=26&gp=0.jpg",
        introduction: "抽人必备皮带",
        price: 1,
        oldprice: 2.3,
        payMessage: 999,
        reduction: [10, 9],
        M_sales: 999,
        sort: [{
            img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292048063,130579777&fm=26&gp=0.jpg",
            name: "痛",
          },
          {
            img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292048063,130579777&fm=26&gp=0.jpg",
            name: "很痛",
          },
          {
            img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292048063,130579777&fm=26&gp=0.jpg",
            name: "非常痛",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 7,
        imgPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2779184482,2767127028&fm=26&gp=0.jpg",
        introduction: "一下嘎嘣脆的可口坚果",
        price: 48,
        oldprice: 68,
        payMessage: 698,
        reduction: [200, 50],
        M_sales: 422,
        sort: [{
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2779184482,2767127028&fm=26&gp=0.jpg",
            name: "大袋",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2779184482,2767127028&fm=26&gp=0.jpg",
            name: "小袋",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 8,
        imgPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315900306,584853996&fm=26&gp=0.jpg",
        introduction: "精油",
        price: 66,
        oldprice: 99,
        payMessage: 88,
        reduction: [100, 20],
        M_sales: 44,
        sort: [{
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315900306,584853996&fm=26&gp=0.jpg",
            name: "红色",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315900306,584853996&fm=26&gp=0.jpg",
            name: "蓝色",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315900306,584853996&fm=26&gp=0.jpg",
            name: "绿色",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315900306,584853996&fm=26&gp=0.jpg",
            name: "蓝色",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315900306,584853996&fm=26&gp=0.jpg",
            name: "绿色",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 9,
        imgPath: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557750652,71235332&fm=26&gp=0.jpg",
        introduction: "香喷喷的蛋挞",
        price: 3,
        oldprice: 5.5,
        payMessage: 888,
        reduction: [20, 7],
        M_sales: 666,
        sort: [{
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557750652,71235332&fm=26&gp=0.jpg",
            name: "1个",
          },
          {
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557750652,71235332&fm=26&gp=0.jpg",
            name: "2个",
          },
          {
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557750652,71235332&fm=26&gp=0.jpg",
            name: "4个",
          },
          {
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557750652,71235332&fm=26&gp=0.jpg",
            name: "6个",
          },
          {
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557750652,71235332&fm=26&gp=0.jpg",
            name: "1打（12个）",
          },
          {
            img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557750652,71235332&fm=26&gp=0.jpg",
            name: "一盒（24个）",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
      {
        id: 10,
        imgPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2219022629,43831375&fm=26&gp=0.jpg",
        introduction: "熟透了快发芽的土豆",
        price: 8,
        oldprice: 1.85,
        payMessage: 222,
        reduction: [60, 7],
        M_sales: 111,
        sort: [{
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2219022629,43831375&fm=26&gp=0.jpg",
            name: "一袋",
          },
          {
            img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2219022629,43831375&fm=26&gp=0.jpg",
            name: "一筐",
          },
        ],
        shipping_address: "江苏苏州",
        distribution_scope: "梅州市梅江区",
        assess: [{
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
          {
            user: {
              name: "恪夕",
              head_portrait: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1962382569,2221033797&fm=26&gp=0.jpg",
              time: 26,
            },
            content: "很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾很垃圾",
          },
        ],
        ask: [{
            content: "是木头的吗",
            answer_count: 2
          },
          {
            content: "这样坐着会很累吗",
            answer_count: 1
          },
        ],
      },
    ],

    //购物车商品
    goods_list: [{
        shop_name: "官方旗舰店",
        action: {
          actioncontent: "部分商品满579减80",
        },
        goods: [{
            id: 1,
            imgPath: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
            introduction: "奢华珍贵香水",
            sort: [{
                img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=196776568,281535040&fm=26&gp=0.jpg",
                name: "红色",
              },
              {
                img: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00187-780.jpg",
                name: "蓝色",
              },
              {
                img: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00006-2339.jpg",
                name: "绿色",
              },
            ],
            sortindex: 2,
            assess_count: 3,
            price: 999,
            num: 1,
          },
          {
            id: 1,
            imgPath: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
            introduction: "奢华珍贵香水",
            sort: [{
                img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
                name: "红色",
              },
              {
                img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
                name: "蓝色",
              },
              {
                img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
                name: "绿色",
              },
            ],
            sortindex: 1,
            assess_count: 3,
            price: 999,
            num: 1,
          },
          {
            id: 1,
            imgPath: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
            introduction: "奢华珍贵香水",
            sort: [{
                img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
                name: "红色",
              },
              {
                img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
                name: "蓝色",
              },
              {
                img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg",
                name: "绿色",
              },
            ],
            sortindex: 2,
            assess_count: 3,
            price: 999,
            num: 1,
          },
        ],
      },
      {
        shop_name: "手表官方旗舰店",
        goods: [{
            id: 2,
            imgPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
            introduction: "太阳能机械智能表",
            sort: [{
                img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
                name: "土豪金",
              },
              {
                img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
                name: "基佬紫",
              },
              {
                img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
                name: "玫瑰红",
              },
            ],
            sortindex: 0,
            assess_count: 3,
            price: 12,
            num: 1,
          },
          {
            id: 2,
            imgPath: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
            introduction: "太阳能机械智能表",
            sort: [{
                img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
                name: "土豪金",
              },
              {
                img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
                name: "基佬紫",
              },
              {
                img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746093206,4171933474&fm=26&gp=0.jpg",
                name: "玫瑰红",
              },
            ],
            sortindex: 1,
            assess_count: 3,
            price: 12,
            num: 1,
          }

        ],
      },
    ],
  }
})
