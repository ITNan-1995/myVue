import { defineReactive } from "./defineReactive.js";

export function observe(data) {
  if (typeof data !== "object" || data == null) {
    return;
  }
  return new Observe(data);
}

class Observe {
  constructor(data) {
    this.walk(data);
  }
  walk(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
}
