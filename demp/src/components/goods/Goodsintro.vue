<template>
  <div class='container'>
    <div v-for="(introItem,index) in introList" :key="index">
      <h3>{{introItem.title}}</h3>
      <van-divider />
      <div class='content' v-html="introItem.content"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // 分清route和router的区别
      id: this.$route.params.id,
      introList: []
    };
  },
  created() {
    this.getIntro();
  },
  methods: {
    getIntro() {
      axios
        .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
        .then(res => {
          this.introList = res.data.message;
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
.container{
    padding: .2rem;
}
img{
    width: 100%;
}
</style>

