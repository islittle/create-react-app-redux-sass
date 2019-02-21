
@wangfeng

[基本框架create-react-app](https://github.com/facebookincubator/create-react-app)

## 项目基础集合功能
1. antd-mobile
2. redux
3. react-router
4. import按需加载
5. sass，less语法
6. babel
7. eslint检测
8. redux-devtools-extension扩展
9. rem高清配置(pxtorem)
10. css版本版本兼容
11. svg-sprite
等等，并且添加一些自定义工具

##项目的基本目录结构:
<br>

```
/
  node_modules/
  config // webpack基本配置
  public/
    index.html //模板页
    favicon.ico  //ico
  scripts  // 启动文件配置
  src/
    app/  //redux目录
        /action    //执行
        /constants   //别称自定义
        /reducers   //数据处理
        /store  //数据存储和比较
    assets/  // 静态图片目标
    component/  // 补充UI组件目录（可用次数两次以上者）
    mapi/  //接口api文档
    pages/   //业务逻辑组件
      home/  //页面路由对应创建
      ...
      AsyncComponent.js  //按需加载
      index.js   //路由
      index.scss   //公用样式
      registerServiceWorker.js //服务注册
    utils/  //基本工具
      autobind   //自动绑定
      cache     //缓存设置获取
      connect   //组件，state，prop结合插件
      device   //设备判断
      handleResp   //接口返回处理
      lru   //cache判断结合工具
      ...
    .babelrc
    .eslintgonre
    .eslintrc   
    package.json
    README.md
    theme.js   antd-mobile主题配置
    yarn.lock
    ...
```

安装：npm install 或者 yarn install

启动：npm start 或者  yarn start

打包：npm run build 或者 yarn build

打包启动本地服务：npm run develop 或者 yarn develop

以yarn举例:

指定某一个端口启动：sudo PORT=80 yarn start 


pages每个页面中的reqwest(window.location.origin+'?fetch=xxx')模拟请求的可以去掉

注意：如果你有以下报错
```
Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (64)
```
说明你需要更新node-sass版本
执行：yarn add node-sass -D 或者 npm install node-sass --save-dev

如果执行develop提示安装serve：
执行：yarn global upgrade serve



邮箱：islittle@outlook.com