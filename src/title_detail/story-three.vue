<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
     经 营

多数酒庄重生产、轻营销，体现在把酒庄建好就觉得大功告成，其实万里长征才第一步。酒庄如何定位？市场如何定位？产品如何定位？价格如何定位？经营较差的酒庄，一般都没有清晰的经营路线，经营方式多会参照其它酒庄，然而各家酒庄情况可能大相径庭，再好的经营理念和方案也不能照搬。目前阶段，各家酒庄经营状况不一样、市场定位不一，所以采取的策略和方法也不相同，但无论如何都要先生存后发展。投资几千万甚至数亿的酒庄一年销售额不到投资1/10，经营肯定存在问题，必须要进行改革。
城市周边及具有优质旅游资源的酒庄应该积极打造以酒庄为主题，葡萄采摘、酒庄参观、酒庄文旅等项目，加大吸引客流量，增加即时性消费，提高第三产业在酒庄营收中的比例；不具有旅游资源和客流的酒庄，应该降低成本，减少固定资产投资，以研发新产品，提高葡萄酒品质为主，积极开展互联网和城市酒窖经济，缩小生产与消费者之间距离；重视互联网经济、直播带货、短视频等新型经济红利，如何打造酒庄自己的IP至关重要。一定要讲好自己的故事。
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