<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
      其实，我们奥维特农的研发团队一直致力于研究葡萄的深加工和利用，对“葡萄”情有独钟，团队带头人一直想把葡萄的营养价值充分利用，经过N次的实验，多次修改配方，流水线加工的尝试，终于将创意变为现实！
为什么会有这样的神仙吃法？当然少不了葡萄皮的超级营养价值了！小科普走一波！
葡萄一种甘甜汁又多的水果，在平时很多人都喜欢吃葡萄，其实在葡萄还是有很多丰富养的，一般大家在食用葡萄时都会把皮去掉，但是却不知道在又苦又涩的葡萄皮中，却拥有比葡萄果肉还要多的营养，特别是花青素含量比较高，对于养生有很好的效果。
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