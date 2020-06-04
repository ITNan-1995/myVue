import { initState } from "./init";

function Vue(options) {
  // vue中传入的数据
  this._init(options); // 初始化Vue 并且将用户选项传入
}
Vue.prototype._init = function (options) {
  let vm = this;
  vm.$options = options;
  initState(vm);
};
