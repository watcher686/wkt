// pages/results/results.js
var that
const db = wx.cloud.database();
var app = getApp();
Page({
  data: {
    totalScore: null, // 分数
    wrongList: [], // 错误的题数
    chooseValue: [], // 选择的答案
    remark: ["好极了！你很棒棒哦","哎哟不错哦","你好菜啊"], // 评语
    modalShow: false
  },
  onLoad: function (options) {
    console.log(options);
    var that = this;
    that.data.indexs = options.c_id;
    // 获取测试信息
    /*db.collection('testLists').where({
      c_id: that.data.indexs
    }).get({
      success: function (res) {
        console.log(" 测试数据", res)
        that.setData({
          questionList: res.data,// 拿到答题数据
          c_id: that.data.indexs,
        })
      }
    });*/
    wx.setNavigationBarTitle({ title: options.c_id }) // 动态设置导航条标题
    
    let wrongList = JSON.parse(options.wrongList);
    let chooseValue = JSON.parse(options.chooseValue);
    that.setData({
      totalScore: options.totalScore != ""?options.totalScore:"无",
      wrongList: wrongList,
      chooseValue: chooseValue,
      questionList: app.globalData.questionList[options.c_id]// 拿到答题数据
    })
    console.log(that.data.chooseValue);
  },
  // 查看错题
  toView: function(){
    // 显示弹窗
    this.setData({
      modalShow: true
    })
  },
  // 返回首页
  toIndex: function(){
    wx.switchTab({
      url: '../kejian/kejian'
    })
  }
})