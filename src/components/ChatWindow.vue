<template>
  <div class="chat-window" v-if="isOpen">
    <div class="chat-header">
      <h3>AI 助手</h3>
      <button class="close-btn" @click="closeChat">×</button>
    </div>
    <div class="chat-messages" ref="messagesContainer">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]">
        <div class="message-content">{{ message.text }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input 
        type="text" 
        v-model="newMessage" 
        @keyup.enter="sendMessage"
        placeholder="输入您的问题..."
      >
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
import { KJUR, hextob64 } from 'jsrsasign'

export default {
  name: 'ChatWindow',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      messages: [
        { text: '您好！我是AI助手，有什么可以帮您的吗？', type: 'ai' }
      ],
      newMessage: '',
      isLoading: false,
      apiKey: '30e9823e06ca4a5682334ee53733a27c.2tJmlWGboqzidwDw'
    }
  },
  methods: {
    closeChat() {
      this.$emit('close')
    },
    generateToken() {
      try {
        const [id, secret] = this.apiKey.split(".")
        const timestamp = Math.round(Date.now() / 1000)
        const exp = timestamp + 60

        // 创建 JWT header
        const header = {
          alg: 'HS256',
          sign_type: 'SIGN'
        }

        // 创建 JWT payload
        const payload = {
          api_key: id,
          exp: exp,
          timestamp: timestamp
        }

        // 使用 jsrsasign 创建 JWT
        const sHeader = JSON.stringify(header)
        const sPayload = JSON.stringify(payload)
        const sJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, secret)

        return sJWT
      } catch (error) {
        console.error('Token generation failed:', error)
        return null
      }
    },
    async sendMessage() {
      if (this.newMessage.trim()) {
        // 添加用户消息
        this.messages.push({ text: this.newMessage, type: 'user' })
        const userMessage = this.newMessage
        this.newMessage = ''
        this.scrollToBottom()
        
        // 显示加载状态
        this.isLoading = true
        this.messages.push({ 
          text: '正在思考...', 
          type: 'ai',
          loading: true
        })
        this.scrollToBottom()

        try {
          const token = this.generateToken()
          if (!token) {
            throw new Error('Failed to generate token')
          }

          console.log('Generated token:', token)

          const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              model: "glm-4",
              messages: [
                {
                  role: "system",
                  content: "你是一个专业的葡萄酒顾问，可以帮助用户解答关于葡萄酒的问题。"
                },
                {
                  role: "user",
                  content: userMessage
                }
              ]
            })
          })

          console.log('Response status:', response.status)

          if (!response.ok) {
            const errorText = await response.text()
            console.error('Error response:', errorText)
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
          }

          const data = await response.json()
          console.log('Response data:', data)
          
          // 移除加载状态消息
          this.messages = this.messages.filter(msg => !msg.loading)
          
          // 添加 AI 回复
          const aiResponse = data.choices[0].message.content
          this.messages.push({ 
            text: aiResponse, 
            type: 'ai' 
          })
        } catch (error) {
          console.error('Detailed error:', error)
          // 移除加载状态消息
          this.messages = this.messages.filter(msg => !msg.loading)
          // 添加错误消息
          this.messages.push({ 
            text: `抱歉，我遇到了一些问题：${error.message}`, 
            type: 'ai' 
          })
        } finally {
          this.isLoading = false
          this.scrollToBottom()
        }
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        container.scrollTop = container.scrollHeight
      })
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.scrollToBottom()
        })
      }
    }
  }
}
</script>

<style scoped>
.chat-window {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid #E6D6B3;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.chat-header {
  padding: 15px;
  background-color: rgba(230, 214, 179, 0.1);
  border-bottom: 1px solid #E6D6B3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h3 {
  color: #E6D6B3;
  margin: 0;
  font-size: 16px;
}

.close-btn {
  background: none;
  border: none;
  color: #E6D6B3;
  font-size: 24px;
  cursor: pointer;
  padding: 0 5px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.message {
  margin-bottom: 15px;
  max-width: 80%;
}

.message.user {
  margin-left: auto;
}

.message-content {
  padding: 10px 15px;
  border-radius: 15px;
  color: #fff;
  white-space: pre-wrap;
}

.message.user .message-content {
  background-color: #E6D6B3;
  color: #000;
}

.message.ai .message-content {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.message.loading .message-content {
  color: #E6D6B3;
  font-style: italic;
}

.chat-input {
  padding: 15px;
  border-top: 1px solid #E6D6B3;
  display: flex;
  gap: 10px;
}

.chat-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #E6D6B3;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.chat-input button {
  padding: 8px 15px;
  background-color: #E6D6B3;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.chat-input button:hover {
  background-color: #d4c19d;
}
</style> 