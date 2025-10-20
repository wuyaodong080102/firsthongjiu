<template>
  <div class="carousel-container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      class="swiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="轮播图" class="carousel-image">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export default {
  name: 'Carousel',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
      images: [
        require('@/../pic/1.jpg'),
        require('@/../pic/2.jpg'),
        require('@/../pic/3.jpg'),
        require('@/../pic/4.jpg'),
        require('@/../pic/5.jpg')
      ]
    }
  }
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
}

.swiper {
  width: 100%;
  height: 400px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #fff;
}

:deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
</style> 