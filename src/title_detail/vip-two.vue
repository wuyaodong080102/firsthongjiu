<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
     5、我们的团队

    由西北农林科技大学、陕西师范大学专业技术人员和首席酿酒师王晓宇等组成强大的技术团队,其中博士占比50%，硕士占比 30% 。

6、我们的技术

     我们自主研发了首套国产葡萄酒脱醇设备，同时也引进世界顶级酿酒设备、先进工艺和检测技术。获得了高校科技进步一等奖1项，国家发明专利3项。

7、我们的产品

     脱醇葡萄酒：以优质酿酒葡萄为主要原料，采用特殊工艺精心酿造，橡木桶陈酿12个月，通过现代化脱醇工艺去除酒精，酒体呈深红色，有黑加仑、李子、黑樱桃等的香气，单宁柔顺，口感圆润，酒体平衡。

    无醇蓝莓果酒：精选新鲜蓝莓为主要原料，采用特殊发酵工艺精心酿造，通过现代化脱醇工艺去除酒精，保留了蓝莓原汁的营养和口感，酒体柔顺利口，突出蓝莓本身风味，酸甜适中，回味甘甜。

   无醇樱桃果酒：精选新鲜樱桃味主要原料，采用特殊发酵工艺精心酿造，通过现代化脱醇工艺去除酒精，保留了樱桃原汁的营养和口感，酒体柔顺利口，突出樱桃本身风味，香味怡人，色泽红润，酸甜适口。

8、无醇葡萄酒的功能

     研究显示，葡萄酒多酚具有较强的抗氧化能力，对降低血压、血脂和胆固醇具有一定功效，对于心脑血管疾病以及动脉硬化具有预防作用。海之伊脱醇葡萄酒以赤霞珠葡萄为主要原料，经浸皮发酵，多酚含量达1500mg/L以上，与干红葡萄酒含量相当，是白葡萄酒的5-10倍，是未发酵葡萄汁的3-5倍。
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