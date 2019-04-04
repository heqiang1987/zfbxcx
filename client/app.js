App({
  onLaunch() {
    //console.log("22222222222222222222")
    this.setCache("uid",7044);
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
            },
            complete: function (res) {
            }
        });

  }, 
  getCache: function(e, t) {
        var i = +new Date / 1e3,
            n = "";
            i = parseInt(i);
        try {
            (n = my.getStorageSync(e + this.globalData.appid)).expire > i || 0 == n.expire ? n = n.value : (n = "", this.removeCache(e))
        } catch (e) {
            n = void 0 === t ? "" : t
        }
        return n = n || ""
    },
  setCache: function(e, t, i) {
        var n = +new Date / 1e3,
            a = !0,
            o = {
                expire: i ? n + parseInt(i) : 0,
                value: t
            };
        try {
            my.setStorageSync(e + this.globalData.appid, o)
        } catch (e) {
            a = !1
        }
        return a
 },
 removeCache: function(e) {
        var t = !0;
        try {
            my.removeStorageSync(e + this.globalData.appid)
        } catch (e) {
            t = !1
        }
        return t
},
globalData: {
  appid: "wxb0552d591a5755f1",//新零售长策技术，不需要改先版本号了
  api: "https://lgxn.hq87.top/",
  o2o: true,
  userInfo: null,
  ver: 340
}

});
