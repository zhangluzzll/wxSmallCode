//index.js
//获取应用实例
// var app = getApp()
// Page({
//   data: {
//     motto: '你好，我是谁',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })
Page({
    data:{
      content:{},
        recommend:"textLine",
        newClass:"",
        hidden1:"",
        hidden2:"none",
        productDescription:[{
            ImgSrc:"../../images/2.png",
            composer:"拉赫玛尼诺夫：第二钢琴协奏曲 6首前奏曲",
            musicMore:"Rachmaninoff:KlavierKonzert,6 Preludes"
        },
         {
            ImgSrc:"../../images/1.png",
            composer:"肖邦：24首前奏曲 No.25前奏曲 No.26前奏曲（遗作）",
            musicMore:"Chopin:24 Preludes op.28"
        },
         {
            ImgSrc:"../../images/4.png",
            composer:"莫扎特：第三小提琴协奏曲 第五小提琴协奏曲",
            musicMore:"Mozart:Violin Concertos"
        },
         {
            ImgSrc:"../../images/3.png",
            composer:"巴赫：无伴奏小提琴奏鸣曲与组曲（内森·米尔斯坦）",
            musicMore:"Bach：Sonatas and Partitas for SoloViolin (Nathan Milstein)"
        }
        ],
         product:[{
            MoreImgSrc:"../../images/new1.png",
            MoreComposer:"舒曼：C大调第二交响曲op.61 帕...",
            MoreMusic:"Schuman - Paul Paray,Detroit Symphony..."},
        {
            MoreImgSrc:"../../images/new2.png",
            MoreComposer:"舒曼：C大调第二交响曲op.61 帕...",
            MoreMusic:"Schuman - Paul Paray,Detroit Symphony..."},
        {
            MoreImgSrc:"../../images/new3.png",
            MoreComposer:"巴拖克：第二组曲 多拉蒂指挥明...",
            MoreMusic:"Antal Doratil,Minneapolis Symphony Orche..."},
         {
            MoreImgSrc:"../../images/new4.png",
            MoreComposer:"巴拖克：第二组曲 多拉蒂指挥明...",
            MoreMusic:"Antal Doratil,Minneapolis Symphony Orche..."},
         {
            MoreImgSrc:"../../images/new5.png",
            MoreComposer:"理查·施特劳斯：玫瑰骑士&蒂尔...",
            MoreMusic:"Schuman - Paul Paray,Detroit Symphony..."},
        {
            MoreImgSrc:"../../images/new1.png",
            MoreComposer:"理查·施特劳斯：玫瑰骑士&蒂尔...",
            MoreMusic:"Schuman - Paul Paray,Detroit Symphony..."}
        ],
    },
    //  onLoad:function(){
    //   var that =this;
    //     wx.request({
    //       url: 'http://192.168.0.108:1111/index.do',
    //       data: {},
    //       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //       // header: {}, // 设置请求的 header
    //       success: function(res){
    //           console.log(res);
    //           var result =res.data;
    //           that.setData({content:result});
    //           // console.log(that.data.content)
    //         // success
    //       },
    //       fail: function() {
    //         console.log("失败---------")
    //       },
    //       complete: function() {
    //         //  console.log("完成---------")
    //       }
    //     });
    //     wx.request({
    //       url: 'http://192.168.0.108:1111/new.do',
    //       data: {},
    //       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //       // header: {}, // 设置请求的 header
    //       success: function(res){
    //           // console.log(res);
    //           var result2 =res.data;
    //           that.setData({content2:result2});
    //           // console.log(that.data.content2)
    //         // success
    //       },
    //       fail: function() {
    //         console.log("失败---------")
    //       },
    //       complete: function() {
    //         //  console.log("完成---------")
    //       }
    //     })
    // },
     onShareAppMessage: function () {
    return {
      title: '音乐圣经，有你想要的黑胶唱片！',
      path: '/pages/index/index'
    }
  },
    Tabcontent:function(){
           this.setData({recommend:"",newClass:"textLine",hidden1:"none",hidden2:"",})
    },
    TabContent:function(){
        this.setData({recommend:"textLine",newClass:"",hidden1:"",hidden2:"none",})
    }
})