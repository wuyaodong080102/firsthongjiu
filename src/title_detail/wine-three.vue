<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
      投 资

酒庄的基本组成包括葡萄园、生产车间、酒庄主体建筑及文旅项目。著名专家李华教授曾经指出我国酒庄建设中固定资产投资比例过大。我认为当固定资产投资过大，特别是土建项目投资比例大，除葡萄酒生产外，葡萄酒庄园其实相当于一个商业地产项目，其盈利只能是开展商业活动或者出售。把如此巨大的商业地产成本或开支，完全分摊在葡萄酒中，使得葡萄酒这份事业从开始之初就负重前行。那么酒庄建设是否必要呢？
根据实际需求与资金状况，对于有人流量及资金实力较雄厚的酒庄，标志性酒庄建筑对于提升整体形象和提升品牌知名度有重要作用。但从投资角度讲，超出葡萄酒本身的投资必须要分担，酒庄才能正常经营。知名酒庄、酒企可以依靠品牌效应，提高酒的价格；上市公司可以依靠其融资能力、稳定的销售和利润来分担巨大的固定资产投资。然而，大多数中国酒庄，特别是民营酒庄，哪怕是投资数亿，其品牌知名度也仅限于区域性和行业内，巨大的酒庄投资光靠葡萄酒高价来分担是不行的，高价格可能还会降低市场份额。
如何扩大葡萄酒庄的产值或者说如何让不动产投资创造更多效益是酒庄经营者应该思考的问题。
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