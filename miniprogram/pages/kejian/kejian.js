// pages/kejian/kejian.js
// var jsonKj = require('../../json/kcjson.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
		// indicatorDots: true,
		// autoplay: true,
		// interval: 5000,
		// duration: 1000,
    imgs:"/images/banner1.jpg",
		kjlists:[],
    texts: [],
    text:'',
    animation: null,
    timer: null,
    duration: 0,
    textWidth: 0,
    wrapWidth: 0

  },
  // todl(){
	//   wx.navigateTo({
  //     url:"../login/login"
	//   })
  // },
  // tozc(){
  // 	  wx.navigateTo({
  //       url:"../register/register"
  // 	  })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
	  /*let kjzc= jsonKj.kjlists;
	  // console.log(kjzc);
	  this.setData({
		  kjlists:kjzc
	  })*/
    // this.filedata();
    
  },
  onShow: function () {
    this.initAnimation(this.data.text);
    this.filedata();
  },
  onHide: function () {
    this.destroyTimer()
    this.setData({
      timer: null
    })
  },
  onUnload: function () {
    this.destroyTimer()
    this.setData({
      timer: null
    })
  },
  filedata:function(){
    let that = this
    wx.cloud.database().collection("ClassSchedule").get({
      success(res) {
        console.log("请求成功", res)
        that.setData({
          kjlists: res.data
        });
        wx.hideNavigationBarLoading(); //隐藏加载
        wx.stopPullDownRefresh();
      },
      fail(res) {
        console.log("请求失败", res)
      }
    });
    wx.cloud.database().collection("news").doc('ae7e55b35e783604002255dd068e3a5d').get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          text: res.data.title,
        })
        wx.hideNavigationBarLoading(); //隐藏加载
        wx.stopPullDownRefresh();
      },
      fail(res) {
        console.log("请求失败", res)
      }
    });
  },
  
  onItemClick: function (event){
    console.log(event);
    var index = event.currentTarget.dataset.ktindex;
    console.log('进入课程', index);
    wx.navigateTo({
      url: "../zjkt/zjkt?index=" + index
    })
  },
  /*滚动 */
  destroyTimer: function () {
    if (this.data.timer) {
      clearTimeout(this.data.timer);
    }
  },
  /**
   * 开启公告字幕滚动动画
   * @param  {String} text 公告内容
   * @return {[type]} 
   */
  initAnimation(text) {
    let that = this
    this.data.duration = 15000
    this.data.animation = wx.createAnimation({
      duration: this.data.duration,
      timingFunction: 'linear'
    })
    let query = wx.createSelectorQuery()
    query.select('.content-box').boundingClientRect()
    query.select('#text').boundingClientRect()
    query.exec((rect) => {
      that.setData({
        wrapWidth: rect[0].width,
        textWidth: rect[1].width
      }, () => {
        this.startAnimation()
      })
    })
  },
  // 定时器动画
  startAnimation() {
    //reset
    // this.data.animation.option.transition.duration = 0
    const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step({ duration: 0 })
    this.setData({
      animationData: resetAnimation.export()
    })
    // this.data.animation.option.transition.duration = this.data.duration
    const animationData = this.data.animation.translateX(-this.data.textWidth).step({ duration: this.data.duration })
    setTimeout(() => {
      this.setData({
        animationData: animationData.export()
      })
    }, 100)
    const timer = setTimeout(() => {
      this.startAnimation()
    }, this.data.duration)
    this.setData({
      timer
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.filedata() //重新加载数据
    //模拟加载  1秒
    setTimeout(function () {　　　　 // complete

      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新

    }, 1000);
  },
})