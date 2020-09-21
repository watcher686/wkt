var that
const db = wx.cloud.database();
const app = getApp();
var util = require("../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    content: '',
    textContent:'',
    images: [],
    user: {},
    isLike: false,
  },
  /**
    * 生命周期函数--监听页面加载
    */
  onShow: function (options) {
    that = this;
    that.jugdeUserLogin();
  },
  /**
   * 获取填写的内容
   */
  getTextAreaContent: function (event) {
    that.data.content = event.detail.value;
  },

  /**
   * 选择图片
   */
  chooseImage: function (event) {
    wx.chooseImage({
      count: 6,
      success: function (res){
        // 设置图片
        that.setData({
          images: res.tempFilePaths,
        })
        that.data.images = []
        console.log(res.tempFilePaths)
        for (var i in res.tempFilePaths) {
          var tempFile = res.tempFiles[i].path;
          //获取'.'后面的文件后缀
          var type = ('' + tempFile).substring(('' + tempFile).lastIndexOf('.'));
          console.log(type);
          var imagesName= that.timetostr()+type
          // 将图片上传至云存储空间
          wx.cloud.uploadFile({
            // 指定要上传的文件的小程序临时文件路径
            cloudPath: imagesName,
            filePath: res.tempFilePaths[i],
            // 成功回调
            success: res => {
              that.data.images.push(res.fileID)
            },
          })
        }
      },
    })
  },
  /**
   * 图片路径格式化
   */
  timetostr() {
    var datestr = util.formatTime(new Date());
    var randnum = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    var str = datestr + "_" + randnum
    return str;
  },

  /**
   * 发布
   */
  formSubmit: function (e) {
    console.log('图片：', that.data.images)
    this.data.content = e.detail.value['input-content'];
    if (this.data.canIUse) {
      if (this.data.images.length > 0) {
        this.saveDataToServer();
      } else if (this.data.content.trim() != '') {
        this.saveDataToServer();
      } else {
        wx.showToast({
          icon: 'none',
          title: '写点东西吧',
        })
      }
    } else {
      this.jugdeUserLogin();
    }
  },
  /**
   * 保存到发布集合中
   */
  saveDataToServer: function (event) {
    var date = util.formatTime(new Date());
    db.collection('topic').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        content: that.data.content,
        date: date,
        images: that.data.images,
        user: that.data.user,
        isLike: that.data.isLike,
      },
      success: function (res) {
        // 保存到发布历史
        that.saveToHistoryServer();
        // 清空数据
        that.data.content = "";
        that.data.images = [];

        that.setData({
          textContent: '',
          images: [], 
        })

        that.showTipAndSwitchTab();

      },
    })
  },
  /**
   * 添加成功添加提示，切换页面
   */
  showTipAndSwitchTab: function (event) {
    wx.showToast({
      title: '新增记录成功',
    })
    wx.switchTab({
      url: '../home/home',
    })
  },
  /**
   * 删除图片
   */
  removeImg: function (event) {
    var position = event.currentTarget.dataset.index;
    this.data.images.splice(position, 1);
    // 渲染图片
    this.setData({
      images: this.data.images,
    })
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      //当前显示图片
      current: this.data.images[index],
      //所有图片
      urls: this.data.images
    })
  },

  /**
   * 添加到发布集合中
   */
  saveToHistoryServer: function (event) {
    var date = util.formatTime(new Date());
    db.collection('history').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        content: that.data.content,
        date: date,
        images: that.data.images,
        user: that.data.user,
        isLike: that.data.isLike,
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail: console.error
    })
  },


  /**
   * 判断用户是否登录
   */
  jugdeUserLogin: function (event) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              that.data.user = res.userInfo;
              console.log("user:", that.data.user)
              that.setData({
                user: that.data.user
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})