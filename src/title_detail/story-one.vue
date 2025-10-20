<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
           产业规模

2020年，葡萄酒白皮书调查结果显示中国葡萄酒销售100亿，同期白酒的产业规模5600亿，中国传统泡菜在2020年销售额400亿，中秋月饼的销量达200亿。葡萄酒干一年还不如月饼1个月，产业规模限制了企业的营销及收入能力。2020年受疫情和经济形式影响，中国葡萄酒产销双降，下降幅度超过20%，这已经是国产葡萄酒5连降。这可能是中国葡萄酒最黑暗的时刻，然而好的一点是疫情以来，国内消费者对国产葡萄酒，特别是优质产区的葡萄酒关注的持续提升。
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