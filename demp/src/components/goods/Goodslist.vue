<template>
  <div class="List">
    <!-- this.$route是路由参数对象，所有路由中的参数，params，query都属于他 -->
    <!-- this.$router是路由导航对象，实现路由前进后退跳转 -->
    <!-- 易错点：v-for层级写错问题：需要写在要循环的东西的上一层 -->
    <div
      class="goodsItem"
      v-for="(list,index) in goodsList.slice(0,a)"
      :key="index"
      @click="getInfo(list.id)"
    >
      <img lazy-load class="goodsImg" :src="list.img_url" alt />
      <div class="goodsTit">{{list.title}}</div>
      <div>
        <div class="goodsPrice">
          <span class="now">￥{{list.sell_price}}</span>
          <span class="old">{{list.market_price}}</span>
        </div>
        <div class="goodsStatus">
          <span class="sell">热卖中</span>
          <span class="left">剩{{list.stock_quantity}}件</span>
        </div>
      </div>
    </div>
    <van-button block type="info" @click="getMoreGoods" v-if="a<goodsList.length">加载更多</van-button>
    <van-divider v-else>没有更多了</van-divider>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //goodslist应该为数组，一开始为对象没有报错的原因是，往对象里面也是可以加数组，但contact只能拼接数组
      // goodsList：{}，
      goodsList: [],
      pageindex: 1,
      // haveNext:true
      a: 5
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getInfo(id){
this.$router.push('/home/goodslist/goodsinfo/'+id)
},    
//易错：get里面的链接如果有加别的东西的话 不需要合并在一起加括号
    //易错！！：concat是数组拼接数组，res.data.message此时已是一个数组
    getGoodsList() {
      axios
        .get(
          "http://www.liulongbin.top:3005/api/getgoods?pageindex=" +
            this.pageindex
        )
        .then(res => {
          this.goodsList = this.goodsList.concat(res.data.message);
          // if(res.data.message.length>0){
          //   this.haveNext=true;
          // }else{
          //   this.haveNext=false;
          // }
          console.log(res);
        });
    },
    getMoreGoods() {
      this.a += 5;
      this.pageindex++;
      // 一次请求回来的话就不需要再次调用拼接
      // this.getGoodsList();
    }
  }
};
</script>

<style scoped>
.List {
  display: flex;
  /* direction: row; */
  /* justify-content: flex-start; */
  flex-wrap: wrap;
  /* 换行后依旧居中且靠左的新思路：总体加一个内边距 然后里面再两边靠 */
  padding: 0.2rem 0.4rem;
  justify-content: space-between;
}
.goodsItem {
  border: 1px solid #ccc;
  box-shadow: 0 0 0.5rem #ccc;
  width: 48%;
  display: flex;
  /* 是flex-direction而不是direction */
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: .3rem; */
  /* height: 5rem; */
}
/* .goodList0:after {
  content: "";
  width: 50%;
} */
.goodsImg {
  width: 100%;
}
.goodsTit {
  font-weight: 600;
  /* word-wrap: break-word; */
  word-break: break-all;
  font-size: 0.7rem;
}
.now {
  color: red;
  padding-right: 0.5rem;
  font-size: 0.8rem;
}
.old {
  font-size: 0.2rem;
  text-decoration: line-through;
  color: rgb(114, 113, 113);
}
.sell,
.left {
  color: grey;
  font-size: 0.6rem;
}
.goodsPrice,
.goodsStatus {
  background-color: #eeebeb;
  padding: 0.2rem;
}
.goodStatus {
  display: flex;
  justify-content: space-between;
}
.van-divider--content-center {
  margin: 1rem auto;
}
</style>