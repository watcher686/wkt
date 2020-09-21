// pages/management/management.js
var that = this;
var util = require("../../utils/util");
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  //跳转上传课件和视频
  uploadCourse:function(e){
    wx.navigateTo({
      url: '../uploadCourse/uploadCourse',
    })
  },
  //跳转上传章节测试
  uploadtest: function (e) {
    wx.navigateTo({
      url: '../uploadtest/uploadtest',
    })
  },
  news: function (e){
    wx.navigateTo({
      url: '../news/news',
    })
  },
  //上传文件
  uploadFile: function(){
    var that=this;
    wx.chooseMessageFile({
      count: 10,
      type: 'all',
      success(res) {
        console.log("选择成功", res)
        //动态生成文件名，时间戳+编号+文件后缀
        //获取时间戳
        var datestr = util.formatTime(new Date());
        var tempFiles = res.tempFiles;
        for (var i=0; i < tempFiles.length; i++) {
          var tempFile = res.tempFiles[i].path;
          //获取'.'后面的文件后缀
          var type = ('' + tempFile).substring(('' + tempFile).lastIndexOf('.'));
          console.log(type);
          //时间戳+文件后缀
          let fileName = datestr+"("+i+")"+type

          // that.addfile(fileName);
          wx.cloud.uploadFile({
            cloudPath: fileName, // 上传至云端的路径
            filePath: tempFile, // 小程序临时文件路径
            success: res => {
              // 返回文件 ID
              console.log(res.fileID)
              wx.showToast({
                title: '上传成功！',
              })
              that.addfile(fileName,res.fileID);
              wx.switchTab({
                url: '/pages/jswd/jswd',//这里是成功登录后跳转的页面
              })
            },
            fail: console.error
          })
        }
      }
    })
  },
  //插入文件到数据库
  addfile: function (fileName,fileID){
    const db = wx.cloud.database();
    db.collection('FileTable').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        filename: fileName,
        fileUrl: fileID
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },
  
})