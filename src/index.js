import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"

// redux
import store from "./store"
// 引入antd的样式
import 'antd/dist/antd.css';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
