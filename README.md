react-app-rewired的作用就是在不eject的情况下,覆盖create-react-app的配置

> 安装：
```
npm install antd --save
npm install react-app-rewired customize-cra --save-dev
npm install babel-plugin-import @babel/plugin-proposal-decorators -D

```

> 修改package.json 里的启动配置
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
},
```

> 在根目录添加config-overrides.js

>> 配置文件路径别名
```
const { override, addWebpackAlias} = require('customize-cra');
const path = require('path')

 module.exports = override(
   addWebpackAlias({
     assets: path.resolve(__dirname, './src/assets'),
     components: path.resolve(__dirname, './src/components'),
     pages: path.resolve(__dirname, './src/pages'),
     common: path.resolve(__dirname, './src/common')
   })
);
```

>> 导入antd
```
const { override, fixBabelImports,addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
    }),
    addDecoratorsLegacy() 
);
```

> 新增babel.config.js文件
```
module.exports={
    plugins: [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }]]
}
```
