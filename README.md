# Why

# How

## 安装和初始化

### 使用 yarn 创建项目

`yarn create-react-app antd-demo-ts --typescript`

### 引入配置工具

`yarn add react-app-rewired customize-cra`  
修改`package.json`。

```
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

然后在项目根目录创建一个 `config-overrides.js` 用于修改默认配置。

```
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

### 修改默认配置

修改`browserslist`

```
"production": [
    "> 1%",
    "last 2 versions",
    "not ie <= 11",
    "Android >= 4.0",
    "iOS >= 8"
],
```

### 创建目录

```
- assets
- components
- containers
- services
- stores
- utils
- types
```

## 编写第一个组件

### ComponentClass

加入`type` `CSSModule` 启用`Fragment`

```
import * as React from "react";

import styles from "./index.module.css";

interface Props {}
interface State {
  name: string;
}

class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "TSX"
    };
  }
  render() {
    // return <div>HELLO {this.state.name}</div>;
    return (
      <React.Fragment>
        <span>Hello </span>
        <span className={styles.NAME}>{this.state.name}</span>
      </React.Fragment>
    );
  }
}

export default Index;
```

### FunctionComponent

```
import * as React from "react";

import styles from "./index.module.css";

interface Props {
  name: string;
}

const Index: React.FC<Props> = ({ name }) => {
  return <div className={styles.Index}>{name}</div>;
};

export default Index;

```

[为什么是 type 而不用 interface](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)

## 引入第三方的组件或对象

新建`globals.d.ts`

```
// 没有声明文件的第三方组件
declare module "rc-animate";

// 全局变量
declare const count: number;

// windows对象上挂载对象
interface Window {
  count: number;
}

```

## 写一个工具文件

```
export const uuid = (): string => {
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    const random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  return uuid;
};
```

## ref 获取与使用

```
  audioRef: React.RefObject<HTMLAudioElement>;

  constructor(props: Props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    const ref = this.audioRef.current;
    if (ref) {
      ref.play();
    }
  }

  render() {
    return (
      <audio
        src={this.props.src}
        ref={this.audioRef}
      ></audio>
    );
  }
```

## componentDidUpdate

- 需要更新 props 时使用，可以在这里进行副作用，网络请求
- `getSnapshotBeforeUpdate()`的返回值作为`componentDidUpdate(prevProps, prevState, snapshot)`的第三个参数
- 如果`shouldComponentUpdate()`返回值为`false`，则不会调用`componentDidUpdate()`
- [为什么不用 getDerivedStateFromProps()](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

```
  componentDidUpdate(prevProps: Props) {
    const ref = this.audioRef.current;
    // 典型用法，先比较props
    if (this.props.status !== prevProps.status) {
      if (ref) {
        if (this.props.autoplay === false) {
          if (this.props.status === true) {
            ref.play();
          } else {
            // 离开时候停止
            ref.pause()
          }
        }
      }
    }
  }
```

## 错误边界

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### 使用：

```
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

## 懒加载

```
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

[更多(基于错误边界和路由的懒加载)](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)

## 骨架屏

## ajax

### await

```
// await 返回一个Promise
export const request = (url: string, data: object): Promise<Res> => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: url,
      data: { ...data },
      success(res: Res) {
        resolve(res);
      },
      error(error) {
        reject(error);
      }
    });
  });
};
```

### async

```
  async getList(): Promise<void> {
    try {
      let res:Res = await request(url, data);
      if (res.code === 1) {

      } else {

      }
    } catch (error) {

    }
  }
```
