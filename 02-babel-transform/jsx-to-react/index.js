// 将 JSX -> React

import babel from '@babel/core'
import presetReact from '@babel/preset-react'
import fs from 'node:fs'

// 读取源代码内容
const content = fs.readFileSync("./input.jsx", { encoding: 'utf-8' });

// 通过 babel 转换代码
const res = babel.transform(content, {
    presets: [presetReact]
});

console.log(res.code);
fs.writeFileSync('./output.js', res.code, { encoding: 'utf-8' });
