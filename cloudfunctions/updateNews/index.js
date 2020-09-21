// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
// 云函数入口函数
//传递的参数可通过event.xxx得到
exports.main = async (event, context) => {
  try {
    /*新增记录要改doc里面的数据，改成你的数据库的_id的值*/
    return await db.collection('news').doc('ae7e55b35e783604002255dd068e3a5d').update({
      // data 传入需要局部更新的数据
      data: {
        title: event.title
      }
    })
  } catch (e) {
    console.error(e)
  }
}