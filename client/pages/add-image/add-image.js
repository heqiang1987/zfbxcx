Page({

  data: {
    inputValue: '',
  },

  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  // 将新的图片内容添加到当前用户的图片列表中
  add() {

    // 如果图片名称没有填，或者没有上传图片，则进行提示
    if (this.data.inputValue == '' || !this.data.imageUrl) {
      my.alert({
        title: '添加失败',
        content: '请填写图片名称和上传图片。',
        buttonText: '我知道了',
      });

      // 正常情况，写入数据存储
    } else {
      basement.function.invoke('getUserInfo').then((res) => {
        if (res.success) {
          const user = res.result;
          basement.db.collection('images').insertOne({
            text: this.data.inputValue,
            url: this.data.imageUrl ? this.data.imageUrl : false,
            userId: user.userId,
            uploadTime: new Date(),
          }).then(() => {
            my.navigateBack();
          }).catch(console.error);
        }
      }).catch(console.error);
    }
  },

  // 选择并上传图片，获得图片 URL
  attach() {
    my.chooseImage({
      chooseImage: 1,
      success: res => {
        const path = res.apFilePaths[0];
        const options = {
          filePath: path,
          headers: {
            contentDisposition: 'attachment',
          },
        };
        basement.file.uploadFile(options).then((image) => {
          this.setData({
            imageUrl: image.fileUrl,
          });
        }).catch(console.error);
      },
    });
  },
});
