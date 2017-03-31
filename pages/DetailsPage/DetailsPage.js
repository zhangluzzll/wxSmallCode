Page({
    onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
 data: {
     content:{},
    imgUrls: [
      '../../images/2-1.png',
      '../../images/2-2.png',
      '../../images/2-3.png',
      '../../images/2-4.png'
    ],
    indicatorDots: true,
    autoplay: false,
    duration: 1000,
    more:{
        musicName:"拉赫玛尼诺夫：第二钢琴协奏曲 6首前奏曲",
        musicMore:"Rachmaninoff:KlavierKonzert,6 Preludes",
        RecordMedia:"LP",
        RecordNum:"138076",
        RecordLable:"DGG",
        composerName:"谢尔盖.瓦西里耶维奇·拉赫玛尼诺夫",
        artistName:"斯维亚托斯拉夫·里赫特",
        musicSrc:'http://ac-5g9r20ds.clouddn.com/e54ad7f0a834b9c07ec6.mp3'
   },

  },
//      onLoad:function(options){
//       console.log("11111111111111");
//       console.log(options.id) ;
// //==================服务器===========//
//       var that =this;
//         wx.request({
//           url: 'http://192.168.0.108:1111/Details.do',
//           data: {Id:options.id},
//           method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
//           // header: {}, // 设置请求的 header
//           success: function(res){
//               console.log(res);
//               var result =res.data;
//               that.setData({content:result});
//               console.log(that.data.content)
//             // success
//           },
//           fail: function() {
//             console.log("失败---------")
//           },
//           complete: function() {
//              console.log("完成---------")
//           }
//         });
//     },
    // myerror:function(){
    //     detail = {errMsg:MediaError.code}
    // },

})
