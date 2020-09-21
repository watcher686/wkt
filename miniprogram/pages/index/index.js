//index.js
//获取应用实例
var that
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
  },
  todl() {
    wx.navigateTo({
      url: "../login/login"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpenid();
  },
  //获取openid
  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.openId)
        var openid = res.result.openId;
        that.setData({
          openid: openid
        })
      }
    })
  },
  /**
   * 发布历史
   */
  onHistoryClick: function (event) {
    var openid = event.currentTarget.dataset.openid;
    console.log(openid);
    wx.navigateTo({
      url: "../history/history?openid=" + openid
    })
  },
  onexaminationClick:function(){
    wx.navigateTo({
      url: "../examination/examination"
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (event) {
    console.log(event);
  }
})