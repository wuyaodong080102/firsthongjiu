<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
      一、保护心脏

葡萄皮可以说是对保护心脏最有利的物质，因为在葡萄皮中含有了大量的黄酮类成分和微量元素镁，这些成分就是帮助增加心脏功能的，同时还能有效的提高心肌收缩时的能力，促进血液可以快速的循环，使身体内的血压一直保持在正常的工作状态中，所以保护心脏和预防高血压有特别明显的功效。

二、抗癌防癌

现在患癌症的人数在不断增加，然而白黎芦醇就是一种抗癌的成分，在葡萄皮中就含有丰富的天然白黎芦醇成分，可以有效的防止身体组织内的细胞出现癌变，同时在葡萄皮中还有黄酮类和酚类物质，这是能起到降低亚硝酸胺的活力，增加免疫能力，对于抗癌和防癌有很好的效果。

三、预防高血脂

高血脂的人群在平时是可以多吃一些葡萄皮的，因为在葡萄皮中有的纤维素和果胶特别多，这些成分能有效的抑制身体对胆固醇的吸收，同时还可以起到净化血液、加快胆固醇的分解和代谢等作用，有效的减少了甘油三酯的含量，就有起到预防高血脂发病的作用。

四、预防衰老

大家在吃葡萄时，把葡萄皮去掉，就会减少了花青素、微量元素硒、黄酮苷等成分的摄入，其实这些都是具有抗氧化作用的，有效的防止身体内氧化反应的出现，还能将体内的自由基清除干净，对于增加免疫力、预防衰老和延年益寿具有一定的功效。

所以，“吃葡萄不吐葡萄皮”不是一句调侃绕口令，而是一个科学饮食的训言。紫皮鲜花饼将葡萄皮经过加工融入鲜花饼中，以葡萄皮为主要原料的烘培新产品，公司将先进的科技手段与传统相融合，产品具有独创性。


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