//app.js
// 导入数据
var jsonList = require('data/json.js');
App({
  data: {
    openid: '',
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        evn: '',//你的云开发环境
        traceUser: true
      })
    }
    this.globalData = {
      openid: this.openid,
      evn: '',//你的云开发环境
      questionList: jsonList.questionList  // 拿到答题数据
    }
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
  }
})
