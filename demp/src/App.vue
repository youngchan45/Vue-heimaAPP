<template>
  <div id="app" class="appContainer">
    <!-- 顶部名称 -->
    <van-nav-bar fixed title="商城test" />
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
      active: "home"
    };
  },
  mounted() {
    // setFontSize();
  },
  created() {},
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
    }
  }
};
</script>
