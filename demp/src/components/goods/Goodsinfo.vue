<template>
  <div>
    <!-- 商品图片轮播 -->
    <swipe class="border" :imgList="goodsImgList"></swipe>
    <!-- 购买详情 -->
    <!-- <div class="border" v-for="(priceItem,index) in priceList" :key="index"> -->
    <!-- <div class="border" v-for="(goodsItem,index) in goodsInfo" :key="index"> -->
    <!-- v-for="(priceItem,index) in priceList" :key="index" -->
    <!--把接口的內容渲染出來不一定總是要用V-for，如果res.data.message裡面只有一個對象，那直接指定出來就可以了-->
    <div class="price border">
      <div class="title">{{priceList.title}}</div>
      <span class>市场价：</span>
      <span>{{priceList.market_price}}</span>
      <span>销售价：</span>
      <span>{{priceList.sell_price}}</span>
      <div class="info">
        <div>商品货号：{{priceList.goods_no}}</div>
        <div>库存情况：{{priceList.stock_quantity}}件</div>
        <div>上架时间：{{priceList.add_time |timeset}}</div>
      </div>

      <div class="num">
        <span>购买数量：</span>
        <!--绑定子组件文件里面传递的方法，另起一个函数名，在这个函数里面处理传递过来的数据-->
        <stepper @changeCount="countChange" :max="priceList.stock_quantity"></stepper>
      </div>

      <!-- 按钮 -->

      <!-- 商品参数 -->
      <!-- <div class="border" v-for="(priceItem,index) in priceList" :key="index"> -->
      <!-- <div class="title">商品参数</div> -->

      <div>
        <van-button type="info" size="small">立即购买</van-button>
        <!--把这个函数传递给按钮-->
        <van-button type="danger" size="small" @click="addToShopCar">加入购物车</van-button>
        <!-- </div> -->
        <van-button plain hairline type="info" block size="small" @click="goIntro(id)">图文介绍</van-button>
        <van-button plain hairline type="danger" block size="small" @click="goCom(id)">商品评论</van-button>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { Swipe } from 'vant';
import Swipe from "../subcomponent/Swipe.vue";
import Stepper from "../subcomponent/Stepper.vue";
export default {
  data() {
    return {
      goodsImgList: [],
      id: this.$route.params.id,
      // goodsInfo: [],
      priceList: {},
      selectedCount: 1
      // max: this.priceList
    };
  },
  created() {
    this.getGoodsImg();
    this.getPrice();
  },
  methods: {
    getGoodsImg() {
      axios
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(res => {
          this.goodsImgList = res.data.message;
        });
    },
    // getGoods() {
    //   axios
    //     .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
    //     .then(res => {
    //       this.goodsInfo = res.data.message;
    //     });
    // },
    // 获取id、上架时间、货号、库存、数量
    getPrice() {
      axios
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.id)
        .then(res => {
          //！！！易錯點：數組裡面只有一個對象的話直接取第一個，[0]經常漏掉，如果不寫[0]則在下面取priceList.sell_price應該寫上0
          this.priceList = res.data.message[0];
        });
    },
    goIntro(id) {
      this.$router.push("/home/goodslist/goodsinfo/goodsintro/" + this.id);
    },
    goCom(id) {
      this.$router.push("/home/goodslist/goodsinfo/goodscom/" + this.id);
    },
    //步进器数量改变
    countChange(value) {
       this.selectedCount= value;
      console.log("子组件", value);
    },
    //点击加入购物车
    addToShopCar() {
      let goodsForCar = {
        id: this.id,
        price: this.priceList.sell_price,
        count: this.selectedCount,
        selected: true
      };
      this.$store.commit("addToCar", goodsForCar);
      this.$toast("已加入购物车");
      console.log(goodsForCar);
    }
  },
  components: {
    swipe: Swipe,
    Stepper: Stepper
  }
};
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
  box-shadow: 0 0 0.5rem #ccc;
  margin: 0.4rem;
  padding: 0.4rem;
}
.title {
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.5rem 0;
}
.price {
  font-size: 0.7rem;
  line-height: 1rem;
}
span:nth-child(3) {
  text-decoration: line-through;
  font-size: 0.7rem;
  padding-right: 1rem;
}
span:nth-child(5) {
  color: red;
  font-size: 0.9rem;
  font-weight: 600;
}
.van-stepper {
  display: inline-block;
}
.num {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}
.van-button {
  margin: 0.5rem 1.3rem 0.5rem 0;
}
.info {
  font-size: 0.8rem;
  padding: 0.3rem 0;
}
.info > div {
  padding: 0.3rem 0;
}
/* .ball {
  background-color: rgba(255, 0, 0, 0.377);
  border-radius: 50%;
  position: absolute;
  top: 29rem;
  left: 7rem;
  width: 0.7rem;
  height: 0.7rem;
  z-index: 99;
} */
/* .shopcar-enter {
  opacity: 0;
  transform: 
}
.shopcar-leave-to {
  opacity: 0;
} */
</style>