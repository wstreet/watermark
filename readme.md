# WaterMark
一个无法删除的水印组件

## Installation
```
# use npm
npm install @wstreet7/watermark --save

# or use yarn
yarn add @wstreet7/watermark

# or script
<script src="https://unpkg.com/@wstreet7/watermark@latest/lib/watermark.min.js"></script>
```

## Usage
Simple Example
```
import WaterMark from '@wstreet7/watermark';

const config = {
    text: '@wstreet7',
    height: 60,
    width: 100
}
const waterMark = new WaterMark(config)

```

## Config

| 字段 | 描述 | 默认值 |
| --- | --- | --- |
| id | container的id | water-mark |
| height | 每个repeat单元的height | 100 |
| width | 每个repeat单元的width | 150 |
| font | 字体相关，font-size和font-family必须包含 | 10px sans-serif   [其他配置](https://developer.mozilla.org/en-US/docs/Web/CSS/font)<br /> |
| rotate | 文本倾斜角度 | -30（canvas 正旋转为顺时针）<br />[https://www.yuque.com/streetex/fbqzli/fdz7ic#ui7xH](https://www.yuque.com/streetex/fbqzli/fdz7ic#ui7xH) |
| fillStyle | 文本颜色 | #ccc |
| opacity | 透明度 | 1.0 |


