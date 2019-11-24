import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 使用JSON.parse()方法將數據轉換為js對象
var carLocal = JSON.parse(localStorage.getItem('car') || '[]')
export default new Vuex.Store({
  state: {
    // 练习
    // count: 0,
    // car: [],
    car: carLocal,
    count: carLocal.count
  },
  mutations: {
    // 练习
    // add1(state) {
    //   state.count++
    // },
    // add2(state, c) {
    //   state.count -= c
    // }
    addToCar(state, goodsForCar) {
      // this.selectedCount = value;
      // 把页面上的数据做成一个数组存放起来
      var flag = false;
      state.car.some(item => {
        if (item.id == goodsForCar.id) {
          item.count += goodsForCar.count;
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.car.push(goodsForCar)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    //這個goodsInfo就是stepper.vue裡sendCount傳過來的參數數組
    //id: this.goodsId,
    //count: this.value
    updateInfo(state, goodsInfo) {
      state.car.some(item => {
        //當數量改變時，獲取當前步進器所屬的商品id，在store中的對應count
        if (item.id == goodsInfo.id) {
          item.count = goodsInfo.count
          console.log('數量', item.count)
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    delLocalGoods(state, itemId) {
      //易錯點 循環的時候要傳入index！
      state.car.some((item, i) => {
        //car為本地存儲中的購物車列表數組，此處的id為$store數組裡面的商品id
        if (item.id == itemId) {
          state.car.splice(i, 1);
        }
        return true;
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    count(state, ){
      //獲取shopcar.vue裡的result已選數組裡面的價格sellprice
      //再獲取store裡state的car裡的數量
      //兩者相乘的結果相繼放入一個數組
      let c ={};
state.car.forEach(item=>{
  
  c[item.id]=item.count
})
return c;
    },
allPrice(){
  let all={};
//單價數組p[id] 拿到單價
//數量數組c[id] 拿到數量
//兩者相乘p[id]*c[id] 得到數組結果a
// 總價ac+=結果 ac+=a



}

  },
  actions: {

  },
  getters: {
    //   练习
    //  objCount(state){
    //    return '最新数据是'+ state.count
    //  } 
    // 同步購物車徽標
    getAllCount(state) {
      let c = 0;
      state.car.forEach(item => {
        c += item.count;
      })
      return c;
    },
    //初始化購物車數量
    shopCount(state) {
      var o = {};
      state.car.forEach(item => {
        // 設置對象的屬性{id1:count1, id2:count2, id3:count3}
        o[item.id] = item.count;
      })
      console.log(o);
      return o;
    },
    
  }
})
