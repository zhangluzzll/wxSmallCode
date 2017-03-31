Page({
    data:{
        recommend:"textLine",
        newClass:"",
        hidden1:"",
        hidden2:"none",
        productDescription:[{
            ImgSrc:"../../images/2.png",
            composer:"拉赫玛尼诺夫：第二...",
            musicMore:"Rachmanionff:Klavierkon..."
        },
         {
            ImgSrc:"../../images/1.png",
            composer:"肖邦：24首前奏曲 N...",
            musicMore:"Rachmanionff:Klavierkon..."
        },
         {
            ImgSrc:"../../images/4.png",
            composer:"拉赫玛尼诺夫：第二...",
            musicMore:"Rachmanionff:Klavierkon..."
        },
         {
            ImgSrc:"../../images/3.png",
            composer:"拉赫玛尼诺夫：第二...",
            musicMore:"Rachmanionff:Klavierkon..."
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
            MoreComposer:"舒曼：C大调第二交响曲op.61 帕...",
            MoreMusic:"Schuman - Paul Paray,Detroit Symphony..."}
        ],
    },
    getMore:function(){
         wx.navigateTo({
                url: '../DetailsPage/DetailsPage'
       })
    },
    Tabcontent:function(){
           this.setData({recommend:"",newClass:"textLine",hidden1:"none",hidden2:"",})
    },
    TabContent:function(){
        this.setData({recommend:"textLine",newClass:"",hidden1:"",hidden2:"none",})
    }
})