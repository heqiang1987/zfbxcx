App({
  onLaunch() {
    //console.log("22222222222222222222")
    my.getAuthCode({
     scopes: 'auth_user',
     success: (res) => {
        // console.log("11111111111111111111");
        // console.log(res);
        my.getAuthUserInfo({
        success: (userInfo) => {
         //console.log(userInfo);
        //   my.alert({
        //     content: userInfo.nickName
        //   });
        //   my.alert({
        //     content: userInfo.avatar
        // });
      }
    });
     },
   });
  },
  onShow(){
  },
  logou(){
    
  },
  request(object,fn){
    //console.log('url',object.url);
    var baseurl = "http://lgxn.ynthgy.com/index.php/api/"+object.url
        my.httpRequest({
            url: baseurl,
            header: object.header || {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            data: object.data || {},
            method: object.method || "GET",
            dataType: object.dataType || "json",
            success: function (res){
               fn(res.data)
            },
            fail: function (res) {
                // console.log('fail');
                // console.log(res);
                // if (object.fail) {
                //     object.fail(res);
                // }
            },
            complete: function (res) {
                // console.log('com');
                // console.log(res);
                // if (object.complete) {
                //     object.complete(res);
                // }
            }
        });

  }, 
  globalData: {
    appid: "wxb0552d591a5755f1",//新零售长策技术，不需要改先版本号了
    api: "https://lgxn.hq87.top/",
    o2o: true,
    userInfo: null,
    ver: 340
  }

});
