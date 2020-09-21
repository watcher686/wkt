// pages/uploadCourse/uploadCourse.js
var that = this
const db = wx.cloud.database();
var util = require("../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textContent: '',
    content: '',
    filesUrl: [],
    videoUrl: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  getTextAreaContent: function(event) {
    var that = this;
    that.data.content = event.detail.value;
    that.setData({
      textContent: that.data.content,
    })
  },
  //上传文件
  uploadFile: function() {
    var that = this;
    if (that.data.content.trim() != '') {
      wx.chooseMessageFile({
        count: 1,
        type: 'all',
        success: res => {
          console.log("选择成功", res)
          that.setData({
            filesUrl: res.tempFile,
          })
          that.data.filesUrl = []
          //动态生成文件名，时间戳+编号+文件后缀
          //获取时间戳
          var datestr = util.formatTime(new Date());
          var tempFiles = res.tempFiles;
          for (var i in res.tempFiles) {
            var tempFile = res.tempFiles[i].path;
            //获取'.'后面的文件后缀
            var type = ('' + tempFile).substring(('' + tempFile).lastIndexOf('.'));
            console.log(type);
            //时间戳+文件后缀
            let fileName = datestr + type
            // 上传至云存储空间
            wx.cloud.uploadFile({
              // 指定要上传的文件的小程序临时文件路径
              cloudPath: fileName,
              filePath: tempFile,
              // 成功回调
              success: res => {
                that.data.filesUrl.push(res.fileID)
                wx.showToast({
                  title: '上传文件成功！',
                  icon: 'success'
                })
              },
            })
          }
        }
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请填好章节编号',
      })
    }
  },
  //上传视频
  uploadvideo: function() {
    var that = this;
    if (that.data.content.trim() != '') {
      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 10000000,
        camera: 'back',
        success(res) {
          console.log("选择成功", res)
          that.setData({
            videoUrl: res.tempFilePath,
          })
          that.data.videoUrl = []
          //动态生成文件名，时间戳+编号+文件后缀
          //获取时间戳
          var datestr = util.formatTime(new Date());
          var tempFiles = res.tempFilePath;
          console.log("tempFilePath:",res.tempFilePath)
            //获取'.'后面的文件后缀
          var type = ('' + tempFiles).substring(('' + tempFiles).lastIndexOf('.'));
            console.log(type);
            //时间戳+文件后缀
            let fileName = datestr + type
            // 上传至云存储空间
            wx.cloud.uploadFile({
              // 指定要上传的文件的小程序临时文件路径
              cloudPath: fileName,
              filePath: res.tempFilePath,
              // 成功回调
              success: res => {
                console.log("上传视频成功：",res);
                that.data.videoUrl.push(res.fileID);
                wx.showToast({
                  title: '上传视频成功！',
                  icon: 'success'
                })
              },
            })
        }
      })
      // wx.chooseMessageFile({
      //   count: 1,
      //   type: 'all',
      //   success: res => {
      //     console.log("选择成功", res)
      //     that.setData({
      //       videoUrl: res.tempFile,
      //     })
      //     that.data.videoUrl = []
      //     //动态生成文件名，时间戳+编号+文件后缀
      //     //获取时间戳
      //     var datestr = util.formatTime(new Date());
      //     var tempFiles = res.tempFiles;
      //     for (var i in res.tempFiles) {
      //       var tempFile = res.tempFiles[i].path;
      //       //获取'.'后面的文件后缀
      //       var type = ('' + tempFile).substring(('' + tempFile).lastIndexOf('.'));
      //       console.log(type);
      //       //时间戳+文件后缀
      //       let fileName = datestr + type
      //       // 上传至云存储空间
      //       wx.cloud.uploadFile({
      //         // 指定要上传的文件的小程序临时文件路径
      //         cloudPath: fileName,
      //         filePath: tempFile,
      //         // 成功回调
      //         success: res => {
      //           that.data.videoUrl.push(res.fileID)
      //         },
      //       })
      //     }
      //   }
      // })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请填好章节编号',
      })
    }
  },
  /**
   * 发布
   */
  formSubmit: function(e) {
    var that = this;
    console.log("文件：", that.data.filesUrl, "视频：", that.data.videoUrl)
    that.data.content = e.detail.value['input-content'];
    if ((that.data.content.trim() != '' && that.data.filesUrl.length != 0) || (that.data.content.trim() != '' && that.data.videoUrl.length != 0)) {
      that.saveDataToServer();
      wx.showToast({
        title: '发布成功！',
        icon: 'success'
      })
      setTimeout(function() {
        wx.redirectTo({
          url: '/pages/management/management', //这里是成功登录后跳转的页面
        })
      }, 800)
    } else {
      wx.showToast({
        icon: 'none',
        title: '请填好章节编号和上传好课件',
      })
    }
  },
  /**
   * 保存到发布集合中
   */
  saveDataToServer: function(event) {
    var that = this;
    db.collection('courseDetail').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        c_id: that.data.content,
        courseware: that.data.filesUrl,
        video: that.data.videoUrl,
      },
      success: function(res) {
        // 清空数据
        that.data.content = "";
        that.data.filesUrl = [];
        that.data.videoUrl = [];
        that.setData({
          textContent: '',
          filesUrl: [],
          videoUrl: [],
        })

        that.showTipAndSwitchTab();

      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  }
})