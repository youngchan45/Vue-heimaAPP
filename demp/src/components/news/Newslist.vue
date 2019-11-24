<template>
  <div>
    <!-- 表达式需要加上v-bind -->

    <ul>
      <li v-for="(list, id) in newsList" :key=id>
        <!-- 此处应加冒号 -->
        <router-link :to="'/home/newslist/newsinfo/'+list.id" class="news">
          <div>
            <img :src="list.img_url" alt="news.jpg" />
          </div>
          <div class="newsTit0">
            <span class="newsTit00">{{list.title}}</span>
            <div class="newsTit1">
              <span>发表时间: {{list.add_time |timeset}}</span>
              <span>阅读数: {{list.click}}次</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.news {
  display: flex;
  border-bottom: 0.01rem solid rgba(100, 120, 60, 0.5);
  padding: 0.3rem;
  color: #333;
}
.newsTit0 {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  padding: 0.3rem 0.4rem;
}
/* 如何用子选择器？？??????????? */
.newsTit00 {
  font-size: 0.8rem;
}
.newsTit1 {
  display: flex;
  justify-content: space-between;
  font-size: 0.66rem;
  color: #1990fa;
}
.news img {
  width: 3.1rem;
  height: 3.1rem;
}
</style>

<script>
import Vue from "vue";
import axios from "axios";
import Newsinfo from "./Newsinfo.vue";
// import img from "../../assets/img/news.jpg";
// import menu from "../../assets/img/menu1.png";

Vue.filter("timeset", str => {
  var dt = new Date(str);
  var y = dt.getFullYear();
  var m = ("0" + (dt.getMonth() + 1)).slice(-2);
  var d = ("0" + dt.getDate()).slice(-2);
  var h = ("0" + dt.getHours()).slice(-2);
  var mm = ("0" + dt.getMinutes()).slice(-2);
  // var s= ('0'+dt.getSeconds()).slice(-2)
  var s = dt
    .getSeconds()
    .toString()
    .padStart(2, "0");

  return `${y}-${m}-${d} ${h}:${mm}:${s}`;
});
export default {
  data() {
    return {
      newsList: [
        // {
        //   title: "",
        //   add_time: '',
        //   click: "",
        //   img_url: '',
        // },
      ]
    };
  },
  created() {
    axios.get("http://www.liulongbin.top:3005/api/getnewslist").then(res => {
      // this.title = res.data.message;
      // this.add_time = res.data.message.add_time;
      // this.click = res.data.message.click;
      this.newsList = res.data.message;
    });
  },

  methods: {}
};
</script>