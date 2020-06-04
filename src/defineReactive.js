import { observe } from "./observe";

export function defineReactive(data, key, value) {
  //深度监听
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue === value) {
        return;
      }
      value = newValue;
      //变化时监听
      observe(value);
    },
  });
}
