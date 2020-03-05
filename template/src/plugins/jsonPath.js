import Vue from 'vue'
import jsonPath from "./../utils/jsonPath.js";

Vue.use(function(Vue) {
  // 4. add an instance method
  Vue.prototype.$jsonPath = jsonPath
})
