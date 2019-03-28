Page({

  data: {},

  // 初始化页面显示正在加载（因为需要异步加载用户信息）
  onLoad() {
    my.showLoading({
      content: '正在加载...',
    });
  },

  // 请求云函数获取图片总数
  onShow() {
    basement.function.invoke('getUserInfo').then((res) => {
      if (res.success) {
        this.setData({ user: res.result });
        basement.function.invoke('imageAnalytics').then((imageRes) => {
          my.hideLoading();
          if (imageRes.success) {
            this.setData({ analytics: imageRes.result || { total: 0 } });
          }
        }).catch(console.log);
      }
    }).catch(console.log);
  },

});