# 掌上学习课堂小程序
- 本程序使用了云开发
- 本小程序主要建设一个移动端的学习平台，将课程的教学资源、拓展资源、参考资源、放入其中，为学生提供随手可得的学习资源；并提供一个可交流的空间，让学生与老师可以在课外的时间进行交流，解决学生遇到的问题。
- 本小程序分为`课堂章节`，`技术文档`，`讨论中心`，`个人主页`四大模块

## 使用方法
1. 在微信小程序客户端创建一个云开发项目

2. 在云开发控制台页面，选择数据库，创建`ClassSchedule`，`FileTable`，`adminlist`，`courseDetail`，`history`，`news`，`replay`，`topic`八个集合。（所有的数据库都要设置权限设置“所有用户可读，仅创建者可读写”，只有history数据库的权限设置为“仅创建者可读写” ）

3. 下载到本地 `git clone https://github.com/watcher686/wkt.git` 或者`下载 zip`

4. 将下载下来的项目中的`miniprogram目录和cloudfunctions目录`下的文件全部复制到你的`miniprogram目录和cloudfunctions目录`下

5. 把下载下来的项目中的`news.json`导入到news数据库中。

6. 替换项目中的app.js文件为你的app.js，修改app.js里面的 `evn: '你的云开发环境ID'` ,将里面的字改成你的环境ID，开发环境可以在云数据库中查看

7. ClassSchedule表自己添加课程章节数据，数据类型如下：

| 字段        | 数据类型（长度）   |  允许空  |主键/外键|备注
| :----:   | :----:  | :----:  | :----:  | :----:  |
| \_id      | String   |   NOT NULL     |  主键   |   课程编号（自动生成）     |
| chapter        |  String   |   NOT NULL   |      |   课程名称   |
| title        |    String    |  NOT NULL  |      |   课程章节   |

### 添加课件和视频
1. 在云开发后台上传课件和视频
2. 手动添加课件和视频，courseDetail章节详情表的数据类型如下：

| 字段        | 数据类型（长度）   |  允许空  |主键/外键|备注
| :----:   | :----:  | :----:  | :----:  | :----:  |
| \_id      | String   |   NOT NULL     |  主键   |   编号（自动生成）     |
| c_id        |  String   |   NOT NULL   |      |   课程章节编号   |
| courseware        |    Array    |  允许空  |      |   课件存储位置url   |
| video        |    Array    |  允许空  |      |   视频存储位置url   |

把上传的课件和视频，在courseDetail章节详情表手动添加链接，链接就是在云开发上传课件视频后面的链接`cloud://..........`

### 添加章节测试数据
章节测试数据就是下载下来的项目中`miniprogram目录下data文件夹`下的`json.js`


