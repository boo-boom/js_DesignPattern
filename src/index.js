// class A {
//   constructor() {
//     this.abc = 123123123
//   }
//   static fn1() {
//     this.fn2()
//     console.log(this.abc)
//   }
//   static fn2() {
//     console.log(this)
//   }
//   fn3() {
//     console.log(this)
//   }
// }

// A.fn1()
// const a = new A()
// a.fn3()

// function A() {
//   console.log(2222, this)
// }
// A.B = function() {
//   console.log(1111, this)
// }
// var c = new A()

// A.B()


// console.log([1,2] + ['aaa'])

// const p1 = document.querySelector('#p1')
// console.log(p1.clientWidth)

// function a() {
//   var i = 1
//   return function () {
//     // i++   // 2 , 3
//     console.log(i)
//   }
// }
// var b = a()
// b() //1
// b() //2

// var obj = {
//   name: 'name123',
//   getName: function() {
//     console.log(this.name)
//   }
// }
// var getName = obj.getName
// obj.getName() // name123
// getName()   // undefined

// setTimeout(function(){
//   console.log('dd')
// }, 0)
// console.log('tt')
// // tt => dd

// var a = {
//     c: 1
// }
// var b = a
// a.c = 2
// console.log(b)

// b()                         // call b
// console.log(a)              // undefined
// var a = 'hello world'
// function b() {
//     console.log('call b')   
// }

// function a() {
//     return this
// }
// a.prototype.getName = function() {
//     console.log('2')
// }
// new a.getName()                     // not a constructor

// var s = 'jhdoiweesdds'
// var n = (s.split('d')).length - 1
// console.log(n)

// const a = 'aA'
// const b = 'aAAbbbb'
// const n1 = (b.split(a.charAt(0))).length - 1
// const n2 = (b.split(a.charAt(1))).length - 1
// console.log(n1 + n2)

// var arr1 = [1, 1, 2, 2, 3, 4, 5, 5]
// var arr2 = []
// // arr2 = [...new Set(arr1)]
// // arr2 = Array.from(new Set(arr1))
// for (var i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) == -1) {
//         arr2.push(arr1[i])
//     }
// }
// console.log(arr2)

// 大整数相加
// function add(a, b) {
//     let i = a.length-1;
//     let j = b.length-1;
//     let carry = 0;
//     let ret = ''
//     while (i >= 0 || j >= 0) {
//         let x = 0;
//         let y = 0;
//         let sum;
        
//         if ( i >= 0 ) {
//             x = a[i] - '0'
//             i--
//         } 
//         if ( j >= 0 ) {
//             y = b[j] - '0'
//             j--
//         } 
//         sum = x + y + carry;
//         if (sum >= 10) {
//             carry = 1
//             sum -= 10
//         } else {
//             carry = 0
//         }
//         ret = sum + ret
//     }
//     if (carry) {
//         ret = carry + ret
//     }
//     return ret
// }
// console.log(add('999','1'))