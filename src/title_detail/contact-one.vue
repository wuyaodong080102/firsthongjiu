<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
        研究成果

[1]科技部国家星火计划项目“出口苹果质量控制体系应用及科技服务网建设"（2010GA851001）；
[2]陕西省科技厅13115重大科技项目“大红袍花椒功能成分研究及深加工产品开发”（2007ZDKG-10）；
[3]陕西省科技厅农业科技攻关项目“猕猴桃深加工食品产业化开发研究"（2007k02-05-3）；
[4]陕西省重大科技创新项目“苹果鲜果产业链全程质量控制和可追溯体系的建设"（2008ZKC06-16）；
[5]陕西省农业科技创新项目“猕猴桃果实安全性评价及质量安全控制技术体系建设"（2011NXC01-04）
[6]陕西省科技统筹创新项目“红枣深加工关键技术及装备研发"；
[7]西安市科技农业攻关项目项目“胡萝卜中β-胡萝卜素产业化开发研究"（GG05121）；
······
核心研发团队说：
“未来我们将为消费者提供更健康、更营养、更绿色的新型产品，民以食为天，吃的放心、健康至关重要！对于食品的研究我们会一直努力下去。”

知识不仅可以改变命运，也能创造无限的可能！

     陕西奥维特农科技有限公司是国内首家专注于无醇葡萄酒（果酒）系列产品研发、生产、销售为一体的科技型企业。公司拥有专业的研发团队和自动化生产设备，提供脱醇葡萄酒和无醇果酒2个系列7个种类的产品。公司研发的非酒精饮品市场新产品(脱醇葡萄酒、无醇蓝莓果酒、无醇樱桃果酒)立足人们对健康食品的追求，营养健康，满足不同消费人群需求。


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