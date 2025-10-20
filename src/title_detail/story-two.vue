<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
   品牌认知与定价

白酒品牌名气越大，一般价格越贵，而红酒价格似乎和品牌知名度关系不大。世界知名企业美国Gallow（嘉露）葡萄酒公司，销售量最大的葡萄酒其售价约3-5美金，国内知名品牌长城、张裕，其销量最大的产品市场售价约30-40元。在国内几大知名企业几乎垄断了葡萄酒的中低端市场，一般消费者对葡萄酒认知有偏差，要让消费者意识到品牌和葡萄酒价格的关系，葡萄酒质量和价格的关系，还需要很长的路。国内精品小酒庄（包括大型企业旗下的子品牌），因其产量低，固定投资较大，一般定价偏高，是限制其销量的主要原因。葡萄酒质量评价既有共同质量标准，又有自己风格和特色的反应，中高质量的葡萄酒定价必须要对标同等质量的进口葡萄酒，否则消费者很难买单。奢侈型葡萄酒在我国有部分消费市场，但国内企业仍需要培育，短期内几乎不可能形成奢侈性品牌。
    如何对自己的产品定位和产品定价是酒庄参与市场竞争的关键。产品价格应该综合考虑成本、质量及与同类竞品的比较后制定，不能虚高，精准定位消费人群和消费产品偏好。
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