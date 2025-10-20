<template>
  <div class="title-detail-page">
    <button class="back-btn" @click="$router.back()">← 返回</button>
    <h1>首页 - 一</h1>
    <div class="content-text">
    奥维特农通过葡萄全利用的理念和技术，在生产葡萄酒的同时，将皮和籽进行二次加工，形成丰富的葡萄皮、葡萄籽产品链（烘焙食品、果汁饮料、保健品、护肤品等），充分利用和开发葡萄皮、籽中的功能成分。已经推出了葡萄皮鲜花饼、新派功夫八宝茶等多款产品，因其口感和营养让很多人都赞不绝口！并通过现代化脱醇技术将葡萄酒（果酒）中的酒精去除，保留葡萄酒的香气和其营养成分，已经推出脱醇葡萄酒和无醇果酒2个产品体系7个产品种类，满足不同消费者的需求。可是我们真正要称赞的应该是这些好物背后的人。

 强大的研发团队是促成创新好物的必要条件。奥维特农与西北农林科技大学和陕西师范大学深度合作，建立专业研究中心和团队。这才是好产品的强大后盾！

王晓宇，西北农林科技大学葡萄与葡萄酒专业博士，陕西师范大学教授，国家苹果产业技术体系岗位专家。研究领域：葡萄、苹果及猕猴桃等果蔬的加工。现主持国家自然基金、陕西省自然基金、西安市现代农业公关等项目，发表相关论文50余篇。
科研背景

2020年奥维特农携手陕西师范大学食品学院开展校企合作，共建“研发中心”，共同开发新型葡萄全利用系列产品。
研究中心介绍
team cooperation
陕西师范大学食品工程与营养科学学院是陕西师范大学下属的二级办学单位，食品科学与工程一级学科硕士授权点，食品科学、食品化学、农产品加工及贮藏工程、粮食油脂及植物蛋白工程、食品工程5个二级学科硕士学位授权点。作为植物资源开发利用研究室带头人，王晓宇教授以植物及新资源为研究对象，酒类发酵和果蔬加工贮藏的研究开发、示范推广服务于多个地方和国家经济。

主要研究方向是：

科研条件

基础实验室6个、专业实验室14个、食品研究室3个和1个大型仪器共享管理平台，全系实验室总面积3,738平方米，另规划新建校内教学实习基地面积2300平方米。大中型设备仪器467台（件），单件价值500元以上的仪器设备总值近1,000万元，能够满足食品专业及校内相关专业教学、科研、研究生培养及社会服务的需要。 
   

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