// pages/jswd/jswd.js
var that = this;
var util = require("../../utils/util");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    filelists: []
  },
  //上传
  /*uploadFile: function(){
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
            },
            fail: console.error
          })
        }
      }
    })
  },*/
  //插入文件到数据库
  /*addfile: function (fileName,fileID){
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
  },*/
  downloadFile: function(e) {
    console.log(e);
    let url = e.currentTarget.dataset.url;
    wx.cloud.downloadFile({
      fileID: url, // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        wx.openDocument({
          filePath: res.tempFilePath,
          showMenu: true,
          success: function(res) {
            console.log('打开文档成功')
          },
          fail: function(res) {
            console.log('打开文档失败')
          }
        })
      },
      fail: console.error
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    this.filedata();
  },
  filedata: function() {
    let that = this
    wx.cloud.database().collection("FileTable").get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          filelists: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {　　　
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.filedata() //重新加载数据
    　　　　 //模拟加载  1秒
    　　　　 setTimeout(function() {　　　　 // complete
      　　　　
      wx.hideNavigationBarLoading() //完成停止加载
      　　　　 wx.stopPullDownRefresh() //停止下拉刷新
      　　　　
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})