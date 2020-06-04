import { observe } from "./observe";

export function initState(vm) {
  let opt = vm.$options;
  if (opt.data) {
    initData(vm);
  }
}

function proxy(vm, source, key) {
  Object.defineProperties(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    },
  });
}

function initData(vm) {
  //获取用户传入的data
  let data = vm.$options.data;
  //判断data是不是函数形式
  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};
  for (let key in data) {
    //vm _data属性映射到vm属性
    proxy(vm, "_data", key);
  }
  observe(data);
}
