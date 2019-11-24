<template>
  <div>
    <!--易错点：复选框组中的v-model是一个数组，选中的值是每个复选项中的name，选中后则讲name往数组里面加-->
    <!--单纯的复选框中的v-model是一个布尔值-->
    <!--商品部分-->
    <van-checkbox-group v-model="result" ref="checkboxGroup" class="container">
      <div v-for="(item,index) in carList" :key="index">
        <van-checkbox :name="item" ref='name'>
          <div class="goodsItem">
            <img class="imgs" :src="item.thumb_path" alt="商品圖片" />
            <div class="info">
              <div class="title">{{item.title}}</div>
            </div>
          </div>
        </van-checkbox>
        <div class="price">
          <span>￥{{item.sell_price}}</span>
          <!-- 之所以在這裡有數量的變化，是因為在這個組件裡面為步進器傳值了 而沒有在商品頁面傳值 所以商品頁面還是保持數量1 -->
          <!--不能直接拿數組裡面的數量 因為不知道是哪一個id 應該先根據id拿數量-->
          <stepper :init="$store.getters.shopCount[item.id]" :goodsId="item.id" ref="h"></stepper>
          <!-- :count='$store.getters.shopCount[item.id]' -->
          <a href="#" @click.prevent="del(item.id,index)">删除</a>
        </div>
      </div>
    </van-checkbox-group>

    <!-- 購物車為零時展示的頁面 -->
    <div :class="[isZero?'yZero':'nZero']">
      <div class="zero1">
        <div class="zero2">
          <van-icon name="shopping-cart-o" size="1.3rem" />
          <span>購物車為空</span>
        </div>
        <div @click="goShop">點我買買買</div>
      </div>
    </div>
    <!-- 全選結算區域 -->
    <div class="countLayout" :class="{pay:isPay}">
      <div class="count">
        <van-button type="primary" size="small" @click="checkAll">全选</van-button>
        <!-- <van-checkbox v-model="allBtn" @click="checkAll" name='all'>全选</van-checkbox> -->
        <div>
          <span>合计：(价格)</span>
          <van-button type="danger" size="small">结算（{{this.result.length}}）</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Stepper from "../subcomponent/Stepper.vue";
export default {
  data() {
    return {
      result: [],
      // all: false,
      carList: [],
      isPay: false,
      isZero: false,
      allBtn: false
    };
  },
  created() {
    this.getCarList();
    // this.all();
    console.log('已選', this.result);
  },
  methods: {
    // all(){
    //   this.$refs.checkboxGroup.toggleAll(true);
    // },
    checkAll() {
      // this.all = !this.all

      // 如果添加的數組裡面(代表已勾選)長度等於購物車裡的數組數量，那點擊按鈕時就是反選；除此之外的情況就是全選
      if (this.result.length == this.$store.state.car.length) {
        this.$refs.checkboxGroup.toggleAll(false);
      } else {
        this.$refs.checkboxGroup.toggleAll(true);
      }
      // console.log(this.result,this.all)
    },
    getCarList() {
      //經常漏掉$store
      let idArr = [];
      // idArr = this.$store.state.car;
      // console.log(idArr);
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      // console.log(idArr);
      if (idArr.length <= 0) {
        this.isPay = true;
        this.isZero = true;
        return;
      }
      axios
        .get(
          "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
            idArr.join(",")
        )
        .then(res => {
          // let carIds = localStorage.getItem("car");
          // this.idArr = carIds.join(",");
          this.carList = res.data.message;
          this.isPay = false;
          this.isZero = false;
          console.log(res);
        });
    },
    goShop() {
      this.$router.push("/home/goodslist");
    },
    del(itemId, index) {
      //之前學習的刪除方式（傳遞index）是將信息從頁面的渲染中刪去，因為這裡還涉及到本地存儲，所以不僅要從頁面刪去，還要從store的本地存儲中刪去
      //頁面刪去
      this.carList.splice(index, 1);
      //易錯：本地存儲不是寫在這裡
      // localStorage.removeItem('id')
      this.$store.commit("delLocalGoods", itemId);
      // console.log(this.item.id)
    },
    goodsPay(p){
      
    }
  },
  components: {
    stepper: Stepper
  }
};
</script>

<style scoped>
.container {
  padding: 0.5rem;
  border: 1px #ccc solid;
  box-shadow: 0 0 0.5rem #ccc;
}
.goodsItem,
.price,
.count {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.container,
.price {
  margin: 0.4rem;
}
.imgs {
  width: 17%;
}
.title {
  line-height: 1.4rem;
  font-size: 0.8rem;
}
.info {
  font-size: 0.8rem;
  padding: 0 0.3rem;
}
.price > span {
  color: red;
  margin-right: 0.8rem;
}
span:nth-child(3) {
  color: blue;
  margin-left: 0.8rem;
}
.countLayout {
  background-color: #fff;
  position: fixed;
  bottom: 50px;
  width: 100%;
  height: auto;

  padding: 0.5rem;
}
.count span {
  font-size: 0.5rem;
  margin-right: 0.7rem;
}
.pay {
  display: none;
}
.zero1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.zero2 {
  display: flex;
}
.zero2 + div {
  font-size: 1.2rem;
  color: rgba(255, 0, 0, 0.671);
  margin-top: 0.6rem;
}
.yZero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  font-size: 0.9rem;
}
.nZero {
  display: none;
}
</style>