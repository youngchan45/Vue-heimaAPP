import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
// import VueLazyload from 'vue-lazyload'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Toast,
  Grid,
  GridItem,
  Image,
  Card,
  Field,
  Button,
  Panel,
  Cell, CellGroup,
  Divider,
  Tab, Tabs,
  Lazyload,
  ImagePreview,
  Stepper,
  Checkbox, CheckboxGroup,
  Icon
} from 'vant'

// Vue.prototype.$ajax=axios
// Vue.use(axios,VueAxios)
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Toast).use(Grid).use(GridItem).use(Image).use(Card).use(Field).use(Button).use(Panel).use(Cell).use(CellGroup).use(Divider).use(Tab).use(Tabs).use(Lazyload).use(ImagePreview).use(Stepper).use(Checkbox).use(CheckboxGroup).use(Icon)

Vue.config.productionTip = false
Vue.filter("timeset", str => {
  var dt = new Date(str);
  var y = dt.getFullYear();
  var m = ("0" + (dt.getMonth() + 1)).slice(-2);
  var d = ("0" + dt.getDate()).slice(-2);
  var h = ("0" + dt.getHours()).slice(-2);
  var mm = ("0" + dt.getMinutes()).slice(-2);
  //   // var s= ('0'+dt.getSeconds()).slice(-2)
  var s = dt
    .getSeconds()
    .toString()
    .padStart(2, "0");

  return `${y}-${m}-${d} ${h}:${mm}:${s}`;
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
