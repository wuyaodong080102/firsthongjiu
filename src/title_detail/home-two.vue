<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 二</h1>
    <div class="content-text">
      公司有自发研制的生产线，设施齐全，检测完善。目前已形成以特色葡萄酒为主导，辅以葡萄皮、葡萄籽提取物为新产品的特色现代化产品。 
      
      已经和多家葡萄庄园、酒庄、商场达成友好合作关系，提供新技术支持、产品优化创新等多方面服务，改善常规运营思路，开创公司运营新机制！
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTwo'
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