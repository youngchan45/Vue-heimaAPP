<template>
  <div class="all">
    <div class="title">
      <h4>{{imgInfo.title}}</h4>
    </div>
    <div class="container">
      <span>发表时间: {{imgInfo.add_time | timeset}}</span>
      <span>点击{{imgInfo.click}}次</span>
    </div>
    <van-divider />
    <!-- 图片区域 -->
    <!-- v-for里的每个单词记得空格 -->
    <div class="imgFive0">
      <div
        class="imgFive1"
        v-for="(imgs,index) in imgPreview"
        :key="index"
        @click="imgPre(imgPreview,index)"
      >
        <van-image :src="imgs.src" />
      </div>
    </div>
    <!-- 介绍详情 -->
    <article class="info" v-html="imgInfo.content"></article>
    <van-divider />
    <!-- 评论区域 -->
    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { ImagePreview } from "vant";
Vue.use(ImagePreview);
import Comment from "../subcomponent/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      imgInfo: {},
      imgPreview: []
    };
  },
  created() {
    this.getInfo();
    this.getImg();
  },
  methods: {
    getInfo() {
      axios
        .get("http://www.liulongbin.top:3005/api/getimageInfo/" + this.id)
        .then(res => {
          this.imgInfo = res.data.message[0];
        });
    },
    //获取5张图片
    getImg() {
      axios
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(res => {
          this.imgPreview = res.data.message;
        });
    },
    //预览五张图片
    imgPre(imgPrev, index) {
      ImagePreview({
        images: imgPrev,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    }
  },
  components: {
    "comment-box": Comment
  }
};
</script>

<style scoped>
.all {
  padding: 0 0.4rem;
}
.container {
  display: flex;
  justify-content: space-between;
}
.title {
  display: flex;
  justify-content: center;
  color: #1990fa;
}
.container span {
  font-size: 0.8rem;
}
.imgFive0 {
  display: flex;
  direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.imgFive1 {
  width: 33%;
}
/* 重点：必须记起来！换行后总体居中，但又向左对齐 */
.imgFive0:after {
  content: "";
  width: 33%;
}
img {
  max-width: 100%;
}
/* 重点：必须记起来！如何让div内的文字自动换行 */
.info {
  width: 100%;
  /* word-break: break-all; */
  word-wrap: break-word;
  line-height: 1.4rem;
}
</style>