import react from "react";
import { createRoot } from 'react-dom/client'

// 创建根组件
const App = () => { 
    return (
        <div> Hello World</div>
    )
}

// 挂载根组件
createRoot(document.getElementById('root')).render(<App />);

