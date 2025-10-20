<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
      奥维特农是国内第一家以帮助葡萄酒企业进行增值化加工技术开发的科技公司。公司可以为企业提供多种葡萄加工新技术，生产葡萄酒或葡萄汁的同时，生产葡萄皮、葡萄籽等多种高值化加工产品。公司也可以帮助中小企业进行资源整合，实现产品优化、产品创新的愿望。

      公司研发的葡萄深加工工艺，物尽其用已投入批量生产。依托千亩的果地资源，把得天独厚的自然资源转换为独特的产品优势。
   
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeOne'
}
</script>

<style scoped>
.title-detail-page {
  padding: 40px;
  color: #000; /* 文案字体统一为黑色 */
  position: relative;
  background: #fff; /* 整个背景为白色 */
  min-height: 100vh;
}
.back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #E6D6B3;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #cbb883;
}
.content-text {
  padding: 32px 0;
  margin-top: 24px;
  font-size: 18px;
  line-height: 2;
  color: #000; /* 文案字体统一为黑色 */
}
h1 {
  color: #000; /* 标题也统一为黑色 */
}
</style>