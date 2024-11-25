import react from "react";
import { createRoot } from 'react-dom/client';

// 创建根组件
const App = () => {
  return /*#__PURE__*/React.createElement("div", null, " Hello World");
};

// 挂载根组件
createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));