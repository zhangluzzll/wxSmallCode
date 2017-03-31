Page({
    data:{
        content:{},
       hideen:"",
       hideen2:"none",
       words:["贝多芬","巴赫","舒伯特"],
        // focus: false,
        // inputValue: '',
    },
    selectData:function(e){
        this.setData({hideen:"none",hideen2:"block"});
         var search=e.currentTarget.id;
         var input = e.detail.value;
        //  console.log(input);
        if(input.length>0){
         var that =this;
        wx.request({
          url: 'http://192.168.0.108:1111/select.do',
          data: {searchValue:input},
          method: 'GET', 
          success: function(res){
              console.log(res);
               console.log(input);
              var result =res.data;
              that.setData({content:result});
              console.log(that.data.content)
            // success
          },
          fail: function() {
            console.log("失败---------")
          },
          complete: function() {
             console.log("完成---------")
          }
        });
        }
      
    },
    // select:function(){
    //     this.setData({hideen:"none",hideen2:""})
    // },
})