// pages/zjkt/zjkt.js
var that
const db = wx.cloud.database();
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,  // 题目序列
    chooseValue: [], // 选择的答案序列
    totalScore: 100, // 总分
    wrong: 0, // 错误的题目数量
    wrongList: [], // 错误的题目集合
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    c_id:'',
    indexCurrent:null,
    // test: [],
    // daan:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.index)
    var that = this;
    that.data.indexs = options.index;
    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    // 获取课程信息
    db.collection('courseDetail').where({
      c_id: that.data.indexs
    }).get({
      success: function(res) {
        console.log("数据", res)
        that.setData({
          kclists: res.data,
        })
      }
    });

    // 获取测试信息
    // db.collection('testLists').where({
    //   c_id: that.data.indexs
    // }).get({
    //   success: function (res) {
    //     console.log(" 测试数据", res)
    //     that.setData({
    //       questionList: res.data,
    //       c_id: that.data.indexs,
    //     })
    //   }
    // });
    this.setData({
      questionList: app.globalData.questionList[that.data.indexs],  // 拿到答题数据
      c_id: that.data.indexs // 课程ID
    })
    wx.setNavigationBarTitle({ title: that.data.indexs })// 动态设置导航条标题
  },

  //  tab切换逻辑
  swichNav: function(e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /*打开文件 */
  downloadFile: function (e) {
    console.log(e);
    let url = e.currentTarget.dataset.url;
    wx.cloud.downloadFile({
      fileID: url, // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        wx.openDocument({
          filePath: res.tempFilePath,
          showMenu:true,
          success: function (res) {
            console.log('打开文档成功')
          },
          fail: function (res) {
            console.log('打开文档失败')
          }
        })
      },
      fail: console.error
    })
  },
  //视频播放
  video_play: function (e) {
    var that=this;
    var curIdx = e.currentTarget.id;
    // 没有播放时播放视频
    // console.log(curIdx)
    if (!that.data.indexCurrent) {
      that.setData({
        indexCurrent: curIdx
      })
      var videoContext = wx.createVideoContext(curIdx) //这里对应的视频id
      videoContext.play()
    } else { // 有播放时先将prev暂停，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext(that.data.indexCurrent)//this是在自定义组件下，当前组件实例的this，以操作组件内 video 组件（在自定义组件中药加上this，如果是普通页面即不需要加）
      if (that.data.indexCurrent != curIdx) {
        videoContextPrev.pause()
        that.setData({
          indexCurrent: curIdx
        })
        var videoContextCurrent = wx.createVideoContext(curIdx)
        videoContextCurrent.play()
      }
    }
  },
  /*
  * 数组乱序/洗牌
  */
  /*shuffle: function (arr) {
    let i = arr.length;
    while (i) {
      let j = Math.floor(Math.random() * i--);
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  },*/
  /*
  * 单选事件
  */
  radioChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.data.chooseValue[this.data.index] = e.detail.value;
    console.log(this.data.chooseValue);
  },
  /*
  * 多选事件
  */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.data.chooseValue[this.data.index] = e.detail.value.sort();
    console.log(this.data.chooseValue);
  },
  /*
  * 退出答题 按钮
  */
  outTest: function () {
    wx.showModal({
      title: '提示',
      content: '你真的要退出答题吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.switchTab({
            url: '../kejian/kejian'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /*
  * 下一题/提交 按钮
  */
  nextSubmit: function () {
    var that = this;
    // 如果没有选择
    if (that.data.chooseValue[that.data.index] == undefined || that.data.chooseValue[that.data.index].length == 0) {
      wx.showToast({
        title: '请选择至少一个答案!',
        icon: 'none',
        duration: 2000,
        success: function () {
          return;
        }
      })
      return;
    }

    // 判断答案是否正确
    this.chooseError();

    // 判断是不是最后一题
    if (that.data.index < that.data.questionList.length - 1) {
      // 渲染下一题
      that.setData({
        index: that.data.index + 1
      })
    } else {
      let wrongList = JSON.stringify(that.data.wrongList);
      // let wrongListSort = JSON.stringify(that.data.wrongListSort);
      let chooseValue = JSON.stringify(that.data.chooseValue);
      wx.redirectTo({
        url: '../results/results?totalScore=' + this.data.totalScore + '&wrongList=' + wrongList + '&chooseValue=' + chooseValue + '&c_id=' + that.data.indexs
        //? totalScore = ' + that.data.totalScore + ' & wrongList=' + wrongList + '& chooseValue=' + chooseValue + '& wrongListSort=' + wrongListSort + '& testId=' + that.data.testId
      })

    }
  },
  /*
  * 错题处理
  */
  chooseError: function () {
    var that=this;
    var trueValue = that.data.questionList[that.data.index]['true'];
    var chooseVal = that.data.chooseValue[that.data.index];
    console.log('选择了' + chooseVal + '答案是' + trueValue);
    if ((""+chooseVal).toString() != (""+trueValue).toString()) {
      that.data.wrongList.push(that.data.index);
      that.setData({
        totalScore: that.data.totalScore - that.data.questionList[this.data.index]['scores']  // 扣分操作
      })
    }
  },
  /**
     * 生成一个从 start 到 end 的连续数组
     * @param start
     * @param end
     */
//   generateArray: function (start, end) {
//     return Array.from(new Array(end + 1).keys()).slice(start)
//   }
})
  