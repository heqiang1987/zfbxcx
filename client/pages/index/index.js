var app = getApp();
Page({
  data: {
    imgUrls:["/images/flash.png","/images/flash.png","/images/flash.png"]
  },
  // 初始化页面显示正在加载（因为需要异步加载用户信息）
  onLoad() {
     var t = this;
     app.request({
      url:"index/home1"
     },function(res){
         console.log(res);
         if(res.status){
           var result = res.result;
           t.setData({
             ad:result.ad,
             jdgoods:result.jdgoods.list,
             jjgoods:result.jjgoods.list
           })
         }
        console.log("qqqqqqqqqqq"); 
        console.log(t.data);
     })
  },


});
