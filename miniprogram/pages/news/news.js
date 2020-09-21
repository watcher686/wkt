// pages/news/news.js
var that = this
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    newslists: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.onQuery();
  },
  bindTextAreaInput: function(e) {
    var that = this;
    console.log("输入了：", e.detail.value)
    that.setData({
      text: e.detail.value
    });
  },
  update: function() {
    var that = this;
    if (that.data.newslists.length > 0) {
      console.log("公告为：", that.data.text);
      wx.cloud.callFunction({
        // 云函数名称
        name: 'updateNews',
        // 传给云函数的参数
        data: {
          title: that.data.text
        },
        success: function(res) {
          wx.showToast({
            title: '发布成功！',
            icon: 'success'
          })
          setTimeout(function () {
            wx.redirectTo({
              url: '/pages/management/management', //这里是成功登录后跳转的页面
            })
          }, 800)
        },
        fail: console.error
      })
    } else {
      that.onAdd();
    }
  },
  onQuery: function() {
    // 查询当前用户所有的 counters
    db.collection('news').get({
      success: res => {
        console.log(res);
        this.setData({
          newslists: res.data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  onAdd: function() {
    db.collection('news').add({
      data: {
        title: that.data.text
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
        })
        wx.showToast({
          title: '新增记录成功',
        })
        setTimeout(function () {
          wx.redirectTo({
            url: '/pages/management/management', //这里是成功登录后跳转的页面
          })
        }, 800)
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
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