<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 三</h1>
    <div class="content-text">
      通过新技术及资源整合，帮助企业在主要产品生产的同时，实现副产品产业化，提升企业核心竞争力，最终提高经济效益。

      神奇的"葡萄"会让你耳目一新 。 图片
      不管您是酒庄大佬还是庄园农主！图片
      想看到葡萄的更多蜕变，想有更多创意。
      欢迎随时咨询！精诚合作，携手共赢。
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeThree'
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