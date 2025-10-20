<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
      佛说，前世五百次的擦肩而过，才换来今生的一次邂逅。
图片
老人说，人生在世，会与何人相逢，冥冥之中早已注定。世间所有的人际关联，皆由缘分牵引。
图片
主持人说，2025年3月9日，在古老而迷人的西安城，当“海之伊”邂逅“掌镜私”，一场奇妙缘分就此开启——“海之伊无醇红酒品鉴活动”2025年第一期暨“当海之伊遇见掌镜私”社交沙龙正式拉开帷幕 。
，时长00:13
活动中，大家从最初的陌生拘谨，逐渐变得熟悉热络，在轻松愉悦的氛围中，四个小时的时光悄然流逝。在这个流量至上的时代，我们秉持着脚踏实地的信念，跳出单纯的产品销售思维，坚守初心，不让营销的浪潮淹没最本真的追求。“海之伊”，凝聚着博士团队十年如一日的钻研心血，承载着满满的诚意与爱意。我们期望这个品牌能被更多的朋友、客户和合作伙伴所听闻、所看见、所品味，为大家带来健康生活的全新风尚。


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