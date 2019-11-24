<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white" class="swipelist">
      <van-swipe-item v-for="(image,index) in imgList" :key="index">
        <img :src="image.img||image.src" />
      </van-swipe-item>
      <!-- <van-swipe-item>2</van-swipe-item>
           <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>-->
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
// import { ImagePreview } from "vant";
// Vue.use(ImagePreview);
export default {
  props:['imgList'],
  data() {
    return {
      // imgList:[],
    };
  },
  created() {

  },
  methods: {
   
  }
};
</script>

<style scoped>
.swipelist {
  height: auto;
  width: 100%;
}
.swipelist img {
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>