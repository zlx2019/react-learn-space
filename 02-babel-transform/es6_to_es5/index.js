// 将 es6 -> es5

import babel from '@babel/core'
import presetEnv from '@babel/preset-env'  // ES6 -> ES5 所需依赖
import fs from 'node:fs'

// 读取源代码内容
const content = fs.readFileSync("./input.js", { encoding: 'utf-8' });

// 通过 babel 转换代码
const res = babel.transform(content, {
    presets: [presetEnv]
});

console.log(res.code);
fs.writeFileSync('./output.js', res.code, { encoding: 'utf-8' });
