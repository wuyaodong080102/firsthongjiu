<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="navbar">
        <div class="logo">HaiZhiYi</div>
        <div class="nav-links">
          <div class="nav-item home-dropdown-container">
            <a href="#">首页</a>
            <div class="dropdown home-dropdown">
              <div class="dropdown-content">
                <router-link to="/title/home-one">一</router-link>
                <div class="dropdown-spacer"></div>
                <router-link to="/title/home-two">二</router-link>
                <router-link to="/title/home-three">三</router-link>
              </div>
            </div>
          </div>
          <div class="nav-item">
            <a href="#">精选红酒</a>
            <div class="dropdown">
              <router-link to="/title/wine-one">一</router-link>
              <router-link to="/title/wine-two">二</router-link>
              <router-link to="/title/wine-three">三</router-link>
            </div>
          </div>
          <div class="nav-item">
            <a href="#">品牌故事</a>
            <div class="dropdown">
              <router-link to="/title/story-one">一</router-link>
              <router-link to="/title/story-two">二</router-link>
              <router-link to="/title/story-three">三</router-link>
            </div>
          </div>
          <div class="nav-item">
            <a href="#">会员服务</a>
            <div class="dropdown">
              <router-link to="/title/vip-one">一</router-link>
              <router-link to="/title/vip-two">二</router-link>
              <router-link to="/title/vip-three">三</router-link>
            </div>
          </div>
          <div class="nav-item">
            <a href="#">联系</a>
            <div class="dropdown">
              <router-link to="/title/contact-one">一</router-link>
              <router-link to="/title/contact-two">二</router-link>
              <a href="#" @click="openChat">AI聊天</a>
            </div>
          </div>
        </div>
        <div class="nav-right">
          <div class="cart-icon">
            🛍️
            <span class="cart-badge">0</span>
          </div>
          <select v-model="selectedLanguage">
            <option value="EN">EN</option>
            <option value="CN">CN</option>
          </select>
        </div>
      </nav>
      <!-- 首页主视觉区和轮播图 -->
      <section class="main-visual">
        <div class="carousel">
          <div class="carousel-inner">
            <div 
              v-for="(item, index) in carouselItems" 
              :key="index"
              class="carousel-item"
              :class="{ active: currentIndex === index }"
            >
              <img :src="item.src" :alt="item.alt">
            </div>
          </div>
          <div class="carousel-controls">
            <div 
              v-for="(dot, index) in carouselItems" 
              :key="index"
              class="carousel-dot"
              :class="{ active: currentIndex === index }"
              @click="showSlide(index)"
            ></div>
          </div>
        </div>
        <div class="main-slogan">
          <h1>Reserve Your Moment</h1>
          <p class="subtitle">品味时光，珍藏美好</p>
          <p>在HaiZhiYi，我们为您精选来自世界各地的顶级葡萄酒。每一瓶都承载着独特的风土人情，每一口都诉说着不同的故事。让我们共同探索葡萄酒的无限可能，为您的每一个重要时刻增添独特的风味。</p>
        </div>
        <div class="quick-access">
          <router-link to="/details/one" class="quick-btn">限量配额</router-link>
          <router-link to="/details/two" class="quick-btn">酒庄直采</router-link>
          <router-link to="/details/three" class="quick-btn">年份典藏</router-link>
        </div>
      </section>
      <!-- Footer Section -->
      <footer class="footer">
        <div class="footer-content">
          <div class="contact-info">
            <h3>联系我们</h3>
            <p>电话：400-123-4567</p>
            <p>邮箱：info@vinum.com</p>
            <p>地址：上海市静安区南京西路1266号</p>
          </div>
          <div class="qrcode">
            <img src="@/../pic/qrcode.jpg" alt="微信公众号二维码">
            <p>扫码关注我们</p>
          </div>
          <div class="social-links">
            <h3>关注我们</h3>
            <div class="social-icons">
              <a href="#" class="social-icon">微信</a>
              <a href="#" class="social-icon">微博</a>
              <a href="#" class="social-icon">小红书</a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>© 2024 VINUM. All Rights Reserved.</p>
        </div>
      </footer>
      <ChatWindow :isOpen="isChatOpen" @close="closeChat" />
    </div>
  </template>
  
  <script>
  import ChatWindow from '@/components/ChatWindow.vue'

  export default {
    name: 'website',
    components: {
      ChatWindow
    },
    data() {
      return {
        currentIndex: 0,
        selectedLanguage: 'EN',
        carouselItems: [
          // { src: 'pic/WechatIMG1583.jpg', alt: 'Wine Collection 1' },
          // { src: 'pic/WechatIMG1584.jpg', alt: 'Wine Collection 2' },
          // { src: 'pic/WechatIMG1585.jpg', alt: 'Wine Collection 3' },
          // { src: 'pic/WechatIMG1586.jpg', alt: 'Wine Collection 4' }
        ],
        isChatOpen: false
      }
    },
    methods: {
      showSlide(index) {
        this.currentIndex = index
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length
      },
      openChat() {
        this.isChatOpen = true
      },
      closeChat() {
        this.isChatOpen = false
      }
    },
    mounted() {
      // Auto-advance slides every 5 seconds
      setInterval(this.nextSlide, 5000)
    }
  }
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background-color: #000;
  }
  
  /* Navigation Bar */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }
  
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: #E6D6B3;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .nav-links {
    display: flex;
    gap: 40px;
  }
  
  .nav-item {
    position: relative;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 2px;
    transition: color 0.3s;
    padding: 10px 0;
    display: block;
  }
  
  .nav-links a:hover {
    color: #E6D6B3;
  }
  
  /* Dropdown Menu */
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    min-width: 160px;
    padding: 10px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
    border-top: 2px solid #E6D6B3;
  }
  
  .nav-item:hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .dropdown a {
    padding: 8px 20px;
    font-size: 13px;
    color: #fff;
    display: block;
    transition: all 0.3s;
  }
  
  .dropdown a:hover {
    background-color: rgba(230, 214, 179, 0.1);
    color: #E6D6B3;
    padding-left: 25px;
  }
  
  .nav-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .cart-icon {
    position: relative;
    cursor: pointer;
  }
  
  .cart-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #5E1914;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
  }
  
  /* Carousel Section */
  .main-visual {
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-controls {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;
  }
  
  .carousel-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .carousel-dot.active {
    background-color: #E6D6B3;
    transform: scale(1.2);
  }
  
  .main-slogan {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(230, 214, 179, 0.2);
    padding: 60px 80px;
    border-radius: 4px;
    z-index: 5;
    width: 80%;
    max-width: 800px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(230, 214, 179, 0.3);
  }
  
  .main-slogan h1 {
    font-family: 'Playfair Display', serif;
    font-size: 64px;
    color: #E6D6B3;
    margin-bottom: 30px;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .main-slogan p {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
    line-height: 1.6;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  .main-slogan .subtitle {
    font-size: 24px;
    color: #E6D6B3;
    margin-bottom: 20px;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  /* Quick Access Buttons */
  .quick-access {
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
    z-index: 5;
  }
  
  .quick-btn {
    padding: 12px 24px;
    border: 1px solid #E6D6B3;
    color: #E6D6B3;
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
  }
  
  .quick-btn:hover {
    background-color: #E6D6B3;
    color: #000;
  }

  /* Footer Styles */
  .footer {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 40px 0 20px;
    margin-top: 50px;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
  }

  .contact-info, .qrcode, .social-links {
    text-align: center;
  }

  .contact-info h3, .social-links h3 {
    color: #E6D6B3;
    font-family: 'Playfair Display', serif;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .contact-info p {
    color: #fff;
    margin: 8px 0;
    font-size: 14px;
  }

  .qrcode img {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
    border: 1px solid rgba(230, 214, 179, 0.3);
    padding: 5px;
    background-color: #fff;
  }

  .qrcode p {
    color: #E6D6B3;
    font-size: 14px;
  }

  .social-icons {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .social-icon {
    color: #E6D6B3;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
  }

  .social-icon:hover {
    color: #fff;
  }

  .copyright {
    text-align: center;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(230, 214, 179, 0.2);
  }

  .copyright p {
    color: #fff;
    font-size: 12px;
    opacity: 0.7;
  }
  </style>

/* 首页下拉菜单样式 */
.home-dropdown-container .dropdown {
  min-width: 300px; /* 增加下拉菜单宽度 */
  background-color: #000; /* 保持黑色背景 */
}

.dropdown-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.dropdown-spacer {
  width: 100%;
  height: 8px;
  /* 中间三分之二留白 - 通过空元素和高度实现 */
}

/* 调整链接样式 */
.home-dropdown-container .dropdown a {
  width: 30%; /* 链接宽度占三分之一 */
  text-align: center;
  padding: 12px 0;
}

/* 确保其他下拉菜单不受影响 */
.nav-item:not(.home-dropdown-container) .dropdown {
  min-width: 160px;
}

.nav-item:not(.home-dropdown-container) .dropdown a {
  width: 100%;
  text-align: left;
  padding: 8px 20px;
}
<!-- </style> -->