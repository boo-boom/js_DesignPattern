class createObject {
  fn1() {
    // 每次实例化都会创建一个fn1的方法
  }
}

createObject.fn2 = function() {
  // 静态方法
  // 无论实例化多少次   均只有一个fn2方法
};
