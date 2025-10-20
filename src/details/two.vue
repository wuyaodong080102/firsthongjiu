<template>
  <div class="detail-page">
    <div class="back-button" @click="$router.back()">
      <span>← 返回</span>
    </div>
    <h1>酒庄直采</h1>
    <div class="content">
      <p>这里是酒庄直采页面的内容...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoDetail'
}
</script>

<style scoped>
.detail-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.back-button {
  margin-bottom: 20px;
  cursor: pointer;
  color: #E6D6B3;
  font-size: 18px;
}

.back-button:hover {
  text-decoration: underline;
}

h1 {
  font-family: 'Playfair Display', serif;
  color: #E6D6B3;
  margin-bottom: 30px;
}

.content {
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  line-height: 1.6;
}
</style>