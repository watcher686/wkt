var json = {
  "1.1": [
    {
      "question": "以下功能不属于政务微信/企业微信本地版可以自行配置开关的是?",
      "option": {
        "A": "红包功能",
        "B": "VOIP功能",
        "C": "PC客户端限制外网访问",
        "D": "打开登录时短信二次验证码",
        "E": "日常管理和同事吧功能",
        "F": "第三方加密",
        "G": "群聊功能",
      },
      "true": "G",
      "type": 1,
      "scores": 10, 
      "checked": false
    },
    {
      "question": "以下功能，不属于政务微信内置标准功能的是？",
      "option": {
        "A": "阅后即焚",
        "B": "回执消息",
        "C": "休息一下",
        "D": "标注聊天信息",
        "E": "企业邮箱",
        "F": "红包",
      },
      "true": "E",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "关于企业微信本地版支持用户自定义界面，以下说法正确的是？",
      "option": {
        "A": "支持自定义APP和应用程序名称",
        "B": "支持自定义包含版权声明页的所有logo及所有权主体声明",
        "C": "支持自定义APP和应用程序logo",
        "D": "支持自定义启动闪屏页"
      },
      "true": ["A","C","D"],
      "type": 2,
      "scores": 20,
      "checked": false
    },
    {
      "question": "关于政务微信和企业微信本地版的说法，以下正确的是？",
      "option": {
        "A": "政务微信分为SaaS版和本地版",
        "B": "政务微信不可以用于企业用户",
        "C": "企业微信本地版可以定制Logo和名称",
        "D": "政务微信客户端都是腾讯统一维护的版本，统一发布的",
        "E": "企业微信本地版可以用客户自己的证书上架",
        "F": "政务微信带有原生微信红包能力"
      },
      "true": ["B", "C", "D", "E", "F"],
      "type": 2,
      "scores": 20,
      "checked": false
    },
    {
      "question": "1+1=2？",
      "option": {
        "T": "正确",
        "F": "错误",
      },
      "true": "正确",
      "type": 3,
      "scores": 20,
      "checked": false
    },
    {
      "question": "1+1=3？",
      "option": {
        "T": "正确",
        "F": "错误",
      },
      "true": "错误",
      "type": 3,
      "scores": 20,
      "checked": false
    },
  ],
  "1.2": [
    {
      "question": "企业微信私有化部署的客户端，哪种登录方式是没有提供的？",
      "option": {
        "A": "手势密码或设备指纹登录",
        "B": "账号密码登录",
        "C": "手机短信验证码登录",
        "D": "第三方APP验证登录"
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "以下哪一块不属于企业微信私有化部署的客户端终端安全的能力？",
      "option": {
        "A": "应用加固",
        "B": "设备管理",
        "C": "手机上其它应用的安装管理",
        "D": "代码混淆"
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "以下关于客户端水印，哪个是错的？",
      "option": {
        "A": "可以通过管理后台，开启应用查看的水印防止内容被截图",
        "B": "可以通过管理后台，开启通讯录水印防止被截图",
        "C": "可以通过管理后台，开启图片查看的水印防止内容被截图",
        "D": "可以通过管理后台，开启文件查看的水印防止内容被截图"
      },
      "true": "A",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "客户希望审查某一次企业微信上的言论造谣始作俑者，以下哪个做法可以达到目的？",
      "option": {
        "A": "在接入机上拦截消息数据，导出做分析",
        "B": "让运维人员登录主机下载消息记录，通过搜索关键字词定位信息",
        "C": "管理员登录企业微信管理平台，找到日志审计的面板进行搜索",
        "D": "通过企业微信日志数据导出API，提取数据做记录分析"
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "可以通过设置应用的____来控制在工作台上不同部门的人可以有不同的应用可以访问？",
      "option": {
        "A": "访问网段白名单",
        "B": "访问的客户端",
        "C": "可见范围",
        "D": "应用分组"
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "为了通讯数据的安全保密，企业微信私有化部署提供的数据加密传输手段有哪些？",
      "option": {
        "A": "登录时账号密码加密传输",
        "B": "消息内容默认经过AES128加密",
        "C": "可以部署SSL对消息包进行加密",
        "D": "可以结合第三方厂商提供的国产商用密码机制对消息内容加密"
      },
      "true": ["A", "B", "C", "D"],
      "type": 2,
      "scores": 5,
      "checked": false
    },
    {
      "question": "为了防止信息泄露，在私有化部署的客户端上，可以设置开启哪些安全功能？",
      "option": {
        "A": "开启水印",
        "B": "不允许转发文件和图片",
        "C": "打开工作台应用，可以开启二次验证",
        "D": "开启不允许复制文件和内容到其他客户端"
      },
      "true": ["A", "B", "C", "D"],
      "type": 2,
      "scores": 5,
      "checked": false
    },
    {
      "question": "调用通讯录同步api接口时，需要使用的secret字段包含以下哪个secret？",
      "option": {
        "A": "通讯录管理secret",
        "B": "自建的通讯录应用secret",
        "C": "连接管理secret",
        "D": "应用管理secret"
      },
      "true": ["A", "B"],
      "type": 2,
      "scores": 5,
      "checked": false
    },
    {
      "question": "使用设备管理API调用将用户踢下线的方法有以下几种？",
      "option": {
        "A": "删除用户设备",
        "B": "禁用账号",
        "C": "强制用户某台设备下线",
        "D": "擦除设备"
      },
      "true": ["A", "C", "D"],
      "type": 2,
      "scores": 5,
      "checked": false
    },
    {
      "question": "根据企业微信私有化部署提供的安全能力，是否可以限制使用指定的移动终端？例如限制只能在公司发的移动终端设备上登录企业微信客户端。用户换了移动终端登录后，是否能查看原有移动终端上已经发生的即时通信消息记录？",
      "option": {
        "A": "可以通过设备管理API，限制仅在或不能在指定移动终端上登录",
        "B": "不能限制是否能登录指定的移动终端",
        "C": "在新移动终端登录后可获取在原终端上的历史即时通信消息记录",
        "D": "用户在新移动终端登录，在原终端上的历史即时通信消息记录无法获取"
      },
      "true": ["A", "C"],
      "type": 2,
      "scores": 5,
      "checked": false
    },
    {
      "question": "进入客户端工作台上的【邮件】，这个功能是使用Oauth与政务微信认证登录的。",
      "option": ["对","错"],
      "true": "对",
      "type": 3,
      "scores": 5,
      "checked": false
    }, 
    {
      "question": "企业微信私有化部署的用户设备状态是可以让管理员登录企业微信后台操作查询获得的。",
      "option": ["对", "错"],
      "true": "对",
      "type": 3,
      "scores": 5,
      "checked": false
    }, 
    {
      "question": "管理员如果设置了打开文件显示水印，当保存到本地文件系统时，文件是带水印的。",
      "option": ["对", "错"],
      "true": "对",
      "type": 3,
      "scores": 5,
      "checked": false
    }, 
    {
      "question": "企业微信私有化部署的客户端和服务端数据传输，默认是不加密的，但可以配置HTTPS保证网络传输安全性。",
      "option": ["对", "错"],
      "true": "错",
      "type": 3,
      "scores": 5,
      "checked": false
    },
    {
      "question": "客户的管理员或运维人员，可以通过登录政务微信后台主机，寻找到最近刚刚被转发的文件、图片，并可查看其内容。",
      "option": ["对", "错"],
      "true": "错",
      "type": 3,
      "scores": 5,
      "checked": false
    },
    {
      "question": "企业微信私有化部署的后台存储有异常处理机制，对于6台逻辑存储混合部署的节点，由于某些原因停了其中3台，服务都是可以继续提供的。",
      "option": ["对", "错"],
      "true": "错",
      "type": 3,
      "scores": 5,
      "checked": false
    },
    {
      "question": "企业微信工作台的应用，可以通过集成企业微信专用的JS API来控制调起VPN客户端访问。",
      "option": ["对", "错"],
      "true": "对",
      "type": 3,
      "scores": 5,
      "checked": false
    },
    {
      "question": "移动客户端上的文件、图片保存在SD卡上是可以通过USB连接线导出到电脑直接打开查看内容。",
      "option": ["对", "错"],
      "true": "错",
      "type": 3,
      "scores": 5,
      "checked": false
    },
    {
      "question": "企业微信可以对敏感人群设置“隐藏部门”的方式，可以让组织内部用户查看不到。",
      "option": ["对", "错"],
      "true": "对",
      "type": 3,
      "scores": 5,
      "checked": false
    },
    {
      "question": "用户将病毒文件在聊天消息中转发，有可能造成服务端中毒引发故障，因此客户需要保证用户的手机终端环境的安全性。",
      "option": ["对", "错"],
      "true": "错",
      "type": 3,
      "scores": 5,
      "checked": false
    },
  ],
  "2.1": [
    {
      "question": "[管理工具]-[使用分析]-[应用使用分析]中哪种类型的消息可以统计到点赞数?",
      "option": {
        "A": "图文、外链图文、视频",
        "B": "图文",
        "C": "外链图文",
        "D": "视频",
      },
      "true": "B",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "超过多久没有使用电脑，就会显示[离开电脑]状态?",
      "option": {
        "A": "10分钟",
        "B": "15分钟",
        "C": "20分钟",
        "D": "25分钟",
      },
      "true": "B",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "手机端图片标注中，新增了哪两个能力?",
      "option": {
        "A": "裁剪和旋转",
        "B": "裁剪和模糊处理",
        "C": "旋转和模糊处理",
        "D": "裁剪、旋转、模糊处理",
      },
      "true": "A",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "[客户端升级提示]中，[测试发布]必备的条件是什么?",
      "option": {
        "A": "测试发布的版本号必须高于当前正在使用的客户端版本号",
        "B": "多次测试时，修改了更新内容后，需要发送给新的测试成员进行测试",
        "C": "可以进行多次测试发布，仅对选择的测试成员有效",
        "D": "以上全部都是",
      },
      "true": "D",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "[通讯录管理] [成员可搜索字段]中哪些字段在客户端可以搜索到?",
      "option": {
        "A": "姓名，别名，手机，邮箱，座机和3个自定义字段",
        "B": "姓名，别名，手机和3个自定义字段",
        "C": "姓名，别名，手机，邮箱，座机和2个自定义字段",
        "D": "姓名，别名，手机和2个自定义字段",
      },
      "true": "C",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "[我的单位]-[安全与保密]-[移动端安全管理]中仅在当前APP内复制粘贴，以下描述的场景正确的是?",
      "option": {
        "A": "例如：复制某条消息到微信，在微信粘贴的时候会提示【复制后，仅支持在政务微信内粘贴】",
        "B": "例如：复制某条消息到微信，在复制时会提示【复制后，仅支持在政务微信内粘贴】",
        "C": "例如：复制某条消息到微信时，直接粘贴失败，没有任何提示",
        "D": "以上描述都不正确",
      },
      "true": "A",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "手机上转发消息，可以同时发到多个群聊，以下描述正确的是?",
      "option": {
        "A": "手机端在转发消息时，不需要[多选]，就可以直接转发到多个群聊或多个单人会话",
        "B": "手机端在转发消息时，不需要[多选]，就可以直接转发到多个群聊或多个单人会话",
        "C": "手机端在转发消息时，可以选择[多选]，转发到多个群聊或多个单人会话",
        "D": "手机端在转发消息时，可以选择[多选]，仅能转发到多个群聊，转发到多个单人会话会被自动拉群",
      },
      "true": "C",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "管理端操作日志中以下哪组内容是2.0版本新增的管理员操作路径?",
      "option": {
        "A": "修改客户端启动页；修改工作台显示；设置登录字段；修改顶部banner；设置成员对外联系人信息显示；导出外部联系人相关操作记录",
        "B": "设置聊天记录保存；设置登录框提示语；设置登录方式；设置消息自动回复；修改应用名称；修改外部联系人权限设置；设置获取成员客户端日志",
        "C": "设置群成员人数上限；设置消息阅读状态；设置聊天申请；设置自定义聊天表情；应用启用与停用；设置常见问题",
        "D": "以上都是新增的",
      },
      "true": "D",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "[我的单位]-[登录管理]中新增了什么入口?",
      "option": {
        "A": "客户端登录限制",
        "B": "通知使用字段",
        "C": "成员可搜索字段",
        "D": "以上都有",
      },
      "true": "A",
      "type": 1,
      "scores": 10,
      "checked": false
    },
    {
      "question": "目前开放的登录方式中，哪种登录方式有返回deviceID信息?",
      "option": {
        "A": "Oauth登录",
        "B": "JSSDK登录",
        "C": "SDK登录",
        "D": "以上都不正确",
      },
      "true": ["A"],
      "type": 2,
      "scores": 10,
      "checked": false
    },
    {
      "question": "应用代理中可以配置哪些代理类型和代理范围?",
      "option": {
        "A": "邮箱，全量代理",
        "B": "网页，全量代理",
        "C": "邮箱，指定代理",
        "D": "网页，指定代理",
      },
      "true": ["A", "B", "C", "D"],
      "type": 2,
      "scores": 10,
      "checked": false
    },
    {
      "question": "分级管理员的导入权限有哪些?",
      "option": {
        "A": "如果成员不存在于任何一个部门，则可以直接导入",
        "B": "如果成员不存在于任何一个部门，则无法直接导入",
        "C": "如果成员已经存在，并且隶属于分级管理员管理权限范围内的，可以直接覆盖导入",
        "D": "如果成员已经存在，但不属于分级管理员管理权限范围内的，不允许导入",
      },
      "true": ["A", "C", "D"],
      "type": 2,
      "scores": 10,
      "checked": false
    }
  ],
  "3.1": [
    {
      "question": "移除群成员操作必须具备的权限是?",
      "option": {
        "A": "仅“日志及数据导出”助手的凭据有操作权限",
        "B": "仅“通讯录同步助手”的凭据有操作权限",
        "C": "仅“应用管理”的凭据有操作权限",
        "D": "有“日志及数据导出”助手和“通讯录同步助手”的凭据有操作权限",
      },
      "true": "A",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "应用的可见范围是如何计算的?",
      "option": {
        "A": "部门，成员，标签取交集",
        "B": "部门，成员，标签取并集",
        "C": "部门和成员取并集，和标签取交集",
        "D": "部门和成员取交集，和标签取并集",
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "接收消息服务器配置保存后发送验证URL的请求方式是?",
      "option": {
        "A": "GET",
        "B": "POST",
        "C": "PUT",
        "D": "DELETE",
      },
      "true": "A",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "下面哪个参数不是通讯录变更新增成员事件的推送参数?",
      "option": {
        "A": "ToUserName",
        "B": "Event",
        "C": "UserName",
        "D": "UserId",
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "OAuth2.0网页授权的作用域不包括下面哪一项?",
      "option": {
        "A": "snsapi_base",
        "B": "snsapi_userinfo",
        "C": "snsapi_privateinfo",
        "D": "snsapi_info",
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "解散群聊和移除群成员的能力在下面哪个版本支持?",
      "option": {
        "A": "1.3.0",
        "B": "1.5.0",
        "C": "1.4.0",
        "D": "1.3.5",
      },
      "true": "B",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "通过OAuth2.0网页授权拿到code后可以通过下面哪个接口获取成员票据user_ticket?",
      "option": {
        "A": "/cgi-bin/user/getuserdetail",
        "B": "/cgi-bin/user/getuserinfo",
        "C": "/connect/oauth2/authorize",
        "D": "/wwopen/sso/qrConnect",
      },
      "true": "B",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "不需要有“日志及数据导出”助手的凭据有操作权限的是?",
      "option": {
        "A": "解散群聊",
        "B": "移除群成员",
        "C": "删除文件夹中的文件",
        "D": "创建群聊",
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "下面哪个接口可以开启应用回调?",
      "option": {
        "A": "/cgi-bin/agent/create",
        "B": "/cgi-bin/agent/opencallback",
        "C": "/cgi-bin/agent/get",
        "D": "/cgi-bin/agent/set",
      },
      "true": "B",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "新窗口打开url的需求可以使用哪个JS-SDK的接口实现?",
      "option": {
        "A": "getInstallState",
        "B": "openUserProfile",
        "C": "OpenUrl",
        "D": "request3rdApp",
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "对于唤起且要实现登录第三方APP的场景可以使用哪个JS-SDK的接口实现?",
      "option": {
        "A": "launch3rdApp",
        "B": "getInstallState",
        "C": "request3rdApp",
        "D": "openEnterpriseApp",
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "什么是只能通过日志开放来获取?",
      "option": {
        "A": "群id和文件id",
        "B": "用户id和文件id",
        "C": "用户id和部门id",
        "D": "部门id和群id",
      },
      "true": "A",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "oauth2验证中什么情况下agentid是必填的?",
      "option": {
        "A": "当scorp是snsapi_base时",
        "B": "当scorp是snsapi_userinfo时",
        "C": "当scorp是snsapi_privateinfo时",
        "D": "当scorp是snsapi_info时",
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "通讯录同步功能在哪个地方开启?",
      "option": {
        "A": "管理端-通讯录",
        "B": "管理端-单位应用",
        "C": "管理端-管理工具-通讯录同步及内部登录集成",
        "D": "管理端-管理工具-应用管理助手",
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "短信网关配置过程中单位收到验证URL的GET请求后需要对什么参数解密并原样返回明文?",
      "option": {
        "A": "msg_signature",
        "B": "timestamp",
        "C": "echostr",
        "D": "nonce",
      },
      "true": "C",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "下面哪一项是日志开放接口中创建群聊日志的id?",
      "option": {
        "A": "90000035",
        "B": "90000036",
        "C": "90000037",
        "D": "90000038",
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "下面哪个参数可以控制获取部门成员接口是否递归获取子部门下面的成员?",
      "option": {
        "A": "department_id",
        "B": "order",
        "C": "isnotify",
        "D": "fetch_child",
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "通讯录同步操作正确的是?",
      "option": {
        "A": "必须串行处理",
        "B": "必须并行处理",
        "C": "串行和并行都可以",
        "D": "根据实际场景选择串行或并行",
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "上传临时素材，文件大小限制错误的是?",
      "option": {
        "A": "图片2M",
        "B": "语音5M",
        "C": "视频10M",
        "D": "普通文件20M",
      },
      "true": "B",
      "type": 1,
      "scores": 5,
      "checked": false
    },
    {
      "question": "删除设备会有怎样的结果?",
      "option": {
        "A": "将用户踢下线，但不会删除用户的聊天记录",
        "B": "将用户踢下线同时删除用户的聊天记录",
        "C": "不会将用户踢下线，会提醒用户需要重新登录",
        "D": "会将用户踢下线，是否删除聊天记录可以配置",
      },
      "true": "D",
      "type": 1,
      "scores": 5,
      "checked": false
    },
  ]
}

module.exports = {
  questionList: json
}