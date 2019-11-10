/**
 * 适配器模式：
 *          旧接口格式和使用者不兼容
 *          中间加一个适配转换接口
 */
// 演示： 美国插座 --> 适配器 --> 中国插座
class Usa {
    outlet() {
        return '美国插座'
    }
}

class China {
    constructor() {
        this.adaptee = new Usa()
    }
    outlet_zh() {
        return `${this.adaptee.outlet()} --> 适配器 --> 中国插座`
    }
}

const zh = new China()
console.log(zh.outlet_zh())

// 模拟情况
// // 原代码有$,新的代码要兼容这个$对象
// $.ajax({
//     url: '...'
// })
// // 适配器
// const $ = {
//     ajax: function(options) {
//         return ajax(options)
//     }
// }
