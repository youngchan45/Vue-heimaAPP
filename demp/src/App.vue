<template>
  <div id="app" class="appContainer">
    <!-- 顶部名称 -->
    <van-nav-bar fixed :title="$route.name">
      <span slot="left" @click="onClickLeft" v-show="flag">
        <span>
          <van-icon name="arrow-left" />返回
        </span>
      </span>
    </van-nav-bar>
    <!-- 中间组件 -->
    <transition name="mainTrans">
      <router-view></router-view>
    </transition>
    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="/home" dot>首页</van-tabbar-item>
      <van-tabbar-item name="member" icon="friends-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item
        name="shopcar"
        icon="cart-o"
        to="/shopcar"
        :info="$store.getters.getAllCount"
      >购物车</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
.appContainer {
  padding-top: 2.75rem;
  padding-bottom: 4rem;
  overflow-x: hidden;
}
.mainTrans-enter {
  opacity: 0;
  transform: translateX(100%);
}
.mainTrans-leave-to {
  opacity: 0;
  transform: translateX(50%);
  position: absolute;
}
.mainTrans-enter-active,
.mainTrans-leave-to-active {
  transition: all 0.5s ease;
}
</style>
<script>
export default {
  data() {
    return {
      active: this.$route.path,
      flag: false
    };
  },
  props: ["name"],
  mounted() {
    // setFontSize();
  },
  created() {
    // this.flag=this.$route.path=== "/home" ||
    //     this.$route.path === "/member" ||
    //     this.$route.path === "/shopcar" ||
    //     this.$route.path === "/search"?false:true
    //       // this.flag=this.$route.path=== "/home"?false:true
    //       // this.flag=this.$route.path === "/member"?false:true
    //       // this.flag=this.$route.path === "/shopcar"?false:true
    //       // this.flag=this.$route.path === "/search"?false:true
    // this.watch;
  },
  methods: {
    setFontSize() {
      let docEl = document.documentElement,
        resizeEvt =
          "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function() {
          let clientWidth = docEl.clientWidth;
          if (clientWidth >= 640) {
            clientWidth = 640;
          }
          if (clientWidth === undefined) return;
          docEl.style.fontSize = 16 * (clientWidth / 640) + "px";
        };
      if (document.addEventListener === undefined) return;
      window.addEventListener(resizeEvt, recalc, false);
      document.addEventListener("DOMContentLoaded", recalc, false);
      recalc();
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  watch: {
    //深度监听：immediate执行handler里的方法
    "$route.path": {
      handler: function(newVal) {
        // if(newVal.lastIndexOf('/')>0){
        //   alert('0')
        //   var act= newVal.split("/")
        //   // alert(act)
        //   var ive= act[0]
        // }
        if (
          newVal === "/home" ||
          newVal === "/member" ||
          newVal === "/shopcar" ||
          newVal === "/search"
        ) {
          this.flag = false;
          this.active = newVal.replace("/", "");
          // this.active=ive;
          // alert(ive)
        } else {
          this.flag = true;
        }
      },
      immediate: true
    }
  }
  // "$route.path": {
  //   handler: function() {
  //     switch (this.$route.path) {
  //       case "/home":
  //         this.active = "home";
  //         break;
  //       case "/member":
  //         this.active = "member";
  //         break;
  //       // case :
  //       // this.active='shopcar'
  //       // break;
  //       // case :
  //       // this.active='search'
  //       // break;
  //     }
  //   },
  //   immediate: true
  // }
};
</script>
